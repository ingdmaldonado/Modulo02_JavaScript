import {
  cohorte01,
  cohorte02,
  cohorte03,
  cohorte04,
  mostrarApellidoYNombre,
  unificarCohortes,
  obtenerAlumnosAprobados,
  obtenerAlumnosDesaprobados,
  ordenarPorNotaAscendente,
  buscarAlumnoPorDni,
  contarAprobadosConIfElse,
  contarAprobadosConTernario,
  convertirAJson
} from "./modelo.js";

const salida = document.getElementById("salida");
const inputDni = document.getElementById("dni");

const alumnosTotales = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);

const escribir = (titulo, contenido) => {
  salida.textContent = `${titulo}\n\n${contenido}`;
  console.clear();
  console.log(titulo);
  console.log(contenido);
};

const formatearLista = (datos) => {
  return datos.map((alumno) => {
    const { dni, apellido, nombre, nota_final } = alumno;
    return `${dni} - ${apellido}, ${nombre} - Nota final: ${nota_final}`;
  }).join("\n");
};

const ejecutarPunto1 = () => {
  const resultado = [
    "Cohorte 01:",
    ...mostrarApellidoYNombre(cohorte01),
    "",
    "Cohorte 02:",
    ...mostrarApellidoYNombre(cohorte02),
    "",
    "Cohorte 03:",
    ...mostrarApellidoYNombre(cohorte03),
    "",
    "Cohorte 04:",
    ...mostrarApellidoYNombre(cohorte04)
  ].join("\n");

  escribir("Punto 1 - Apellido y nombre por cohorte", resultado);
};

const ejecutarPunto2 = () => {
  escribir("Punto 2 - Vector unificado con spread operator", convertirAJson(alumnosTotales));
};

const ejecutarPunto3 = () => {
  const aprobados = obtenerAlumnosAprobados(alumnosTotales);
  const desaprobados = obtenerAlumnosDesaprobados(alumnosTotales);
  const resultado = [
    "Alumnos aprobados (nota > 5):",
    formatearLista(aprobados),
    "",
    "Alumnos desaprobados (nota <= 5):",
    formatearLista(desaprobados)
  ].join("\n");

  escribir("Punto 3 - Filter aprobados y desaprobados", resultado);
};

const ejecutarPunto4 = () => {
  const ordenados = ordenarPorNotaAscendente(alumnosTotales);
  escribir("Punto 4 - Alumnos ordenados por nota de menor a mayor", formatearLista(ordenados));
};

const ejecutarPunto5 = () => {
  const dni = inputDni.value.trim();
  const alumno = buscarAlumnoPorDni(alumnosTotales, dni);

  if (alumno) {
    escribir("Punto 5 - Busqueda por DNI con find", formatearLista([alumno]));
  } else {
    escribir("Punto 5 - Busqueda por DNI con find", "No se encontro ningun alumno con ese DNI.");
  }
};

const ejecutarPunto6 = () => {
  const aprobadosIfElse = contarAprobadosConIfElse(alumnosTotales);
  const aprobadosTernario = contarAprobadosConTernario(alumnosTotales);
  const resultado = [
    `Cantidad de aprobados con if/else: ${aprobadosIfElse}`,
    `Cantidad de aprobados con operador ternario: ${aprobadosTernario}`
  ].join("\n");

  escribir("Punto 6 - Reduce para contabilizar aprobados", resultado);
};

const ejecutarTodo = () => {
  const aprobados = obtenerAlumnosAprobados(alumnosTotales);
  const desaprobados = obtenerAlumnosDesaprobados(alumnosTotales);
  const ordenados = ordenarPorNotaAscendente(alumnosTotales);
  const alumnoBuscado = buscarAlumnoPorDni(alumnosTotales, inputDni.value.trim() || "12345678");

  const resultado = [
    "Punto 1 - Cohorte 01:",
    ...mostrarApellidoYNombre(cohorte01),
    "",
    "Punto 1 - Cohorte 02:",
    ...mostrarApellidoYNombre(cohorte02),
    "",
    "Punto 1 - Cohorte 03:",
    ...mostrarApellidoYNombre(cohorte03),
    "",
    "Punto 1 - Cohorte 04:",
    ...mostrarApellidoYNombre(cohorte04),
    "",
    "Punto 2 - Total de alumnos unificados:",
    convertirAJson(alumnosTotales),
    "",
    "Punto 3 - Aprobados:",
    formatearLista(aprobados),
    "",
    "Punto 3 - Desaprobados:",
    formatearLista(desaprobados),
    "",
    "Punto 4 - Ordenados por nota:",
    formatearLista(ordenados),
    "",
    "Punto 5 - Alumno buscado:",
    alumnoBuscado ? formatearLista([alumnoBuscado]) : "No se encontro ningun alumno.",
    "",
    "Punto 6 - Conteo de aprobados:",
    `If/else: ${contarAprobadosConIfElse(alumnosTotales)}`,
    `Ternario: ${contarAprobadosConTernario(alumnosTotales)}`
  ].join("\n");

  escribir("Ejercicio 32 completo", resultado);
};

document.getElementById("punto1").addEventListener("click", ejecutarPunto1);
document.getElementById("punto2").addEventListener("click", ejecutarPunto2);
document.getElementById("punto3").addEventListener("click", ejecutarPunto3);
document.getElementById("punto4").addEventListener("click", ejecutarPunto4);
document.getElementById("punto5").addEventListener("click", ejecutarPunto5);
document.getElementById("punto6").addEventListener("click", ejecutarPunto6);
document.getElementById("todo").addEventListener("click", ejecutarTodo);

ejecutarTodo();
