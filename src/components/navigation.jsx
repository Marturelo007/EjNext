"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
//props
function Navigation() {
    
    const navigationStyle = 'green';
    return (
        <nav class="navbar bg-body-tertiary" style={{backgroundColor:navigationStyle}}>
          <div class="container-fluid">
            <Link href="/">
            <Image src="/images/WhatsApp.svg.png" alt="User Profile Icon" width={50} height={50} />WhatsApp
            </Link>
            
            <Link href="users">
            Users
            </Link>
          </div>
      </nav>
    )
  }
  
  export default Navigation;