
/* ECM JAVASCRIPT 2015 */

import ejemplo01_valoranonimo from "./ejemplo01_valoranonimo.js";

import miNombreQueYoquiero from "./ejemplo01_valoranonimo.js";


import ejemplo02_vectoranonimo from "./ejemplo02_vectoranonimo.js";
import ejemplo03_funcionCuadrado from "./ejemplo03_funcionCuadrado.js";
import ejemplo04_funcionClasica from "./ejemplo04_funcionClasica.js";
import ejemplo04_objetoLiteral from "./ejemplo04_objetoLiteral.js";

import {Cubo,miNombre} from "./ejemplo05_bibliotecaMixta.js";
import {Superficie} from "./ejemplo05_bibliotecaMixta.js"

window.addEventListener("load",()=>
    {
        console.log("andando");

        console.log(ejemplo01_valoranonimo);

        console.log(ejemplo02_vectoranonimo);

        let resultado = ejemplo03_funcionCuadrado(2);
        console.log(resultado);

        let resultado2 = ejemplo04_funcionClasica(3);
        console.log(resultado2);

        console.log(ejemplo04_objetoLiteral);


        console.log(miNombre);

        let resultado3 = Cubo(7);
        console.log(resultado3);

        let objeto1 = new Superficie(5,10);
        let resultado4 = objeto1.getSuperficie();

        console.log(miNombreQueYoquiero);


    })