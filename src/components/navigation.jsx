"use client"
import React from "react";
import Link from "next/link";

//props
function Navigation() {
    
    const navigationStyle = {
        margin: '5%',
        marginBottom: '10%',
    }
    return (
        <ul style={navigationStyle}>
            <li>
                <Link href="/home">Home</Link>
            </li>
            <li>
                <Link href="/">3000</Link>
            </li>
        </ul>
    )
  }
  
  export default Navigation;