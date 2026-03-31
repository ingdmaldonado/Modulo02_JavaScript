
let gastoEnergia = Number(prompt("Ingrese el gasto de energía (luz eléctrica):"));
console.log(`El gasto ingresado de energía es: ${gastoEnergia}`);
let gastoComunicacion = Number(prompt("Ingrese el gasto en comunicación (conectividad a internet):"));
console.log(`El gasto ingresadoen comunicación es: ${gastoComunicacion}`);
let gastoAgua = Number(prompt("Ingrese el gasto ocasionado por el servicio de agua potable:"));
console.log(`El gasto ingresadode agua es: ${gastoAgua}`);


let = incrementoEnergia = (gastoEnergia * 12.5) / 100;
console.log(`El 12.5% de incremento de energía a futuro es: ${incrementoEnergia}`);
let = incrementoComunicacion = (gastoComunicacion * 7) /100;
console.log(`El 7% de incremento de comunicación a futuro es: ${incrementoComunicacion}`);
let = incrementoAgua = (gastoAgua * 3) / 100;
console.log(`El 3% de incremento de agua a futuro es: ${incrementoAgua}`);

let = gastoFuturoEnergia = gastoEnergia + incrementoEnergia;
console.log(`El gasto futuro de energía es: ${gastoFuturoEnergia}`);
let = gastoFuturoComunicacion = gastoComunicacion + incrementoComunicacion;
console.log(`El gasto futuro de comunicación es: ${gastoFuturoComunicacion}`);
let = gastoFuturoAgua = gastoAgua + incrementoAgua;
console.log(`El gasto futuro de agua es: ${gastoFuturoAgua}`);
let = gastoFuturoTotal = gastoFuturoEnergia + gastoFuturoComunicacion + gastoFuturoAgua;
console.log(`El gasto futuro total es: ${gastoFuturoTotal}`);
