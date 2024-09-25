"use client";
import React from "react";
import styles from "@/src/app/usersD/pepe.css";

const ChatCard = () => (

        <li key={index} className="p-2 border-bottom" style={cardStyle}>
          <a id={user} onClick={handleClickContact} href="#!" className="d-flex justify-content-between link-light">
            <div className="d-flex flex-row" id={user}>
              <Image 
                src={userImages[user]} 
                alt={`Avatar of ${user}`} 
                className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" 
                width="60" 
                height="60" 
              />
              <div className="pt-1">
                <p className="text-black fw-bold mb-0">{user}</p>
                <p className="small text-black" id={user}>Lorem ipsum dolor sit.</p>
              </div>
            </div>
            <div className="pt-1">
              <p className="small text-black mb-1">Just now</p>
              <span className="badge bg-danger float-end">1</span>
            </div>
          </a>
        </li>


);

export default ChatCard;
