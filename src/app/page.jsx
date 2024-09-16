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
   const logIn = "#40c9ff"



  

  return (
    <main className={styles.main}>
            <InputGroup/>
    </main>
  );
}
