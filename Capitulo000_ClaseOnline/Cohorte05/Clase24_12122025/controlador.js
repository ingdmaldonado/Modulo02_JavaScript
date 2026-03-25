

window.onload = ()=>{

    console.log(`is running`);

    /* SINCRONICO 
    
        todas las instrucciones corren o se ejecutan
        una detras de la otra. no hay momentos
        de espera, ni hilos de ejecución secundario.

        el hilo de ejecución de tareas sigue su 
        ritmo. sigue sin interruptir la atención
        de otros procesos.
    */

    /* ASINCRONISMO 
    
        sería un conjunto de instrucciones, donde 
        pueden existir una o algunas que tengan
        una demora en la ejecución de ese proceso.
        milisegundos o segundos. pero ese tipo
        de instrucciones están preparadas para
        tener esa demora.
    */ 

    /* 
        API => APLICATION PROGRAMMING INTERFASE     
    */

    

    const idBtnClima = document.querySelector("#idBtnClima");
    const idProvincia = document.querySelector("#idProvincia");

    idBtnClima.onclick = async ()=>{

        console.log("aqui tengo que consultar datos del clima");

        /* Vamos a consultar datos de APIs de TERCEROS. 
        cada link o cada punto al que puedo hacer una consulta
        se llama endPoint */

        /* paso1 - fetch - instrucción asíncrona 
        me devulve datos en crudo. devuelve el request
        en formato crudo. formato string.
        */

        try {

            const response = await fetch(`https://ws.smn.gob.ar/map_items/weather`);

            /* paso 2 - es sincrono */
            console.log(response); // ESTRUCTURA COMPLEJA. 

            /* paso 3 - es asincrono */
            const datos = await response.json();

            /* 

                OBJETOS => JSON
                JSON => OBJETOS

                JSON.stringify();
                JSON.parse();
            */
                   
            /* paso 4 - es sincrono */

            //console.log(datos);

            /* paso 5 - que es datos ?. */

            console.log(`--------- ejemplo 01: forEach --------`);

            datos.forEach((climaCiudad)=>{
                console.log(climaCiudad);
            });

            console.log(`--------- ejemplo 02: forEach (destructuring) --------`);

            datos.forEach(climaCiudad => {

                /* destructuring en el cuerpo de la función */
                const {province,name} = climaCiudad;

                console.log(`Provincia: ${province} - Localidad: ${name}`);

            });

            console.log(`--------- ejemplo 03: forEach (destructuring en parametro de entrada) --------`);


            /* Destructuring en el encabezado del parametro
            de la función */

            // aqui estoy sacando la provincia ingresada en el DOM //
            const provinciaIngresada = idProvincia.value;
            console.log(provinciaIngresada);

            datos.forEach(({province,name})=>{

                if(province.toUpperCase() === provinciaIngresada.toUpperCase())
                {
                    console.log(`Provincia: ${province} - Localidad: ${name}`);
                }
            });


            console.log(`--------- ejemplo 04: forEach (destructuring en parametro de entrada) --------`);

            /* Destructuring en el encabezado de la función
            y estoy además de hacer destructuring. 
            estoy renombrando los atributos para que 
            me queden mejor, mas legibles, mas comprensibles
            a mi entorno. */

            datos.forEach(({province:provincia,name:localidad,weather:clima})=>{

               

                // aqui destructuring en el cuerpo de un atributo que es objeto //
                const {humidity:humedad,description:estadotiempo,temp:temperatura} = clima;

                if(temperatura > 29)
                {
                    console.log(provincia,localidad);
                    console.log(humedad,estadotiempo,temperatura);
                }

            });



            
        } catch (error) {

            console.log(error);
            
        }

       


    };

    

};