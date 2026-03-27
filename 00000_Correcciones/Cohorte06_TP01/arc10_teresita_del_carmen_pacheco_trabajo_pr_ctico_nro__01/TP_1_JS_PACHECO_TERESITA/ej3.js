// Ingreso de datos
let luz = parseFloat(prompt("Gasto en luz:"));
let internet = parseFloat(prompt("Gasto en internet:"));
let agua = parseFloat(prompt("Gasto en agua:"));

// Cálculo de aumentos (fórmulas)
let nuevoLuz = luz * 1.125;       // aumento 12,5%
let nuevoInternet = internet * 1.07; // aumento 7%
let nuevoAgua = agua * 1.03;      // aumento 3%

// Cálculo total (fórmula)
let total = nuevoLuz + nuevoInternet + nuevoAgua;

// Mostrar resultados
console.log("Luz con aumento:", nuevoLuz);
console.log("Internet con aumento:", nuevoInternet);
console.log("Agua con aumento:", nuevoAgua);
console.log("Total a pagar el próximo mes:", total);