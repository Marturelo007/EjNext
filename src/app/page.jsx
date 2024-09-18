"use client"
import InputGroup from "@/components/input";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button";
import Checkbox from "@/components/checkbox";
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
            {/* <input type="text" id="nombreInput" placeholder="Enter your name"/> */}
            <InputGroup/>
            <Button href="usersD"></Button>
            </div>
</div>

    </main>
  );
}
