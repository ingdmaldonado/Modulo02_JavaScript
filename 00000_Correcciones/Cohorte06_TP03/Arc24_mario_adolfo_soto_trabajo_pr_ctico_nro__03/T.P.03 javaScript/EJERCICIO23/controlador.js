import {calcularGastos, fnTasaDeSubsuelo, fnTasaFiscalizacion} from "./modelo.js";

/*Una empresa de distribución de agua potable "Aguas de Catamarca ECSAPEM" utiliza un esquema de
facturación por bloques de consumo, donde el precio por metro cúbico aumenta a medida que el usuario consume
más. Este tipo de sistema se aplica con el objetivo de promover el uso responsable del recurso y penalizar el
consumo excesivo.
El cálculo del importe base se realiza a partir de los metros cúbicos leídos en el medidor del cliente. Para ello, la empresa define tres bloques de facturación. 

1)  El primer bloque corresponde a los primeros 50 metros cúbicos, que se facturan a razón de 350 pesos por metro cúbico. 

2)  El segundo bloque comprende los siguientes 20 metros cúbicos, es decir desde el metro cúbico número 51 hasta el 70, los cuales se facturan a un valor de 555,20 pesos por metro cúbico. 

3)  Finalmente, todo consumo que supere los 70 metros cúbicos se considera dentro del
bloque excedente o de castigo, y se factura a razón de 1.552,20 pesos por metro cúbico.

Cabe aclarar que los clientes cuyo consumo mensual sea inferior a 50 metros cúbicos igualmente abonan
un mínimo de 50 metros cúbicos, de modo que ese sea el valor base de cálculo.

La tarea consiste en definir una arrow function llamada calcularImporteAgua que reciba como parámetro
el total de metros cúbicos leídos y devuelva el importe base a pagar por el cliente según el esquema tarifario antes descripto */



window.onload = ()=>{
    console.log(`la pagina esta cargada XD`);
    const estadoAplicacion = {metroscubicos:0,
                                
    }
    const idMetrosCubicos = document.querySelector("#idMetrosCubicos");
    const btnCalcular = document.querySelector("#btnCalcular");
    const resultado = document.querySelector("#resultado");
    const btnGuardar = document.querySelector("#btnGuardar");
    const btnRecuperar = document.querySelector("#btnRecuperar");

    //input
    idMetrosCubicos.oninput = ()=>{
        estadoAplicacion.metroscubicos = Number(idMetrosCubicos.value);
        console.log(estadoAplicacion);

    };
    //calculo
    btnCalcular.onclick = ()=>{
        let calculo  = calcularGastos(estadoAplicacion.metroscubicos);
        let tasaSubsuelo = fnTasaDeSubsuelo(calculo);
        let tasaFiscalizacion = fnTasaFiscalizacion(calculo);
        resultado.textContent = `el importe a pagar es ${calculo.toFixed(2)} la tasa de subsuelo es ${tasaSubsuelo} la tasa de fiscalizacion es ${tasaFiscalizacion}` 

    };

    btnGuardar.onclick = ()=>{
        let datoJSON = JSON.stringify(estadoAplicacion);
        console.log(datoJSON);
        localStorage.setItem("misDatos",datoJSON); 
    };
    
    btnRecuperar.onclick = ()=>{
        let datosJASON = localStorage.getItem("misDatos");
        if(datosJASON)
        {
            console.log(datosJASON);
            let objeto = JSON.parse(datosJASON);
            console.log(objeto);
            idMetrosCubicos.value= objeto.metroscubicos

        }
    };
    
    

};