import {calcularMargen} from "./modelo.js"

//import (nombreFuncion) from "./modelo.js"//
// acá se hace todo lo del doom, importa lo necesario del modelo, los eventos y tambien lo de guardar y recuperar 
//(localStorage) se tiene que convertir a JSON 

const estadoAplicacion = {

    importeCompra: 0,
    margen: 0,
}

window.onload = () => {

   const idImporteCompra = document.querySelector("#idImporteCompra")
   const idMargenDeGanancia = document.querySelector("#idMargenDeGanancia")
   const idBotonGenerar = document.querySelector("#idBotonGenerar")
   const idGuardar = document.querySelector("#idGuardar")
   const idRecuperar = document.querySelector("#idRecuperar")
   const idMostar = document.querySelector("#idMostar")

//guardar en valor en el estado de la aplicacion
   idImporteCompra.oninput = () => {

    estadoAplicacion.importeCompra = Number(idImporteCompra.value)
    //console.log(estadoAplicacion)
   }


    idMargenDeGanancia.oninput = () => {

        estadoAplicacion.margen = Number(idMargenDeGanancia.value)
    }

    idBotonGenerar.onclick = () => {

        let resultado = calcularMargen(estadoAplicacion.importeCompra,estadoAplicacion.margen)
        idMostar.textContent = `el precio de venta es: $${resultado}`
    }


    idGuardar.onclick = () => {

        let datosJSON = JSON.stringify(estadoAplicacion)

        localStorage.setItem("margenDeGanancia",datosJSON)
    }

    idRecuperar.onclick = () => {

        let datosJSON = localStorage.getItem("margenDeGanancia")

        if(datosJSON){

            let datosConvertidos = JSON.parse(datosJSON)

            estadoAplicacion.importeCompra = datosConvertidos.importeCompra
            estadoAplicacion.margen = datosConvertidos.margen

            idImporteCompra.value = estadoAplicacion.importeCompra
            idMargenDeGanancia.value = estadoAplicacion.margen

        }      
    }


    



}
