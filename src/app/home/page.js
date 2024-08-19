"use client"
import ButtonClass from "@/components/class";
import Button from "@/components/button";
import Checkbox from "@/components/checkbox";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  let [contador, setCuenta] = useState(0)
  let [nombre, setNombre] = useState("Anon")
  let [check, setCheck] = useState(false);

   function funcionNombre(){
     const nNombre=document.getElementById("nombreInput").value
     setNombre(nNombre);
   }

  function funcionB(){
    console.log("hola chango")
  }

  function alternarBoton(event){

    console.log (event)
   if (event.target.checked==false) {
    setCheck(false);
   } else {
    setCheck(true);
   }
  }

  useEffect(()=>{
    setCuenta(10)
    
  }, []
  )

useEffect(()=>{
  if (check) {
    setCuenta(contador - 1);
  } else {
    setCuenta(contador + 1);
  }
}, [nombre]
)

  /*

  return (
    <main>
      <h1>Hola amigo</h1>
      
      <Form title="title" btn1="logIn" btn2="signIn" btn1onClick="funcionA()" btn2onClick="funcionA()"> </Form>
    </main>
  );
};*/
  return (
    <main>
      <ButtonClass textTitle={"FaconApps"} textSubtitle={"Marchesi"} nameTeacher={"Nicola Facón"} expireDate={"2/10"} taskName={"Tp final"} onClick={funcionB}></ButtonClass>
      <ButtonClass textTitle={"FaconApps"} textSubtitle={"Marchesi"} nameTeacher={"Nicola Facón"} expireDate={"2/10"} taskName={"Tp final"} onClick={funcionB}></ButtonClass>
      <ButtonClass textTitle={"FaconApps"} textSubtitle={"Marchesi"} nameTeacher={"Nicola Facón"} expireDate={"2/10"} taskName={"Tp final"} onClick={funcionB}></ButtonClass>
      <ButtonClass textTitle={"FaconApps"} textSubtitle={"Marchesi"} nameTeacher={"Nicola Facón"} expireDate={"2/10"} taskName={"Tp final"} onClick={funcionB}></ButtonClass>
      <ButtonClass textTitle={"FaconApps"} textSubtitle={"Marchesi"} nameTeacher={"Nicola Facón"} expireDate={"2/10"} taskName={"Tp final"} onClick={funcionB}></ButtonClass>
      <h2> Contador: { contador }</h2>
      <h2> Nombre: { nombre }</h2>
      <input type="text" id="nombreInput" placeholder="ingrese nombre"></input>
      <Checkbox name="decrement" text="decrement?" onChange={alternarBoton}></Checkbox>
      <Button onClick={funcionNombre}> modificar nombre</Button>
    </main>


  );
}