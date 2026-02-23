
    console.log("servidor web is running");

    /************************************************************/
    /********************* EJEMPLO CODIGO JS PURO   *************/
    /************************************************************/

    let a = 20;

    let b = 40;

    let resultado = a + b;

    console.log(`la suma de ${a} y ${b} es igual a: ${resultado}`);


    /*************************************************************/
    /****************      IMPORTAR DATOS            *************/
    /*************************************************************/

    const {clientes,productos} = require("./datos.js");

    console.log(clientes);
    console.log(productos);

    /*************************************************************/
    /********* CONFIGURAR SERVIDOR WEB - EXPRESS      ************/
    /*************************************************************/

    // importamos la clase express //
    const ClaseExpress = require("express");

    // construimos un objeto que se llamara Servidor Web a partir de la clase //

    const ServidorWeb = ClaseExpress();
    const PORT = 3000;
    ServidorWeb.use(ClaseExpress.static("public"));


    ServidorWeb.get("/",(req,res)=>{

        res.send("respuesta desde el servidor web - BACK END");

    });

     // GET /clientes → devuelve todos los clientes en formato JSON
    ServidorWeb.get("/clientes", (req, res) => {
        res.json(clientes);
    });

    // GET /productos → devuelve todos los productos en formato JSON
    ServidorWeb.get("/productos", (req, res) => {
        res.json(productos);
    });

    ServidorWeb.listen(PORT,()=>{

        console.log(`Servidor Web running in port ${PORT} - v1`);

    });
