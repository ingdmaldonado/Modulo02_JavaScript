/* Ejercicio Nro. 25:
Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios
Públicos de Aguas de Catamarca” y partir de ese importe base calcule y devuelva la Tasa de Fiscalización ENRE
(Ente Regulador de Servicios Públicos) que corresponde al 1,2 % del importe Base ingresado como parámetro de
la arrow function.
Nota: Debe devolver un número */

import  {calcularTasaFiscalizacion} from "./modelo25.js";

window.onload = ()=> {
    console.log (`Aplicacion corriendo`);

    const estadoAplicacion = {
        importeBase: 0,
        tasaFiscalizacion: 0,

    };

    const IdImporteBase = document.querySelector ("#IdImporteBase");
    const IdBtnCalcular = document.querySelector ("#IdBtnCalcular");
    const IdResultado = document.querySelector ("#IdResultado");
      const IdBtnGuardar = document.querySelector ("#IdBtnGuardar");
    const IdBtnRecuperar = document.querySelector ("#IdBtnRecuperar");

    IdImporteBase.oninput = () => {
        estadoAplicacion.importeBase = Number (IdImporteBase.value);
    };

    IdBtnCalcular.onclick = ()=> {
        const resultado= calcularTasaFiscalizacion (estadoAplicacion.importeBase);

        estadoAplicacion.tasaFiscalizacion = resultado;
        console.log (`Resultado de tasa de Fiscalizacion ${resultado.toFixed(2)}`);

        IdResultado.textContent = `La tasa  fiscalizacion es ${resultado.toFixed(2)}`;
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
        estadoAplicacion.tasaFiscalizacion = estadoObjeto.tasaFiscalizacion;

        console.log(estadoObjeto);
        };

    
};


};