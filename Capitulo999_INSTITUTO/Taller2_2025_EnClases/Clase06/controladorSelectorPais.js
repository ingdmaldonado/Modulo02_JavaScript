
import {estadoAplicacion} from "./estadoAplicacion.js";
import {paises} from "./datos.js";


export const fnChangeSelectorPais = ()=>
    {
        estadoAplicacion.idPaisElegido = Number(idSelectorPais.value);
        console.log(estadoAplicacion);

        const paisEncontrado = paises.find(pais => pais.id === estadoAplicacion.idPaisElegido);

        console.log(paisEncontrado);

        idNombrePais.textContent = paisEncontrado.nombrePais;
        idCapitalPais.textContent = paisEncontrado.capital;
        idBanderaPais.src = paisEncontrado.bandera;
    }