"use client";
import Button from "@/components/button";
import React, { useState, useEffect } from "react";
import { fetchLogin, getUsers, fetchRegister, insertCard } from "@/functions/fetch.js";
import Input from "@/components/input"; // Importamos el componente Input
import styles from "@/app/page.module.css"; // Estilos para el formulario

export default function Home() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  // Manejo de Login
  // Manejo de Login
  const handleLogin = async () => {
    try {
      const data = await fetchLogin({ username, password }); // Reutilizamos fetchLogin

      console.log("Respuesta del login:", data);

      // Guardar userID y username en localStorage
      localStorage.setItem("userID", data.userID);
      localStorage.setItem("userName", data.userName);

      // Redirigir a la página de usuarios
      window.location.href = `/usersD?userID=${encodeURIComponent(data.userID)}`;
    } catch (error) {
      console.error("Error durante el login:", error.message);
      alert(error.message || "Error al intentar iniciar sesión.");
    }
  };

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    const storedUserID = localStorage.getItem("userID");

    if (storedUserName && storedUserID) {
      console.log("Datos del usuario desde localStorage:", { storedUserName, storedUserID });
    } else {
      console.error("Datos del usuario no encontrados en localStorage");
    }
  }, []);
  
  
  
  
  
  

  // Manejo de Registro
  async function handleRegister() {
    try {
      const users = await getUsers();
      const userExists = users.some((u) => u.username === username);
      const image = "default-image-path";

      if (!userExists) {
        if (name.length < 4) return alert("Nombre demasiado corto");
        if (surname.length < 4) return alert("Apellido demasiado corto");
        if (mail.length < 6) return alert("Correo electrónico inválido");
        if (username.length < 4) return alert("Nombre de usuario demasiado corto");
        if (password.length < 4) return alert("Contraseña demasiado corta");

        const newUser = { name, surname, username, password, mail, image };

        const   result = await fetchRegister(newUser);
        if (result) {
          const cardsU = [70, 71, 72, 73, 74];
          const postCards = cardsU.map((cardMId) =>
            insertCard({ idModel: cardMId, idUser: result, hand: 1 })
          );
          await Promise.all(postCards);

          alert("Registro exitoso, iniciando sesión...");
          localStorage.setItem("userID", result);
          window.location.href = `/usersD?userID=${encodeURIComponent(result)}`;
        } else {
          alert("Error al registrar el usuario");
        }
      } else {
        alert("El nombre de usuario ya existe");
      }
    } catch (error) {
      console.error("Error al registrar la cuenta:", error);
      alert("Error al registrar la cuenta");
    }
  }

  return (
    <main>
      <div className={styles.login}>
        <div className={styles.container}>
          <h2>{isLogin ? "Login" : "Registro"}</h2>
          <Input
            label="Usuario"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            label="Contraseña"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isLogin && (
            <>
              <Input
                label="Correo Electrónico"
                type="email"
                name="mail"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
              <Input
                label="Nombre"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                label="Apellido"
                type="text"
                name="surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </>
          )}
          <Button onClick={isLogin ? handleLogin : handleRegister}>
            {isLogin ? "Iniciar sesión" : "Registrarse"}
          </Button>
          <p onClick={() => setIsLogin(!isLogin)}>
            {isLogin
              ? "¿No tienes cuenta? Regístrate aquí."
              : "¿Ya tienes cuenta? Inicia sesión aquí."}
          </p>
        </div>
      </div>
    </main>
  );
}