"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
const userIcon = {
  padding: `2%`,
};

const navbarStyle = {
  padding: '0.5rem 1rem', // Adjusts the vertical padding
};

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={navbarStyle}>
      <div className="container">
        <Link className="navbar-brand" href="/">
          <FontAwesomeIcon icon={faArrowRightFromBracket} size="2x"/> Log out
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/usersD">
                <Image src="/user-icon.png" width={50} height={50} style={userIcon} alt="Users" />
                UsersName
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
