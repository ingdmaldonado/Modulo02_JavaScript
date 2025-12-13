import {
  cohorte01, cohorte02, cohorte03, cohorte04,
  mostrarAlumnos, unificarCohortes,
  filtrarAprobados, filtrarDesaprobados,
  ordenarPorNota, buscarDNI,
  contarAprobadosIF, contarAprobadosTernario
} from "./modelo.js";

const resultado = document.querySelector("#resultado");

let todos = []; // se cargará cuando el usuario aprete "Unificar"

// 1) Mostrar listados
document.querySelector("#btnMostrarListados").addEventListener("click", () => {
  let texto = "COHORTE 01:\n" + mostrarAlumnos(cohorte01);
  texto += "\nCOHORTE 02:\n" + mostrarAlumnos(cohorte02);
  texto += "\nCOHORTE 03:\n" + mostrarAlumnos(cohorte03);
  texto += "\nCOHORTE 04:\n" + mostrarAlumnos(cohorte04);

  resultado.textContent = texto;
});

// 2) Unificar
document.querySelector("#btnUnificar").addEventListener("click", () => {
  todos = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);
  resultado.textContent = "Cohortes unificadas (" + todos.length + " alumnos)";
});

// 3) Aprobados / desaprobados
document.querySelector("#btnAprobados").addEventListener("click", () => {
  if (todos.length === 0) return alert("Primero unifique las cohortes");

  const aprob = filtrarAprobados(todos);
  const desap = filtrarDesaprobados(todos);

  resultado.textContent =
      "APROBADOS:\n" +
      JSON.stringify(aprob, null, 2) +
      "\n\nDESAPROBADOS:\n" +
      JSON.stringify(desap, null, 2);
});

// 4) Ordenar
document.querySelector("#btnOrdenar").addEventListener("click", () => {
  if (todos.length === 0) return alert("Primero unifique las cohortes");

  const ordenados = ordenarPorNota(todos);
  resultado.textContent = JSON.stringify(ordenados, null, 2);
});

// 5) Buscar DNI
document.querySelector("#btnBuscar").addEventListener("click", () => {
  if (todos.length === 0) return alert("Primero unifique las cohortes");

  const dni = prompt("Ingrese DNI a buscar:");

  const encontrado = buscarDNI(todos, dni);

  resultado.textContent = encontrado
    ? JSON.stringify(encontrado, null, 2)
    : "No se encontró ese DNI";
});

// 6) Contar aprobados
document.querySelector("#btnContar").addEventListener("click", () => {
  if (todos.length === 0) return alert("Primero unifique las cohortes");

  const cantIF = contarAprobadosIF(todos);
  const cantTer = contarAprobadosTernario(todos);

  resultado.textContent =
      `Aprobados (IF): ${cantIF}\nAprobados (Ternario): ${cantTer}`;
});

