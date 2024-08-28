"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
//props
function Navigation() {
    
    const navigationStyle = 'green';
    return (
        <nav className="navbar bg-body-tertiary" style={{backgroundColor:navigationStyle}}>
          <div className="container-fluid">
            <Image src="/WhatsApp.svg.png" alt="User Profile Icon" width={50} height={50} />
            <Link href="/">
            <Image src="/signOut.png" alt="User Profile Icon" width={50} height={50} /> Sign out
            </Link>
          </div>
      </nav>
    )
  }
  
  export default Navigation;