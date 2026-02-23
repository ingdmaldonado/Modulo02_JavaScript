
/* fetch: es un proceso 
que dentro tiene dos procesos
asincronos. 

1) permite conectarme a una API
de terceros ó propia. y 
devolver esos datos

2) convierte los datos del paso1.
en formato JSON => objeto javasCript

*/

/* 
    PERMITE A TRAVES DE UNA DIRECCION
    DE INTERNET, recuperar información
    de otro SISTEMA

        * Sistema propio
        * APIs de TERCEROS.

*/

window.addEventListener("load", async ()=>{

    console.log("aplication is running");

    const direccionInternet = "https://ws.smn.gob.ar/map_items/weather";

    try {

        const data = await fetch(direccionInternet);

        const datosEnFormatoJSON = await data.json();

        console.log(datosEnFormatoJSON);

        datosEnFormatoJSON.forEach(localidad => 
            {
               // console.log(localidad.weather.temp);

                if(localidad.weather.temp <= 12)
                {
                    console.log(`Nombre: ${localidad.name} Province: ${localidad.province} Temp: ${localidad.weather.temp}`);
                }

                /*
                if(localidad.province === 'Catamarca')
                {
                    console.log(localidad);
                }
                */
              
            }
        )
        
    } catch (error) {
        console.log(error);
    }

  

})