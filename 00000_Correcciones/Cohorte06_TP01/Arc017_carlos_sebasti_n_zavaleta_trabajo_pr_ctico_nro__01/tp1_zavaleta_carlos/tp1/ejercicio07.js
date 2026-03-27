let codigo = 0;
codigo = Number (prompt("Ingrese código 1, 2 o 3"));
let cantidad = 0;
cantidad = Number(prompt("Por favor ingrese la cantidad a comprar "));

let importeCobrar = 0;

let precioCod1 = 38000;
let precioCod2 = 31000;
let precioCod3 = 46000;

let precioCod1mas5 = 36000;
let precioCod2mas5 = 29000;
let precioCod3mas5 = 44000;

let precioCod1mas11 = 34000;
let precioCod2mas11 = 27000;
let precioCod3mas11 = 42000;

if (codigo == 1){
    if (cantidad < 5){
        importeCobrar = precioCod1 * cantidad;
    }
    if (cantidad >= 5){
        importeCobrar = precioCod1mas5 * cantidad;
    }
    if (cantidad >= 11 ){
        importeCobrar = precioCod2mas11 * cantidad;
    }
}
if (codigo == 2){
    if (cantidad < 5){
        importeCobrar = precioCod2 * cantidad;
    }
    if (cantidad >= 5){
        importeCobrar = precioCod2mas5 * cantidad;
    }
    if (cantidad >= 11){
        importeCobrar = precioCod2mas11 * cantidad;
    }
}
if (codigo == 3){
    if (cantidad < 5){
        importeCobrar = precioCod3 * cantidad;
    }
    if (cantidad >= 5){
        importeCobrar = precioCod1mas5 * cantidad;
    }
    if (cantidad >= 11){
        importeCobrar = precioCod3mas11 * cantidad;
    }
}
console.log("Seleccionó la opción " + codigo);
console.log("Seleccionó la cantidad " + cantidad);
console.log("El importe a cobrar es: " + importeCobrar);
