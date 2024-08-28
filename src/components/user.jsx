"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Props
function Users() {
  return (
    <ul>
      <li>
        <Link href="/1">

            <Image 
              src="/public/vercel.svg" 
              alt="User Profile Icon" 
              width={50} // Adjust width as needed
              height={50} // Adjust height as needed
            />

        </Link>
      </li>
      <li>
        <Link href="/1">
            <Image 
              src="/src/app/home/img/another-icon.svg" 
              alt="Another Icon" 
              width={50} // Adjust width as needed
              height={50} // Adjust height as needed
            />
        </Link>
      </li>
    </ul>
  );
}

export default Users;
