/*
Ejercicio Nro. 03:
Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar.
El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en
comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua
potable. Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3%
respectivamente. El programa debe calcular el gasto futuro a pagar.
*/

// gastos del usuario
let luzElectrica = 0;
let internet = 0;
let agua = 0;

// solicitar gastos del usuario
luzElectrica = Number(prompt("Ingrese Valor de luz eléctrica"));
internet     = Number(prompt("Ingrese Valor de internet"));
agua         = Number(prompt("Ingrese Valor de agua potable"));

// gastos del MES ACTUAL
let gastosDelMes = luzElectrica + internet + agua;

// cálculos con incrementos (futuro)
let aumentoLuz       = luzElectrica * 1.125;
let aumentoInternet  = internet * 1.07;
let aumentoAgua      = agua * 1.03;
let totalDeGastoFuturo = aumentoLuz + aumentoInternet + aumentoAgua;

// mostrar resultados (como vos lo estabas haciendo, pero corregido)//
console.log(`El importe a pagar de Electricidad es: ${luzElectrica} y tendrá un incremento del 12,5% el próximo mes.`);
console.log(`El importe a pagar de Internet es: ${internet} y tendrá un incremento del 7% el próximo mes.`);
console.log(`El importe a pagar de Agua es: ${agua} y tendrá un incremento del 3% el próximo mes.`);
console.log(`El gasto total de servicios en el mes es de: ${gastosDelMes}`);

// GASTOS A FUTURO//
console.log(`El importe total a pagar del siguiente mes junto a sus incrementos es: ${totalDeGastoFuturo}`);