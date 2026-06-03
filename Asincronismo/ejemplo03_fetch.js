

window.onload = function(){

    const idBtnClima = document.querySelector("#idBtnClima");

    idBtnClima.onclick = async ()=>{

         try {
      const urlSMN = "https://ws.smn.gob.ar/map_items/weather";

      const urlProxy = ``;

      const response = await fetch(urlProxy);

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.error("Error al consultar el clima:", error);
    }
   

    };


};

/* 

Nombre de la localidad.
Provincia.
Latitud y longitud.
Temperatura actual.
Humedad.
Presión.
Estado del tiempo.
Información de pronóstico.
Íconos meteorológicos.

*/