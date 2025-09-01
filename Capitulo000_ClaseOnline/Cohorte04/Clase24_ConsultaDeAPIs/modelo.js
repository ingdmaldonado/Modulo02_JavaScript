

export const fnRecuperarDatosDelClima = async ()=>
{
    
    let data = null;

    try {

        const response = await fetch("https://ws.smn.gob.ar/map_items/weather");

        data = await response.json();

        //console.log(data);
        
    } catch (error) {
       
        console.log(`se produjo un error ${error}`);        
    }

    return data;

}

/*
    VISTA = html, css, javascript + funciones que renderizan dinamente el DOM

    CONTROLADOR => maneja los eventos del DOM y se comunica o atiende al usuario

    MODELO => se debe encargar unicamente de comunicarse con las apis + logica de aplicación


*/