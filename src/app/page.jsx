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

   const router = useRouter();
   const logIn = "blue"





  return (
    <main className={styles.main}>

<h3 style={{color: logIn}}>User log in</h3>
          <div>
          {/* <input type="text" id="nombreInput" placeholder="Enter your name"/> */}
          <InputGroup/>
          <Link href="/usersD">
          <Button>log in</Button>
          </Link>
          </div>


    </main>
  );
}
