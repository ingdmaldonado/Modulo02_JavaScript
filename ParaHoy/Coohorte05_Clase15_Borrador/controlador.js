// ======== Controlador principal ========

// Importamos la función genérica desde el módulo
import { validarCampo } from "./validaciones.js";

// Esperamos a que la página esté completamente cargada
window.onload = () => {

  // ===== Declaración de constantes =====
  const dniInput = document.querySelector("#dni");
  const apeNomInput = document.querySelector("#apellidoNombre");
  const chkProg = document.querySelector("#chkProg");
  const chkRedes = document.querySelector("#chkRedes");
  const chkBD = document.querySelector("#chkBD");
  const salida = document.querySelector("#resultado");
  const btn = document.querySelector("#btnMostrar");

  // ===== Asignación del comportamiento =====
  btn.onclick = () => {

    const dni = dniInput.value;
    const apeNom = apeNomInput.value;

    // Usamos la MISMA función para validar ambos campos
    const dniValido = validarCampo(dni);
    const apeNomValido = validarCampo(apeNom);

    if (!dniValido && !apeNomValido) {
      salida.textContent = "⚠️ Debés completar el DNI y el Apellido + Nombre.";
      return;
    }
    if (!dniValido) {
      salida.textContent = "⚠️ El campo DNI no puede estar vacío.";
      return;
    }
    if (!apeNomValido) {
      salida.textContent = "⚠️ El campo Apellido + Nombre no puede estar vacío.";
      return;
    }

    // Si todo está correcto, procesamos los checkboxes
    let mensaje = "No seleccionaste ninguna materia.";

    if (chkProg.checked || chkRedes.checked || chkBD.checked) {
      mensaje = "Seleccionaste: ";
      let primero = true;

      if (chkProg.checked) {
        mensaje += "Programación";
        primero = false;
      }
      if (chkRedes.checked) {
        mensaje += (primero ? "" : " + ") + "Redes";
        primero = false;
      }
      if (chkBD.checked) {
        mensaje += (primero ? "" : " + ") + "Bases de Datos";
      }
    }

    // Mostramos el resultado final
    salida.textContent = `${apeNom} (${dni}) — ${mensaje}`;
  };
};
