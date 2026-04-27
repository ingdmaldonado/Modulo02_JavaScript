{

console.log('Ejercicio 14 TPN2 - MODULO 2')


let camion = 22000;
let camioneta = 12000;
let automovil = 4000;
let motos = 1500;


let cantautomovil = 0;
let cantcamioneta = 0;
let cantcamion = 0;
let cantmotos = 0;


let totalautomovil = 0;
let totalcamioneta = 0;
let totalcamion = 0;
let totalmotos = 0;

let opcion = 0;
let salir = 0;
let ingreso = 0;
let barrera = 0;
let idempleado = 0;

console.log('Bienvenido al sistema de cobro de Peajes del sur S.A.');

// VALIDACIÓN EMPLEADO
idempleado = Number(prompt('Ingrese su código de empleado'));

while (idempleado !== 111 && idempleado !== 222 && idempleado !== 333) {
    console.log('Código incorrecto, intente nuevamente');
    idempleado = Number(prompt('Ingrese su código de empleado'));
}

// INGRESO AL SISTEMA
ingreso = Number(prompt(
    'Ingrese 1 para comenzar o 0 para salir'
));

while (ingreso === 1) {

    opcion = Number(prompt(
        'Seleccione tipo de vehículo:\n' +
        '1 - Automóvil\n' +
        '2 - Camioneta\n' +
        '3 - Camión\n' +
        '4 - Moto\n' +
        '5 - Salir\n'
    ));

    switch (opcion) {

        case 1:
            console.log(`Automóvil - Precio: $${automovil}`);
            barrera = Number(prompt('Presione 1 para imprimir ticket y levantar barrera'));
            if (barrera === 1) {
                console.log('Imprimiendo ticket...');
                console.log('Barrera levantada');
                cantautomovil++;
                totalautomovil += automovil;
            } else {
                console.log('Operación cancelada');
            }
            break;

        case 2:
            console.log(`Camioneta - Precio: $${camioneta}`);
            barrera = Number(prompt('Presione 1 para imprimir ticket y levantar barrera'));
            if (barrera === 1) {
                console.log('Imprimiendo ticket...');
                console.log('Barrera levantada');
                cantcamioneta++;
                totalcamioneta += camioneta;
            } else {
                console.log('Operación cancelada');
            }
            break;

        case 3:
            console.log(`Camión - Precio: $${camion}`);
            barrera = Number(prompt('Presione 1 para imprimir ticket y levantar barrera'));
            if (barrera === 1) {
                console.log('Imprimiendo ticket...');
                console.log('Barrera levantada');
                cantcamion++;
                totalcamion += camion;
            } else {
                console.log('Operación cancelada');
            }
            break;

        case 4:
            console.log(`Moto - Precio: $${motos}`);
            barrera = Number(prompt('Presione 1 para imprimir ticket y levantar barrera'));
            if (barrera === 1) {
                console.log('Imprimiendo ticket...');
                console.log('Barrera levantada');
                cantmotos++;
                totalmotos += motos;
            } else {
                console.log('Operación cancelada');
            }
            break;

        case 5:
            salir = Number(prompt('Presione 2 para salir o 1 para continuar'));
            if (salir === 2) {
                ingreso = 0;
            }
            break;

        default:
            console.log('Ingrese una opción válida');
            break;
    }
}

// CIERRE DE CAJA
console.log('Cierre de caja...');

console.log(`Cantidad de automóviles: ${cantautomovil}`);
console.log(`Total automóviles: $${totalautomovil}`);

console.log(`Cantidad de camionetas: ${cantcamioneta}`);
console.log(`Total camionetas: $${totalcamioneta}`);

console.log(`Cantidad de camiones: ${cantcamion}`);
console.log(`Total camiones: $${totalcamion}`);

console.log(`Cantidad de motos: ${cantmotos}`);
console.log(`Total motos: $${totalmotos}`);

// TOTAL GENERAL
let totalGeneral = totalautomovil + totalcamioneta + totalcamion + totalmotos;
console.log(`TOTAL GENERAL: $${totalGeneral}`);

// COMPARACIÓN
if (cantautomovil > cantcamioneta) {
    console.log('Pasaron más automóviles');
} else if (cantcamioneta > cantautomovil) {
    console.log('Pasaron más camionetas');
} else {
    console.log('Pasaron la misma cantidad de automóviles y camionetas');
}

}