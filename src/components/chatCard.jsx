"use client";
import React from "react";
import styles from "/src/app/usersD/pepe.css";
import Image from "next/image";
import PropTypes from 'prop-types';

const userImages = {
  "Drogon": "/drogon.jpg",
  "Arya Stark": "/arya.webp",
  "Sansa Stark": "/sansa.jpeg",
  "Tyrion Lannister": "/tyrion.jpg",
  "Daenerys Targaryen": "/daenerys.jpg",
  "Jon Snow": "/jon.jpg",
  "admin": "/user-icon.png",
};

const ChatCard = ({ id, onClick }) => {
  return (
    <li className="p-2 border-bottom">
      <div
        role="button"
        tabIndex={0}
        id={id}
        onClick={onClick}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onClick(e);
          }
        }}
        className="d-flex justify-content-between link-light"
        style={{ cursor: 'pointer' }} // Ensures the cursor shows as pointer
      >
        <div className="d-flex flex-row">
          <Image 
            src={userImages[id] || "/user-icon.png"}
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
      </div>
    </li>
  );
};

ChatCard.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ChatCard;
