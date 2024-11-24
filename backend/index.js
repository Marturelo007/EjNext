var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
const MySQL = require("./modulos/mysql.js");
const session = require("express-session");
const http = require("http");
const socketIo = require("socket.io");  

const app = express(); //Inicializo express

// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


// Configuración detallada de CORS
const corsOptions = {
  origin: ["http://localhost:3000"], // Orígenes permitidos
  methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
  credentials: true, // Habilitar envío de cookies/credenciales
};
app.use(cors(corsOptions));

const LISTEN_PORT = 4000; // Puerto por el que estoy ejecutando la página Web

const server = app.listen(LISTEN_PORT, () => {
  console.log(`Server running in http://localhost:${LISTEN_PORT}`);
  console.log("Defined routes:");
  console.log("   [GET] http://localhost:4000/getUsers");
  console.log("   [POST] http://localhost:4000/insertUsers");
  console.log("   [PUT] http://localhost:4000/putUsers");
  console.log("   [DELETE] http://localhost:4000/deleteUsers");
  console.log("   [GET] http://localhost:4000/getChats");
  console.log("   [POST] http://localhost:4000/insertChats");
  console.log("   [PUT] http://localhost:4000/putChats");
  console.log("   [DELETE] http://localhost:4000/deleteChats");
  console.log("   [GET] http://localhost:4000/getMensajes");
  console.log("   [POST] http://localhost:4000/insertMensajes");
  console.log("   [PUT] http://localhost:4000/putMensajes");
  console.log("   [DELETE] http://localhost:4000/deleteMensajes");
});

const io = require("socket.io")(server, {
  cors: {
    // IMPORTANTE: REVISAR PUERTO DEL FRONTEND
    origin: ["http://localhost:3000", "http://localhost:3001", "http://localhost:3002"],
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
    credentials: true, // Habilitar el envío de cookies
  },
});

const sessionMiddleware = session({
  //Elegir tu propia key secreta
  secret: "supersarasa",
  resave: false,
  saveUninitialized: false,
});

app.use(sessionMiddleware);

io.use((socket, next) => {
  sessionMiddleware(socket.request, {}, next);
});

app.get("/", function (req, res) {
  res.status(200).send({
    message: "GET Home route working fine!",
  });
});

/**
 * req = request. en este objeto voy a tener todo lo que reciba del cliente
 * res = response. Voy a responderle al cliente
 */

app.get("/getUsers", async function (req, res) {
  try {
    const respuesta = await MySQL.realizarQuery("SELECT * FROM users");
    console.log("Usuarios obtenidos de la base de datos:", respuesta); // Diagnóstico
    res.json(respuesta);
  } catch (error) {
    console.error("Error en /getUsers:", error);
    res.status(500).send("Error interno del servidor");
  }
});

app.post("/validateUser", async function (req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Faltan datos de usuario o contraseña" });
  }

  try {
    const result = await MySQL.realizarQuery(
      "SELECT * FROM users WHERE username = ?",
      [username.trim().toLowerCase()]
    );

    if (result.length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const user = result[0];
    if (user.password !== password) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    res.json({
      message: "Inicio de sesión exitoso",
      userID: user.id, // Aquí confirmamos que `user.id` se devuelve correctamente
      username: user.username,
    });
  } catch (error) {
    console.error("Error al validar el usuario:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});


  

app.post("/insertUsers", async function (req, res) {
  console.log(req.body);

  const existingUser = await MySQL.realizarQuery(
    `SELECT * FROM Users WHERE userID = '${req.body.userID}'`
  );

  if (existingUser.length > 0) {
    console.error("a user with this ID allredy exist.");
    return res.status(400).send("a user with this ID allredy exist.");
  }

  await MySQL.realizarQuery(
    `INSERT INTO users (userID, userName, password) VALUES ('${req.body.userID}','${req.body.userName}', '${req.body.password}')`
  );

  res.send("Word insert succeffuly.");
});

app.put("/putUser", async function (req, res) {
  await MySQL.realizarQuery(`UPDATE user
    SET
    userName = '${req.body.userName}',
    password = '${req.body.password}'
    WHERE userID = '${req.body.userID}'`);
  res.send("ok");
});

app.delete("/deleteUsers", async function (req, res) {
  try {
    await MySQL.realizarQuery(
      `delete from users where userID = '${req.body.userID}'`
    );
    res.send("ok");
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).send("Internal server error");
  }
});

// chats

app.get("/getChats", async function (req, res) {
  console.log(req.query); //Los pedidos get reciben los datos del req.query
  const respuesta = await MySQL.realizarQuery("SELECT * FROM chats");
  console.log({ respuesta });
  res.send(respuesta);
});

app.post("/insertChats", async function (req, res) {
  console.log(req.body);

  const existingChat = await MySQL.realizarQuery(
    `SELECT * FROM chats WHERE user1 = '${req.body.user1}' AND user2 = '${req.body.user2}'`
  );

  if (existingChat.length > 0) {
    console.error("A chat with these users already exists.");
    return res.status(400).send("A chat with these users already exists.");
  }

  await MySQL.realizarQuery(
    `INSERT INTO chats (user1, user2) VALUES ('${req.body.user1}', '${req.body.user2}')`
  );

  res.send("Chat inserted successfully.");
});

// Agrega esta función para buscar el chatID
async function findChatID(user1, user2) {
  const result = await MySQL.realizarQuery(
    `SELECT chatsID FROM chats WHERE user1 = ? AND user2 = ?`,
    [user1, user2]
  );
  return result.length > 0 ? result[0].chatsID : null;
}

app.get("/getChatID", async (req, res) => {
  const { user1, user2 } = req.query;

  console.log(
    `Received request to getChatID with user1: ${user1} and user2: ${user2}`
  );

  try {
    const chatID = await findChatID(user1, user2);
    console.log(`Chat ID found: ${chatID}`);

    if (chatID) {
      res.json({ chatID });
    } else {
      res.status(404).json({ message: "Chat not found" });
    }
  } catch (error) {
    console.error("Error fetching chat ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/getUserByName", async (req, res) => {
  const { userName } = req.query;

  try {
    const result = await MySQL.realizarQuery(
      "SELECT * FROM users WHERE userName = ?",
      [userName]
    );
    if (result.length > 0) {
      res.json(result[0]); // Return user data
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/getUserById", async (req, res) => {
  const { userID } = req.query;

  try {
    const result = await MySQL.realizarQuery(
      "SELECT userName FROM users WHERE userID = ?",
      [userID]
    );
    if (result.length > 0) {
      res.json({ userName: result[0].userName });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.put("/putChats", async function (req, res) {
  await MySQL.realizarQuery(`UPDATE chats
    SET
    user1 = '${req.body.user1}',
    user2 = '${req.body.user2}'
    WHERE chatID = '${req.body.chatID}'`);
  res.send("ok");
});

app.delete("/deleteChats", async function (req, res) {
  try {
    await MySQL.realizarQuery(
      `delete from chats where chatsID = '${req.body.chatsID}'`
    );
    res.send("ok");
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).send("Internal server error");
  }
});

// mensajes

app.get("/getMensajes", async function (req, res) {
  console.log(req.query); //Los pedidos get reciben los datos del req.query
  const respuesta = await MySQL.realizarQuery("SELECT * FROM mensajes");
  console.log({ respuesta });
  res.send(respuesta);
});

app.post("/insertMensajes", async function (req, res) {
  console.log(req.body);

  const existingMensaje = await MySQL.realizarQuery(
    `SELECT * FROM mensajes WHERE mensajesID = '${req.body.GameID}'`
  );

  if (existingMensaje.length > 0) {
    console.error("a mensaje with this ID allredy exist.");
    return res.status(400).send("a mensaje with this ID allredy exist.");
  }

  await MySQL.realizarQuery(
    `INSERT INTO mensajes (time, emisor, receptor, content, chatsID) VALUES ('${req.body.time}', '${req.body.emisor}','${req.body.receptor}','${req.body.content}','${req.body.chatsID}')`
  );

  res.send("mensajes insert succeffuly.");
});

app.put("/putmensajes", async function (req, res) {
  await MySQL.realizarQuery(`UPDATE mensajes
    SET
    time = '${req.body.time}',
    emisor = '${req.body.emisor}',
    receptor = '${req.body.receptor}',
    content = '${req.body.content}',
    chatsID = '${req.body.chatsID}'
    WHERE mensajesID = '${req.body.mensajesID}'`);
  res.send("ok");
});

app.delete("/deleteMensaje", async function (req, res) {
  try {
    await MySQL.realizarQuery(
      `delete from mensajes where mensajesID = '${req.body.mensajesID}'`
    );
    res.send("ok");
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).send("Internal server error");
  }
});

const bcrypt = require("bcrypt");
const { realizarQuery } = require("./modulos/mysql"); // Ensure this path is correct

app.use(express.json());

app.post("/login", async (req, res) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    return res.status(400).json({ message: "userName and password are required" });
  }

  try {
    const results = await MySQL.realizarQuery(
      "SELECT * FROM users WHERE userName = ?",
      [userName.trim()]
    );

    if (results.length === 0) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }

    const user = results[0];
    if (user.password !== password) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    res.json({
      message: "Inicio de sesión exitoso",
      userName: user.userName, // Devuelve el userName
      userID: user.id,         // Devuelve el userID
    });
  } catch (error) {
    console.error("Error durante el login:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});


app.get("/getUsersName", async (req, res) => {
  try {
    const users = await MySQL.realizarQuery("SELECT userName FROM users");
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Internal server error");
  }
});

io.on("connection", (socket) => {
  const req = socket.request;
  socket.on("joinRoom", (data, callback) => {
    const { room } = data;
    if (room) {
      if (req.session.room) {
        socket.leave(req.session.room);
      }

      socket.join(room);
      req.session.room = room;
      console.log(`User joined room: ${room}`);

      callback({ success: true, room });
    } else {
      callback({ success: false, error: "Room name is required." });
    }
  });

  socket.on("pingAll", (data) => {
    console.log("PING ALL: ", data);
    io.emit("pingAll", { event: "Ping to all", message: data });
  });

  socket.on("sendMessage", (data) => {
    io.to(req.session.room).emit("newMessage", {
      room: req.session.room,
      message: data,
    });
    console.log("Message received:", data);
    socket.to(data.room).emit("newMessage", data);
  });

  socket.on("disconnect", () => {
    console.log("Disconnect");
  });
});
