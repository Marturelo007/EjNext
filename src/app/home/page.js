"use client"
import ButtonClass from "@/components/class";
import Button from "@/components/button";
import Checkbox from "@/components/checkbox";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  let [contador, setCuenta] = useState(0)
  let [nombre, setNombre] = useState("Anon")

  function funcionSumar(){
    setCuenta(contador++)
  }

  function funcionRestar(){
    setCuenta(contador--)
  }

  function funcionNombre(){

    const nNombre=document.getElementById("ingresoNombre").value
    setNombre(nNombre);
    alternarBoton()
  }
  function funcionB(){
    console.log("hola chungo")
  }
  function alternarBoton(){
   let decrement = document.getElementById("decrement").checked
   
   if (decrement==false) {
    setCuenta(contador += 1);
   } else {
    setCuenta(contador -= 1)
   }

  }
  
  useEffect(()=>{
    setCuenta(10)
  }, []
)

useEffect(()=>{
  setCuenta(contador+=5)
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
      <ButtonClass textTitle={"FaconApps"} textSubtitle={"Marchesi"} nameTeacher={"Nicola Facón"} expireDate={"2/10"} taskName={"Tp final"} onClick={funcionSumar}></ButtonClass>
      <ButtonClass textTitle={"FaconApps"} textSubtitle={"Marchesi"} nameTeacher={"Nicola Facón"} expireDate={"2/10"} taskName={"Tp final"} onClick={funcionB}></ButtonClass>
      <ButtonClass textTitle={"FaconApps"} textSubtitle={"Marchesi"} nameTeacher={"Nicola Facón"} expireDate={"2/10"} taskName={"Tp final"} onClick={funcionB}></ButtonClass>
      <ButtonClass textTitle={"FaconApps"} textSubtitle={"Marchesi"} nameTeacher={"Nicola Facón"} expireDate={"2/10"} taskName={"Tp final"} onClick={funcionB}></ButtonClass>
      <ButtonClass textTitle={"FaconApps"} textSubtitle={"Marchesi"} nameTeacher={"Nicola Facón"} expireDate={"2/10"} taskName={"Tp final"} onClick={funcionB}></ButtonClass>
      <Checkbox type="checkbox" id="decrement" name="decrement" forInput="decrementar"  text="decrement?" function={alternarBoton}></Checkbox>
      <h2> Contador: { contador }</h2>
      <h2> Nombre: { nombre }</h2>
      <input type="text" id="ingresoNombre" placeholder="ingrese nombre"></input>
      <Button onClick={funcionNombre}> modificar nombre</Button>
    </main>


  );
}