"use client";
import React from "react";
import styles from "/src/app/usersD/pepe.css";
import Image from "next/image";

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

const ChatCard = ({ id, onClick }) => {
  return (
    <li className="p-2 border-bottom">
      <a id={id} onClick={onClick} href="#!" className="d-flex justify-content-between link-light">
        <div className="d-flex flex-row" id={id}>
          <Image 
            src={userImages[id] || "/default-avatar.jpg"} // Fallback image
            alt={`Avatar of ${id}`} 
            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" 
            width="60" 
            height="60" 
          />
          <div className="pt-1">
            <p className="text-black fw-bold mb-0">{id}</p>
            <p className="small text-black">Lorem ipsum dolor sit.</p>
          </div>
        </div>
        <div className="pt-1">
          <p className="small text-black mb-1">Just now</p>
          <span className="badge bg-danger float-end">1</span>
        </div>
      </a>
    </li>
  );
};

export default ChatCard;