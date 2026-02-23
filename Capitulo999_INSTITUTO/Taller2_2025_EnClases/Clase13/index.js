
{

    // importamos la clase Express //
    const ClaseExpress = require("express");

    // creamos una instancia o objeto de la clase Express //
    const ServidorWeb = ClaseExpress();

    // configuramos el puerto donde escuchara el servidor //
    const Port = 3000;

    /* Middleware para manejar JSON en las peticiones */

        // Procesa cuerpos de solicitudes JSON
            ServidorWeb.use(ClaseExpress.json());

        // Procesa cuerpos de solicitudes en formato 'text/plain'
            ServidorWeb.use(ClaseExpress.text());

        // Procesa cuerpos de solicitudes URL-encoded (formularios HTML)
            ServidorWeb.use(ClaseExpress.urlencoded({ extended: false }));

        // Sirve archivos estáticos (HTML, CSS, JS, imágenes)
            ServidorWeb.use(ClaseExpress.static("frontend"));

        
    // Importamos la librería pg y extraemos la clase Pool
    
    const { Pool } = require("pg");

    // Configuración de la conexión al servidor PostgreSQL
    const pool = new Pool({
        user: "postgres",       // Usuario de PostgreSQL
        host: "localhost",      // Dirección del servidor
        database: "base2025",   // Nombre de la base de datos
        password: "12345678",   // Contraseña del usuario
        port: 5432,             // Puerto por defecto de PostgreSQL
    });
   
    /*************************************************
        verbo:get
        ruta endPoint: http://localhost:3000/clientes
        parametros entrada: ninguno
        parametros desde : ninguno
        devuelve:todos los clientes
    **************************************************/

    ServidorWeb.get("/clientes", async (req, res) => 
    {

        let Salida; // declaramos local para no tener globales

        try {
            // Sentencia SQL: solo la tabla cliente
            const sentenciaSQL = `
                SELECT clienteid, clientecuit, clientenombre
                    FROM cliente
                        ORDER BY clienteid
        `;

        // Ejecutamos la consulta
        const resultado = await pool.query(sentenciaSQL);

        // Construimos la salida exitosa
        Salida = {
            result_estado: "ok",
            result_message: "clientes recuperados correctamente",
            result_rows: resultado.rowCount,
            result_verbo: "get",
            result_proceso: "/clientes",
            result_data: resultado.rows
        };
        } catch (error) 
        {
            // Construimos la salida con error
            Salida = {
                result_estado: "error",
                result_message: error.message,
                result_rows: 0,
                result_verbo: "get",
                result_proceso: "/clientes",
                result_data: ""
            };
        }

    // Respondemos al cliente en formato JSON
    res.json(Salida);
    });

  
    /*************************************************
        verbo:get
        ruta endPoint: http://localhost:3000/clientes/2
        parametros entrada: ninguno
        parametros desde : ninguno
        devuelve:todos los clientes
    **************************************************/

    ServidorWeb.get("/clientes/:id", async (req, res) => 
    {
        let Salida;

        try {
            const {id} = req.params;

            const sentenciaSQL = `
                SELECT clienteid, clientecuit, clientenombre
                FROM cliente
                WHERE clienteid = $1
                `;

            const resultado = await pool.query(sentenciaSQL, [id]);

            Salida = {
                result_estado: "ok",
                result_message: "consulta por id",
                result_rows: resultado.rowCount,
                result_verbo: "get",
                result_proceso: "/clientes/:id",
                result_data: resultado.rows[0]
            };
        } catch (error) 
        {
            Salida = {
                result_estado: "error",
                result_message: error.message,
                result_rows: 0,
                result_verbo: "get",
                result_proceso: "/clientes/:id",
                result_data:""
            };
        }
        res.json(Salida);
    });

     /*************************************************
        verbo:get
        ruta endPoint: http://localhost:3000/clientes/porcuit/23240106639
        parametros entrada: ninguno
        parametros desde : ninguno
        devuelve:todos los clientes
    **************************************************/
    
    ServidorWeb.get("/clientes/porcuit/:clientecuit", async (req, res) => 
    {
        let Salida;

        try 
        {
            const {clientecuit} = req.params;

            const sentenciaSQL = `
                SELECT clienteid, clientecuit, clientenombre
                FROM cliente
                    WHERE clientecuit = $1
                `;

            const resultado = await pool.query(sentenciaSQL, [clientecuit]);

            Salida = 
            {
                result_estado: "ok",
                result_message: "consulta por cuit",
                result_rows: resultado.rowCount,
                result_verbo: "get",
                result_proceso: "/clientes/porcuit/:clientecuit",
                result_data: resultado.rows[0]
            };
        } catch (error) 
        {
            Salida = {
                result_estado: "error",
                result_message: error.message,
                result_rows: 0,
                result_verbo: "get",
                result_proceso: "/clientes/porcuit/:clientecuit",
                result_data: ""
            };
        }

    res.json(Salida);
    });


      /*************************************************
        verbo:get
        ruta endPoint: http://localhost:3000/clientes/
        parametros entrada: ninguno
        parametros desde : ninguno
        devuelve:todos los clientes
    **************************************************/
    
    ServidorWeb.get('/cliente/pornombre', async (req, res) => 
    {
        let Salida;

        try 
        {
            const {clientenombre} = req.query;

            const sentenciaSQL = `
                SELECT clienteid, clientecuit, clientenombre
                FROM cliente
                    WHERE clientenombre like $1
                `;

            const resultado = await pool.query(sentenciaSQL, [`%${clientenombre}%`]);

            Salida = 
            {
                result_estado: "ok",
                result_message: "consulta por cuit",
                result_rows: resultado.rowCount,
                result_verbo: "get",
                result_proceso: "/clientes/porcuit/:clientecuit",
                result_data: resultado.rows[0]
            };
        } catch (error) 
        {
            Salida = {
                result_estado: "error",
                result_message: error.message,
                result_rows: 0,
                result_verbo: "get",
                result_proceso: "/clientes/porcuit/:clientecuit",
                result_data: ""
            };
        }

    res.json(Salida);
    });
    


    /*************************************************
    verbo: post
    ruta endPoint: http://localhost:3000/clientes
    parametros entrada: clientecuit, clientenombre
    parametros desde: req.body
    devuelve: cliente agregado
    postman: 
        - elegir verbo => post
        - poner endPoint => http://localhost:3000/clientes
        - elegir la solapa Body
        - elegir los datos en formato raw => significa “datos crudos” (texto plano) que vos elegís en qué formato escribirlos (JSON, Text, HTML, XML, etc.).

            pegar un objeto literal a insertar por ejemplo:

            {"clientecuit":"27278889992","clientenombre":"MESSI LIONEL ANDRES"}

        - darle send

    **************************************************/

    ServidorWeb.post("/clientes", async (req, res) => 
    {
        let Salida;

        try 
        {
            const { clientecuit, clientenombre } = req.body;

            const sentenciaSQL = `
                INSERT INTO cliente (clientecuit, clientenombre)
                VALUES ($1, $2)
                RETURNING clienteid, clientecuit, clientenombre
            `;

            const resultado = await pool.query(sentenciaSQL, [clientecuit, clientenombre]);

            Salida = {
                result_estado: "ok",
                result_message: "cliente agregado correctamente",
                result_rows: resultado.rowCount,
                result_verbo: "post",
                result_proceso: "/clientes",
                result_data: resultado.rows[0]
            };
        } catch (error) 
        {
            Salida = {
                result_estado: "error",
                result_message: error.message,
                result_rows: 0,
                result_verbo: "post",
                result_proceso: "/clientes",
                result_data: ""
            };
        }
        res.json(Salida);
    });


    /*************************************************
    verbo: put
    ruta endPoint: http://localhost:3000/clientes
    parametros entrada: { clienteid, clientecuit, clientenombre }
    parametros desde: req.body
    devuelve: cliente modificado

    postman: 
        - elegir verbo => put
        - poner endPoint => http://localhost:3000/clientes
        - elegir la solapa Body
        - elegir los datos en formato raw => significa “datos crudos” (texto plano) que vos elegís en qué formato escribirlos (JSON, Text, HTML, XML, etc.).

            pegar un objeto literal a insertar por ejemplo:

            {"clienteid":"3","clientecuit":"27278889992","clientenombre":"MESSI RAMON ANTONIO"}

        - darle send

  
    **************************************************/

    ServidorWeb.put("/clientes", async (req, res) => 
    {
        let Salida;

        try {
            const { clienteid, clientecuit, clientenombre } = req.body;

            const sentenciaSQL = `
                UPDATE cliente
                    SET clientecuit = $2,
                        clientenombre = $3
                            WHERE clienteid = $1
                                RETURNING clienteid, clientecuit, clientenombre
            `;

            const resultado = await pool.query(sentenciaSQL, [clienteid, clientecuit, clientenombre]);

            Salida = {
                result_estado: "ok",
                result_message: "cliente modificado correctamente",
                result_rows: resultado.rowCount,
                result_verbo: "put",
                result_proceso: "/clientes",
                result_data: resultado.rows[0]
            };
        } catch (error) 
        {
            Salida = {
                result_estado: "error",
                result_message: error.message,
                result_rows: 0,
                result_verbo: "put",
                result_proceso: "/clientes",
                result_data: ""
            };
        }

        res.json(Salida);
    });


    /*************************************************
    verbo: delete
    ruta endPoint: http://localhost:3000/clientes
    parametros entrada: { clienteid, clientecuit, clientenombre }
    parametros desde: req.body
    devuelve: cliente eliminado
    **************************************************/

    ServidorWeb.delete("/clientes", async (req, res) => 
    {
        let Salida;

        try 
        {
            const { clienteid, clientecuit, clientenombre } = req.body;

            const sentenciaSQL = `
                DELETE FROM cliente
                    WHERE clienteid = $1
                        RETURNING clienteid, clientecuit, clientenombre
            `;

            const resultado = await pool.query(sentenciaSQL, [clienteid]);

            Salida = {
                result_estado: "ok",
                result_message: "cliente eliminado correctamente",
                result_rows: resultado.rowCount,
                result_verbo: "delete",
                result_proceso: "/clientes",
                result_data: resultado.rows[0]
            };
        } 
        catch (error) 
        {
            Salida = {
                result_estado: "error",
                result_message: error.message,
                result_rows: 0,
                result_verbo: "delete",
                result_proceso: "/clientes",
                result_data: ""
            };
        }
        res.json(Salida);
    });

    /*** ponemos al servidor en estado listening ***/

    ServidorWeb.listen(Port, () => {
        console.log("Servidor andando en el puerto " + Port);
    });

}