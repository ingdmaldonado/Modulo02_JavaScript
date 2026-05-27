/*Realizar una arrow function que reciba dos parámetros de entrada. El parámetro 1 será el importe de
compra de un producto, el segundo será el margen de ganancia que se aplicará sobre ese producto, la función
debe retornar el precio de venta que será igual a aplicarle el % de margen de ganancia. La función debe retornar
el precio de venta (sin impuestos).
Nota: Debe devolver un número */

import { calcularPrecioVenta } from "./modelo.js";

//estado de la aplicacion
const estadoAplicacion = {
    importeCompra:"",
    margenGanancia:""
};


window.onload = () => {
//capturar elementos
const idImporteCompra = document.querySelector("#idImporteCompra");
const idMargenGanancia = document.querySelector("#idMargenGanancia");
const idBtnCalcular = document.querySelector("#idBtnCalcular");
const idBtnGuardar = document.querySelector("#idBtnGuardar");
const idBtnRecuperar = document.querySelector("#idBtnRecuperar");
const idResultado = document.querySelector("#idResultado");


idImporteCompra.oninput = ()=>{

    estadoAplicacion.importeCompra =idImporteCompra.value;
    
};

idMargenGanancia.oninput = () => {

    estadoAplicacion.margenGanancia = idMargenGanancia.value;


};

idBtnCalcular.onclick = ()=>{

    let importe = Number(estadoAplicacion.importeCompra);
    let margen = Number(estadoAplicacion.margenGanancia);

    let precioVenta = calcularPrecioVenta(importe,margen);

    idResultado.textContent = "precio de venta:$" +precioVenta;





};

idBtnGuardar.onclick = () =>{

    let datosJSON = JSON.stringify(estadoAplicacion);

    console.log(datosJSON);


    localStorage.setItem(`datosAPP`,datosJSON);

};

idBtnRecuperar.onclick = () =>{


    let datosJSON = localStorage.getItem(`datosAPP`);

    let datosObjeto = JSON.parse(datosJSON);


    console.log(datosJSON);
    console.log(datosObjeto);




};









};