/*
Ejercicio Nro. 16:
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

// variables

let precioAmarok=65000000;
let precioTaos=53000000;
let precioPolo=47000000;

let cuota12=0.099;
let cuota24=0.22;
let cuota36=0.33;

// bucle principal
let continuar = true;

while (continuar === true) {
    // 1ro) Seleccionar vehículo
    let opcionVehiculoTexto = prompt("CONCESIONARIA - PROMOCIÓN 0 KM\n\nSeleccione un vehículo:\n1) Amarok V6 - $65.000.000\n2) TAOS - $53.000.000\n3) Polo Nuevo - $47.000.000");
    
    // cancelar para cerrar el programa
    if (opcionVehiculoTexto === null) {
        continuar = false;
        break;
    }
    
    let opcionVehiculo = Number(opcionVehiculoTexto);

    // validar selección de vehículo
    let vehiculoSeleccionado = "";
    let precioVehiculo = 0;

    if (opcionVehiculo === 1) {
        vehiculoSeleccionado = "Amarok V6";
        precioVehiculo = precioAmarok;
    } else if (opcionVehiculo === 2) {
        vehiculoSeleccionado = "TAOS";
        precioVehiculo = precioTaos;
    } else if (opcionVehiculo === 3) {
        vehiculoSeleccionado = "Polo Nuevo";
        precioVehiculo = precioPolo;
    } else {
        alert("Opción no válida. Intente nuevamente.");
        continue;
    }

    // 2do) Ingresar dinero disponible
    let minimo30 = precioVehiculo * 0.30;
    let dineroDisponibleTexto = prompt(`Ha seleccionado: ${vehiculoSeleccionado} - $${precioVehiculo}\n\nIngrese el dinero disponible para la compra:\n(Mínimo 30%: $${minimo30})`);
    
    // cancelar para cerrar el programa
    if (dineroDisponibleTexto === null) {
        continuar = false;
        break;
    }
    
    let dineroDisponible = Number(dineroDisponibleTexto);

    // validar dinero ingresado
    if (dineroDisponible <= minimo30 || dineroDisponible >= precioVehiculo) {
        alert(`Error: El dinero debe ser mayor a $${minimo30} y menor a $${precioVehiculo}`);
        continue;
    }

    // 3ro) Calcular financiación
    let diferenciaPagar = precioVehiculo - dineroDisponible;

    // seleccionar plan de financiación
    let opcionPlanTexto = prompt(`Vehículo: ${vehiculoSeleccionado}\nDinero a entregar: $${dineroDisponible}\nDiferencia a financiar: $${diferenciaPagar}\n\nSeleccione un plan de financiación:\n1) 12 cuotas - 9.9% ANUAL\n2) 24 cuotas - 22% ANUAL\n3) 36 cuotas - 33% ANUAL`);
    
    // cancelar para cerrar el programa
    if (opcionPlanTexto === null) {
        continuar = false;
        break;
    }
    
    let opcionPlan = Number(opcionPlanTexto);

    let cantidadCuotas = 0;
    let tasaAnual = 0;
    let descripcionPlan = "";

    if (opcionPlan === 1) {
        cantidadCuotas = 12;
        tasaAnual = 0.099;
        descripcionPlan = "12 cuotas al 9.9% anual";
    } else if (opcionPlan === 2) {
        cantidadCuotas = 24;
        tasaAnual = 0.22;
        descripcionPlan = "24 cuotas al 22% anual";
    } else if (opcionPlan === 3) {
        cantidadCuotas = 36;
        tasaAnual = 0.33;
        descripcionPlan = "36 cuotas al 33% anual";
    } else {
        alert("Opción no válida. Intente nuevamente.");
        continue;
    }

    // calcular interés total y cuota mensual
    let interesTotal = diferenciaPagar * tasaAnual;
    let totalAPagar = diferenciaPagar + interesTotal;
    let cuotaMensual = totalAPagar / cantidadCuotas;

    // mostrar resumen
    console.log("RESUMEN DE LA COMPRA");
    console.log("========================================");
    console.log(`Vehículo: ${vehiculoSeleccionado}`);
    console.log(`Precio total: $${precioVehiculo}`);
    console.log(`Dinero a entregar: $${dineroDisponible}`);
    console.log(`Diferencia a financiar: $${diferenciaPagar}`);
    console.log(`Plan seleccionado: ${descripcionPlan}`);
    console.log(`Cuota mensual: $${cuotaMensual.toFixed(2)}`);
    console.log("========================================");
    console.log(`Total de intereses: $${interesTotal.toFixed(2)}`);
    console.log(`Total a pagar en cuotas: $${totalAPagar.toFixed(2)}`);
    console.log(`Monto total de la compra: $${(dineroDisponible + totalAPagar).toFixed(2)}`);
    console.log("========================================");

    // preguntar si desea continuar
    let respuesta = prompt("¿Desea realizar otra compra? (s/n)");
    
    // cancelar para cerrar el programa
    if (respuesta === null) {
        continuar = false;
    } else if (respuesta === "n" || respuesta === "N") {
        continuar = false;
        console.log("Gracias por su compra. ¡Bienvenido a nuestros vehículos 0 km!");
    }
}

