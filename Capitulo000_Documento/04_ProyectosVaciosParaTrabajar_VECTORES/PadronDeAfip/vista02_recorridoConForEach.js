

//import vectorContribuyentes from "./Datos/VectorContribuyentes_10000.js";
//import vectorContribuyentes from "./Datos/VectorContribuyentes_25000.js";
import vectorContribuyentes from "./Datos/VectorContribuyentes_50000.js";
//import vectorContribuyentes from "./Datos/VectorContribuyentes_100000.js";
//import vectorContribuyentes from "./Datos/VectorContribuyentes_200000.js";


window.addEventListener("load",()=>{

    /* Recorrido con el ciclo tradicional */

    vectorContribuyentes.forEach((element,indice)=>{

        console.log(indice);
        console.log(element);
        console.log(element.PadronAFIPCUIT);
        console.log(element.PadronAFIPDenominacion);

    })

})
