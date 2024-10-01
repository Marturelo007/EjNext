"use client";
import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import Users from "@/components/Users";
import { useSocket } from "@/hooks/useSocket";
import { UserProvider } from '@/components/UserContext'; // Asegúrate de que la ruta sea correcta

export default function UsersRanking() {
  const [loggedInUserID, setLoggedInUserID] = useState('');
  const { socket, isConnected } = useSocket();
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Obtener userID del localStorage
    const storedUserID = localStorage.getItem('loggedInUserID');
    if (storedUserID) {
      setLoggedInUserID(storedUserID);
    }

    if (!socket) return;

    const handleNewMessage = (data) => {
      console.log("Me llegó el evento pingAll", data);
    };

    socket.on('newMessage', handleNewMessage);

    // Limpieza
    return () => {
      socket.off('newMessage', handleNewMessage);
    };
  }, [socket, isConnected]);

  const card = {
    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
  };

  return (
    <UserProvider>
      <main
        style={{
          backgroundImage: 'url(WAback.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Navigation />
        <Users />
        {/* Puedes descomentar los botones y el input según sea necesario */}
      </main>
    </UserProvider>
  );
}
