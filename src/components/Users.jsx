import { useEffect, useState } from "react";
import { useSocket } from "@/hooks/useSocket";
import ChatCard from "./chatCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPaperPlane, faMicrophone, faPaperclip, faLaughBeam } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import styles from "/src/app/usersD/pepe.css";

const userImages = {
  "Drogon": "/drogon.jpg",
  "Arya Stark": "/arya.webp",
  "Sansa Stark": "/sansa.jpeg",
  "Tyrion Lannister": "/tyrion.jpg",
  "Daenerys Targaryen": "/daenerys.jpg",
  "Jon Snow": "/jon.jpg",
  "admin" : "/user-icon.png"
};

function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function Users({ loggedInUserID }) {
  const { socket, isConnected } = useSocket();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [currentRoom, setCurrentRoom] = useState(null);
  const [lastSentMessage, setLastSentMessage] = useState(null); // State to hold the last sent message

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:4000/getUsersName");
        if (!response.ok) {
          throw new Error('Network response was not ok');
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

  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    };

    socket.on('newMessage', handleNewMessage);

    return () => {
      socket.off('newMessage', handleNewMessage);
    };
  }, [socket]);

  function handleSendMessage() {
    if (message.trim() && currentRoom) {
      const messageData = { message, room: currentRoom, timestamp: Date.now(), user: loggedInUserID };
      console.log("Sending message:", messageData); // Log the message data to the console
      socket.emit('sendMessage', messageData);
      setMessages((prevMessages) => [...prevMessages, messageData]); // Update messages state to show immediately
      setLastSentMessage(messageData); // Update last sent message
      setMessage(""); // Clear the input after sending
    }
  }

  function handleChangeInput(event) {
    setMessage(event.target.value);
  }

  const handleClickContact = (event) => {
    const userName = event.currentTarget.id;
    const roomName = `room_${loggedInUserID}_${userName}`;
    setCurrentRoom(roomName);
    socket.emit('joinRoom', { room: roomName }, (response) => {
      if (response.success) {
          console.log(`Successfully joined room: ${response.room}`);
      } else {
          console.error(response.error);
      }
  });
  
    setMessages([]); // Clear previous messages when switching rooms
  };

  return (
    <section style={styles.gradientCustom}>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 col-lg-5 col-xl-5 mb-4 mb-md-0">
            <h5 className="font-weight-bold mb-3 text-center text-white">Members</h5>
            <div className="card mask-custom">
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  {users.map((user, index) => (
                    <ChatCard key={index} id={user.userName} onClick={handleClickContact} />
                  ))}
                </ul>
                {error && <p className="text-danger">{error}</p>}
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-7 col-xl-7 d-flex flex-column" style={{ marginTop: '5%' }}>
            <div className="flex-grow-1 overflow-auto">
              <ul className="list-unstyled text-black">
                {messages.map((msg, index) => (
                  <li key={index} className="d-flex justify-content-start mb-4">
                    <Image 
                      src={userImages[msg.user] || userImages["Daenerys Targaryen"]} 
                      alt="Avatar" 
                      className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" 
                      width="60" 
                      height="60" 
                    />
                    <div className="card mask-custom">
                      <div className="card-header d-flex justify-content-between p-3">
                        <p className="text-black fw-bold mb-0">{msg.user}</p>
                        <p className="text-dark small mb-0">
                          <FontAwesomeIcon icon={faClock} /> {formatTimestamp(msg.timestamp)}
                        </p>
                      </div>
                      <div className="card-body">
                        <p className="mb-0">{msg.message}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-3 d-flex align-items-center" style={{ backgroundColor: '#e1e1e1', padding: '10px', borderRadius: '5px' }}>
              <FontAwesomeIcon icon={faPaperclip} />
              <FontAwesomeIcon icon={faLaughBeam} style={{ padding: '2%' }} />
              <div className="flex-grow-1">
                <textarea
                  className="form-control"
                  rows="2"
                  placeholder="Type your message..."
                  style={{ border: 'none', backgroundColor: 'transparent', resize: 'none', outline: 'none' }}
                  value={message}
                  onChange={handleChangeInput}
                />
              </div>
              <FontAwesomeIcon icon={faMicrophone} size="1x" style={{ padding: '2%' }} />
              <button
                type="button"
                className="btn btn-primary"
                style={{ marginLeft: '8px' }}
                onClick={handleSendMessage}
                disabled={!currentRoom}
              >
                <FontAwesomeIcon icon={faPaperPlane} /> Send
              </button>
            </div>

            {/* Show last sent message */}
            {lastSentMessage && (
              <div className="alert alert-info" style={{ marginTop: '10px' }}>
                Last sent message: {lastSentMessage.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Users;
