import {precioVenta} from "./modelo.js"

const estadoAplicacion = {
    importeCompra:0,
    margen:0,
}

window.onload = ()=>{
    
    const idImporteCompra = document.querySelector("#idImporteCompra")
    const idMargen = document.querySelector("#idMargen")
    const idBotonCalcular = document.querySelector("#idBotonCalcular")
    const idResultado = document.querySelector("#idResultado")
    const idBotonGuardar = document.querySelector("#idBotonGuardar")
    const idBotonRecuperar = document.querySelector("#idBotonRecuperar")

    idImporteCompra.oninput = ()=>{
        estadoAplicacion.importeCompra = Number(idImporteCompra.value)
        console.log(estadoAplicacion)
    }
    idMargen.oninput = ()=>{
        estadoAplicacion.margen = Number(idMargen.value)
        console.log(estadoAplicacion)
    }

    idBotonCalcular.onclick = ()=>{
        let resultadoFinal = precioVenta(estadoAplicacion.importeCompra, estadoAplicacion.margen)
        idResultado.textContent = `Precio De Venta: ${resultadoFinal}`
    }

    idBotonGuardar.onclick = ()=>{
        let textoJson = JSON.stringify(estadoAplicacion)
        console.log(textoJson)
        localStorage.setItem("ventaTotal", textoJson)
    }

    idBotonRecuperar.onclick = ()=>{
        let datos = localStorage.getItem("ventaTotal")
        if(datos)
        {
            let datosConvertidos = JSON.parse(datos)

            estadoAplicacion.importeCompra = datosConvertidos.importeCompra
            estadoAplicacion.margen = datosConvertidos.margen

            idImporteCompra.value = estadoAplicacion.importeCompra
            idMargen.value = estadoAplicacion.margen
        }
    }

}