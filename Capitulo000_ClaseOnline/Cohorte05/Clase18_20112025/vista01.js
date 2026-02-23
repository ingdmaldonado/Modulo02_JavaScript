
import {lecturaMedidores} from "./modulo.js";

import {calcularImporteBaseAgua} from "./modulo.js";

import { sueldosOctubre } from "./modulo.js";

/* el metodo map en vectores es
una de las cosas más importantes que
tiene javascript. porque permite
aplicar sobre cada elemento del vector
una función de transformación y 
devolver un resultado */




window.onload = ()=>
    {
        console.log(`aplicación is running`);

        /* 1 mostrando de forma completa el vector
        con la lectura d elos medidosres */

        console.log(lecturaMedidores);

        /* (02) => recorrermos con forEach */

        lecturaMedidores.forEach((elemento,indice)=>{

            console.log(`Los metros cubicos consumidos son ${elemento} y esta en la posición ${indice}`);

        });

        /* (03) => aplicar map, sobre un vector
        aplicando una función de TRANSFORMACIÓN */

        console.log("------------------------");


        //lecturaMedidores.map(()=>{});

        const facturacionOctubre2025 = lecturaMedidores.map((elemento,indice)=>{

            console.log(elemento);

            let importeBase = calcularImporteBaseAgua(elemento);

            console.log(importeBase);

            return importeBase;

        });

        console.log(facturacionOctubre2025);

        console.log("-----------------------");

      


        /* map recibe una funcion callBack generalmente
        siempre expresada como una función flecha. 
        esa función flecha recibe dos parametros
        uno es el elemento 
        segundo es el indice

            (elemento,indice)=>{return algo;}

            en el cuerpo si o si tiene que llevar un return 

        */

        const sueldosNoviembre = sueldosOctubre.map((element,indice)=>{

            const sueldoNuevo = element + (element * 5)/100;

            return sueldoNuevo;

        });

        console.log(sueldosOctubre);
        console.log(sueldosNoviembre);


    }