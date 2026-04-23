/* Ejercicio Nro. 16:
El dueño de una concesionaria desea lanzar una promoción de venta de sus vehículos 0 km. que tiene en
STOCK. Para ello nos cuenta que tiene tres vehículos disponibles para la venta
y el precio de los mismos es el siguiente:
1) Amarok V6 (Oferta: 65.000.000)
2) TAOS 53.000.000
3) Polo Nuevo 47.000.000
El Gerente nos indica se debería realizar una aplicación debe permitir a los interesados (clientes)
1ro) Selecciona el Vehículo de interés
2do) Que el cliente pueda ingresar el dinero disponible para la compra del vehículo, sabiendo que el
dinero a entregar debe ser mayor al 30% del valor del vehículo y menor al importe total del mismo.
3ro) El Sistema debe calcular la financiación del dinero restante a pagar, sabiendo que la diferencia a
pagar sería equivalente al valor total del vehículo elegido menos el dinero a entregar; esa diferencia será
financiada de la siguiente forma:

 12 cuotas - 9.9 % ANUAL
 24 cuotas - 22 % ANUAL
 36 cuotas - 33 % ANUAL

Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el
DOM y cargar los datos de entrada por medio de prompt.
 */

console.log("Bienvenido a la concesionaria, tenemos los siguientes vehículos disponibles para la venta:");
console.log("1) Amarok V6 (Oferta: 65.000.000)");
console.log("2) TAOS 53.000.000");
console.log("3) Polo Nuevo 47.000.000");
let vehiculo = parseInt(prompt("Seleccione el vehículo de interés (1, 2 o 3):"));
let precioVehiculo;
switch (vehiculo) {
    case 1:
        // precio de la Amarok V6
        precioVehiculo = 65000000;
        break;
    case 2:
        // precio de la TAOS
        precioVehiculo = 53000000;
        break;
    case 3:
        // precio del Polo Nuevo
        precioVehiculo = 47000000;
        break;
    default:
        console.log("Opción no válida.");
        break;
}
if (precioVehiculo) {
    let dineroDisponible = parseFloat(prompt("Ingrese el dinero disponible para la compra del vehículo- Aclaracion: debe ser igual o mayor al 30% del valor del vehiculo el resto sera financiado:"));
    if (dineroDisponible >= precioVehiculo * 0.3 && dineroDisponible < precioVehiculo) {
        let diferencia = precioVehiculo - dineroDisponible;
        console.log(`El dinero restante a pagar es: ${diferencia}`);
        let cuotas = parseInt(prompt("Seleccione el número de cuotas para financiar (12, 24 o 36):"));
        let tasaAnual;
        switch (cuotas) {
            case 12:
                tasaAnual = 0.099;
                break;
            case 24:
                tasaAnual = 0.22;
                break;
            case 36:
                tasaAnual = 0.33;
                break;
            default:
                console.log("Opción no válida.");
                break;
        }
        if (tasaAnual) {
            let interes = diferencia * tasaAnual;
            let totalAPagar = diferencia + interes;
            let valorCuota = totalAPagar / cuotas;
            console.log(`El valor de cada cuota es: ${valorCuota}`);
        }
    } else {
        console.log("El dinero disponible no cumple con los requisitos.");
    }
}