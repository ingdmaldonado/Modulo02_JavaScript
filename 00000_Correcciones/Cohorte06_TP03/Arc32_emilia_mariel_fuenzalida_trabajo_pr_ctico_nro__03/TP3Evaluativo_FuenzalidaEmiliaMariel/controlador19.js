import { fnCalculoPrecioVenta } from "./modelo.js";
import { fnGuardar, fnRecuperar } from "./storage.js";

/*
----------Ejercicio Nro. 19--------- 
Realizar una arrow function que reciba dos parámetros de entrada. 
El parámetro 1 será el importe de compra de un producto, 
el segundo será el margen de ganancia que se aplicará sobre ese producto,
la función debe retornar el precio de venta que será igual 
a aplicarle el % de margen de ganancia. 
La función debe retornar el precio de venta (sin impuestos). 
Nota: Debe devolver un número  

*/

window.onload = () => {

    const estadoAplicacion = {
        importeProducto: 0,
        margenGanancia: 0
    };

    const idImporteProducto = document.querySelector("#idImporteProducto");
    const idMargenGanancia = document.querySelector("#idMargenGanancia");
    const idCalculo = document.querySelector("#idCalculo");
    const idResultado = document.querySelector("#idResultado");
    const idGuardar = document.querySelector("#idGuardar");
    const idRecuperar = document.querySelector("#idRecuperar");

    let datos = fnRecuperar("ejercicio19");

    idImporteProducto.oninput = () => {

        estadoAplicacion.importeProducto = Number(idImporteProducto.value);
        fnGuardar("ejercicio19", estadoAplicacion);
    };


    idMargenGanancia.oninput = () => {

        estadoAplicacion.margenGanancia = Number(idMargenGanancia.value);
        fnGuardar("ejercicio19", estadoAplicacion);
    };
    idCalculo.onclick = () => {

        let resultadoTotal = fnCalculoPrecioVenta(estadoAplicacion.importeProducto, estadoAplicacion.margenGanancia);

        console.log(resultadoTotal.toFixed(2));


        /*Mostrar en el DOM*/
        idResultado.textContent = `-Importe de Producto ${estadoAplicacion.importeProducto}
        - Margen ${estadoAplicacion.margenGanancia}
        - Resultado: ${resultadoTotal}`;
    };

    /* GUARDAR */
    idGuardar.onclick = () => {

        fnGuardar("ejercicio19", estadoAplicacion);
    };

    /* RECUPERAR */
    idRecuperar.onclick = () => {

        let datos = fnRecuperar("ejercicio19");

        if (datos) {

            estadoAplicacion.importeProducto = datos.importeProducto;
            estadoAplicacion.margenGanancia = datos.margenGanancia;

            idImporteProducto.value = datos.importeProducto;
            idMargenGanacia.value = datos.margenGanancia;
        }
    };
};


