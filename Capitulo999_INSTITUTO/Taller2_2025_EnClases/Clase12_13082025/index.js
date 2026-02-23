
/* RECUPERAR ESOS DATOS
DESDE UN MODULO */

const {productos,alumnos} = require("./datos.js");

//console.log(productos);

/* EXPRESS es un frameWork para administrar
y manejar el servidor web de una manera mas simple. */


/* estoy guardando dentro de una constante
la clase express. es una clase propia de la 
biblioteca o modulo express. 

    JAVASCRIPT 2015 EN ADELANTE

    import {} from ....

    JAVASCRIPT DEL PASADO

    require 

*/
const ClaseExpress = require("express");

/* instanciar un objeto de la clase express */
const ServidorWeb = ClaseExpress();

/* me voy a crear una constante, donde
va a escuchar mi servidor Web. 

    En Desarrollo y/o Testing => 3000

    En Produccion => 80

        80 => http
        21 => ftp

*/
const PORT = 3000;

/* El Servidor Web tiene VERBOS

    get
    post
    put
    delete
    patch

*/

/* EndPoint o Servicios Web. 

    Entrada => request => req
    Salida => response => res

*/

ServidorWeb.get("/",(req,res)=>
    {

        res.send("Bienvenidos al prueba 13.08.2025");

    })


/* Cuando alguien solicita al servidor
web una respuesta al endpoint /productos
se ejecutara esta accion. si vienen 
parametros desde el front los voy a sacar
del parametro req. y la respuesta la 
voy devolver con response. res */

ServidorWeb.get("/productos",(req,res)=>
    {

        /* estamos devolviendo los productos en formato JSON */
        res.json(productos);

    })

/* */


ServidorWeb.listen(PORT,()=>{

    console.log("Servidor Web Node running");

})