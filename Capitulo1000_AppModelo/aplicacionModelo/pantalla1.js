// pantalla1.js
// Lógica de la pantalla1 con estado persistente y control de duplicidad modularizado

import {inicializarInstanciaUnica} from './instanciaUnica.js';
import {fnInicializarEstadoPantalla,fnGuardarEstadoPantalla,fnLeerEstadoPantalla} from './persistenciaEstado.js';

// de esta forma saco el nombre del archivo html para guardarlo de forma unica //
const nombreArchivoActual = window.location.pathname.split("/").pop();
console.log(nombreArchivoActual);

// invoco la función que se encarga de mantener una sola instancia de esa pantalla //
inicializarInstanciaUnica(nombreArchivoActual);

window.addEventListener("load", () => 
  {
    const estadoInicial = 
    {
      nombre: "",
      apellido: "",
      email: ""
    };

    fnInicializarEstadoPantalla(nombreArchivoActual,estadoInicial);

    // obtengo las referencias a los objetos visuales //
    const idNombre = document.querySelector("#idNombre");
    const idApellido = document.querySelector("#idApellido");
    const idEmail = document.querySelector("#idEmail");
    const idBtnAceptar = document.querySelector("#idBtnAceptar");

    // muestro por consola los objetos capturados //
    console.log(idNombre,idApellido,idEmail,idBtnAceptar);


    const estadoActual = fnLeerEstadoPantalla(nombreArchivoActual);
    console.log(estadoActual);

    idNombre.value = estadoActual.nombre || "";
    idApellido.value = estadoActual.apellido || "";
    idEmail.value = estadoActual.email || "";

    // guardo el estado de la aplicacion
    idNombre.addEventListener("input", () => {
      estadoActual.nombre = idNombre.value;
      fnGuardarEstadoPantalla(nombreArchivoActual, estadoActual);
    });

    // guardo el estado de la aplicacion
    idApellido.addEventListener("input", () => {
      estadoActual.apellido = idApellido.value;
      fnGuardarEstadoPantalla(nombreArchivoActual, estadoActual);
    });

    // guardo el estado de la aplicacion
    idEmail.addEventListener("input", () => {
      estadoActual.email = idEmail.value;
      fnGuardarEstadoPantalla(nombreArchivoActual, estadoActual);
    });

    // boton aceptar y paso a la página siguiente
    idBtnAceptar.addEventListener("click",()=> 
      {
        fnGuardarEstadoPantalla(nombreArchivoActual, estadoActual);
        window.location.href = "pantalla2.html";
    });
});

/* evento pageshow => se lanza cuando la aplicación
se visualiza en la pantalla. ya sea porque se cargo
por primera vez, por botón retroceso o porque se
la buscó en el historial */

window.addEventListener("pageshow", (event) => {
  if (event.persisted) 
    {
      console.log("Página restaurada desde el historial (bfcache). Usuario volvió con la flecha.");
    } 
    else
    {
      console.log("✔ Página cargada normalmente (como lo haría el evento load).");
    }
});
