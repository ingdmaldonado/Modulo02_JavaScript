let vehiculo = 0;
let precioVehiculo = 0;

let anticipo = 0;
let montoPendiente = 0;
let anticipoMinimo = 0;

let cuotas = 0;
let cantidadCuotas = 0;
let montoCuotas = 0;

let interes = 0;
let montoInteres = 0;

let procesoCancelado = true;
let ingresoErroneo = true;;
//Cuando se ingresa un valor se da por hecho que hay un error, solo cambia a false cuando se valida que el valor ingresado es correcto

vehiculo = Number(prompt("Seleccione vehículo: 1-Amarok V6, 2-TAOS, 3-Polo Nuevo, 0-Cancelar"));

//Cicla hasta que se ingrese un valor válido
while (ingresoErroneo)
{
    switch(vehiculo)
    {
        case 0: //cancelar
            ingresoErroneo = false;
            procesoCancelado = true;
            break;
        case 1: //Amarok V6
            precioVehiculo = 65000000;
            ingresoErroneo = false;
            procesoCancelado = false;
            break;
        case 2: //TAOS
            precioVehiculo = 53000000;
            ingresoErroneo = false;
            procesoCancelado = false;
            break;
        case 3: //Polo Nuevo
            precioVehiculo = 47000000;
            ingresoErroneo = false;
            procesoCancelado = false;
            break;
        default:
            vehiculo = Number(prompt("Error, ingrese vehículo válido: 1-Amarok V6, 2-TAOS, 3-Polo Nuevo, 0-Cancelar"));
    }
}

if(!procesoCancelado)
{
    anticipoMinimo = (30 * precioVehiculo) / 100;
    anticipo = Number(prompt(`El anticipo mínimo es de: ${anticipoMinimo}. Ingrese el monto del anticipo que desea entregar. Ingrese 0 para cancelar`));
    ingresoErroneo = true;
    procesoCancelado = true;
}

//cicla hasta que los valores cumplan las condiciones del primer if
while (ingresoErroneo)
{
    if(isNaN(anticipo))
    {
        anticipo = Number(prompt(`Usted ingresó un monto no válido. Ingrese un monto superior a ${anticipoMinimo} o 0 para cancelar`));
        continue;
    }
    if(!anticipo)
    {
        ingresoErroneo = false;
        procesoCancelado = true;
        continue;
    }
    if((anticipo > anticipoMinimo && anticipo < precioVehiculo))
    {
        ingresoErroneo = false;
        procesoCancelado = false;
        continue;
    }
    if(anticipo <= anticipoMinimo)
    {
        anticipo = Number(prompt(`El anticipo mínimo es de: ${anticipoMinimo}, usted ingresó un monto inferior. Ingrese un monto superior o 0 para cancelar`));
        continue;
    }
    if(anticipo >= precioVehiculo)
    {
        anticipo = Number(prompt(`El precio del vehiculo es de: ${precioVehiculo}, usted ingresó un monto superior. Ingrese un monto inferior o 0 para cancelar`));
    }
}

if(!procesoCancelado)
{
    montoPendiente = precioVehiculo - anticipo;
    cuotas = Number(prompt("Seleccione la cantidad de cuotas: 1-12 cuotas, 2-24 cuotas, 3-36 cuotas, 0-Cancelar"));
    ingresoErroneo = true;
}

while(ingresoErroneo)
{
    switch(cuotas)
    {
        case 0:
            ingresoErroneo = false;
            procesoCancelado = true;
            break;
        case 1: //12 cuotas
            interes = 9.9;
            montoInteres = (montoPendiente * interes) / 100;
            montoPendiente += montoInteres;
            cantidadCuotas = 12;
            ingresoErroneo = false;
            break;
        case 2: //24 cuotas
            interes = 22;
            montoInteres = ((montoPendiente * interes) / 100) * 2;
            montoPendiente += montoInteres;
            cantidadCuotas = 24;
            ingresoErroneo = false;
            break;
        case 3: //36 cuotas
            interes = 33;
            montoInteres = ((montoPendiente * interes) / 100) * 3;
            montoPendiente += montoInteres;
            cantidadCuotas = 36;
            ingresoErroneo = false;
            break;
        default:
            cuotas = Number(prompt("Error, opción inválida. Seleccione la cantidad de cuotas: 1-12 cuotas, 2-24 cuotas, 3-36 cuotas, 0-Cancelar"));
    }
}

if(!procesoCancelado){
    montoCuotas = montoPendiente / cantidadCuotas;

    console.log("Seleccionado:", vehiculo);
    console.log("Precio:", precioVehiculo);
    console.log("Anticipo minimo para la compra:", anticipoMinimo);
    console.log("Anticipo entregado:", anticipo);
    console.log("Cuotas seleccionadas:", cantidadCuotas);
    console.log("Interés anual:", interes, "%");
    console.log("Monto interés total:", montoInteres);
    console.log("Monto pendiente:", montoPendiente);
    console.log("Monto cuotas:", montoCuotas);
}
else
{
    console.log("Se canceló el proceso de evaluación");
}