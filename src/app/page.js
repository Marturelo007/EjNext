"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button";
import Checkbox from "@/components/checkbox";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {

   const router = useRouter();

  function funcionA() {
    console.log("HOLA")
  }




  return (
    <main className={styles.main}>


        {/* <Button onClick={funcionA} >Sin link</Button> */}
      <Link href="/home">
          <Button > Back to menu</Button>
      </Link>
      <input 
          type="text"
          id="nombreInput"
          placeholder="Enter your name"
          // value={valorInput}
          />
        <Button>Send</Button>
    </main>
  );
}
