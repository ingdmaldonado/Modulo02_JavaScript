// ============================================
// EJERCICIO 03 - Servicios del hogar
// ============================================

let luz      = parseFloat(prompt("Ingrese el gasto actual en Luz eléctrica:"));
let internet = parseFloat(prompt("Ingrese el gasto actual en Internet:"));
let agua     = parseFloat(prompt("Ingrese el gasto actual en Agua:"));

// Incrementos: luz +12.5%, internet +7%, agua +3%
let luzFutura      = luz      * 1.125;
let internetFutura = internet * 1.07;
let aguaFutura     = agua     * 1.03;

let totalActual = luz + internet + agua;
let totalFuturo = luzFutura + internetFutura + aguaFutura;

console.log("=== EJERCICIO 03 ===");
console.log("--- Gastos actuales ---");
console.log("Luz:      $", luz);
console.log("Internet: $", internet);
console.log("Agua:     $", agua);
console.log("Total actual: $", totalActual);
console.log("--- Gastos próximo mes ---");
console.log("Luz      (+12.5%): $", luzFutura);
console.log("Internet (+7%):    $", internetFutura);
console.log("Agua     (+3%):    $", aguaFutura);
console.log("Total futuro: $", totalFuturo);
