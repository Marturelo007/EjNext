"use client"
import Users from "@/components/user";
import Button from "@/components/button";
import Checkbox from "@/components/checkbox";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link"; 
import { useRouter } from "next/navigation";
import Navigation from "@/components/navigation";
export default function Home() {
  let [contador, setCuenta] = useState(0)
  let [nombre, setNombre] = useState("Enter your name")
  let [check, setCheck] = useState(false);
  let [valorInput, setValorInput] = useState('');


  //para usar router
  const router = useRouter();

  function funcionA() {
    //Suma al historial
    router.push("/ranking")
    // Remplaza el historial
    router.replace("/ranking")
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

  useEffect(()=>{
    setCuenta(0)
    
  }, []
  )

  return (
    <main>
      {/* <Navigation/> */}
      <Users/>
    </main>
  );
}