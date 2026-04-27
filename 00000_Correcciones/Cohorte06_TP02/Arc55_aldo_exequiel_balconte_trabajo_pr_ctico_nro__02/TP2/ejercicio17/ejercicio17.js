// datos de las opciones
let cuotas1 = 24;
let interes1 = 0.22;

let cuotas2 = 36;
let interes2 = 0.33;

// monto base (lo dejo fijo para probar)
let monto = 10000;

// función simple para calcular
function calcular(principal, cuotas, interesAnual) {

  let interesMensual = interesAnual / 12;

  let cuota = 0;

  if (interesMensual > 0) {
    let factor = Math.pow(1 + interesMensual, cuotas);
    cuota = principal * (interesMensual * factor) / (factor - 1);
  } else {
    cuota = principal / cuotas;
  }

  let total = cuota * cuotas;
  let interesTotal = total - principal;

  return {
    cuota: cuota,
    total: total,
    interes: interesTotal
  };
}

// cálculos
let r1 = calcular(monto, cuotas1, interes1);
let r2 = calcular(monto, cuotas2, interes2);

// resultados
console.log("Monto:", monto);

console.log("\nOpción 1:");
console.log("Cuotas:", cuotas1);
console.log("Cuota mensual:", r1.cuota.toFixed(2));
console.log("Total:", r1.total.toFixed(2));
console.log("Interés:", r1.interes.toFixed(2));

console.log("\nOpción 2:");
console.log("Cuotas:", cuotas2);
console.log("Cuota mensual:", r2.cuota.toFixed(2));
console.log("Total:", r2.total.toFixed(2));
console.log("Interés:", r2.interes.toFixed(2));