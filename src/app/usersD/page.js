"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; // Importar correctamente
import Navigation from "@/components/navigation";
import Users from "@/components/Users";
import { UserProvider } from "@/components/UserContext";

export default function UsersRanking() {
  const [userID, setUserID] = useState(null);
  const searchParams = useSearchParams(); // Usar correctamente el hook

  useEffect(() => {
    const idFromParams = searchParams?.get("userID"); // Obtener el userID de la URL
    setUserID(idFromParams || localStorage.getItem("userID")); // Fallback al localStorage

    if (!idFromParams && !localStorage.getItem("userID")) {
      console.error("userID no encontrado en la URL ni en el localStorage");
    }
  }, [searchParams]);

  return (
    <UserProvider>
      <main
        style={{
          backgroundImage: "url(WAback.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navigation />
        <div>
          <h1>Bienvenido, {userID ? `Usuario ${userID}` : "Cargando..."}</h1>
          {userID ? <p>Tu ID de usuario es: {userID}</p> : <p>No se encontró el usuario</p>}
        </div>
        <Users />
      </main>
    </UserProvider>
  );
}
