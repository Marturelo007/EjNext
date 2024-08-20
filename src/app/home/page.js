"use client"
import ButtonClass from "@/components/class";
import Button from "@/components/button";
import Checkbox from "@/components/checkbox";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link"; 
import { useRouter } from "next/navigation";

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
      <h2>Counter: {contador}</h2>
      <Button onClick={incrementCounter}>Increment Counter</Button>
      <h2>Name: {nombre}</h2>
      <input
        type="text"
        id="nombreInput"
        placeholder="Enter your name"
        value={valorInput}
        onChange={funcionNombre}
      />
      <Button onClick={manejarClick}>Modify name</Button>
      <Checkbox
        name="decrement"
        text="Decrement"
        onChange={alternarBoton}
      />
    </main>
  );
}