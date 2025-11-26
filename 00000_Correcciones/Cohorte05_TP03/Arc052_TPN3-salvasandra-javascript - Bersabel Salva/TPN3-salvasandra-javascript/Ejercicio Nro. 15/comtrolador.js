
import { calificacionFinal } from "./funciones.js";

window.onload = () => {
  console.log(`La página está cargada`);

  let nota = Number(prompt("Ingrese la nota promedio del alumno:"));
  let resultado = calificacionFinal(nota);

  console.log(`La calificación del alumno es: ${resultado}`);
};

