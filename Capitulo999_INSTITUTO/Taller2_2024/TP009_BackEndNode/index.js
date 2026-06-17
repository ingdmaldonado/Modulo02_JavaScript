

/*
    const Vector = [
                        {dni:24010663,apellido:"MALDONADO ENRIQUE DANIEL"},
                        {dni:24010663,apellido:"SALVADOR MORALES MICAELA"},
                        {dni:24010663,apellido:"MENDOZA FLAVIO AUGUSTO"}
                    ];

    let a = 0;

    console.log(Vector);

    console.log("hola");


*/
  

    const claseExpress = require("express"); // importamos la clase express

    const objetoExpress = claseExpress(); // creamos un objeto de la clase express pa

    const { Pool } = require('pg'); // creamos un pool de conexion a postgre

    const port = 3000; // establecemos el puerto de la aplicación


  


    // Configurar la conexión a PostgreSQL
    const pool = new Pool(
        {
            user: 'postgres', // Tu usuario de PostgreSQL
            host: 'localhost', // Numero IP ó nombre de la máquina
            database: 'DBMiNegocio', // Nombre de la base de datos
            password: '12345678', // Contraseña de PostgreSQL
            port: 5432,
        });


    const fnConsultarBase =  async ()=>
        {

            try {
                const resultado = await pool.query('SELECT * FROM cliente'); // Hacemos una consulta SQL
                console.log(resultado.rows); // Mostramos los resultados en la consola
                res.json(resultado.rows); // Enviamos los resultados como respuesta
            } catch (err) {
                console.error('Error al realizar la consulta:', err);
                res.status(500).send('Error al realizar la consulta');
            }

        }

    fnConsultarBase();