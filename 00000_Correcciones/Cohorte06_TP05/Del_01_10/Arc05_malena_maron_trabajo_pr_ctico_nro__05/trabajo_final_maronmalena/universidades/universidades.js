import { fnRecuperarUni } from "./universidadesmodelo.js";
import { fnrender,fnunitoviews,fnUniversidadtoview } from "./universidadvista.js";


window.onload=()=>{
    const idRecuperar=document.querySelector("#idRecuperar");
    const idSelector=document.querySelector("#idSelector");
    const idCuerpo = document.querySelector("#idCuerpo")

    idRecuperar.onclick = async ()=>{
        const paiselegido = Number(idSelector.value)
        const datos= await fnRecuperarUni(paiselegido);
        
        console.log(paiselegido)

        console.log(datos)
       const fila= fnUniversidadtoview(datos[0])
       console.log(fila)
       const filas= fnunitoviews(datos);
       console.log(filas)

       fnrender(filas,idCuerpo)
        
    }
}