/*Ejercicio Nro. 19:
Realizar una arrow function que reciba dos parámetros de entrada. El parámetro 1 será el importe de
compra de un producto, el segundo será el margen de ganancia que se aplicará sobre ese producto, la función
debe retornar el precio de venta que será igual a aplicarle el % de margen de ganancia. La función debe retornar
el precio de venta (sin impuestos).
Nota: Debe devolver un número*/

import { calcularPrecioVenta } from "./modelo19.js";

const guardarEstado = (estadoAplicacion) => {
    let estadoApp = JSON.stringify(estadoAplicacion);
    localStorage.setItem("estadoApp", estadoApp);
};
const recuperarEstado = (idimporteDeCompra, idmargenGanancia) => {
    let datoRecuperado = localStorage.getItem("estadoApp");

    if (datoRecuperado) {

        let estadoObjeto = JSON.parse(datoRecuperado);

        idimporteDeCompra.value = estadoObjeto.importeDeCompra;

        idmargenGanancia.value = estadoObjeto.margenGanancia;
    }
};

window.onload = () => {

    const estadoAplicacion = {

        importeDeCompra: 0,
        margenGanancia: 0,

    }

    const idImporteDeCompra = document.querySelector("#idimporteDeCompra");
    const idMargenGanancia = document.querySelector("#idmargenGanancia");
    const idBotonCalcular = document.querySelector("#idBotonCalcular");
    const idResultado = document.querySelector("#idResultado");

    recuperarEstado();
    idImporteDeCompra.oninput = () => {
        estadoAplicacion.importeDeCompra = Number(idImporteDeCompra.value);
    }
    idMargenGanancia.oninput = () => {
        estadoAplicacion.margenGanancia = Number(idMargenGanancia.value)
    } 

   /* console.log(idResultado, idimporteDeCompra, idmargenGanancia, idBotonCalcular);*/



    idBotonCalcular.onclick = () => {

        let importeCompra = Number(idImporteDeCompra.value);

        let margenGanancia = Number(idMargenGanancia.value);
        
        let resultado = calcularPrecioVenta(importeCompra, margenGanancia);


        idResultado.textContent = `el importe de compra es ${estadoAplicacion.importeDeCompra}, el margen de ganancia es ${estadoAplicacion.margenGanancia} y el precio de venta es ${resultado}`;

    }

    /* verificar idbtnguardar */

     idBtnGuardar.onclick = ()=>{


        console.log(estadoAplicacion);

        let estadoJSON = JSON.stringify(estadoAplicacion);
        console.log(estadoJSON);

}
}
