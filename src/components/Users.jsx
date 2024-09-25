"use client";
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
};

function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function Users() {
  const { socket, isConnected } = useSocket();
  const [message, setMessage] = useState("");
  const [chatId, setChatId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    if (!socket) return;
    
    const handleNewMessage = (data) => {
      setMessages(prev => [...prev, { ...data, timestamp: Date.now() }]);
    };
    
    socket.on('newMessage', handleNewMessage);

    return () => {
      socket.off('newMessage', handleNewMessage);
    };
  }, [socket, isConnected]);

  const fetchChatId = async (userName) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/getChatId?user=${userName}`);
      const data = await response.json();
      setChatId(data.chatId);
      socket.emit('joinRoom', { room: data.chatId });
    } catch (error) {
      console.error("Error fetching chat ID:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClickContact = (event) => {
    const userName = event.target.id;
    console.log(userName)
    fetchChatId(userName);
  };

  const handleSendMessage = () => {
    if (!message.trim() || chatId === null) return;
    socket.emit("sendMessage", { message, chatId });
    setMessage("");
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
                  {["Drogon", "Arya Stark", "Sansa Stark", "Tyrion Lannister", "Daenerys Targaryen", "Jon Snow"].map((user, index) => (
                    <ChatCard key={index} id={user} onClick={handleClickContact} />
                  ))}
                </ul>
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
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <FontAwesomeIcon icon={faMicrophone} size="1x" style={{ padding: '2%' }} />
              <button
                type="button"
                className="btn btn-primary"
                style={{ marginLeft: '8px' }}
                onClick={handleSendMessage}
                disabled={loading}
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
