const mySql = require("mysql2/promise");

/**
 * Objeto con la configuración de la base de datos MySQL a utilizar.
 */
const SQL_CONFIGURATION_DATA = {
  host: "10.1.5.205", // IP privada del servidor del colegio
  //host: "181.47.29.35", // IP pública del servidor
  user: "2024-5AINF-G09",
  password: "elchavo",
  database: "2024-5AINF-G09",
  port: 3306,
  charset: 'utf8mb4_general_ci' // Updated charset for better compatibility
};

/**
 * Realiza una query a la base de datos MySQL.
 * @param {String} queryString Query que se desea realizar.
 * @param {Array} [params] Parámetros opcionales para la consulta.
 * @returns Respuesta de la base de datos. Suele ser un vector de objetos.
 */
exports.realizarQuery = async function (queryString, params = []) {
  let returnObject;
  let connection;
  try {
    connection = await mySql.createConnection({ ...SQL_CONFIGURATION_DATA, connectTimeout: 10000 });
    
    returnObject = await connection.execute(queryString, params);
  } catch (err) {
    console.error("Database query error:", err);
    throw err; // Rethrow error for further handling
  } finally {
    if (connection) await connection.end(); // Ensure connection is closed
  }
  return returnObject ? returnObject[0] : [];
};