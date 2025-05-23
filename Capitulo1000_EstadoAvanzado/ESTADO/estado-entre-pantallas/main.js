import { estadoAplicacion } from "./estadoAplicacion.js";

// Restauramos el estado desde localStorage si existe
const estadoGuardado = localStorage.getItem("estadoApp");
if (estadoGuardado) {
  Object.assign(estadoAplicacion, JSON.parse(estadoGuardado));
  console.log("✅ Estado restaurado:", estadoAplicacion);
}

// Guardar el estado actual en localStorage
function guardarEstado() {
  localStorage.setItem("estadoApp", JSON.stringify(estadoAplicacion));
}

// Identificamos la pantalla en la que estamos
const estaEnPantalla1 = window.location.pathname.includes("pantalla1.html");
const estaEnPantalla2 = window.location.pathname.includes("pantalla2.html");

window.addEventListener("load", () => {
  const btnMostrarEstado = document.querySelector("#btnMostrarEstado");
  if (btnMostrarEstado) {
    btnMostrarEstado.addEventListener("click", () => {
      console.log("📦 Estado actual:", estadoAplicacion);
    });
  }

  if (estaEnPantalla1) {
    const inputNombre = document.querySelector("#inputNombre");
    if (inputNombre) {
      inputNombre.value = estadoAplicacion.nombre;
      inputNombre.addEventListener("input", (e) => {
        estadoAplicacion.nombre = e.target.value;
        guardarEstado();
      });
    }
  }

  if (estaEnPantalla2) {
    const inputEmail = document.querySelector("#inputEmail");
    if (inputEmail) {
      inputEmail.value = estadoAplicacion.email;
      inputEmail.addEventListener("input", (e) => {
        estadoAplicacion.email = e.target.value;
        guardarEstado();
      });
    }
  }
});
