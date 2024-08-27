"use client"
import React from "react";
import Link from "next/link";

//props
function Navigation() {
    
    return (
        <ul>
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