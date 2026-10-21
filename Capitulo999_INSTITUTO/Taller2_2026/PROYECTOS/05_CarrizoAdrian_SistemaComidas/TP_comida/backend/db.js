// Importacion de la clase Pool de la libreria pg para conectar con PostgreSQL
const { Pool } = require("pg");

// Configuracion de los parametros de conexion a la base de datos local
const conexionBD = new Pool({
    user: "postgres",
    password: "12345678",
    host: "localhost",
    port: 5432,
    database: "comida_db"
});

// Exportamos la conexion para que la utilicen los diferentes archivos de rutas
module.exports = conexionBD;