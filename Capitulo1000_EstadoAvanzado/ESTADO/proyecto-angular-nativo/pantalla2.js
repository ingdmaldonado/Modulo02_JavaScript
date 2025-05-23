// pantalla2.js
// Este archivo representa otro 'componente', especializado en la entrada del email.

import { PantallaBase } from "./PantallaBase.js";
import { AppState } from "./AppState.js";

class Pantalla2 extends PantallaBase {
  // Método específico para esta pantalla
  initEspecifico() {
    const inputEmail = document.querySelector("#inputEmail");

    // Restaurar visualmente el valor del email
    if (inputEmail) {
      inputEmail.value = AppState.email;

      // Guardar el estado al modificar el input
      inputEmail.addEventListener("input", (e) => {
        AppState.email = e.target.value;
        AppState.guardar();
      });
    }
  }
}

// Instanciamos el componente pantalla2
new Pantalla2();
