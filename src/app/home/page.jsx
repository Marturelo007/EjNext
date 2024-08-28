"use client";
import Users from "@/components/user";
import Button from "@/components/button";
import Checkbox from "@/components/checkbox";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navigation from "@/components/navigation";
import Image from "next/image";

export default function Home() {
  let [contador, setCuenta] = useState(0);
  let [nombre, setNombre] = useState("Enter your name");
  let [check, setCheck] = useState(false);
  let [valorInput, setValorInput] = useState('');

  // For router
  const router = useRouter();

  function funcionA() {
    // Add to history
    router.push("/ranking");
    // Replace history
    router.replace("/ranking");
  }

  function funcionNombre(event) {
    setValorInput(event.target.value);
  }

  const manejarClick = () => {
    setNombre(valorInput);
  };

  function incrementCounter() {
    setCuenta(prevCount => check ? prevCount - 1 : prevCount + 1);
  }

  function alternarBoton(event) {
    setCheck(event.target.checked);
  }

  useEffect(() => {
    setCuenta(0);
  }, []);

  // Preload the image
  return (
    <>
      <main
        style={{
          backgroundImage: `url('/whatsupback.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          width: '100vw',
        }}
      >
        <Navigation />
        <Users />
      </main>
    </>
  );
}
