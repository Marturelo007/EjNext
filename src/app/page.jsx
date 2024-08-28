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





  return (
    <main className={styles.main}>


        {/* <Button onClick={funcionA} >Sin link</Button> */}
      <Navigation/>
          <div>
          {/* <input type="text" id="nombreInput" placeholder="Enter your name"/> */}
          <InputGroup/>
          <Link href="/home">
          <Button>log in</Button>
          </Link>
          </div>


    </main>
  );
}
