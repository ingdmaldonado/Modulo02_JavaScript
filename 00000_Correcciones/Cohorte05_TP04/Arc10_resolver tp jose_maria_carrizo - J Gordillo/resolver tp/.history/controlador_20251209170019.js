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
    console.log("=== Cohorte 01 ===");
    fnMostrarAlumnosConsola(cohorte01);
    fnMostrarEnPantalla("📚 Cohorte 01 (ver consola para Apellido, Nombre):", cohorte01);
  });

  btnC2.addEventListener("click", () => {
    console.log("=== Cohorte 02 ===");
    fnMostrarAlumnosConsola(cohorte02);
    fnMostrarEnPantalla("📚 Cohorte 02 (ver consola para Apellido, Nombre):", cohorte02);
  });

  btnC3.addEventListener("click", () => {
    console.log("=== Cohorte 03 ===");
    fnMostrarAlumnosConsola(cohorte03);
    fnMostrarEnPantalla("📚 Cohorte 03 (ver consola para Apellido, Nombre):", cohorte03);
  });

  btnC4.addEventListener("click", () => {
    console.log("=== Cohorte 04 ===");
    fnMostrarAlumnosConsola(cohorte04);
    fnMostrarEnPantalla("📚 Cohorte 04 (ver consola para Apellido, Nombre):", cohorte04);
  });

  // 2) Unificar (Spread) + ejemplo Rest
  btnUnificar.addEventListener("click", () => {
    // Rest operator + destructuring
    const [primerAlumno, ...restoAlumnos] = totalAlumnos;
    console.log("=== Unificación con Spread Operator ===");
    console.log("Primer alumno del total:", primerAlumno);
    console.log("Cantidad de alumnos restantes:", restoAlumnos.length);
    console.log("Total de alumnos:", totalAlumnos.length);

    fnMostrarEnPantalla(
      `🔗 Total de alumnos (4 cohortes unificadas)\nTotal: ${totalAlumnos.length} alumnos`,
      totalAlumnos
    );
  });

  // 3) Filtros (aprobados / desaprobados con filter)
  // CORREGIDO: nota > 4
  btnFiltros.addEventListener("click", () => {
    const aprobados = fnObtenerAprobados(totalAlumnos);
    const desaprobados = fnObtenerDesaprobados(totalAlumnos);

    console.log("=== Filtrado de Alumnos ===");
    console.log("Aprobados (nota > 4):", aprobados);
    console.log("Desaprobados (nota <= 4):", desaprobados);

    const resumen = 
      `✅ APROBADOS (nota > 4): ${aprobados.length} alumnos\n` +
      `❌ DESAPROBADOS (nota ≤ 4): ${desaprobados.length} alumnos\n\n` +
      `--- DETALLES ---\n\n` +
      `APROBADOS:\n${fnConvertirAJson(aprobados)}\n\n` +
      `DESAPROBADOS:\n${fnConvertirAJson(desaprobados)}`;

    fnMostrarEnPantalla("🔍 Aprobados y Desaprobados (nota > 4):", resumen);
  });

  // 4) Ordenar por nota (sort)
  btnOrdenar.addEventListener("click", () => {
    const ordenados = fnOrdenarPorNotaAsc(totalAlumnos);
    console.log("=== Alumnos Ordenados por Nota (ascendente) ===");
    console.log(ordenados);
    fnMostrarEnPantalla("📈 Alumnos ordenados por nota (menor a mayor):", ordenados);
  });

  // 5) Buscar por DNI (find)
  btnBuscar.addEventListener("click", () => {
    const dniBuscado = inputDni.value.trim();

    if (dniBuscado === "") {
      fnMostrarEnPantalla("⚠️ Error", "Escribí un DNI para poder buscar.");
      return;
    }

    const alumnoEncontrado = fnBuscarAlumnoPorDni(totalAlumnos, dniBuscado);
    console.log("=== Búsqueda por DNI ===");
    console.log("DNI buscado:", dniBuscado);
    console.log("Resultado:", alumnoEncontrado);

    if (alumnoEncontrado) {
      const estado = alumnoEncontrado.nota_final > 4 ? "✅ APROBADO" : "❌ DESAPROBADO";
      const info = 
        `DNI: ${alumnoEncontrado.dni}\n` +
        `Nombre: ${alumnoEncontrado.nombre} ${alumnoEncontrado.apellido}\n` +
        `Nota Final: ${alumnoEncontrado.nota_final}\n` +
        `Estado: ${estado}`;
      
      fnMostrarEnPantalla("🔎 Alumno encontrado:", info);
    } else {
      fnMostrarEnPantalla(
        "❌ Alumno no encontrado",
        `No existe alumno con DNI: ${dniBuscado}\n\nDNIs disponibles:\n12345678, 23456789, 89012345, 67890124, etc.`
      );
    }
  });

  // 6) Contar aprobados con reduce (if / ternario)
  // CORREGIDO: nota > 4
  btnContar.addEventListener("click", () => {
    const cantIf = fnContarAprobadosIf(totalAlumnos);
    const cantTernario = fnContarAprobadosTernario(totalAlumnos);

    const mensaje =
      `=== CONTEO DE APROBADOS (reduce) ===\n\n` +
      `📊 Método A (reduce + if/else): ${cantIf} aprobados\n` +
      `📊 Método B (reduce + ternario): ${cantTernario} aprobados\n\n` +
      `✅ Ambos métodos coinciden: ${cantIf === cantTernario ? 'SÍ ✓' : 'NO ✗'}\n\n` +
      `📈 Total de alumnos: ${totalAlumnos.length}\n` +
      `📈 Porcentaje aprobados: ${((cantIf / totalAlumnos.length) * 100).toFixed(2)}%\n` +
      `📉 Porcentaje desaprobados: ${(((totalAlumnos.length - cantIf) / totalAlumnos.length) * 100).toFixed(2)}%\n\n` +
      `Criterio: nota > 4`;

    console.log(mensaje);
    fnMostrarEnPantalla("🏆 Cantidad de alumnos aprobados", mensaje);
  });

  // Event listener para buscar con Enter
  inputDni.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      btnBuscar.click();
    }
  });

  console.log("✅ Controlador cargado correctamente");
  console.log("📚 Total de alumnos cargados:", totalAlumnos.length);
});