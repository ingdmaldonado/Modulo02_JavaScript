
let gastosLuz = 0;
let gastosInternet = 0;
let gastosAgua =0;


let aumentoLuz= 0;
let aumentoInternet = 0;
let aumentoAgua = 0;


let aumentoGastosLuz = 0;
let aumentoGastosInternet = 0;
let aumentoGastosAgua = 0;


// gastos de energía (luz eléctrica)

gastosLuz = Number(prompt`Ingrese gastos de energía (luz eléctrica)`);

console.log (gastosLuz);



aumentoLuz = (gastosLuz * 12.5)/100;

console.log (`Aumento: ${aumentoLuz}`);




aumentoGastosLuz = gastosLuz + aumentoLuz;

console.log (`Los gastos de energia futuro a pagar es: ${aumentoGastosLuz}`);




//gastos en comunicación (conectividad a internet)

gastosInternet = Number (prompt`Ingrese gastos en comunicación (conectividad a internet)`);

console.log (gastosInternet);



aumentoInternet = (gastosInternet * 7)/100;

console.log (`Aumento: ${aumentoInternet}`);




aumentoGastosInternet = gastosInternet + aumentoInternet;

console.log (`Los gastos en comunicación futuro a pagar es: ${aumentoGastosInternet}`);




//gastos ocasionados por el servicio de agua potable

gastosAgua = Number (prompt `Imgrese gastos Ocasionales ( Agua potable)`);

console.log (gastosAgua);



aumentoAgua = (gastosAgua * 3)/100;

console.log (`Aumento: ${aumentoAgua}`);



aumentoGastosAgua = gastosAgua + aumentoAgua;

console.log (`Los gastos ocasionados por el servicio de agua potable futuro a pagar es: ${aumentoGastosAgua}`);