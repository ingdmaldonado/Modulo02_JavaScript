import {
  cohorte01,
  cohorte02,
  cohorte03,
  cohorte04,
  totalAlumnos,
  fnMostrarAlumnosConsola,
  fnObtenerAprobados,
  fnObtenerDesaprobados,
  fnOrdenarPorNotaAsc,
  fnBuscarAlumnoPorDni,
  fnContarAprobadosIf,
  fnContarAprobadosTernario,
  fnConvertirAJson
} from "./modelo.js";


document.addEventListener("DOMContentLoaded", () => {

  // Botones
  const btnC1 = document.querySelector("#btnCohorte1");
  const btnC2 = document.querySelector("#btnCohorte2");
  const btnC3 = document.querySelector("#btnCohorte3");
  const btnC4 = document.querySelector("#btnCohorte4");

  const btnUnificar = document.querySelector("#btnUnificar");
  const btnFiltros  = document.querySelector("#btnFiltros");
  const btnOrdenar  = document.querySelector("#btnOrdenar");
  const btnBuscar   = document.querySelector("#btnBuscar");
  const btnContar   = document.querySelector("#btnContar");

  const inputDni = document.querySelector("#inputDni");
  const salida   = document.querySelector("#salida");


  // Función auxiliar para mostrar salida
  const mostrar = (titulo, datos) => {
    const texto = typeof datos === "string"
      ? datos
      : fnConvertirAJson(datos);

    salida.textContent = `${titulo}\n\n${texto}`;
  };


  // Cohorte 01
  btnC1.addEventListener("click", () => {
    fnMostrarAlumnosConsola(cohorte01);
    mostrar("Cohorte 01 (abrir consola para ver nombres):", cohorte01);
  });

  btnC2.addEventListener("click", () => {
    fnMostrarAlumnosConsola(cohorte02);
    mostrar("Cohorte 02 (abrir consola):", cohorte02);
  });

  btnC3.addEventListener("click", () => {
    fnMostrarAlumnosConsola(cohorte03);
    mostrar("Cohorte 03 (abrir consola):", cohorte03);
  });

  btnC4.addEventListener("click", () => {
    fnMostrarAlumnosConsola(cohorte04);
    mostrar("Cohorte 04 (abrir consola):", cohorte04);
  });


  // Unificar
  btnUnificar.addEventListener("click", () => {
    const [primero, ...resto] = totalAlumnos; // rest operator
    console.log("Primer alumno:", primero);
    mostrar("Todos los alumnos (unificados):", totalAlumnos);
  });


  // Filtros
  btnFiltros.addEventListener("click", () => {
    const aprobados    = fnObtenerAprobados(totalAlumnos);
    const desaprobados = fnObtenerDesaprobados(totalAlumnos);

    mostrar("Aprobados y desaprobados (nota > 4):", { aprobados, desaprobados });
  });


  // Ordenar
  btnOrdenar.addEventListener("click", () => {
    const ordenados = fnOrdenarPorNotaAsc(totalAlumnos);
    mostrar("Ordenados por nota:", ordenados);
  });


  // Buscar por DNI
  btnBuscar.addEventListener("click", () => {
    const dni = inputDni.value.trim();
    if (!dni) {
      mostrar("Error", "Ingresá un DNI para buscar.");
      return;
    }

    const encontrado = fnBuscarAlumnoPorDni(totalAlumnos, dni);
    mostrar("Resultado búsqueda:", encontrado ?? "No se encontró el alumno");
  });


  // Contar aprobados
  btnContar.addEventListener("click", () => {
    const cant1 = fnContarAprobadosIf(totalAlumnos);
    const cant2 = fnContarAprobadosTernario(totalAlumnos);

    const texto =
      `Aprobados (IF): ${cant1}\n` +
      `Aprobados (Ternario): ${cant2}`;

    mostrar("Cantidad de aprobados", texto);
  });


});
