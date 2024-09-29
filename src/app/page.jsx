"use client"
import InputGroup from "@/components/input";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navigation from "@/components/navigation";
export default function Home() {

   const logIn = "#40c9ff"

  return (
    <main className={styles.main}>
      <div className={styles.formContainer}>
        <h3 style={{color: logIn}}>User log in</h3>
                  <div>
                    {/* npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons */}
                    <InputGroup/>
                  </div>
      </div>
    </main>
  );
}
