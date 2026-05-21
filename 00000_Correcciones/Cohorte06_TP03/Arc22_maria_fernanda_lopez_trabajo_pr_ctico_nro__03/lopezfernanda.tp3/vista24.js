/* Ejercicio Nro. 24:
Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios
Públicos de Aguas de Catamarca” y a partir de ese importe base calcule y devuelva la Tasa de Subsuelo, que es un importe que corresponde al 3% del importe Base ingresado como parámetro de la arrow function.
Nota: Debe devolver un número  */

import  {calcularTasaSubsuelo} from "./modelo24.js";

window.onload = ()=>{
    console.log (`Aplicacion corriendo`);

    const estadoAplicacion={
    importeBase:0,
    tasaSubsuelo:0,

    };

    const IdImporteBase = document.querySelector ("#IdImporteBase");
    const IdBtnCalcular = document.querySelector ("#IdBtnCalcular");
    const IdResultado = document.querySelector ("#IdResultado");
    const IdBtnGuardar = document.querySelector ("#IdBtnGuardar");
    const IdBtnRecuperar = document.querySelector ("#IdBtnRecuperar");

    IdImporteBase.oninput = ()=>{
        estadoAplicacion.importeBase = Number (IdImporteBase.value);
    };

    IdBtnCalcular.onclick = ()=>{
        
        const resultado = calcularTasaSubsuelo (estadoAplicacion.importeBase);
        estadoAplicacion.tasaSubsuelo = resultado; 
        console.log (`Resultado de tasa subsuelo ${resultado}`);

        IdResultado.textContent = `La Tasa de subsuelo es ${resultado}`;
    };

     IdBtnGuardar.onclick = ()=>{
        console.log (estadoAplicacion);
        let estadoJSON= JSON.stringify (estadoAplicacion);
        console.log (estadoJSON);
        localStorage.setItem ("estadoApp", estadoJSON);
    };

        IdBtnRecuperar.onclick = ()=>{
        let estadoGuardado= localStorage.getItem ("estadoApp");

        if (estadoGuardado)
        {
        let estadoObjeto= JSON.parse (estadoGuardado);
        estadoAplicacion.importeBase = estadoObjeto.importeBase;
        estadoAplicacion.tasaSubsuelo = estadoObjeto.tasaSubsuelo;

        console.log(estadoObjeto);
        };

    
};
};