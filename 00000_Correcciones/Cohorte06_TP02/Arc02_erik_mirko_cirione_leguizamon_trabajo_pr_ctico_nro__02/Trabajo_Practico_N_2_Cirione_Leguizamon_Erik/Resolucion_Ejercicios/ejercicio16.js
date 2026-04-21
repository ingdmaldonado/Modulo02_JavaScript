

const AMAROKV6 = 65000000
const TAOS = 53000000;
const POLO = 47000000;

const INTERES12 = 9.9;
const INTERES24 = 22;
const INTERES36 = 33;

let entregaCiente;
let opcionCompra;
let topeMinimo;
let valorVehiculo;
let diferenciaRestante;
let cantidadCuotas;
let interesFinal;
let montoFinanciable;
let interesMensual;
let valorCuota;

let bandera;
let input;


do {

    entregaCiente = 0;
    opcionCompra = 0;
    topeMinimo = 0;
    valorVehiculo = 0;
    diferenciaRestante = 0;
    cantidadCuotas = 0;
    interesFinal = 0;
    montoFinanciable = 0;
    interesMensual = 0;

    valorCuota = 0;

    do {
        opcionCompra = Number(prompt(`Ingrese la opcion del vheiculo de interes: 
        1) AMAROK V6 , 
        2) TAOS , 
        3) POLO `));

        if (opcionCompra < 1 || opcionCompra > 3) {
            alert(`Opcion Invalida`);
        };

    } while (opcionCompra < 1 || opcionCompra > 3);

    do {
        entregaCiente = Number(prompt(`Ingrese el monto de la entrega (Dinero) del cliente:`));

        switch (opcionCompra) {
            case 1:
                topeMinimo = (AMAROKV6 / 100) * 30;
                valorVehiculo = AMAROKV6;
                break;

            case 2:
                topeMinimo = (TAOS / 100) * 30;
                valorVehiculo = TAOS;
                break;

            case 3:
                topeMinimo = (POLO / 100) * 30;
                valorVehiculo = POLO;
                break;
        }

        if (entregaCiente < 0) {
            alert(`El monto no puede ser menor a 0`);
        }

        if (entregaCiente < topeMinimo) {
            alert(`El monto de Dinero del Ciente es invferior al 30% del valor del vehiculo. Pruebe con un monto Superior`);
        }

        if (entregaCiente >= valorVehiculo) {
            alert(`El monto de Dinero del Ciente ha cubrido la totalidad del valor del vehiculo. Pruebe con un monto Menor`);
        }

    } while (entregaCiente < 0 || entregaCiente < topeMinimo || entregaCiente >= valorVehiculo);

    do {
        cantidadCuotas = Number(prompt(`Ingrese la cantidad de cuotas en las que desea Financiar: 
        12 cuotas - 9.9 % ANUAL , 
        24 cuotas - 22 % ANUAL , 
        36 cuotas - 33 % ANUAL`));

        if (![12, 24, 36].includes(cantidadCuotas)) {
            alert(`Opcion Invalida`);
        }

    } while (![12, 24, 36].includes(cantidadCuotas));


    switch (cantidadCuotas) {
        case 12:
            interesFinal = INTERES12 / 100;
            break;

        case 24:
            interesFinal = INTERES24 / 100;
            break;

        case 36:
            interesFinal = INTERES36 / 100;
            break;
    }

    diferenciaRestante = valorVehiculo - entregaCiente;

    interesMensual = interesFinal / 12;

    valorCuota = diferenciaRestante * (interesFinal * Math.pow(1 + interesFinal, cantidadCuotas)) / (Math.pow(1 + interesFinal, cantidadCuotas) - 1);

    /*para el historial*/
    console.log(`Monto total del Vehiculo: ${valorVehiculo}`);
    console.log(`Monto de la Entrega del Ciente: ${entregaCiente}`);
    console.log(`Diferencia: ${diferenciaRestante}`);
    console.log(`Cantidad de Cuotas: ${cantidadCuotas}`);
    console.log(`Interes Anual: % ${interesFinal * 100}`);
    console.log(`Monto por Cuota a abonar: ${valorCuota}`);
    console.log(`.......................................`);


    /*para visualizar en la pantalla*/
    let mensaje = [
        "----- RESUMEN DE FINANCIACIÓN -----",
        "",
        `Monto total del Vehiculo: $${valorVehiculo}`,
        `Entrega del Cliente: $${entregaCiente}`,
        `Diferencia: $${diferenciaRestante}`,
        "",
        `Cuotas: ${cantidadCuotas}`,
        `Interés Anual: ${(interesFinal * 100).toFixed(2)} %`,
        `Valor por Cuota: $${valorCuota.toFixed(2)}`,
        ""
    ].join("\n");

    alert(mensaje);

    do {
        input = prompt(`Desea Consultar Otro Presupuesto:
        0) No
        1) Si`);

        if (input === null || input.trim() === "") {
            alert("Debe ingresar un valor");
            continue;
        }

        bandera = Number(input);

        if (isNaN(bandera) || bandera < 0 || bandera > 1) {
            alert("Opcion Invalida");
            bandera = undefined;
            continue; // fuerza a repetir
        }

    } while (bandera === undefined);

} while (bandera !== 0);

alert(`Fin del programa`);



