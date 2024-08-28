"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Props
function Users() {
  return (
    <ul>
      <li>
        <Link href="/1"> 1</Link>
      </li>
      <li>
        <Link href="/2">2</Link>
      </li>
    </ul>
  );
}

export default Users;
