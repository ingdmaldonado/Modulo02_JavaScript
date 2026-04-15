/*Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar.
El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos encomunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de aguapotable. 
Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3% respectivamente. El programa debe calcular el gasto futuro a pagar*/
{

let pagoLuz = 0;
let pagoConectividad = 0; 
let pagoAgua = 0;
let incrementoLuz = 0;
let incrementoConectividad = 0;
let incrementoAgua = 0;

pagoLuz = Number(prompt('Ingrese el valor abonado actualmente de Luz:'));
console.log(`Pago mes acutal Luz:`, pagoLuz);
incrementoLuz = (pagoLuz *12.5)/100;
console.log (`Importe Incremento Luz: ${incrementoLuz}, Total a pagar próximo mes de Luz: ${pagoLuz + incrementoLuz}`);

pagoConectividad = Number(prompt('Ingrese el valor abonado actualmente Comunicación:'));
console.log(`Pago mes acutal Conectividad:`, pagoConectividad);
incrementoConectividad = (pagoConectividad * 5)/100;
console.log (`Importe Incremento Conectividad: ${incrementoConectividad}, Total a pagar próximo mes de Conectividad: ${pagoConectividad + incrementoConectividad}`);

pagoAgua = Number(prompt('Ingrese el valor abonado actualmente de Agua:'));
console.log(`Pago mes acutal Agua:`, pagoAgua);
incrementoAgua = (pagoAgua *3)/100;
console.log (`Importe Incremento Agua: ${incrementoAgua}, Total a pagar próximo mes de Luz: ${pagoAgua + incrementoAgua}`);

}

