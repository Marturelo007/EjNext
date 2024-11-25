"use client";

import { useEffect, useState } from "react";
import { useSocket } from "@/hooks/useSocket";
import ChatCard from "./chatCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPaperPlane, faMicrophone, faPaperclip, faLaughBeam } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import styles from "/src/app/usersD/pepe.css";
import { useUser } from "./UserContext";

const userImages = {
  Drogon: "/drogon.jpg",
  "Arya Stark": "/arya.webp",
  "Sansa Stark": "/sansa.jpeg",
  "Tyrion Lannister": "/tyrion.jpg",
  "Daenerys Targaryen": "/daenerys.jpg",
  "Jon Snow": "/jon.jpg",
  admin: "/user-icon.png",
};

// Formatear la marca de tiempo a un formato legible
function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  return date.toISOString().slice(0, 19).replace("T", " ");
}

// Componente principal
function Users() {
  const { socket } = useSocket();
  const { loggedInUserName, setLoggedInUserName } = useUser();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [currentRoom, setCurrentRoom] = useState(null);

  // Obtener el parámetro `userID` de la URL de forma manual
  const getUserIDFromURL = () => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      return params.get("userID");
    }
    return null;
  };

  const userID = getUserIDFromURL();

  // Fetch inicial para obtener los nombres de los usuarios
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3001/getUsersName");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
        setError("Failed to load users.");
      }
    };

    fetchUsers();
  }, []);

  // Manejo de mensajes recibidos por Socket.io
  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (data) => {
      setMessages((prevMessages) => [...prevMessages, { message: data.message }]);
    };

    socket.on("newMessage", handleNewMessage);

    return () => {
      socket.off("newMessage", handleNewMessage);
    };
  }, [socket]);

  // Cargar el nombre del usuario logueado desde el LocalStorage
  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setLoggedInUserName(storedUserName);
    } else {
      console.error("No se encontró loggedInUserName en localStorage");
    }
  }, [setLoggedInUserName]);
  

  // Enviar un mensaje
  async function handleSendMessage() {
    if (message.trim() && currentRoom) {
      const receptor = currentRoom.split("_")[1];

      if (!receptor) {
        console.error("Receptor is undefined");
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:3001/getChatID?user1=${loggedInUserName}&user2=${receptor}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch chat ID");
        }

        const data = await response.json();
        const chatsID = data.chatID;

        if (!chatsID) {
          console.error("Chat ID is undefined");
          return;
        }

        const messageData = {
          time: formatTimestamp(Date.now()),
          emisor: loggedInUserName,
          receptor: receptor,
          content: message,
          chatsID: chatsID,
        };

        setMessages((prevMessages) => [...prevMessages, { message }]);
        setMessage("");

        const sendResponse = await fetch("http://localhost:3001/insertMensajes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(messageData),
        });

        if (!sendResponse.ok) {
          throw new Error("Failed to send message");
        }

        const savedData = await sendResponse.json();
        console.log("Message saved:", savedData);
        socket.emit("sendMessage", messageData);
      } catch (error) {
        console.error("Error sending message:", error);
      }
    } else {
      console.warn("Message is empty or no current room selected");
    }
  }

  // Cambiar el input del mensaje
  function handleChangeInput(event) {
    setMessage(event.target.value);
  }

  // Manejo de selección de contacto
  const handleClickContact = (event) => {
    const userName = event.currentTarget.id;
    const roomName = `${loggedInUserName}_${userName}`;

    console.log("Joining room:", roomName);
    setCurrentRoom(roomName);
    socket.emit("joinRoom", { room: roomName }, (response) => {
      if (response.success) {
        console.log(`Successfully joined room: ${response.room}`);
      } else {
        console.error(response.error);
      }
    });
    setMessages([]);
  };

  return (
    <section style={styles.gradientCustom}>
      <div className="container py-5">
        <div className="row">
          {/* Lista de Usuarios */}
          <div className="col-md-6 col-lg-5 col-xl-5 mb-4 mb-md-0">
            <h5 className="font-weight-bold mb-3 text-center text-white">Members</h5>
            <div className="card mask-custom">
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  {users.map((user) => (
                    <ChatCard key={user.userName} id={user.userName} onClick={handleClickContact} />
                  ))}
                </ul>
                {error && <p className="text-danger">{error}</p>}
              </div>
            </div>
          </div>

          {/* Panel de Mensajes */}
          <div className="col-md-6 col-lg-7 col-xl-7 d-flex flex-column" style={{ marginTop: "5%" }}>
            <div className="flex-grow-1 overflow-auto">
              <ul className="list-unstyled text-black">
                {messages.map((msg, index) => (
                  <li key={index} className="d-flex justify-content-start mb-4">
                    <Image
                      src={userImages[loggedInUserName] || userImages["admin"]}
                      alt="Avatar"
                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                      width="60"
                      height="60"
                    />
                    <div className="card mask-custom">
                      <div className="card-body">
                        <p className="mb-0">{msg.message}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Campo de Texto para Mensajes */}
            <div
              className="mb-3 d-flex align-items-center"
              style={{ backgroundColor: "#e1e1e1", padding: "10px", borderRadius: "5px" }}
            >
              <FontAwesomeIcon icon={faPaperclip} />
              <FontAwesomeIcon icon={faLaughBeam} style={{ padding: "2%" }} />
              <div className="flex-grow-1">
                <textarea
                  className="form-control"
                  rows="2"
                  placeholder="Type your message..."
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    resize: "none",
                    outline: "none",
                  }}
                  value={message}
                  onChange={handleChangeInput}
                />
              </div>
              <FontAwesomeIcon icon={faMicrophone} size="1x" style={{ padding: "2%" }} />
              <button
                type="button"
                className="btn btn-primary"
                style={{ marginLeft: "8px" }}
                onClick={handleSendMessage}
                disabled={!currentRoom}
              >
                <FontAwesomeIcon icon={faPaperPlane} /> Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Users;
