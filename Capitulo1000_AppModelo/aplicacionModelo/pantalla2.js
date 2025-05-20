// pantalla2.js
// ✅ Lógica de la pantalla2 con estado persistente y control de duplicidad modularizado

import { inicializarInstanciaUnica } from './instanciaUnica.js';
import {fnInicializarEstadoPantalla,fnGuardarEstadoPantalla,fnLeerEstadoPantalla} from './persistenciaEstado.js';

const nombreArchivoActual = window.location.pathname.split("/").pop();
inicializarInstanciaUnica(nombreArchivoActual);

window.addEventListener("load", () => 
  {

    const estadoInicial = 
    {
      pais:0,
    };
    
    fnInicializarEstadoPantalla(nombreArchivoActual,estadoInicial);

    const idSelectorPais = document.querySelector("#idSelectorPais");
    const idBtnFinalizar = document.querySelector("#idBtnFinalizar");

    const estadoActual = fnLeerEstadoPantalla(nombreArchivoActual);
    
    idSelectorPais.value = estadoActual.pais || "";

    idSelectorPais.addEventListener("change", () => 
      {
        estadoActual.pais = Number(idSelectorPais.value);
        fnGuardarEstadoPantalla(nombreArchivoActual, estadoActual);
    });

    idBtnFinalizar.addEventListener("click", () => 
      {
        fnGuardarEstadoPantalla(nombreArchivoActual, estadoActual);
        alert("Estado completo:\n" + localStorage.getItem("estadoAplicacion"));

        const estadoAplicacion = JSON.parse(localStorage.getItem("estadoAplicacion"));
        console.log(estadoAplicacion);
      });
});

window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    console.log("Página restaurada desde el historial (bfcache). Usuario volvió con la flecha.");
  } else {
    console.log("Página cargada normalmente (como lo haría el evento load).");
  }
});
