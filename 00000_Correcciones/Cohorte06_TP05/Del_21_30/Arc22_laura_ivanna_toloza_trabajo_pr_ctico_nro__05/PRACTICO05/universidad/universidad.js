import { fnRecuperarUniversidades } from "./universidadModelo.js";
import { fnUniversidadestoviews,fnRender} from "./universidadVista.js";

window.onload = ()=> {
    const idbtnRecuperar = document.querySelector("#idbtnRecuperar");
    const idSelectorPais = document.querySelector("#idSelectorPais");
    const idCuerpoDeTabla = document.querySelector("#idCuerpoDeTabla")

    idbtnRecuperar.onclick = async ()=>{

        const paisElegido = Number(idSelectorPais.value);
        console.log(paisElegido);

        const datos= await fnRecuperarUniversidades(paisElegido);

        console.log(datos)

        const filas = fnUniversidadestoviews(datos);
        console.log(filas);

        fnRender(filas,idCuerpoDeTabla);

    }

}
