
//import vectorContribuyentes from "./Datos/VectorContribuyentes_10000.js";
//import vectorContribuyentes from "./Datos/VectorContribuyentes_25000.js";
import vectorContribuyentes from "./Datos/VectorContribuyentes_50000.js";
//import vectorContribuyentes from "./Datos/VectorContribuyentes_100000.js";
//import vectorContribuyentes from "./Datos/VectorContribuyentes_200000.js";


window.addEventListener("load",()=>{

    /* Recorrido con el ciclo tradicional */

    for(let i = 0;i < vectorContribuyentes.length;i++)
    {
        let elemento = vectorContribuyentes[i];

        console.log(elemento);
       
    }

})


