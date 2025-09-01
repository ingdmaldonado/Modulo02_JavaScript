
window.addEventListener("load",()=>{

    console.log("running");

    const idBtnAsincronismo = document.querySelector("#idBtnAsincronismo");

    const idBtnFetch = document.querySelector("#idBtnFetch");

    idBtnAsincronismo.addEventListener("click",()=>{

        /* 
            ASINCRONISMO 

                - setTimeOut
                - setInterval
                - APIS => EndPoint
                - promesas => async && await
        */

        /******** setTimeOut *******/

        console.log("paso 1");

        console.log("paso 2");

        /* esta es una función propia de js 
        recibe dos parametros

            parametro1 es una arrow function => funcion callBack

            parametro2 son milisegundos

        */
        setTimeout(()=>{

            console.log(`paso 3`);

        },3000);

        console.log(`paso 4`);


        /*********** setInterval  *********/

        procesoAsincrono = setInterval(()=>{

            console.log("esto se repetira cada 2 segundos");

        },2000)






    });

    /**************** PROMESAS con async & await **************/

    /* 
    
        1er. Paso => Levanta el archivo, lo procesa y lo parsea

        2do. Leer uno x uno => y lo inserta en la base de datos
    
        El resultado de una cosa => condiciona otra.

    */

     /* 
     
     
        - Posibles Demoras
	    - conectividad
	    - uso intensivo de la API por
	        parte de otros clientes

    - Posibles Errores
	    - sin paquete de datos
	    - sin internet pc
	    - sistema banco caido
	    - no renovaron los certificados (htpps)
	    - el BackEnd (propio) caido
	    - el BackEnd (tercero) caido
     */


    idBtnFetch.addEventListener("click",async ()=>{

        console.log("aqui vamos a consultar una API");

        /* setInterval , setTimeOut 
        
        fetch sirve para hacer consultas a APIs

            APIs => APLICATION PROGRAMMING INTERFASE

                - clientes

                    recuperarClientes => END POINT
                    agregarClientes => END POINT
                    modificarClientes
                    eliminarClientes
        
        */

        try 
        {

            // primer paso => request al endPoint de la API UNIVERSIDADES //
            const response = await fetch("http://universities.hipolabs.com/");

            console.log(response.ok);

            // segundo paso => converti los datos de la respuesta anterior a JSON //
            const resultado = await response.json();

            console.log(resultado);

            resultado.forEach(element => 
                {
                    if(element["state-province"]==='Córdoba')
                    {
                        console.log(`Universidad: ${element.name} - Pais: ${element.country} - Provincia: ${element["state-province"]}`);
                    }
              
                })
                
        } catch (error) // siempre y cuando se produzca un error en el bloque try
        {
            console.log(`se produjo un error - ${error}`);            
        }

        

        /* setTimeOut
            setInterval
            fetch => promesa doble 
                
                paso1 => request y obtiene el response

                paso2 => convertimos el response => JSON


        */

    })

})