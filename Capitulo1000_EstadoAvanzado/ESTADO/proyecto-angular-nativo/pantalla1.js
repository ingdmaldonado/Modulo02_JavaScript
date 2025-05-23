// pantalla1.js
// Este archivo representa un 'componente' Angular especializado en la entrada del nombre.

import { PantallaBase } from "./PantallaBase.js";
import { AppState } from "./AppState.js";

class Pantalla1 extends PantallaBase {
  // Método específico para esta pantalla
  initEspecifico() {
    const inputNombre = document.querySelector("#inputNombre");

    // Restaurar visualmente el valor del nombre
    if (inputNombre) {
      inputNombre.value = AppState.nombre;

      // Guardar el estado al modificar el input
      inputNombre.addEventListener("input", (e) => {
        AppState.nombre = e.target.value;
        AppState.guardar();
      });
    }
  }
}

// Instanciamos el componente pantalla1
new Pantalla1();
