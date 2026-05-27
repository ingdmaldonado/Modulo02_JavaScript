import {sinNumero} from "./modelo.js"

const estadoAplicacion = {
    cadena: "",
}

window.onload = () => {

    const idCadena = document.querySelector("#idCadena")
    const btnVerificar = document.querySelector("#btnVerificar")
    const idResultado = document.querySelector("#idResultado")
    const btnGuardar = document.querySelector("#btnGuardar")
    const btnRecuperar = document.querySelector("#btnRecuperar")

    idCadena.oninput = () => {
        estadoAplicacion.cadena = (idCadena.value)
    }

    btnVerificar.onclick = () => {

        let resultado = sinNumero(estadoAplicacion.cadena)
        
        if(resultado){
            idResultado.textContent = `la cadena no tiene numeros`
        }
        else{
            idResultado.textContent = `la cadena contiene numeros`
        }
    }

    btnGuardar.onclick = () => {

        let datosJSON = JSON.stringify(estadoAplicacion)
        localStorage.setItem("cadenaTexto", datosJSON)
    }

    btnRecuperar.onclick = () => {

        let datosJSON = localStorage.getItem("cadenaTexto")

        if(datosJSON){

            let datosRecuperados = JSON.parse(datosJSON)
            estadoAplicacion.cadena = datosRecuperados.cadena
            idCadena.value = estadoAplicacion.cadena
        }
    }


}