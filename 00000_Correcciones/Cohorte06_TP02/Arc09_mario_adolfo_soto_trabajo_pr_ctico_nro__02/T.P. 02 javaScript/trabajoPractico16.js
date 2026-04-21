/* El dueño de una concesionaria desea lanzar una promoción de venta de sus vehículos 0 km. que tiene en
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
DOM y cargar los datos de entrada por medio de prompt */
{
    function financiacion(precioVehiculo,depositoMinimo)
    {

    let porcetajeDeuda= (depositoMinimo /precioVehiculo)*100;
        console.log(porcetajeDeuda);
    let precioAFinanciar =0;
    
    if((porcetajeDeuda>30) && (depositoMinimo<precioVehiculo))
    {
        precioAFinanciar = precioVehiculo - depositoMinimo ;
        return precioAFinanciar;
    }
    
    else {console.log(`no cumple con la condicion del 30%`);
        return 0;
    }
   
    

    }


}


        //programa principal
{
 
    let vehiculo = Number(prompt("Ingrese el vehículo: 1 Amarok - 2 Taos - 3 Polo"));

let depositoMinimo = Number(prompt("Ingrese el anticipo"));

let precioAmarok = 65000000;
let precioTaos = 53000000;
let precioPolo = 47000000;

let deuda = 0;
let interes = 0;
let total = 0;
let cuota = 0;
let cuotas = Number(prompt("Ingrese cuotas: 12, 24 o 36"));
let porcentajeInteres = 0;


switch (vehiculo) {

    case 1:
        deuda = financiacion(precioAmarok, depositoMinimo);
        break;

    case 2:
        deuda = financiacion(precioTaos, depositoMinimo);
        break;

    case 3:
        deuda = financiacion(precioPolo, depositoMinimo);
        break;

    default:
        console.log("Vehículo inválido");
        break;
}


// VALIDAR Y CALCULAR FINANCIACIÓN
if (deuda > 0) {

    // elegir interés según cuotas
    switch (cuotas) {
        case 12:
            porcentajeInteres = 9.9;
            break;
        case 24:
            porcentajeInteres = 22;
            break;
        case 36:
            porcentajeInteres = 33;
            break;
        default:
            console.log("Cuotas inválidas");
            break;
    }

    interes = deuda * porcentajeInteres / 100;
    total = deuda + interes;
    cuota = total / cuotas;

    console.log(`Deuda: ${deuda}`);
    console.log(`Interés aplicado: ${porcentajeInteres}%`);
    console.log(`Total financiado: ${total}`);
    console.log(`Pagará ${cuotas} cuotas de ${cuota}`);

} else {
    console.log("No se puede financiar la operación");
}

}            
            