
/* MODULOS => tienen que exportar
las funciones o constantes o cosas
que quieren exportar */


/* Voy a definir una función que se almacenara
dentro de una constante. esa función tendrá
el formato de arrow function 
    1 () parametros de entrada
    => flecha obligatoria
    {} cuerpo de la funcion
    
    return tiene que devolver algo
*/

/* La idea de esta funcion. es que reciba como
parametro un endPoint (URL), haga un fetch
y recupere esos datos y los devuelva a quién 
se los solicite */

/* 
https://restcountries.com/v3.1/region/africa
https://restcountries.com/v3.1/region/americas
https://restcountries.com/v3.1/region/asia
https://restcountries.com/v3.1/region/europe
https://restcountries.com/v3.1/region/oceania
*/



/* La idea es separar las funciones y responsabilidades
en lugares distintos para que cada funcion ó modulo
se encargue específicamente de su tema. 
y organización del proyecto nos de una forma mas
clara de trabajo. */

/* Modelo 

    Se encarga de toda la logica de la aplicación

    - conectarse a APIS y recuperar datos (FrontEnd)
    - conectarse a APIS y enviar datos (Backend)
    - se encarga de toda la lógica de la aplicación

*/

export const fnRecuperarDatosDeApi = async (endPoint)=>
    {
        /* el objetivo de esta función es conectarse
        al endPoint que me pasen como parametro. conectarme
        con fetch

            conectarse y pedir algo => request

            la devolución <= response

            como pido ?. pido con fetch

        */

        /* Existen factores externos que no podemos
        controlar que pueden provocar errores, problemas
        de lentitud en la conexion, me quede sin paquete
        de datos */


        /* 
            fetch => es una PROMESA.

            porque tiene dos partes

            fetch 
                1ra) hace un request

                2da) parte Convierte el request a formato JSON
        
        */

        /* (1er. Punto) Me conecto al BackEn y le pido recuperame los datos del EndPoint */
       
        let response = await fetch(endPoint); // fetch me permite hacer un request

        /* (2do. Punto) Convertir esos datos a formato JSON */

        let datos = await response.json();
        
        return datos;

    };


/* cuando estoy construyendo funciones
tengo dos MOMENTOS 

    Momento1) => defino, es decir la construyo. ()=>{}

    Momento2) => invoco, es decir cuando alguien la llama 
    y le pasa como parametro los datos que necesita
    para funcionar.

*/