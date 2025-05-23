import { AppState } from "./AppState.js";

// Restauramos el estado al iniciar
AppState.restaurar();

const estaEnPantalla1 = location.pathname.includes("pantalla1.html");
const estaEnPantalla2 = location.pathname.includes("pantalla2.html");

window.addEventListener("load", () => {
  const btnMostrar = document.querySelector("#btnMostrarEstado");
  if (btnMostrar) {
    btnMostrar.addEventListener("click", () => AppState.mostrar());
  }

  if (estaEnPantalla1) {
    const inputNombre = document.querySelector("#inputNombre");
    if (inputNombre) {
      inputNombre.value = AppState.nombre;
      inputNombre.addEventListener("input", (e) => {
        AppState.nombre = e.target.value;
        AppState.guardar();
      });
    }
  }

  if (estaEnPantalla2) {
    const inputEmail = document.querySelector("#inputEmail");
    if (inputEmail) {
      inputEmail.value = AppState.email;
      inputEmail.addEventListener("input", (e) => {
        AppState.email = e.target.value;
        AppState.guardar();
      });
    }
  }
});
