/*

Ejercicio Nro. 23:
Una empresa de distribución de agua potable "Aguas de Catamarca ECSAPEM" utiliza un esquema de facturación por bloques de consumo, donde el precio por metro cúbico aumenta a medida que el usuario consume más. Este tipo de sistema se aplica con el objetivo de promover el uso responsable del recurso y penalizar el consumo excesivo.
El cálculo del importe base se realiza a partir de los metros cúbicos leídos en el medidor del cliente. Para ello, la empresa define tres bloques de facturación. El primer bloque corresponde a los primeros 50 metros cúbicos, que se facturan a razón de 350 pesos por metro cúbico. El segundo bloque comprende los siguientes 20 metros cúbicos, es decir desde el metro cúbico número 51 hasta el 70, los cuales se facturan a un valor de 555,20 pesos por metro cúbico. Finalmente, todo consumo que supere los 70 metros cúbicos se considera dentro del bloque excedente o de castigo, y se factura a razón de 1.552,20 pesos por metro cúbico.
Cabe aclarar que los clientes cuyo consumo mensual sea inferior a 50 metros cúbicos igualmente abonan un mínimo de 50 metros cúbicos, de modo que ese sea el valor base de cálculo.
La tarea consiste en definir una arrow function llamada calcularImporteAgua que reciba como parámetro el total de metros cúbicos leídos y devuelva el importe base a pagar por el cliente según el esquema tarifario antes descripto.
Consumo (m³)    Cálculo aplicado                                     Importe final ($)
30                  50 × 350,00                                         17.500,00
55                  (50 × 350,00) + (5 × 555,20)                        20.276,00
85                  (50 × 350,00) + (20 × 555,20) + (15 × 1.552,20)     57.214,00
Nota: Debe devolver un número


Ejercicio Nro. 24:
Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios Públicos de Aguas de Catamarca” y a partir de ese importe base calcule y devuelva la Tasa de Subsuelo, que es un importe que corresponde al 3% del importe Base ingresado como parámetro de la arrow function.
Nota: Debe devolver un número


Ejercicio Nro. 25:
Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios Públicos de Aguas de Catamarca” y partir de ese importe base calcule y devuelva la Tasa de Fiscalización ENRE (Ente Regulador de Servicios Públicos) que corresponde al 1,2 % del importe Base ingresado como parámetro de la arrow function.
Nota: Debe devolver un número

*/

import { fncalcularImporteAgua, fncalcularTasaSubsuelo, fncalcularTasaENRE, fnGuardarEstado, fnRecuperarEstado } from "./modelo.js";
window.onload = ()=>{
/* PERTENECE EJERCICIO 23 */
        let MontoTotalFactura = 0;
        const EstadoAplicacion = {MedicionAgua:0,MontoFactura:0};
        const IdConsumoAgua = document.querySelector("#IdConsumoAgua");
        const IdCalcularMontoFactura = document.querySelector("#IdCalcularMontoFactura");
        const IdFacturaAgua = document.querySelector("#IdFacturaAgua")
/* PERTENECE EJERCICIO 23 */     

/* PERTENECE EJERCICIO 24 */
        const IdTasaSubsuelo = document.querySelector("#IdTasaSubsuelo");
        const IdMontoTasaSubsuelo = document.querySelector("#IdMontoTasaSubsuelo")
/* PERTENECE EJERCICIO 24 */       

/* PERTENECE EJERCICIO 25 */
        const IdTasaEnre = document.querySelector("#IdTasaEnre");
        const IdMontoTasaEnre = document.querySelector("#IdMontoTasaEnre")
/* PERTENECE EJERCICIO 25 */     

    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");

/* PERTENECE EJERCICIO 23 */
        IdConsumoAgua.oninput = ()=>{
            EstadoAplicacion.MedicionAgua = Number(IdConsumoAgua.value);
            console.log(EstadoAplicacion);
    
        };
    
        IdCalcularMontoFactura.onclick = ()=>{
            MontoTotalFactura = fncalcularImporteAgua(EstadoAplicacion.MedicionAgua);
            console.log(MontoTotalFactura);
            IdFacturaAgua.textContent = (`El Total de la Factura es: ${MontoTotalFactura}`);
        };
/* PERTENECE EJERCICIO 23 */

/* PERTENECE EJERCICIO 24 */    
        IdTasaSubsuelo.onclick = ()=>{
            EstadoAplicacion.MontoFactura = MontoTotalFactura;
            let MontoTotalSubsuelo = fncalcularTasaSubsuelo(EstadoAplicacion.MontoFactura);
                IdMontoTasaSubsuelo.textContent = (`El Total de Tasa de Subsuelo es: ${MontoTotalSubsuelo}`);
        };
/* PERTENECE EJERCICIO 24 */

/* PERTENECE EJERCICIO 24 */    
        IdTasaEnre.onclick = ()=>{
            EstadoAplicacion.MontoFactura = MontoTotalFactura;
            let MontoTotalTasaEnre = fncalcularTasaENRE(EstadoAplicacion.MontoFactura);
            IdMontoTasaEnre.textContent = (`El Total de Tasa de Fiscalizacion ENRE es: ${MontoTotalTasaEnre}`);
        };
/* PERTENECE EJERCICIO 24 */

    idBtnGuardar.onclick = ()=>{

        fnGuardarEstado(EstadoAplicacion);

        /* (1) convertir a JSON */
        let estadoJSON = JSON.stringify(EstadoAplicacion);
        console.log(estadoJSON);

        localStorage.setItem("estadoApp",estadoJSON);
    };

    /* click del boton recuperar */
    idBtnRecuperar.onclick = ()=>{
        let DatosRecuperados = fnRecuperarEstado(EstadoAplicacion);   
        console.log(DatosRecuperados);   

        IdConsumoAgua.value = DatosRecuperados.MedicionAgua;
        EstadoAplicacion.MedicionAgua = IdConsumoAgua.value
     
    };

};