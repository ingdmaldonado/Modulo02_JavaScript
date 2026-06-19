import {fnRecuperarUniversidades } from "./universidadmodel.js"
import {fnUniversidadToView,fnUniversidadesToView,fnRender} from "./universidadVista.js"



window.onload = () => {

    const btnRecuperar = document.querySelector("#btnRecuperar")
    const idCuerpodeTabla = document.querySelector("#idCuerpodeTabla")
    const idSelector = document.querySelector("#idSelector")

    btnRecuperar.onclick = async ()=> {

        const paisElegido = Number(idSelector.value)

        const datos = await fnRecuperarUniversidades(paisElegido);
        console.log(datos);

        console.log(datos[0])

        const fila = fnUniversidadToView(datos[0])
        console.log(fila)

        const filas = fnUniversidadesToView(datos);
        console.log(filas);

        fnRender(filas,idCuerpodeTabla);
    };
}