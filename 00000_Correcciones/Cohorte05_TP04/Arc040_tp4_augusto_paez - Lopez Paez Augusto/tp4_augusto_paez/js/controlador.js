import {
  cohorte01, cohorte02, cohorte03, cohorte04,
  mostrarAlumnos,
  unificarCohortes,
  alumnosAprobados, alumnosDesaprobados,
  ordenarPorNota,
  buscarPorDni,
  contarAprobadosIf, contarAprobadosTernario
} from "./modelo.js";

const r = document.querySelector("#resultado");

// Botones
const btnMostrar = document.querySelector("#btnMostrar");
const btnUnificar = document.querySelector("#btnUnificar");
const btnAprobados = document.querySelector("#btnAprobados");
const btnDesaprobados = document.querySelector("#btnDesaprobados");
const btnOrdenar = document.querySelector("#btnOrdenar");
const btnBuscar = document.querySelector("#btnBuscar");
const btnContar = document.querySelector("#btnContar");

// 1) Mostrar apellido y nombre
btnMostrar.addEventListener("click", () => {
  mostrarAlumnos(cohorte01);
  mostrarAlumnos(cohorte02);
  mostrarAlumnos(cohorte03);
  mostrarAlumnos(cohorte04);
  r.textContent = "Mostrado en consola.";
});

// 2) Unificar cohortes
btnUnificar.addEventListener("click", () => {
  const total = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);
  r.textContent = JSON.stringify(total, null, 2);
});

// 3) Aprobados
btnAprobados.addEventListener("click", () => {
  const total = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);
  r.textContent = JSON.stringify(alumnosAprobados(total), null, 2);
});

// 4) Desaprobados
btnDesaprobados.addEventListener("click", () => {
  const total = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);
  r.textContent = JSON.stringify(alumnosDesaprobados(total), null, 2);
});

// 5) Ordenar por nota
btnOrdenar.addEventListener("click", () => {
  const total = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);
  r.textContent = JSON.stringify(ordenarPorNota(total), null, 2);
});

// 6) Buscar alumno
btnBuscar.addEventListener("click", () => {
  const dni = prompt("Ingrese DNI a buscar:");
  const total = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);
  r.textContent = JSON.stringify(buscarPorDni(total, dni), null, 2);
});

// 7) Contar aprobados
btnContar.addEventListener("click", () => {
  const total = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);

  const c1 = contarAprobadosIf(total);
  const c2 = contarAprobadosTernario(total);

  r.textContent = `Aprobados (IF): ${c1}\nAprobados (Ternario): ${c2}`;
});
