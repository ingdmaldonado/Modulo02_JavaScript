
import {fnRequestApi} from "./modelo.js";


/* Sincronismo: */

/* Asincronismo: la posibilidad
de ejecutar instrucciones en un 
hilo secundario 

    - setTimeOut
    - setInterval
    - addEventListener
    - fetch => promesas

*/


window.onload = ()=>{

    const idReloj = document.querySelector("#idReloj");
    const idParar = document.querySelector("#idParar");
    const idBtnConsultar = document.querySelector("#idBtnConsultar");
    const idBtnConsultar2 = document.querySelector("#idBtnConsultar2");

    console.log("inicio");

    /* setTimeOut es la posibilidad de ejecutar
    codigo con demora */

    console.log("esto es primero");

    setTimeout(()=>{
        console.log("esto es segundo - Somos Argentina y vamos a ganar !!!");
    },7000);

    console.log("esto es tercero");

    /* setInterval */

    const reloj = setInterval(()=>{

        const ahora = new Date();

        idReloj.textContent = ahora.toLocaleString();

    },1000);

    idParar.addEventListener("click",()=>{

        clearInterval(reloj);

    });

    idBtnConsultar.addEventListener("click",async ()=>{

        try {

             const URL = ` http://universities.hipolabs.com/search?country=Brazil`;

            // aqui se conecto al BackEnd a ese EndPoint puntual //
            const datosEnCrudo = await fetch(URL);

            // aqui voy a mostrar esos datos en crudo //
            console.log(datosEnCrudo);

            // convertir esos datos a formato JSON legible por JS //

            const Universidades = await datosEnCrudo.json();

            console.log(Universidades);
            
        } catch (error) {

            console.log(error.errormessage);
            
        }
    });

    /* aqui vamos a implementar el click del 
    boton 2 */

    idBtnConsultar2.addEventListener("click",async ()=>{

        const UniArg = await fnRequestApi("http://universities.hipolabs.com/search?country=Argentina");

        const UniBra = await fnRequestApi("http://universities.hipolabs.com/search?country=Brazil");

        const Usuarios = await fnRequestApi("https://jsonplaceholder.typicode.com/users");

        console.log(Usuarios);

        console.log(UniArg);

        console.log(UniBra);

        const Todas = [...UniArg,...UniBra];

        console.log(Todas);


    });

};

/* 
    SI GANAMOS EL MUNDIAL, ME RAPO !!!.

    Para que se ejecute algo, tiene necesariamente
    que haberse cumplido o terminado otro proceso
    previamente.

    1ro) le mando un JSON con los datos de la persona
    a cobrar y el importe

    2do) pagar => mi proceso, mi sistema esta esperando
    la respuesta. 

    3ro) Si el pago fue efectivo. tengo que ir
    a la base de datos y marcar esas obligaciones, cuotas,
    como pagado.

    4to) preparo el envio.

*/