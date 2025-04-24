
import {paises} from "/datos.js";

export const fnObtenerPaisPorId = (id) => 
    {
        return paises.find((pais) => pais.id === id);
    } 

export const fnObtenerTodosLosPaises = () => 
    {
        return paises;
    }

export const fnObtenerPaisesPorContinente = (continente) => 
    {
        return paises.filter((pais) => pais.continentePais === continente);
    }

export const fnObtenerPaisesPorNombre = (nombre) => 
    {
        return paises.filter((pais) => pais.nombrePais.toLowerCase().includes(nombre.toLowerCase()));
    }
