// Definicion del puerto logico de red para la aplicacion
const PORT = 3000;

// Importacion de modulos principales usando las variables de la catedra
const claseExpress = require("express");
const instanciaExpress = claseExpress();
const cors = require("cors");

// Importacion de los archivos de rutas modulares
const rutasCategoria = require("./routes/categoria.routes");
const rutasComida = require("./routes/comida.routes");

// Middlewares globales
instanciaExpress.use(cors());                     // Evita bloqueos de seguridad por CORS en el navegador
instanciaExpress.use(claseExpress.json());       // Permite interpretar cuerpos de peticion en formato JSON

// Asignacion de las rutas a sus prefijos correspondientes
instanciaExpress.use("/api/categoria", rutasCategoria);
instanciaExpress.use("/api/comida", rutasComida);

// Puesta en marcha de la escucha del servidor Node.js
instanciaExpress.listen(PORT, () => {
    console.log(`Servidor de Comidas escuchando en el puerto ${PORT}`);
});