
import {fnClickEnBotonRecuperarPaises,fnClickEnBotonSpreadOperator} from "./controlador/funcionesdelcontrolador.js";


/* cuantas veces se carga el load en la pagina ? */

/* el segundo parametro que recibe load como se llama
generalmente ?. función callBack */



window.addEventListener("load",()=>
{
    const idBtnRecuperarPaises = document.querySelector("#idBtnRecuperarPaises");

    const idBtnPunto3 = document.querySelector("#idBtnPunto3");

    const idAlmacenamientoBrowser = document.querySelector("#idAlmacenamientoBrowser");

    console.log(idBtnRecuperarPaises);

    /* porque uso addEventListener ?. en lugar de famoso onclick 
    
        es para que se puedan delegar con el mismo evento
        varias funciones

        click => funcion1
        click => funcion2

        El segundo parametro como le decimos. una funcion
        callBack

        delegacion de eventos

        click => funcion

    */


    /* funciones callBack que tienen nombre
    y hay funciones callBack que no tienen nombre => anónimas 
    */

    idBtnRecuperarPaises.addEventListener("click",async ()=>{

        let salida = await fnClickEnBotonRecuperarPaises("https://restcountries.com/v3.1/region/oceania");
    


        if(salida.resultado) // tiene un atributo resultado (true o false)
        {
            console.log(salida.datos);// mostrando aqui el vector de Paises

            let Paises = salida.datos;


            /*************** REPASAR CONCEPTOS DE DESTRUCTURING *************/

            // aqui estaria haciendo un recorrido y mostrando todos los paises //
            Paises.forEach(pais => console.log(pais));

            /* aqui voy a hacer un recorrido haciendo
            destructuring 
            
                Nombre → name.common
                Capital → primer elemento de capital (si existe)
                Población → population
                Bandera → flags.png (imagen)

            */

            /* Punto 2 - INCISO A  => destructuring  */

            console.log("----------- PUNTO 2.A ------------")

            Paises.forEach(pais => {

                // aqui hice destructuring //
                const {name,capital,population,flags} = pais;

                // aqui lo estoy haciendo es mostrando por consola */
                console.log(pais.name.common);
                console.log(pais.name.official);
                console.log(pais.population);
                console.log(pais.flags.png);
                console.log(pais.flags.svg);

                // puedo utilizar esas constantes por separado //

                console.log(name);
                console.log(capital);
                console.log(population);
                console.log(flags);


            });

            
            /* Punto 2 - INCISO B  => destructuring  */

            console.log("----------- PUNTO 2.B ------------")

            Paises.forEach(pais => 
                {
                    // aqui hice destructuring //
                    const {name:nombre,capital:cap,population:poblacion,flags:banderas} = pais;

                    console.log(nombre);
                    console.log(cap);
                    console.log(poblacion);
                    console.log(banderas);

                })

            console.log("----------- PUNTO 2.C ------------");

            /*
            Paises.forEach((pais,index)=>{

                console.log(pais);
                console.log(index);

            })*/

            Paises.forEach(({name:nombre,capital:cap,population:poblacion,flags:banderas})=>{
                
                console.log(nombre);
                console.log(cap);
                console.log(poblacion);
                console.log(banderas);

            })
            
            console.log("----------- PUNTO 2.D ------------");

            const Personas = [
                    {
                        nombre:"ANTONELLA",
                        edad:32,
                        domicilio:"NEUQUEN"
                    },
                    {
                        nombre:"GUILLERMO",
                        edad:25,
                    },
                    {
                        nombre:"LEANDRO",
                        edad:22,
                    },
                    {
                        nombre:"MESSI LIONEL",
                        domicilio:"ROSARIO",
                        
                    }
            ];

            Personas.forEach(persona => 
                {
                    // sin destructuring //

                    /*
                    console.log(persona.nombre);
                    console.log(persona.edad);
                    console.log(persona.domicilio);
                    */

                    const {nombre,edad=0,domicilio = "sin domicilio"} = persona;

                    console.log(nombre,edad,domicilio);

                })
        }
        else
        {
            alert(`Sr. Usuario se produjo un error ${salida.estado}`);
        }
    });

   
    idBtnPunto3.addEventListener("click",async ()=>{

        console.log("aqui tengo que hacer el punto 3");

        /* exista una funcion en el controlador. que haga
        lo que me pide el punto 3 */

        let resultados = await fnClickEnBotonSpreadOperator("https://restcountries.com/v3.1/region/americas","https://restcountries.com/v3.1/region/europe");

        /* transformar utilizando map => a la fusion de los paises de dos CONTINENTES */

        resultados.forEach(pais => {

                // aqui hice destructuring y renombrando los atributos //
                const {name:nombre,capital:cap,population:poblacion,flags:banderas} = pais;

               /* 
                    name => objeto {}
                    capital => vector []
                    population => valor
                    flags => {png,svg,alt}
               
               */

               /* simplificando y normalizando estos atributos */

                let nombrePais = nombre.common; 
                let capitalPais = cap[0];
                let poblacionPais = poblacion;
                let banderaPais = banderas.png;

                /* mostrando los valores simplificados */
                //console.log(nombrePais,capitalPais,poblacionPais,banderaPais);

                let paisSimplificado = {nombrePais,capitalPais,poblacionPais,banderaPais};

                //console.log(paisSimplificado);

            }    
        );

        
        /* Punto 3.F => Obtener la Fusión de ambos CONTINENTES
        y a partir de el, obtener un vector de objetos más
        simplificados */

        const paisesSimplificados = resultados.map(pais => {

            // destructuring de los atributos que necesito => destructuring con renombre de atributos
            const {name:nombre,capital:cap,population:poblacion,flags:banderas} = pais;

            // a partir del destructuring anterior. quedarme con los valores puntuales que necesito

            let nombrePais = nombre.common; 
            let capitalPais = cap[0];
            let poblacionPais = poblacion;
            let banderaPais = banderas.png;

            // me voy crear un objeto a partir de esos valores individuales que saque del punto anterior

            let paisSimplificado = {nombrePais,capitalPais,poblacionPais,banderaPais};

            return paisSimplificado;

        })
     
        console.log(paisesSimplificados);

        localStorage.setItem("vectorSimplificado",JSON.stringify(paisesSimplificados));


    });


    idAlmacenamientoBrowser.addEventListener("click",()=>
        {
            console.log("aqui tengo que ver almacenamiento temporal");


            /* registrar un par de clave/valor */
          // localStorage.setItem("nombreusuario","dmaldonado");
          // localStorage.setItem("clave","123");


          const productoElegido = {productoid:2729828282,productoNombre:"CORDERO PATAGONICO",productoPrecio:22500};
          
          let usuario = localStorage.getItem("nombreusuario");
          let clave = localStorage.getItem("clave");


          /* cuando tengo un objeto literal. vector. cualquier
          estructura de datos en javaScript => convertir a formato
          json y luego. ser almacenado en el navegador */

        //  console.log(productoElegido); // aqui esta como objeto
        //  console.log(JSON.stringify(productoElegido)); // aqui esta como String pero en Formato JSON


          /* voy a almacenar el producto en formato JSON en el
            localStorage */

          //  localStorage.setItem("productoguardado",JSON.stringify(productoElegido));


            const productoGuardado = JSON.parse(localStorage.getItem("productoguardado"));

            console.log(usuario,clave);

            console.log(productoGuardado);


            const vectorGuardado = JSON.parse(localStorage.getItem("vectorSimplificado"));

            console.log(vectorGuardado);




        })


})

/*******

    PERSISTENCIA DE DATOS EN EL NAVEGADOR

        - COOKIES => forma de almacenamiento temporal en el navegador.

        - localStorage => almacenamiento en el navegador pero no se distingue entre sesiones
            almacenar datos en el navegador, sin diferenciar entre sesiones
            y ademas. quedan persistentes hasta la proxima ejecucion de la aplicación
            o hasta que alguien elimine esos datos.

        - sessionStorage => almacenar datos diferenciando las sesiones
        y ademas. al terminar la sesion esos datos desaparecen 

        - indexDB => Sistema de Bases de datos relacionales en el navegador
        del cliente. 



  
 ******/

