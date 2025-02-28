// Importar dependencias
const express = require('express');
const path = require('path');
const sql = require('mssql');
require('dotenv').config(); // Cargar variables de entorno

// Crear la aplicación Express
const app = express();

// Puerto del servidor
const PORT = 3000;

// Configuración de la conexión a SQL Server (usando variables de entorno)
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: process.env.DB_ENCRYPT === 'true', // Convertir a booleano
    trustServerCertificate: true, // Para conexiones locales
  },
};

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, '../frontend')));

// Ruta principal para servir "vista.html"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/vista.html'));
});

// Endpoint para obtener datos de la tabla dbo.Persona
app.get('/api/personas', async (req, res) => {
  try {
    // Conectar a la base de datos
    const pool = await sql.connect(dbConfig);

    // Ejecutar la consulta
    const result = await pool.request().query(`
      SELECT TOP 100 PersonaId, PersonaCuit, PersonaDenominacion
      FROM dbo.Persona
    `);

    // Enviar los resultados como respuesta JSON
    res.json(result.recordset);

    // Cerrar la conexión
    sql.close();
  } catch (err) {
    // Manejo de errores
    console.error('Error al conectar a la base de datos:', err);
    res.status(500).send('Error al recuperar los datos');
  }
});

// Manejo de errores globales de SQL Server
sql.on('error', (err) => {
  console.error('Error global de SQL:', err);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
