"use client"
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

   const router = useRouter();

  function funcionA() {
    console.log("hola q ace")
  }




  return (
    <main className={styles.main}>


        {/* <Button onClick={funcionA} >Sin link</Button> */}
      <Navigation/>
      <input 
          type="text"
          id="nombreInput"
          placeholder="Enter your name"
          // value={valorInput}
          />
          <Link href="/home">
          <Button onClick={funcionA}>log in</Button>
          </Link>

    </main>
  );
}
