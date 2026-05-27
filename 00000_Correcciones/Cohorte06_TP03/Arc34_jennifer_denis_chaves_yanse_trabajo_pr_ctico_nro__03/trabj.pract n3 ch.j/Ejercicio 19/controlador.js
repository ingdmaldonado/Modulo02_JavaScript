import {fnCalcularPrecioVenta} from "./modelo.js";

window.onload = ()=>{

    console.log("la aplicación esta cargada");

    /* estado de la aplicación */

    const estadoAplicacion = {
        importeCompra:0,
        margen:0
    };

    /* captura de elementos del DOM */

    const idImporteCompra = document.querySelector("#idImporteCompra");
    const idMargen = document.querySelector("#idMargen");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");
    const idResultado = document.querySelector("#idResultado");

    /* input importe compra */

    idImporteCompra.oninput = ()=>{

        estadoAplicacion.importeCompra = Number(idImporteCompra.value);

        console.log(estadoAplicacion);

    };

    /* input margen */

    idMargen.oninput = ()=>{

        estadoAplicacion.margen = Number(idMargen.value);

        console.log(estadoAplicacion);

    };

    /* boton calcular */

    idBtnCalcular.onclick = ()=>{

        let resultado = fnCalcularPrecioVenta(
            estadoAplicacion.importeCompra,
            estadoAplicacion.margen
        );

        console.log(resultado);

        idResultado.textContent = `El precio de venta es ${resultado}`;

    };

    /* boton guardar */

    idBtnGuardar.onclick = ()=>{

        let estadoJSON = JSON.stringify(estadoAplicacion);

        localStorage.setItem("estadoApp",estadoJSON);

        console.log("datos guardados");

    };

    /* boton recuperar */

    idBtnRecuperar.onclick = ()=>{

        let datosRecuperados = localStorage.getItem("estadoApp");

        if(datosRecuperados)
        {
            let estadoObjeto = JSON.parse(datosRecuperados);

            console.log(estadoObjeto);

            idImporteCompra.value = estadoObjeto.importeCompra;
            idMargen.value = estadoObjeto.margen;

            estadoAplicacion.importeCompra = estadoObjeto.importeCompra;
            estadoAplicacion.margen = estadoObjeto.margen;
        }

    };

};