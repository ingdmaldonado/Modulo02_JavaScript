// Ingreso de los gastos actuales
let luz = Number(prompt("Ingrese el gasto actual de luz electrica"));
let internet = Number(prompt("Ingrese el gasto actual de internet"));
let agua = Number(prompt("Ingrese el gasto actual de agua potable"));

// Cálculo de los aumentos de cada unp
let aumentoLuz = (luz * 12.5) / 100;
let aumentoInternet = (internet * 7) / 100;
let aumentoAgua = (agua * 3) / 100;

// Cálculo de los gastos futuros 
let futuroLuz = luz + aumentoLuz;
let futuroInternet = internet + aumentoInternet;
let futuroAgua = agua + aumentoAgua;

// Calculamos el gasto total 
let totalFuturo = futuroLuz + futuroInternet + futuroAgua;

// Muestro los resultados en consola
console.log("--- Gastos estimados para el proximo mes ---");
console.log("Luz (+12.5%): $" + futuroLuz);
console.log("Internet (+7%): $" + futuroInternet);
console.log("Agua (+3%): $" + futuroAgua);
console.log("Gasto TOTAL a pagar el proximo mes: $" + totalFuturo);