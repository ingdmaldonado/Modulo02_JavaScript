//Ejercicio N° 16


const opcionesFinanciacion =
 [
    { cuotas: 12, tasaAnual: 0.099, años: 1 },
    { cuotas: 24, tasaAnual: 0.22, años: 2 },
    { cuotas: 36, tasaAnual: 0.33, años: 3 }
];

const vehiculos = 
[
    { nombre: "Amarok V6", precio: 65000000 },
    { nombre: "TAOS", precio: 53000000 },
    { nombre: "Polo Nuevo", precio: 47000000 }
];


function main()
 {
   
   let seleccion = prompt("Seleccione el vehículo de interés:\n1. Amarok V6\n2. TAOS\n3. Polo Nuevo");

let vehiculo;

switch (seleccion) {
    case "1":
        vehiculo = vehiculos[0];
        break;
    case "2":
        vehiculo = vehiculos[1];
        break;
    case "3":
        vehiculo = vehiculos[2];
        break;
    default:
        console.log("Selección inválida. Saliendo del programa.");
        return;
}
    console.log(`Vehículo seleccionado: ${vehiculo.nombre} - Precio: $${vehiculo.precio.toLocaleString()}`);

    
    let dineroDisponible = parseFloat(prompt("Ingrese el dinero disponible para la compra:"));

    if (isNaN(dineroDisponible) || dineroDisponible <= vehiculo.precio * 0.3 || dineroDisponible >= vehiculo.precio) {
        console.log("El dinero debe ser mayor al 30% del precio y menor al precio total. Saliendo del programa.");
        return;
    }

    let resto = vehiculo.precio - dineroDisponible;
    console.log(`Dinero entregado: $${dineroDisponible.toLocaleString()}`);
    console.log(`Monto a financiar: $${resto.toLocaleString()}`);

    
    console.log("\nOpciones de financiación:");
    opcionesFinanciacion.forEach(opcion => {
        let totalConInteres = resto * (1 + opcion.tasaAnual * opcion.años);
        let cuotaMensual = totalConInteres / opcion.cuotas;
        console.log(`${opcion.cuotas} cuotas - ${opcion.tasaAnual * 100}% ANUAL: $${cuotaMensual.toFixed(2)} por mes`);
    });
}


main();