{
    // Variables para contar categorías y errores
let desaprobados = 0;
let aprobados = 0;
let muyBuenos = 0;
let excelentes = 0;
let errores = 0;

let continuar = true;

alert("Bienvenido al sistema de carga de notas de trabajos finales.");

while (continuar) {
  let entrada = prompt("Ingrese la nota del trabajo final (0 a 10):");

  // Si el usuario cancela, preguntamos si desea salir
  if (entrada === null) {
    let salir = confirm("¿Desea finalizar la carga de notas?");
    if (salir) {
      break;
    } else {
      continue;
    }
  }

  // Convertir a número
  let nota = Number(entrada);

  // Validar si es un número válido (no NaN) y si está dentro del rango permitido
  if (isNaN(nota) || nota < 0 || nota > 10) {
    errores++;
    alert("Error: Nota inválida. Debe ser un número entre 0 y 10.");
  } else {
    // Clasificar según la nota
    if (nota >= 0 && nota <= 4) {
      desaprobados++;
      alert("Nota registrada: Desaprobado.");
    } else if (nota > 4 && nota <= 7) {
      aprobados++;
      alert("Nota registrada: Aprobado.");
    } else if (nota > 7 && nota < 10) {
      muyBuenos++;
      alert("Nota registrada: Muy bueno.");
    } else if (nota === 10) {
      excelentes++;
      alert("Nota registrada: Excelente.");
    }
    // Nota: el caso nota >10 o <0 ya se filtró antes, no debería llegar aquí.
  }

  // Preguntar si desea continuar cargando notas
  let respuesta = prompt("¿Desea cargar otra nota? (s/n)").toLowerCase();
  if (respuesta !== "s" && respuesta !== "si" && respuesta !== "sí") {
    continuar = false;
  }
}

// Mostrar resumen final
let mensaje = "===== RESUMEN DE NOTAS =====\n\n";
mensaje += `Trabajos Desaprobados (0-4): ${desaprobados}\n`;
mensaje += `Trabajos Aprobados (>4-7): ${aprobados}\n`;
mensaje += `Trabajos Muy Buenos (>7-<10): ${muyBuenos}\n`;
mensaje += `Trabajos Excelentes (10): ${excelentes}\n`;
mensaje += `\nCantidad de errores de ingreso: ${errores}\n`;
mensaje += `Total de notas válidas cargadas: ${desaprobados + aprobados + muyBuenos + excelentes}`;

alert(mensaje);
console.log(mensaje);
}