/* Ejercicio 19 */


const estadoAplicacion = {
    importeCompra: 0,
    margen: 0,
}



import { precioVenta } from "../modelo.js";

console.log(`El precio de venta es: ${precioVenta(50000,60)} 
#########################################################`);


window.onload = () => {
    console.log(`Funciona!`);
    const idImporteCompra = document.querySelector("#idImporteCompra");
    const idMargen = document.querySelector("#idMargen");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");


idImporteCompra.oninput = () => {
    estadoAplicacion.importeCompra = Number(idImporteCompra.value);
    console.log(` estadoAplicacion.importeCompra= ${estadoAplicacion.importeCompra}`);
}
idMargen.oninput = () => {
    estadoAplicacion.margen = Number(idMargen.value);
    console.log(`estadoAplicacion.margen= ${estadoAplicacion.margen}`);
}


const fnGuardarEstado = () => {
    //convierte
    let estadoApp = JSON.stringify(estadoAplicacion);
    //persiste en el navegador
    localStorage.setItem("estadoApp", estadoApp); //estadoApp està en formato JSON
}

const fnRecuperarEstado = () => {
    let datoRecuperado = localStorage.getItem("estadoApp");
    if (datoRecuperado){
        let estadoOBJETO = JSON.parse(datoRecuperado);
        console.log(datoRecuperado);
        console.log(estadoOBJETO);
        //aquí hay que cargar los inputs con los datos
        idImporteCompra.value = estadoOBJETO.importeCompra;
        idMargen.value = estadoOBJETO.margen;
    }
}

idBtnCalcular.onclick = () =>{
    //let importeCompra = Number(idImporteCompra.value);
    let importeCompra = estadoAplicacion.importeCompra;
    //let margen = Number(idMargen.value);
    let margen = estadoAplicacion.margen;
    console.log(importeCompra, margen);
    idResultado.textContent = `El resultado es: ${precioVenta(importeCompra,margen)}`;
    console.log(`El resultado es: ${precioVenta(importeCompra,margen)}
    ###########################################################
    `);
}

idBtnGuardar.onclick = () => {
    fnGuardarEstado();
    console.log(estadoAplicacion);
    /* Convertir a JSON */
   /* let estadoJSON = JSON.stringify(estadoAplicacion);
    console.log(estadoJSON);*/
}

idBtnRecuperar.onclick = () => {
    fnRecuperarEstado();
}

}




















/* Ejercicio 22 


import { impuestoBebidas } from "./modelo.js";

console.log(`El impuesto es de Bebida es de ${impuestoBebidas(100,1)}`);



*/



/* Ejercicio 23 



import { calcularImporteAgua } from "./modelo.js";
console.log(`El importe del agua es:  ${calcularImporteAgua(85)}`)


*/

