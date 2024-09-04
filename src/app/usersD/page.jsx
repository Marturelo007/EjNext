"use client"
import pepe from "/src/app/pepe.css";
import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Users from "@/components/Users"
import { useSocket } from "@/hooks/useSocket";
import { Socket } from "socket.io-client";

export default function UsersRanking() {
  const { socket, isConnected } = useSocket();

  useEffect(() => {
    if (!socket) return;

    socket.on('pingAll', (data) => {
      console.log("Me llego el evento pingAll", data);
    })

  }, [socket, isConnected]);

  function handleClick() {
    socket.emit('pingAll', {message: "hola desde mi compu"})
  }
  const card = {
    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
  }
  return(
<>
<h1>HOLA Q ACE</h1>
<button onClick={handleClick} text="enviar"></button>
</>

  );
}


/* <body
style={{
  backgroundColor: `blue`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
  width: '100vw'
  }}>

{ /*              <Navigation/>
 <Users/>

 </body> */


























