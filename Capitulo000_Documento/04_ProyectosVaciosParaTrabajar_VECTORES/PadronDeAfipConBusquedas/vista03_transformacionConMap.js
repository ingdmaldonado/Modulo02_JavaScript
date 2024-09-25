

//import vectorContribuyentes from "./Datos/VectorContribuyentes_10000.js";
//import vectorContribuyentes from "./Datos/VectorContribuyentes_25000.js";
import vectorContribuyentes from "./Datos/VectorContribuyentes_50000.js";
//import vectorContribuyentes from "./Datos/VectorContribuyentes_100000.js";
//import vectorContribuyentes from "./Datos/VectorContribuyentes_200000.js";


window.addEventListener("load",()=>{

    /* Transformacion de TODOS LOS ELEMENTOS DEL VECTOR con forEach */

    let vectorResultante = vectorContribuyentes.map((element,indice)=>
        {

            return `<h1>${element.PadronAFIPCUIT} - ${element.PadronAFIPDenominacion}</h1>`;

        })

   // console.log(vectorResultante);

    /* Transformación de TODOS LOS ELEMENTOS DEL VECTOR haciendo corta la
    arrow function pasada como parámetro */

    let vectorResultante2 = vectorContribuyentes.map(element => `<h1>${element.PadronAFIPCUIT} - ${element.PadronAFIPDenominacion.trim()}</h1>`);

    console.log(vectorResultante2);



    

})
