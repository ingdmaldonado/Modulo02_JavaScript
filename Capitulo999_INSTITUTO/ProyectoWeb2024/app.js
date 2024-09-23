
    console.log("Esto será la aplicación web");


    /* importo la clase express */
        const ClaseExpress = require('express');

    /* importo la biblioteca de postgre */
        const { Pool } = require('pg'); // Importar Pool para conectar con PostgreSQL

    /* creo una instancia de la clase express para poder
    configurar y trabajar con el servidor */

        const ServidorWeb = ClaseExpress();

    /* configuro el puerto donde escuchará la aplicación web */

        const PORT = 3000;

    /* Middleware para manejar JSON en las peticiones */

        // Procesa cuerpos de solicitudes JSON
            ServidorWeb.use(ClaseExpress.json());

        // Procesa cuerpos de solicitudes en formato 'text/plain'
            ServidorWeb.use(ClaseExpress.text());

        // Procesa cuerpos de solicitudes URL-encoded (formularios HTML)
            ServidorWeb.use(ClaseExpress.urlencoded({ extended: false }));

        // Sirve archivos estáticos (HTML, CSS, JS, imágenes)
            ServidorWeb.use(ClaseExpress.static("FrontEnd"));

    /* requiero la biblioteca dotenv - variables de entorno */

        require('dotenv').config();

        console.log("DB_USER:", process.env.DB_USER);
        console.log("DB_PASSWORD:", process.env.DB_PASSWORD);

        const pool = new Pool({
            user: process.env.DB_USER,        // Usuario de PostgreSQL
            host: process.env.DB_HOST,        // Dirección del servidor
            database: process.env.DB_DATABASE, // Nombre de la base de datos
            password: String(process.env.DB_PASSWORD), // Forzar a que la contraseña sea un string
            port: process.env.DB_PORT,        // Puerto de PostgreSQL
        });


    /* Configurar la conexión a PostgreSQL
    const pool = new Pool({
        user: 'postgres',        // Usuario de PostgreSQL
        host: 'localhost',        // Dirección del servidor
        database: 'dbclientes',   // Nombre de la base de datos
        password: '12345678',     // Contraseña del usuario de PostgreSQL
        port: 5432,               // Puerto de PostgreSQL (por defecto es 5432)
    });

    */

        ServidorWeb.get('/', (req, res) => {
            res.send('¡Bienvenidos a la API Rest de Taller 2. año 2024');
        });


/**********************************************************************************/
/*********************************** API REST *************************************/
/**********************************************************************************/

    /*
        GET => http://localhost:3000/cliente => GET

        GET => http://localhost:3000/cliente/pornombre?clientenombre=DANIEL

        GET => (requiere parametro clienteid) => http://localhost:3000/cliente/3 => GET

        GET => (requiere parametro clientecuit) => http://localhost:3000/cliente/porcuit/23240106639 => GET

        POST => (no requiere parametro) => http://localhost:3000/cliente/4  => POST => AGREGA => SE PRUEBA CON POSTMAN

        PUT => (requiere parametro clienteid) => http://localhost:3000/cliente/4  => PUT => MODIFICA => SE PRUEBA CON POSTMAN

        DELETE => (requiere parametro clienteid) => http://localhost:3000/cliente/4 => DELETE => ELIMINA

    */



    /*---------------------------------------------------------------------------*/
    /* RECUPERAR TODOS LOS CLIENTES => /cliente                                  */
    /*---------------------------------------------------------------------------*/

        /* desde Navegador
            http://localhost:3000/cliente
        */

        /* desde PostMAN 
            1ro) Seleccionar GET
            2do) Pegar la ruta http://localhost:3000/cliente
        */

    ServidorWeb.get('/cliente', async (req, res) => {
        try 
        {
            /* armamos la sentencia SQL dentro de una variable/constante */
            const sentenciaSQL = 
                `
                    select 
		                cliente.*,
		                localidad.localidadcp,
		                localidad.localidadnombre,
		                localidad.departamentoid,
		                departamento.departamentonombre
			                from cliente
				                inner join localidad
					                on
						                cliente.localidadid = localidad.localidadid
				                inner join departamento
					                on
						                localidad.departamentoid = departamento.departamentoid
                `;

            /* ejecutamos la sentencia SQL en el Servidor de Base de Datos */
            const resultadoSentenciaSQL = await pool.query(sentenciaSQL); // Consulta SQL

            /* Si todo salió bien, armamos un objeto literal con el resultado de la consulta */
            Salida = 
            {
                result_estado:'ok',
                result_message:'clientes recuperados',
                result_rows:resultadoSentenciaSQL.rowCount,
                result_verbo:'get',
                result_proceso:'/cliente',
                result_data:resultadoSentenciaSQL.rows
            }          
        } 
        catch (error) 
        {
            /* Si algo salió mal en el proceso de ejecución de la consulta, 
            creamos un objeto literal y devolvemos el mensaje de error */

            Salida = 
            {
                result_estado:'error',
                result_message:error.message,
                result_rows:0,
                result_verbo:'get',
                result_proceso:'/cliente',
                result_data:''
            }          
        }

        /* respondemos al front end con el objeto Salida convertido a formato JSON */
        res.json(Salida);
    });


    /*---------------------------------------------------------------------------*/
    /* RECUPERAR TODOS LOS CLIENTES POR NOMBRE => /cliente/pornombre             */
    /*---------------------------------------------------------------------------*/

        /* desde Navegador
           http://localhost:3000/cliente/pornombre?clientenombre=DANIEL
        */

        /* desde PostMAN 
            1ro) Seleccionar GET
            2do) Pegar la ruta http://localhost:3000/cliente/pornombre?clientenombre=DANIEL
            3ro) Elegir la sopala Params => Query Params
                
                donde dice key van los nombres de los parametros y los valores,en este caso
                van 

                clientenombre como key
                DANIEL como value 

                esto es por dar un ejemplo.
        */

            ServidorWeb.get('/cliente/pornombre', async (req, res) => {
                try 
                {
                    /* obtenemos el nombre de las query del request */
                    const clientenombre = req.query.clientenombre;


                    /* armamos la sentencia SQL dentro de una variable/constante */
                    const sentenciaSQL = 
                        `
                            select 
                                cliente.*,
                                localidad.localidadcp,
                                localidad.localidadnombre,
                                localidad.departamentoid,
                                departamento.departamentonombre
                                    from cliente
                                        inner join localidad
                                            on
                                                cliente.localidadid = localidad.localidadid
                                        inner join departamento
                                            on
                                                localidad.departamentoid = departamento.departamentoid
                                                    where
                                                        clientenombre Ilike $1
                        `;
        
                    /* ejecutamos la sentencia SQL en el Servidor de Base de Datos */
                    const resultadoSentenciaSQL = await pool.query(sentenciaSQL,[`%${clientenombre}%`]); // Consulta SQL
        
                    /* Si todo salió bien, armamos un objeto literal con el resultado de la consulta */
                    Salida = 
                    {
                        result_estado:'ok',
                        result_message:'clientes recuperados',
                        result_rows:resultadoSentenciaSQL.rowCount,
                        result_verbo:'get',
                        result_proceso:'/cliente/pornombre',
                        result_data:resultadoSentenciaSQL.rows
                    }          
                } 
                catch (error) 
                {
                    /* Si algo salió mal en el proceso de ejecución de la consulta, 
                    creamos un objeto literal y devolvemos el mensaje de error */
        
                    Salida = 
                    {
                        result_estado:'error',
                        result_message:error.message,
                        result_rows:0,
                        result_verbo:'get',
                        result_proceso:'/cliente',
                        result_data:''
                    }          
                }
        
                /* respondemos al front end con el objeto Salida convertido a formato JSON */
                res.json(Salida);
            });

    /*---------------------------------------------------------------------------*/
    /* RECUPERAR CLIENTES POR (ID) => /cliente/ID                                */
    /*---------------------------------------------------------------------------*/

        /* desde Navegador
            http://localhost:3000/cliente/3
        */

        /* desde PostMAN 
            1ro) Seleccionar GET
            2do) Pegar la ruta  http://localhost:3000/cliente/3
        */

            ServidorWeb.get('/cliente/:clienteid', async (req, res) => {
                try 
                {
                    /* obtenemos de los parametros el clienteid */
                    const clienteid = req.params.clienteid;

                    /* creamos la sentencia sql dentro de una variable o constante */
                    const sentenciaSQL = 
                        `
                            select 
                                cliente.*,
                                localidad.localidadcp,
                                localidad.localidadnombre,
                                localidad.departamentoid,
                                departamento.departamentonombre
                                    from cliente
                                        inner join localidad
                                            on
                                                cliente.localidadid = localidad.localidadid
                                        inner join departamento
                                            on
                                                localidad.departamentoid = departamento.departamentoid
                                                    where
                                                        cliente.clienteid = $1 
                        `;
        
                    /* ejecutaremos la sentencia sql en el Motor de bases de datos pasandole como parametro los datos
                    que necesite el query */

                    const resultadoSentenciaSQL = await pool.query(sentenciaSQL,[clienteid]); // Consulta SQL
        
                    /* si todo salió bien armamos un objeto literal con los resultados obtenidos */

                    Salida = 
                    {
                        result_estado:'ok',
                        result_message:'clientes recuperados',
                        result_rows:resultadoSentenciaSQL.rowCount,
                        result_verbo:'get',
                        result_proceso:'/cliente/:clienteid',
                        result_data:resultadoSentenciaSQL.rows[0]
                    }          
                } 
                catch (error) 
                {
                    /* 
                        Si algo salió mal en el proceso de ejecución de la consulta, 
                        creamos un objeto literal y devolvemos el mensaje de error 
                    */

                    Salida = 
                    {
                        result_estado:'error',
                        result_message:error.message,
                        result_rows:0,
                        result_verbo:'get',
                        result_proceso:'/cliente/:clienteid',
                        result_data:''
                    }          
                }

                /* respondemos al front end con el objeto Salida convertido a formato JSON */
                res.json(Salida);
            });

    /*---------------------------------------------------------------------------*/
    /* RECUPERAR CLIENTES POR (CUIT) => /clienteporcuit/clientecuit              */
    /*---------------------------------------------------------------------------*/

        /* desde Navegador
            http://localhost:3000/cliente/porcuit/23240106639
        */

        /* desde PostMAN 
            1ro) Seleccionar GET
            2do) Pegar la ruta  http://localhost:3000/cliente/porcuit/23240106639
        */

            ServidorWeb.get('/cliente/porcuit/:clientecuit', async (req, res) => {
                try 
                {
                    /* obtengo de los parametros el clientecuit */
                    const clientecuit = req.params.clientecuit;

                    /* armo la sentencia sql, donde el clientecuit estará en el where como parametro variable */
                    const sentenciaSQL = 
                        `
                            select 
                                cliente.*,
                                localidad.localidadcp,
                                localidad.localidadnombre,
                                localidad.departamentoid,
                                departamento.departamentonombre
                                    from cliente
                                        inner join localidad
                                            on
                                                cliente.localidadid = localidad.localidadid
                                        inner join departamento
                                            on
                                                localidad.departamentoid = departamento.departamentoid
                                                    where
                                                        cliente.clientecuit = $1
                        `;
        
                    /* a la sentencia sql del paso anterior, la ejecutamos y pasamos como parametro
                    los datos que obtuvimos desde el body, en el orden que correspondan y la ejecutamos 
                    */

                    const resultadoSentenciaSQL = await pool.query(sentenciaSQL,[clientecuit]); // Consulta SQL
        
                    
                    /* si todo salió bien armamos un objeto literal con los resultados obtenidos */

                    Salida = 
                    {
                        result_estado:'ok',
                        result_message:'clientes recuperados',
                        result_rows:resultadoSentenciaSQL.rowCount,
                        result_verbo:'get',
                        result_proceso:'/clienteporcuit/:clientecuit',
                        result_data:resultadoSentenciaSQL.rows[0]
                    }          
                } 
                catch (error) 
                {
                    /* 
                        Si algo salió mal en el proceso de ejecución de la consulta, 
                        creamos un objeto literal y devolvemos el mensaje de error 
                    */

                    Salida = 
                    {
                        result_estado:'error',
                        result_message:error.message,
                        result_rows:0,
                        result_verbo:'get',
                        result_proceso:'/clienteporcuit/:clientecuit',
                        result_data:''
                    }          
                }

                /* respondemos al front end con el objeto Salida convertido a formato JSON */
                res.json(Salida);
            });

   
    /*----------------------------------------------------------------------------------------*/
    /* AGREGAR CLIENTES CUYOS DATOS VIENEN EN FORMATO JSON EN EL BODY POR VERBO POST          */
    /*----------------------------------------------------------------------------------------*/

        /* 
            desde Navegador => no se puede
        */

        /* desde PostMAN 

            1ro) Seleccionar POST
            2do) Pegar la ruta  http://localhost:3000/cliente
            3ro) Elegir la solapa Body
            4to) Dentro de la solapa Body elegir el formato raw (que quiere decir formato plano)
            5to) Dentro de la solapa Body al final de la derecha elegir el formato JSON
            6to) Pegar en el textarea que tiene postman los datos en formato JSON de esta forma

                {
                    "clientecuit": "23240106632",
                    "clientenombre": "MALDONADO DANIEL 2",
                    "clientedomicilio": "AV. LA CALLECITA SIN NUMERO",
                    "localidadid": "4"
                }
        */

            ServidorWeb.post('/cliente/', async (req, res) => {
                try 
                {
                    /* hacemos destructuring del objeto que viene en formato JSON 
                    y lo separamos, atributo x atributo const */

                    const {clientecuit,clientenombre,clientedomicilio,localidadid} = req.body; 

                    /* armamos la sentencia sql parametrizada y no nos olvidamos de poner la palabra returning * que significa
                    que devolverá los datos agregados tal como quedaron posteriormente a la inserción */

                    const sentenciaSQL = 
                        `
                           insert into cliente (clientecuit,clientenombre,clientedomicilio,localidadid) values ($1,$2,$3,$4) returning *
                        `;
        
                    /* a la sentencia sql del paso anterior, la ejecutamos y pasamos como parametro
                    los datos que obtuvimos desde el body, en el orden que correspondan y la ejecutamos */

                    const resultadoSentenciaSQL = await pool.query(sentenciaSQL,[clientecuit,clientenombre,clientedomicilio,localidadid]); 
        
                    /* si todo salió bien armamos un objeto literal con los resultados obtenidos */
                    Salida = 
                    {
                        result_estado:'ok', // decimos que todo salio ok
                        result_message:'cliente agregado correctamente', // mensaje que devolveremos al front end
                        result_rows:resultadoSentenciaSQL.rowCount, // indicamos la cantidad de registros afectados,
                        result_verbo:'post',
                        result_proceso:'/cliente/', // información importante para saber que end point esta ejecutando el proceso
                        result_data:resultadoSentenciaSQL.rows[0] // devolvemos del vector únicamente el primer elememnto
                    }          
                } 
                catch (error) 
                {
                    /* Si algo salió mal en el proceso de ejecución de la consulta, 
                        creamos un objeto literal y devolvemos el mensaje de error 
                    */

                    Salida = 
                    {
                        result_estado:'error',
                        result_message:error.message,
                        result_rows:0,
                        result_verbo:'post',
                        result_proceso:'/cliente/',
                        result_data:''
                    }          
                }

                /* respondemos al front end con el objeto Salida convertido a formato JSON */
                res.json(Salida);
            });

    /*----------------------------------------------------------------------------------------*/
    /* MODIFICAR CLIENTES CUYOS DATOS VIENEN EN FORMATO JSON EN EL BODY POR VERBO PUT        */
    /*----------------------------------------------------------------------------------------*/

        /* 
            desde Navegador => no se puede
        */

        /* desde PostMAN 

            1ro) Seleccionar POST
            2do) Pegar la ruta  http://localhost:3000/cliente/7
            3ro) Elegir la solapa Body
            4to) Dentro de la solapa Body elegir el formato raw (que quiere decir formato plano)
            5to) Dentro de la solapa Body al final de la derecha elegir el formato JSON
            6to) Pegar en el textarea que tiene postman los datos en formato JSON de esta forma

                {
                    "clientecuit": "23240106632",
                    "clientenombre": "MALDONADO DANIEL 2",
                    "clientedomicilio": "AV. LA CALLECITA SIN NUMERO",
                    "localidadid": "4"
                }
        */

                ServidorWeb.put('/cliente/:clienteid', async (req, res) => {
                    try 
                    {
                        /* hacemos destructuring del objeto que viene en formato JSON 
                        y lo separamos, atributo x atributo const */
    
                        /* obtenemos de los parametros el clienteid que viene desde los parametros*/
                        const clienteid = req.params.clienteid;

                        console.log("este es el clienteid a actualizar ",clienteid)

                        /* los datos a modificar deben venir en el body */
                        const {clientecuit,clientenombre,clientedomicilio,localidadid} = req.body; 

                        console.log(clientecuit,clientenombre,clientedomicilio,localidadid);
    
                        /* armamos la sentencia sql parametrizada y no nos olvidamos de poner la palabra returning * que significa
                        que devolverá los datos agregados tal como quedaron posteriormente a la inserción */

                        const sentenciaSQL = 
                            `
                               update cliente
                                    Set
                                        clientecuit = $2,
                                        clientenombre = $3,
                                        clientedomicilio = $4,
                                        localidadid = $5
                                                where clienteid = $1
                                                    returning *
                            `;
            
                        /* a la sentencia sql del paso anterior, la ejecutamos y pasamos como parametro
                        los datos que obtuvimos desde el body, en el orden que correspondan y la ejecutamos */
    
                        const resultadoSentenciaSQL = await pool.query(sentenciaSQL,[clienteid,clientecuit,clientenombre,clientedomicilio,localidadid]); 
            
                        /* si todo salió bien armamos un objeto literal con los resultados obtenidos */
                        Salida = 
                        {
                            result_estado:'ok', // decimos que todo salio ok
                            result_message:'cliente modificado correctamente', // mensaje que devolveremos al front end
                            result_rows:resultadoSentenciaSQL.rowCount, // indicamos la cantidad de registros afectados
                            result_verbo:'put',
                            result_proceso:'/cliente/:clienteid', // información importante para saber que end point esta ejecutando el proceso
                            result_data:resultadoSentenciaSQL.rows[0] // devolvemos del vector únicamente el primer elememnto
                        }          
                    } 
                    catch (error) 
                    {
                        /* Si algo salió mal en el proceso de ejecución de la consulta, 
                        creamos un objeto literal y devolvemos el mensaje de error */

                        Salida = 
                        {
                            result_estado:'error',
                            result_message:error.message,
                            result_rows:0,
                            result_verbo:'put',
                            result_proceso:'/cliente/:clienteid',
                            result_data:''
                        }          
                    }

                    /* respondemos al front end con el objeto Salida convertido a formato JSON */
                    res.json(Salida);
                });


   /*----------------------------------------------------------------------------------------*/
    /* ELIMINAR CLIENTES CUYOS DATOS VIENEN EN FORMATO JSON EN EL BODY POR VERBO PUT        */
    /*----------------------------------------------------------------------------------------*/

        /* 
            desde Navegador => no se puede
        */

        /* desde PostMAN 

            1ro) Seleccionar POST
            2do) Pegar la ruta  http://localhost:3000/cliente/7
            3ro) Elegir la solapa Body
            4to) Dentro de la solapa Body elegir el formato raw (que quiere decir formato plano)
            5to) Dentro de la solapa Body al final de la derecha elegir el formato JSON
            6to) Pegar en el textarea que tiene postman los datos en formato JSON de esta forma

                {
                    "clientecuit": "23240106632",
                    "clientenombre": "MALDONADO DANIEL 2",
                    "clientedomicilio": "AV. LA CALLECITA SIN NUMERO",
                    "localidadid": "4"
                }
        */

                ServidorWeb.delete('/cliente/:clienteid', async (req, res) => {
                    try 
                    {
                        /* hacemos destructuring del objeto que viene en formato JSON 
                        y lo separamos, atributo x atributo const */
    
                        /* obtenemos de los parametros el clienteid que viene desde los parametros*/
                        const clienteid = req.params.clienteid;
    
                        /* armamos la sentencia sql parametrizada y no nos olvidamos de poner la palabra returning * que significa
                        que devolverá los datos agregados tal como quedaron posteriormente a la inserción */

                        const sentenciaSQL = 
                            `
                               delete from cliente where clienteid = $1 returning *
                            `;
            
                        /* a la sentencia sql del paso anterior, la ejecutamos y pasamos como parametro
                        los datos que obtuvimos desde el body, en el orden que correspondan y la ejecutamos */
    
                        const resultadoSentenciaSQL = await pool.query(sentenciaSQL,[clienteid]); 
            
                        /* si todo salió bien armamos un objeto literal con los resultados obtenidos */
                        Salida = 
                        {
                            result_estado:'ok', // decimos que todo salio ok
                            result_message:'cliente eliminado correctamente', // mensaje que devolveremos al front end
                            result_rows:resultadoSentenciaSQL.rowCount, // indicamos la cantidad de registros afectados
                            result_verbo:'delete',
                            result_proceso:'/cliente/:clienteid', // información importante para saber que end point esta ejecutando el proceso
                            result_data:resultadoSentenciaSQL.rows[0] // devolvemos del vector únicamente el primer elememnto
                        }          
                    } 
                    catch (error) 
                    {
                        /* Si algo salió mal en el proceso de ejecución de la consulta, 
                        creamos un objeto literal y devolvemos el mensaje de error */

                        Salida = 
                        {
                            result_estado:'error',
                            result_message:error.message,
                            result_rows:0,
                            result_verbo:'delete',
                            result_proceso:'/cliente/:clienteid',
                            result_data:''
                        }          
                    }

                    /* respondemos al front end con el objeto Salida convertido a formato JSON */
                    res.json(Salida);
                });

    /*************************************************************************************************/
    /*************************************************************************************************/
    /*************************************** ARRANCAMOS LA APLICACION  *******************************/
    /*************************************************************************************************/
    /*************************************************************************************************/

    // Iniciar el servidor en el puerto 3000
    ServidorWeb.listen(PORT, () => 
        {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });

