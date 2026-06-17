

window.onload = ()=>{

    /* cada input se tiene que encagar de
    actualizar su valor en el estado de la aplicación */

    const estadoAplicacion = {
        cuit:0,
        nombre:"",
        provincia:0,
    }

    console.log(`la aplicación está cargada y lista`);

    const idCuit = document.querySelector("#idCuit");
    const idNombre = document.querySelector("#idNombre");
    const idProvincia = document.querySelector("#idProvincia");
    const idBtnAceptar = document.querySelector("#idBtnAceptar");
    const idBtnAceptarV2 = document.querySelector("#idBtnAceptarV2");

    console.log(idCuit,idNombre,idProvincia,idBtnAceptar);

    /* aqui cada input se va a encargar de 
    notificar al estado de la aplicación 
    el valor que tiene su elemento */

    idCuit.oninput = ()=>{
        estadoAplicacion.cuit = idCuit.value;
        console.log(estadoAplicacion);
    }

    idNombre.oninput = ()=>{
        estadoAplicacion.nombre = idNombre.value;
        console.log(estadoAplicacion);
    }

    idProvincia.onchange = ()=> {
        estadoAplicacion.provincia = idProvincia.value;
        console.log(estadoAplicacion);
    };


    // delegación de eventos //
    idBtnAceptar.onclick = ()=>{

        // vamos a obtener los valores que tienen los input //

        let cuit = idCuit.value;
        let nombre = idNombre.value;
        let provincia = Number(idProvincia.value);

        /* aqui estoy construyendo un objeto literal
        a partir de variables o constantes => CONSTRUCTURING */

        const datosPersona = {cuit,nombre,provincia};

        // aqui los estoy mostrando como valores sueltos //
        console.log(cuit,nombre,provincia);

        // aqui los estoy mostrando como un objeto javascript //
        console.log(datosPersona);

        // aqui converti el objeto javaScript a formato JSON */
        let datosJSON = JSON.stringify(datosPersona);
        console.log(datosJSON);

        /* aqui ya estoy en condiciones de enviar estos datos al Back End */

            // fetch()

            /* 
                - asincronismo
                - promesas
                - fetch            
            */
       
       console.log(`me estan haciendo click`);

    };


    /* No voy a acceder a los input a saber que valor tienen
    que sean ellos, los que informan estado de la aplicación
    que valor tienen 
    
    estadoAplicacion => 
        sería un objeto {} que contiene
        atributos y cada atributo tendrá un valor de un input

        estadoAplicacion = {
            cuit:
            nombre:
            provincia:
        }
    
    */

    idBtnAceptarV2.onclick = ()=>{

        /* el boton accede al estado de la aplicación y obtiene todos
        los valores cargados  y los convierto a JSON */
        let datosEnFormatoJSON = JSON.stringify(estadoAplicacion);

        /* los muestro por consola */
        console.log(datosEnFormatoJSON);

        /* 
            FRONT END => JAVASCRIPT FRONT

                estos dos componentes se envian datos en formato JSON

            BACK END => JAVASCRIPT BACKEND 

                PHP
                C#
                JAVA
                RUBY
                JAVASCRIPT
                PHYTON
        */

        /* ENVIAR ESOS DATOS AL BACKEND EN FORMATO JSON */

    };

};