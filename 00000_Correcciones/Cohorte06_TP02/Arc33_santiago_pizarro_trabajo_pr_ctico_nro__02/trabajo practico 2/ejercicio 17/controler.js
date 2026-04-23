{
    // Inicialización de contadores
let totalXL = 0;
let totalL = 0;
let totalM = 0;
let totalDescartados = 0;

let continuar = true;

alert("Sistema de clasificación de huevos - Frigorífico");

while (continuar) {
  let entrada = prompt("Ingrese el peso del huevo en gramos (o presione Cancelar para finalizar):");

  // Si el usuario cancela, salimos del bucle
  if (entrada === null) {
    let confirmarSalida = confirm("¿Desea finalizar la carga de huevos?");
    if (confirmarSalida) {
      break;
    } else {
      continue;
    }
  }

  // Convertir a número y validar
  let peso = parseFloat(entrada);
  
  if (isNaN(peso) || peso <= 0) {
    alert("Error: Debe ingresar un número válido mayor a cero.");
    continue;
  }

  // Clasificar según peso
  if (peso >= 73) {
    totalXL++;
  } else if (peso >= 63 && peso < 73) {
    totalL++;
  } else if (peso >= 53 && peso < 63) {
    totalM++;
  } else {
    totalDescartados++;
  }

  // Preguntar si desea continuar
  let respuesta = prompt("¿Desea ingresar otro huevo? (s/n)");
  if (respuesta === null) {
    continuar = false;
  } else {
    respuesta = respuesta.toLowerCase();
    if (respuesta !== "s" && respuesta !== "si" && respuesta !== "sí") {
      continuar = false;
    }
  }
}

// Cálculo de totales
let totalHuevos = totalXL + totalL + totalM + totalDescartados;

// Calcular porcentajes (evitar división por cero)
let porcXL = totalHuevos > 0 ? (totalXL / totalHuevos * 100) : 0;
let porcL = totalHuevos > 0 ? (totalL / totalHuevos * 100) : 0;
let porcM = totalHuevos > 0 ? (totalM / totalHuevos * 100) : 0;

// Construir mensaje de resultados con template strings
let mensaje = `
===== RESUMEN DE CLASIFICACIÓN =====

Cantidad total de huevos procesados: ${totalHuevos}

Huevos XL (>=73 g): ${totalXL} (${porcXL.toFixed(2)}%)
Huevos L (63-72 g): ${totalL} (${porcL.toFixed(2)}%)
Huevos M (53-62 g): ${totalM} (${porcM.toFixed(2)}%)
Huevos descartados (<53 g): ${totalDescartados}
`;

alert(mensaje);
console.log(mensaje);

}