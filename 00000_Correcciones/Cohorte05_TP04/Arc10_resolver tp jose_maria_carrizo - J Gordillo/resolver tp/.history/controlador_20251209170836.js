// controlador.js
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
  // Capturo botones e inputs
  const btnC1 = document.querySelector("#btnCohorte1");
  const btnC2 = document.querySelector("#btnCohorte2");
  const btnC3 = document.querySelector("#btnCohorte3");
  const btnC4 = document.querySelector("#btnCohorte4");

  const btnUnificar = document.querySelector("#btnUnificar");
  const btnFiltros = document.querySelector("#btnFiltros");
  const btnOrdenar = document.querySelector("#btnOrdenar");
  const btnBuscar = document.querySelector("#btnBuscar");
  const btnContar = document.querySelector("#btnContar");

  const inputDni = document.querySelector("#inputDni");
  const salida = document.querySelector("#salida");

  // Función para mostrar algo en el <pre>
  const fnMostrarEnPantalla = (titulo, datos) => {
    let texto;
    if (typeof datos === "string") {
      texto = datos;
    } else {
      texto = fnConvertirAJson(datos);
    }
    salida.textContent = `${titulo}\n\n${texto}`;
  };

  // 1) Mostrar por cohorte (forEach + consola)
  btnC1.addEventListener("click", () => {
    console.log("Cohorte 01:");
    fnMostrarAlumnosConsola(cohorte01);
    fnMostrarEnPantalla("Cohorte 01 (ver consola para Apellido, Nombre):", cohorte01);
  });

  btnC2.addEventListener("click", () => {
    console.log("Cohorte 02:");
    fnMostrarAlumnosConsola(cohorte02);
    fnMostrarEnPantalla("Cohorte 02 (ver consola para Apellido, Nombre):", cohorte02);
  });

  btnC3.addEventListener("click", () => {
    console.log("Cohorte 03:");
    fnMostrarAlumnosConsola(cohorte03);
    fnMostrarEnPantalla("Cohorte 03 (ver consola para Apellido, Nombre):", cohorte03);
  });

  btnC4.addEventListener("click", () => {
    console.log("Cohorte 04:");
    fnMostrarAlumnosConsola(cohorte04);
    fnMostrarEnPantalla("Cohorte 04 (ver consola para Apellido, Nombre):", cohorte04);
  });

  // 2) Unificar (Spread) + ejemplo Rest
  btnUnificar.addEventListener("click", () => {
    // Rest operator + destructuring
    const [primerAlumno, ...restoAlumnos] = totalAlumnos;
    console.log("Primer alumno del total:", primerAlumno);
    console.log("Cantidad de alumnos restantes:", restoAlumnos.length);

    fnMostrarEnPantalla("Total de alumnos (4 cohortes unificadas):", totalAlumnos);
  });

  // 3) Filtros (aprobados / desaprobados con filter)
  btnFiltros.addEventListener("click", () => {
    const aprobados = fnObtenerAprobados(totalAlumnos);
    const desaprobados = fnObtenerDesaprobados(totalAlumnos);

    console.log("Aprobados (nota > 4):", aprobados);
    console.log("Desaprobados (nota <= 4):", desaprobados);

    fnMostrarEnPantalla("Aprobados y desaprobados (nota > 4):", {
      aprobados,
      desaprobados
    });
  });

  // 4) Ordenar por nota (sort)
  btnOrdenar.addEventListener("click", () => {
    const ordenados = fnOrdenarPorNotaAsc(totalAlumnos);
    console.log("Ordenados por nota (asc):", ordenados);
    fnMostrarEnPantalla("Alumnos ordenados por nota (menor a mayor):", ordenados);
  });

  // 5) Buscar por DNI (find)
  btnBuscar.addEventListener("click", () => {
    const dniBuscado = inputDni.value.trim();

    if (dniBuscado === "") {
      fnMostrarEnPantalla("Error", "Escribí un DNI para poder buscar.");
      return;
    }

    const alumnoEncontrado = fnBuscarAlumnoPorDni(totalAlumnos, dniBuscado);
    console.log("Buscando DNI:", dniBuscado, "Resultado:", alumnoEncontrado);

    if (alumnoEncontrado) {
      fnMostrarEnPantalla("Alumno encontrado:", alumnoEncontrado);
    } else {
      fnMostrarEnPantalla(
        "Alumno no encontrado",
        `No existe alumno con DNI ${dniBuscado}`
      );
    }
  });

  // 6) Contar aprobados con reduce (if / ternario)
  btnContar.addEventListener("click", () => {
    const cantIf = fnContarAprobadosIf(totalAlumnos);
    const cantTernario = fnContarAprobadosTernario(totalAlumnos);

    const mensaje =
      `Aprobados (reduce + if/else, nota > 4): ${cantIf}\n` +
      `Aprobados (reduce + ternario, nota > 4): ${cantTernario}`;

    console.log(mensaje);
    fnMostrarEnPantalla("Cantidad de alumnos aprobados", mensaje);
  });
});