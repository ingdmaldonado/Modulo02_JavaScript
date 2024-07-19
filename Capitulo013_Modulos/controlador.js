

/*************************************************************/
/* IMPORTACIONES POR DEFAULT DE ELEMEMTOS ANÓNIMOS           */
/*************************************************************/

/* Ejemplo 01 - importación de valor primitivo por nombre */
import ejemplo01_versionsistema from "./ejemplo01_versionsistema.js";
import versionsistema from "./ejemplo01_versionsistema.js";

/* Ejemplo 02 - importación de valor primitivo como vector */
import ejemplo02_provincias from "./ejemplo02_provincias.js";
import provincias from "./ejemplo02_provincias.js";

/* Ejemplo 03 - importación de una función anónima POR DEFECTO */
import ejemplo03_cuadrado from "./ejemplo03_cuadrado.js";
import cuadrado from "./ejemplo03_cuadrado.js"

/* Ejemplo 04 - imortación de una función CUBO */
import ejemplo04_funcioncubo from "./ejemplo04_funcioncubo.js";
import cubo from "./ejemplo04_funcioncubo.js";

/* Ejemplo 05 - importación de una clase anónima */
import ejemplo05_clasesumaanonima from "./ejemplo05_clasesumaanonima.js";
import Suma from "./ejemplo05_clasesumaanonima.js";

/* Ejemplo 06 - importación anónima de un objeto */
import ejemplo06_objetoanonimo from "./ejemplo06_objetoanonimo.js";
import version_sistema from "./ejemplo06_objetoanonimo.js";

/*Ejemplo 07 - importación de un boton anonimo */
import boton1 from "./ejemplo07_boton.js";

/*Ejemplo 08 - importación de un fragmento anónimo */
import fragmento from "./ejemplo08_crearunfragmento.js";


/*************************************************************/
/* IMPORTACIONES ELEMENTOS CON NOMBRE                        */
/*************************************************************/

import {Club,funcionClasica,funcionFlecha} from "./ejemplo09_exportaciones_nombradas.js";

import {Superficie} from "./ejemplo09_exportaciones_nombradas.js";


/*************************************************************/
/* IMPORTACIONES ELEMENTOS POR DEFECTO Y CON NOMBRE          */
/*************************************************************/

import {fnFlecha1,fnClasica2} from "./ejemplo10_bibliotecamixta.js"
import fnFuncionPorDefecto from "./ejemplo10_bibliotecamixta.js";

/**************************************************************/
/* IMPORTACIONES CON ALIAS                                    */
/**************************************************************/

//import { funcion1 as nombre1, funcion2 as nombre2 } from './archivo.js';

import * as Funciones from "./ejemplo11_bibliotecamixta2.js";

window.onload = function()
{

    /********************************************************************/
    /*** EJEMPLOS RELACIONADOS A IMPORTACIÓN DE COMPONENTES ANÓNIMOS  ***/
    /********************************************************************/

        /* muestra del ejemplo 01 */
        console.log(ejemplo01_versionsistema);
        console.log(versionsistema);

        /* muestra del ejemplo 02*/
        console.log(ejemplo02_provincias);
        console.log(provincias);

        /* muestra del ejemplo 03*/
        console.log(ejemplo03_cuadrado(10));
        console.log(cuadrado(7));

        /* muestra del ejemplo 04*/
        console.log(ejemplo04_funcioncubo(10));
        console.log(cubo(3));

        /* muestra del ejemplo 05*/
        let objeto1 = new ejemplo05_clasesumaanonima(10,20);
        let objeto2 = new Suma(25,30);

        console.log(objeto1.getSuma());
        console.log(objeto2.getSuma());

        /* muestra del ejemplo 06*/
        console.log(ejemplo06_objetoanonimo);
        console.log(version_sistema);

        /* muestra del ejemplo 07 - crear botones a partir de una biblioteca */
        const idDivPruebas = document.querySelector("#idDivPruebas");
        console.log(idDivPruebas);
        idDivPruebas.appendChild(boton1());

        /* muestra del ejemplo 08 - crear un fragmento a partir de una biblioteca */

        const idDivPruebas2 = document.querySelector("#idDivPruebas2");
        console.log(idDivPruebas2);
        idDivPruebas2.appendChild(fragmento());


    /**********************************************************************/
    /*** EJEMPLOS RELACIONADOS A IMPORTACIÓN DE COMPONENTES CON NOMBRE  ***/
    /**********************************************************************/
        funcionClasica();
        funcionFlecha();
        console.log(Club);

        let objetoSuperficie1 = new Superficie(10,20);

        console.log(objetoSuperficie1.getSuperficie());

    /**********************************************************************/
    /*** EJEMPLOS RELACIONADOS A MODULOS MIXTOS                         ***/
    /**********************************************************************/

        fnFlecha1();
        fnClasica2();
        fnFuncionPorDefecto();

    /**********************************************************************/
    /*** EJEMPLOS RELACIONADOS A IMPORTACIÓN COMPLETA                    ***/
    /**********************************************************************/

        Funciones.funcionSaludar("DANIEL");

        Funciones.funcionDespedir("DANIEL");

        Funciones.default("DANIEL");

}


/* 
    LO QUE ME ESTA FALTANDO 

    Sin embargo, hay algunos otros temas relacionados con ESM que podrías considerar explorar:

    Ciclo de Vida de los Módulos: Aunque no es un concepto directamente 
    relacionado con ESM, entender cómo se cargan y ejecutan los 
    módulos puede ser útil. Esto incluye comprender el 
    proceso de carga de módulos asíncronos y cómo se manejan 
    las dependencias circulares.

    Importación Dinámica: La importación dinámica te permite cargar
    módulos de forma asíncrona en tiempo de ejecución. 
    Esto puede ser útil para cargar módulos bajo demanda o 
    para implementar rutas de código asíncronas.

    Reexportación de Módulos: Puedes reexportar módulos 
    enteros o partes de ellos desde otro módulo. 
    Esto puede ayudar a simplificar la estructura de tu proyecto y 
    facilitar la importación de varios módulos desde un único punto de acceso.

    Módulos en Entornos de Backend (Node.js): Si planeas utilizar 
    ESM en entornos de backend, como Node.js, también es importante entender 
    cómo funcionan los módulos en ese contexto, 
    incluyendo las diferencias entre ESM y CommonJS.

    Estos son solo algunos temas adicionales que podrías explorar 
    para ampliar tu comprensión de los ECMAScript Modules. 
    Si sientes que ya tienes un buen dominio de los temas que 
    has cubierto y estás listo para profundizar más, podrías considerar 
    explorar alguno de estos temas adicionales.


*/