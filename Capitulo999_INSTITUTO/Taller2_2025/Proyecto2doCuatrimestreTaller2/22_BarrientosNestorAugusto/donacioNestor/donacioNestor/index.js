console.log('funcionando');

const ClaseExpress = require('express');

const ServidorWeb = ClaseExpress();

const Port = 4000;

ServidorWeb.use(ClaseExpress.json());

ServidorWeb.use(ClaseExpress.text());

ServidorWeb.use(ClaseExpress.urlencoded({ extended: false }));

ServidorWeb.use(ClaseExpress.static('frontend'));


// Importacion de librerias

const{ Pool } = require('pg');

const pool= new Pool
({
    user: 'postgres',
    host: 'localhost',
    database: 'basedonaciones',
    password: '12345678',
    port: 5432,
});


//endpoint causas

ServidorWeb.get("/causas", async (req, res) =>
    {
        let salida;

        try
            {
                const secuenciaSQL = 
                ` SELECT causaid, causanombre, causadescripcion, causafechacreacion
                        FROM causa
                        ORDER BY causaid`;
                        
                const resultado = await pool.query(secuenciaSQL);

                salida = 
                    {
                        result_estado: "ok",
                        result_message: "causas recuperadas correctamente",
                        result_rows: resultado.rowCount,
                        result_verbo: "get",
                        result_proceso: "/causas",
                        result_data: resultado.rows
                    };
                        
            }
        catch (error)
            {
                salida = 
                    {
                    result_estado: "error",
                    result_message: error.message,
                    result_rows: 0,
                    result_verbo: "get",
                    result_proceso: "/causas",
                    result_data: ""
                    };
            }
         

        res.json(salida);
       

    })

ServidorWeb.post("/causas", async (req, res) =>
    {

        let salida;

        try
            {
                const { causanombre, causadescripcion } = req.body;

                const secuenciaSQL = 
                    ` INSERT INTO causa (causanombre, causadescripcion)
                        VALUES ($1, $2) 
                            RETURNING causaid, causanombre, causadescripcion, causafechacreacion `;

                const resultado= await pool.query(secuenciaSQL, [causanombre, causadescripcion]);

                salida = 
                {
                    result_estado: "ok",
                    result_message: "causa agregada correctamente",
                    result_rows: resultado.rowCount,
                    result_verbo: "post",
                    result_proceso: "/causas",
                    result_data: resultado.rows[0]
                };

            }
        catch (error)
            {
                salida = {
                result_estado: "error",
                result_message: error.message,
                result_rows: 0,
                result_verbo: "post",
                result_proceso: "/causas",
                result_data: ""
            };

            }

        res.json(salida);

    })



//endpoint donaciones


ServidorWeb.get("/donaciones", async (req, res) =>
    {
        let salida;

        try
            {
                const secuenciaSQL = 
                ` SELECT donacionid, donanteid, causaid, donacionmonto, donacionfecha
                        FROM donacion
                        ORDER BY causaid DESC`;
                        
                const resultado = await pool.query(secuenciaSQL);

                salida = 
                    {
                        result_estado: "ok",
                        result_message: "donaciones recuperadas correctamente",
                        result_rows: resultado.rowCount,
                        result_verbo: "get",
                        result_proceso: "/donaciones",
                        result_data: resultado.rows
                    };
                        
            }
        catch (error)
            {
                salida = 
                    {
                    result_estado: "error",
                    result_message: error.message,
                    result_rows: 0,
                    result_verbo: "get",
                    result_proceso: "/donaciones",
                    result_data: ""
                    };
            }
         

        res.json(salida);
       

    })

ServidorWeb.post("/donaciones", async (req, res) =>
    {

        let salida;

        try
            {
                const { causaid, donanteid, donacionmonto } = req.body;

                const secuenciaSQL = 
                    ` INSERT INTO donacion (causaid, donanteid, donacionmonto)
                        VALUES ($1, $2, $3) 
                            RETURNING donacionid, donanteid, causaid, donacionmonto, donacionfecha`;

                const resultado= await pool.query(secuenciaSQL, [causaid, donanteid, donacionmonto]);

                salida = 
                {
                    result_estado: "ok",
                    result_message: "donacion agregada correctamente",
                    result_rows: resultado.rowCount,
                    result_verbo: "post",
                    result_proceso: "/donaciones",
                    result_data: resultado.rows[0]
                };

            }
        catch (error)
            {
                salida = {
                result_estado: "error",
                result_message: error.message,
                result_rows: 0,
                result_verbo: "post",
                result_proceso: "/donaciones",
                result_data: ""
            };

            }

        res.json(salida);

    })

    // endpoint donantes



ServidorWeb.get("/donantes", async (req, res) =>
    {
        let salida;

        try
            {
                const secuenciaSQL = 
                ` SELECT donanteid, donantenombre, donanteemail, donantetelefono, donantefechadonacion
                        FROM donante
                        ORDER BY donanteid DESC`;
                        
                const resultado = await pool.query(secuenciaSQL);

                salida = 
                    {
                        result_estado: "ok",
                        result_message: "donantes recuperados correctamente",
                        result_rows: resultado.rowCount,
                        result_verbo: "get",
                        result_proceso: "/donantes",
                        result_data: resultado.rows
                    };
                        
            }
        catch (error)
            {
                salida = 
                    {
                    result_estado: "error",
                    result_message: error.message,
                    result_rows: 0,
                    result_verbo: "get",
                    result_proceso: "/donantes",
                    result_data: ""
                    };
            }
         

        res.json(salida);
       

    })

ServidorWeb.post("/donantes", async (req, res) =>
    {

        let salida;

        try
            {
                const { donantenombre, donanteemail, donantetelefono } = req.body;

                const secuenciaSQL = 
                    ` INSERT INTO donante (donantenombre, donanteemail, donantetelefono)
                        VALUES ($1, $2, $3) 
                            RETURNING donanteid, donantenombre, donanteemail, donantetelefono, donantefechadonacion`;

                const resultado= await pool.query(secuenciaSQL, [donantenombre, donanteemail, donantetelefono]);

                salida = 
                {
                    result_estado: "ok",
                    result_message: "donante agregado correctamente",
                    result_rows: resultado.rowCount,
                    result_verbo: "post",
                    result_proceso: "/donantes",
                    result_data: resultado.rows[0]
                };

            }
        catch (error)
            {
                salida = {
                result_estado: "error",
                result_message: error.message,
                result_rows: 0,
                result_verbo: "post",
                result_proceso: "/donantes",
                result_data: ""
            };

            }

        res.json(salida);

    })





ServidorWeb.get('/', (req, res) => 
    {
    res.send('<h1>ya esta corriendo la pagina</h1>');
    });



ServidorWeb.listen(Port, () => 
    {
        console.log("Servidor andando en el puerto " + Port);
    });