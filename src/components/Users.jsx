"use client";
import { useRouter } from "next/navigation";
import styles from "/src/app/usersD/pepe.css";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPaperPlane, faMicrophone, faPaperclip, faLaughBeam, faClockFour } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";


const cardStyle = {
  borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
};

const userImages = {
  "Drogon": "/drogon.jpg",
  "Arya Stark": "/arya.webp",
  "Sansa Stark": "/sansa.jpeg",
  "Tyrion Lannister": "/tyrion.jpg",
  "Daenerys Targaryen": "/daenerys.jpg",
  "Jon Snow": "/jon.jpg",
};

function Users() {
  const router = useRouter();
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    console.log("Message sent:", message);
    setMessage("");
  };
  return (
    <section style={styles.gradientCustom}>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 col-lg-5 col-xl-5 mb-4 mb-md-0">
            <h5 className="font-weight-bold mb-3 text-center text-white">Member</h5>
            <div className="card mask-custom">
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  {["Drogon", "Arya Stark", "Sansa Stark", "Tyrion Lannister", "Daenerys Targaryen", "Jon Snow"].map((user, index) => (
                    <li key={index} className="p-2 border-bottom" style={cardStyle}>
                      <a href="#!" className="d-flex justify-content-between link-light">
                        <div className="d-flex flex-row">
                          <Image 
                            src={userImages[user]} 
                            alt={`Avatar of ${user}`} 
                            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" 
                            width="60" 
                            height="60" 
                          />
                          <div className="pt-1">
                            <p className="text-black fw-bold mb-0">{user}</p>
                            <p className="small text-black">Lorem ipsum dolor sit.</p>
                          </div>
                        </div>
                        <div className="pt-1">
                          <p className="small text-black mb-1">Just now</p>
                          <span className="badge bg-danger float-end">1</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-7 col-xl-7 d-flex flex-column" style={{ marginTop: '5%' }}>
            <div className="flex-grow-1 overflow-auto">
              <ul className="list-unstyled text-black">
                <li className="d-flex justify-content-start mb-4">
                  <Image 
                    src={userImages["Daenerys Targaryen"]} 
                    alt="Avatar of Dany" 
                    className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" 
                    width="60" 
                    height="60" 
                  />
                  <div className="card mask-custom">
                    <div className="card-header d-flex justify-content-between p-3" style={cardStyle}>
                      <p className="text-black fw-bold mb-0">Daenerys Targaryen</p>
                      <p className="text-dark small mb-0">
                        <FontAwesomeIcon icon={faClock} /> 12 mins ago
                      </p>
                    </div>
                    <div className="card-body">
                      <p className="mb-0">Hey everyone, what do you think about the latest movie?</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mb-3 d-flex align-items-center" style={{ backgroundColor: '#e1e1e1', padding: '10px', borderRadius: '5px' }}>
              <FontAwesomeIcon icon={faPaperclip} />
              <FontAwesomeIcon icon={faLaughBeam} style={{ padding: '2%' }} />
              <div className="flex-grow-1">
                <textarea
                  className="form-control"
                  id="textAreaExample3"
                  rows="2"
                  placeholder="Type your message..."
                  style={{ border: 'none', backgroundColor: 'transparent', resize: 'none', outline: 'none' }}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <FontAwesomeIcon icon={faMicrophone} size="1x" style={{ padding: '2%' }} />
              <button
                type="button"
                className="btn btn-primary"
                style={{ marginLeft: '8px' }}
                onClick={handleSendMessage}
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
