const baseURL = "http://localhost:3001";

export async function getUsers() {
  try {
    const response = await fetch(`${baseURL}/getUsers`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
  }
}
// Función para manejar el login
export async function fetchLogin({ username, password }) {
  try {
    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    try {
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Respuesta no es JSON:", await response.text());
      throw new Error("Respuesta inválida del servidor");
    }
  } catch (error) {
    console.error("Error en fetchLogin:", error.message);
    throw error;
  }
}


export async function getUserById(userID) {
  try {
    const response = await fetch(`${baseURL}/getUserById?idUser=${userID}`);
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
  }
}

export async function fetchRegister(user) {
  try {
    const response = await fetch(`${baseURL}/registerUser`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (error) {
    console.error("Error al registrar el usuario:", error);
  }
}

export async function insertCard(card) {
  try {
    await fetch(`${baseURL}/insertCard`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(card),
    });
  } catch (error) {
    console.error("Error al insertar carta:", error);
  }
}
