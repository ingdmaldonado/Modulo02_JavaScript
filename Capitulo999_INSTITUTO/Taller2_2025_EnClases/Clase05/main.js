
import {paises,costoPasajes} from "./datos.js";

    /* 
        JSON => JAVA SCRIPT OBJECT NOTATION 

    1) Es un formato de archivo UNIVERSAL
    de todos los sistemas y los lenguajes
    de programación.

    2) Es el formato en el que viajan los 
    archivos desde el BACK END <=> FRONT END

    3) Es el formato UNIVERSAL que se usa
    en las famosas API REST, que son 
    API => APLICATION PROGRAMING INTERFASE
    */

    /* 
    PERSISTENCIA EN EL NAVEGADOR 
    
    Guardar temporal y momentaneamente
    datos en el navegador.

    ESQUEMA DE PERSISTENCIA PERSONAL => DESCENTRALIZADO

    -sessionStorage
        dura y se almacena mientras
        la sesión dura, mientras la
        sesión esta activa.
        se elimina al cerrar la pestaña.

        1) pantalla1.html
            apellido y nombre

            siguiente

            objetos = JSON
            persisto en el navegador


        2) pantalla2.html

            levantar los datos en formato JSON
            convertirlos a objetos
            manipularlos.

            como califica del 1 al 10 
            los empleados del servicio
            de respuestos y service

            datos => JSON
            persistir en el navegador

        3) pantalla3.html

            levantarlos.



            Aceptar la Compra

    - sesionStorage => cierra la pantalla, cierra la sesion los datos se borran automaticamente
    
    -localStorage => permanecen en la sesion hasta que la misma aplicacion pueda ingresar y levangarlos
    
    -cookies => parecidas a las local storage, con la diferencia
    que se envian al servidor automaticamente en cada request
    
    -indexDB => Base de datos relacional en el navegador



    */

window.addEventListener("load",()=>{


    /* (1) aqui defino un objeto literal */
    const persona = {dni:22777222,apellido:"NICOLAO",nombres:"VALENTIN"};

    /* (2) existe una funcionalidad quue
    me permite convertir objetos javascript
    a formato JSON */

    let personaConvertidaAJSON = JSON.stringify(persona);

   

    /* (3) Aqui voy a volver a convertirlo
    a objeto literal */

    const personaLiteral = JSON.parse(personaConvertidaAJSON);

    console.log(persona);
    console.log(personaConvertidaAJSON);
    console.log(personaLiteral);

    /* 
    
        objeto literal => JSON => objeto literal

        FRONT =>(objeto literal => JSON) => BACK END

        BACK END => (JSON => objeto literal) FRONT END
    */


    console.log("running");

    console.log(paises);

    console.log(costoPasajes);

    /*
    JSON.stringify() => OBJETO A JSON
    JSON.parse()*/



})