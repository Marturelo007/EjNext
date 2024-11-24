"use client";
import styles from "./button.module.css";
import React from "react";
import Link from "next/link";

export default function Button({ href = "/", children, onClick }) {
  const userID = typeof window !== "undefined" ? localStorage.getItem("userID") : null;
  const fullHref = href && userID ? `${href}?userID=${encodeURIComponent(userID)}` : href;

  return (
    <Link href={fullHref}>
      <div
        style={{
          padding: "10px",
          backgroundColor: "#0070f3",
          color: "white",
          textAlign: "center",
          cursor: "pointer",
        }}
        onClick={(e) => {
          if (onClick) onClick(e);
        }}
      >
        {children}
      </div>
    </Link>
  );
}
