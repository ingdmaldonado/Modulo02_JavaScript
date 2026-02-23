
/* el programa se encierra
entre llaves, de apertura
y de cierre */

{
    console.log("this aplication is running");

    /* repaso. como declarar variables */

    let edad_de_marcos = 26;

    /*
        1) no se puede dejar espacios en blanco 
        en el nombre de las variables

        let edad de marcos = 26

        2) no se pueden declarar variables
        usando palabras reservadas del lenguaje
            let => para declarar variables
            console => para mostrar por pantalla
            const => para crear constantes

        3) usar nombres que tengan una carga
        semántica fuerte, respecto de la variable
        que estoy creando.
        El nombre debe ser lo mas representativo 
        posible

        4) el nombre de las variables y constantes
        son sensibles a mayúsculas y minúsculas.
        conque haya una sola letra distinta, 
        ya son variables diferentes.

    */

        let sl = 25000.00;

        let sueldodeluis = 25000.00;

        let SUELDODELUIS = 25000.00;

        /* camel case => cuando
        tengo que formar una variable
        cuyo contenido por ejemplo es
        la inflacion de marzo. 
        siempre todas las palabras
        comienzan su primera letra
        con MAYÚSUCULAS, excepto la primera
        */

        let sueldoDeLuis = 250000.00;


        let inflacionDeEnero = 3.40;
        let inflacionDeFebrero = 2.70;
        let inflacionDeMarzo = 2.89; // esta es la que me gusta ami. al PROFE

        /* UPPER CASE 
            todas las palabras comienzan 
            con mayusculas en su primera letra.
        */

        let InflacionDeMarzo = 3;

        /*
        tengo muchas y diversas formas
        de mostrar el contenido de variables,
        mezclando variables y texto
        */

        console.log(inflacionDeMarzo);// mostrando la variable como DIOS LA TRAJO AL MUNDO

        console.log("La inflación de marzo es",inflacionDeMarzo);

        console.log(inflacionDeMarzo," esa fue la inflación de marzo");

        /* interpolación de string. Backstics 
            ALT + 96 => salen los Backstics
        */

        /* `` */

        console.log(`Preocupa la inflacion de enero ${inflacionDeEnero} porque en febrero dio ${inflacionDeFebrero}`);



}