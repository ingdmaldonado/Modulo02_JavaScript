/*
Ejercicio Nro. 03:
Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar.
El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en
comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua
potable. Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3%
respectivamente. El programa debe calcular el gasto futuro a pagar.
*/

// Gastos del usuario
let gastoEnergia = 0;
let gastoConectividad = 0;
let gastoAguaPotable = 0;

// Solicitar gastos al usuario
gastoEnergia = Number(prompt('Ingrese gasto de LUZ ELECTRICA:'));
gastoConectividad = Number(prompt('Ingrese gasto de INTERNET:'));
gastoAguaPotable = Number(prompt('Ingrese gasto de AGUA POTABLE:'));

console.log('GASTOS ACTUALES:');
console.log(`Gasto de LUZ ELECTRICA: ${gastoEnergia}`);
console.log(`Gasto de INTERNET: ${gastoConectividad}`);
console.log(`Gasto de AGUA POTABLE: ${gastoAguaPotable}`);

// Calcular incrementos
let aumentoEnergia = (gastoEnergia * 12.5)/100;
let aumentoConectividad = (gastoConectividad * 7)/100;
let aumentoAguaPotable = (gastoAguaPotable * 3)/100;

console.log('INCREMENTOS:');
console.log(`Aumento de LUZ ELECTRICA: ${aumentoEnergia}`);
console.log(`Aumento de INTERNET: ${aumentoConectividad}`);
console.log(`Aumento de AGUA POTABLE: ${aumentoAguaPotable}`);

// Gastos Fututros
let gastoFuturoEnergia = gastoEnergia + aumentoEnergia;
let gastoFuturoConectividad = gastoConectividad + aumentoConectividad;
let gastoFuturoAguaPotable = gastoAguaPotable + aumentoAguaPotable;

console.log('GASTOS FUTUROS:');
console.log(`Gasto futuro de LUZ ELECTRICA: ${gastoFuturoEnergia}`);
console.log(`Gasto futuro de CONECTIVIDAD: ${gastoFuturoConectividad}`);
console.log(`Gasto futuro de AGUA POTABLE: ${gastoFuturoAguaPotable}`);

