let energia = 0;
let comunicacion = 0;
let agua = 0;
energia = (Number(prompt("Por favor, ingrese los gastos de energía")));
comunicacion = (Number(prompt("por favor, ingrese los gastos de comunicacion")));
agua = Number(prompt("Por favor, ingrese los gastos de agua potable"));

console.log("Los gastos de energía se incrementarán un 12.5% " + energia * 1.125);
console.log("Los gastos de comunicación se incrementarán un 7% " + comunicacion * 1.07);
console.log("Los gastos de agua potable se incrementarán un 3% "+ agua * 1.03 );