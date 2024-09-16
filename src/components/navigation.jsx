"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

const userIcon = {
  padding: `2%`,
}



function Navigation() {
    return (
<nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">
    <Image src="/signOut.png" width={50} height={50}/> Log out
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/usersD">
          <Image src="/user-icon.png" width={50} height={50} style={userIcon}/>
          Users
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>




    )
  }
  
  export default Navigation;



