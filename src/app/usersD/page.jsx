"use client"
import pepe from "/src/app/usersD/pepe.css";
import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import Users from "@/components/Users"
import { useSocket } from "@/hooks/useSocket";
import { Socket } from "socket.io-client";

export default function UsersRanking() {
  
  
  const { socket, isConnected } = useSocket();
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (!socket) return;
  
    const handleNewMessage = (data) => {
      console.log("Me llego el evento pingAll", data);
    };
  
    socket.on('newMessage', handleNewMessage);
  
    // Limpieza
    return () => {
      socket.off('newMessage', handleNewMessage);
    };
  }, [socket, isConnected]);
  

  // function handlePing() {
  //   socket.emit('pingAll', {message: "hola desde mi compu"})
  // }

  function handleSendMessage() {
    socket.emit('sendMessage', {message: message})
  }

  function handleChangeInput(event) {
    setMessage(event.target.value);
  }

  const card = {
    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
  }
  return(
  <main
    style={{
      backgroundImage: 'url(WAback.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      // overflowY: 'hidden'
      }}>

    <Navigation/>
    <Users/>
    {/* <button onClick={handlePing}>Ping all</button> 
    <button onClick={()=> socket.emit('joinRoom',{room: "pepito"})}>Conectar unirse a la sala</button>^
    <input onChange={handleChangeInput}/>
    <button onClick={handleSendMessage}>enviar mensaje</button>*/}
  </main>

  );
}