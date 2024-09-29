var express = require ("express"); //Tipo de servidor: Express
var cors = require ("cors");
var bodyParser = require("body-parser"); //Convierte los JSON
const MySQL = require("./modulos/mysql.js");
const session = require('express-session');

const app = express(); //Inicializo express

// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const LISTEN_PORT = 4000;								// Puerto por el que estoy ejecutando la página Web

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
});;

const io = require('socket.io')(server, {
	cors: {
		// IMPORTANTE: REVISAR PUERTO DEL FRONTEND
		origin: "http://localhost:3000",            	// Permitir el origen localhost:3000
		methods: ["GET", "POST", "PUT", "DELETE"],  	// Métodos permitidos
		credentials: true                           	// Habilitar el envío de cookies
	}
});

const sessionMiddleware = session({
	//Elegir tu propia key secreta
	secret: "supersarasa",
	resave: false,
	saveUninitialized: false
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
  console.log(req.query); //Los pedidos get reciben los datos del req.query
  const respuesta = await MySQL.realizarQuery("SELECT * FROM users");
  console.log({ respuesta });
  res.send(respuesta);
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

app.put('/putUser', async function(req, res){
  await MySQL.realizarQuery(`UPDATE user
  SET
  userName = '${req.body.userName}',
  password = '${req.body.password}'
  WHERE userID = '${req.body.userID}'`);
  res.send("ok");
})

app.delete('/deleteUsers', async function(req, res){
  try {
    await MySQL.realizarQuery(`delete from users where userID = '${req.body.userID}'`);
    res.send("ok");
  } catch (error) {
    console.error('Error deleting data:', error);
    res.status(500).send('Internal server error');
  }
})

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
app.get("/getChatId", async function (req, res) {
  const { user1, user2 } = req.query;

  const chat = await MySQL.realizarQuery(
    `SELECT chatID FROM chats WHERE (user1 = '${user1}' AND user2 = '${user2}') OR (user1 = '${user2}' AND user2 = '${user1}')`
  );

  if (chat.length > 0) {
    res.send({ chatId: chat[0].chatID });
  } else {
    res.status(404).send({ message: "Chat not found." });
  }
});


io.on("connection", (socket) => {
  const req = socket.request;

  socket.on('joinRoom', async (data) => {
    const { user1, user2 } = data;
    const chat = await MySQL.realizarQuery(
      `SELECT chatID FROM chats WHERE (user1 = '${user1}' AND user2 = '${user2}') OR (user1 = '${user2}' AND user2 = '${user1}')`
    );

    if (chat.length > 0) {
      socket.join(chat[0].chatID);
      req.session.room = chat[0].chatID; // Save room in session
      console.log(`User joined room: ${chat[0].chatID}`);
    } else {
      console.error("Chat not found.");
    }
  });

  socket.on('sendMessage', (data) => {
    io.to(req.session.room).emit('newMessage', { room: req.session.room, message: data });
  });
});


app.put('/putChats', async function(req, res){
  await MySQL.realizarQuery(`UPDATE chats
  SET
   user1 = '${req.body.user1}',
   user2 = '${req.body.user2}'
  WHERE chatID = '${req.body.chatID}'`);
  res.send("ok");
})

app.delete('/deleteChats', async function(req, res){
  try {
    await MySQL.realizarQuery(`delete from chats where chatsID = '${req.body.chatsID}'`);
    res.send("ok");
  } catch (error) {
    console.error('Error deleting data:', error);
    res.status(500).send('Internal server error');
  }
})


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
    `INSERT INTO mensajes (mensajesID, time, emisor, receptor, content, chatsID) VALUES ('${req.body.mensajesID}','${req.body.time}', '${req.body.emisor}','${req.body.receptor}','${req.body.content}','${req.body.chatsID}')`
  );

  res.send("mensajes insert succeffuly.");
});

app.put('/putmensajes', async function(req, res){
  await MySQL.realizarQuery(`UPDATE mensajes
  SET
  time = '${req.body.time}',
  emisor = '${req.body.emisor}',
  receptor = '${req.body.receptor}',
  content = '${req.body.content}',
  chatsID = '${req.body.chatsID}'
  WHERE mensajesID = '${req.body.mensajesID}'`);
  res.send("ok");
})

app.delete('/deleteMensaje', async function(req, res){
  try {
    await MySQL.realizarQuery(`delete from mensajes where mensajesID = '${req.body.mensajesID}'`);
    res.send("ok");
  } catch (error) {
    console.error('Error deleting data:', error);
    res.status(500).send('Internal server error');
  }
})


const bcrypt = require('bcrypt');
const { realizarQuery } = require('./modulos/mysql'); // Ensure this path is correct

app.use(express.json());

app.post('/login', async (req, res) => {
  const { userID, password } = req.body;

  console.log(`Attempting login for userID: ${userID} with password: ${password}`);

  try {
      const results = await realizarQuery('SELECT * FROM users WHERE userID = ?', [userID]);

      if (results.length === 0) {
          console.log('No user found');
          return res.status(401).json({ message: 'No user found' });
      }

      const user = results[0];
      console.log(`User found: ${user.userName}, stored password: ${user.password}`);

      // Compare password directly
      if (password && user.password !== password) {
          console.log('Invalid password');
          return res.status(401).json({ message: 'Invalid password' });
      }

      // Store userID on successful login
      const loggedInUserID = userID;
      console.log(`User Name: ${user.userName}, User ID: ${loggedInUserID}`);
      
      return res.json({ 
          message: 'Login successful!', 
          userName: user.userName,
          userID: loggedInUserID // Include userID in the response if needed
      });

  } catch (error) {
      console.error("Error during login:", error);
      return res.status(500).json({ message: 'Internal server error' });
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
  //data tiene que ser user 1 y 2
	socket.on('joinRoom', data => {
		console.log("🚀 ~ io.on ~ req.session.room:", req.session.room)
		if (req.session.room != undefined && req.session.room.length > 0)
			socket.leave(req.session.room);
		req.session.room = data.room;
		socket.join(req.session.room);

		io.to(req.session.room).emit('chat-messages', { user: req.session.user, room: req.session.room });
	});

	socket.on('pingAll', data => {
		console.log("PING ALL: ", data);
		io.emit('pingAll', { event: "Ping to all", message: data });
	});

	socket.on('sendMessage', data => {
		io.to(req.session.room).emit('newMessage', { room: req.session.room, message: data });
	});

	socket.on('disconnect', () => {
		console.log("Disconnect");
	})
});