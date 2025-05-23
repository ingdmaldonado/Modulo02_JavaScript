// PantallaBase.js
// Esta clase actúa como 'componente base' en Angular. Define comportamiento común para todas las pantallas.

import { AppState } from "./AppState.js";

export class PantallaBase {
  constructor() {
    // Restaurar el estado al iniciar la pantalla
    AppState.restaurar();

    // Mostrar estado al presionar el botón común
    const btnMostrar = document.querySelector("#btnMostrarEstado");
    if (btnMostrar) {
      btnMostrar.addEventListener("click", () => AppState.mostrar());
    }

    // Hook para que las subclases implementen lógica propia
    if (typeof this.initEspecifico === "function") {
      this.initEspecifico();
    }
  }
}
