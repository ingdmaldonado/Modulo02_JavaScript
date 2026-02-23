
import {estadoAplicacion} from "./estadoApp.js";

export const fnChangeidProvincia = ()=>
    {
        estadoAplicacion.provincia = Number(idProvincia.value);
        console.log(estadoAplicacion);
    }

export const fnChangeidJubilado = ()=>
        {
            estadoAplicacion.esJubilado = idJubilado.checked;
            console.log(estadoAplicacion);
        }

export const fnChangeidAgua = ()=>
            {
                // aqui cada input se encarga de avisar el valor que tiene //
                estadoAplicacion.valorAgua = Number(idAgua.value); 
                console.log(estadoAplicacion);
            }