/*Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar. 
El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en 
comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua 
potable. Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3% 
respectivamente. El programa debe calcular el gasto futuro a pagar.  */

{

let luzElectrica = 0;
luzElectrica=Number(prompt("Ingrese el monto de luz electrica"));

let conectividadAInternet = 0;
conectividadAInternet=Number(prompt("ingrese el monto conectividad a internet"));

let servicioDeAgua = 0;
servicioDeAgua=Number(prompt("ingrese el monto servicio de agua"));


//pago por servicios
console.log(`importe de luz electrica:${luzElectrica}`);
console.log(`importe de servicio de internet:${conectividadAInternet}`);
console.log(`importe de servicio de agua:${servicioDeAgua}`);

//incremento
let luzConIncremento = (luzElectrica * 12.5)/100;
console.log(`importe de luz electrica con aumento:${luzConIncremento}`);

let conectividadConIncremento = (conectividadAInternet *7)/100;
console.log(`importe de luz electrica con aumento:${conectividadConIncremento}`);

let aguaConIncremento = (servicioDeAgua * 3)/100;

console.log(`importe de luz electrica con aumento:${aguaConIncremento}`);

//total a pagar con aumento 
let totalApagarLuz = luzElectrica + luzConIncremento;
console.log(`el total a pagar con aumento es: ${totalApagarLuz}`);

let totalApagarConectividad= conectividadAInternet + conectividadConIncremento;
console.log(`el total a pagar con aumento es: ${totalApagarConectividad}`);

let totalApagarAgua= servicioDeAgua + aguaConIncremento;
console.log(`el total a pagar con aumento es: ${totalApagarAgua}`);

}
