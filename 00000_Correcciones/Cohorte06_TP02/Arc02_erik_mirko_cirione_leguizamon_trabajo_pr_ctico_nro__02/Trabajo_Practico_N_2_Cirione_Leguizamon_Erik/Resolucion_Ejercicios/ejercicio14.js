

const CAMION = 22000;
const CAMIONETA = 12000;
const AUTOMOVIL = 4000;
const MOTOS = 1500;

let cantidadCamiones = 0;
let totalCamiones = 0;

let cantidadCamionetas = 0;
let totalCamionetas = 0;

let cantidadAutomoviles = 0;
let totalAutomoviles = 0;

let cantidadMotos = 0;
let totalMotos = 0;

let totalGeneral = 0;

let cierreTurno = 0;
let tipoTransporte = 0;

/*bucle que controla cada ves que pasa un trasporte*/




do {

    do {
        tipoTransporte = Number(prompt(`Ingrese el tipo de Transporte: 1) Camion , 2) Camioneta , 3) Automivil , 4) Motos`));

        if (tipoTransporte <= 0 || tipoTransporte > 4) {
            alert(`Opcion Invalida`);
        }

    } while (tipoTransporte <= 0 || tipoTransporte > 4);

    switch (tipoTransporte) {
        case 1:
            cantidadCamiones++;
            totalCamiones = totalCamiones + CAMION;
            totalGeneral = totalGeneral + CAMION;
            break;

        case 2:
            cantidadCamionetas++;
            totalCamionetas = totalCamionetas + CAMIONETA;
            totalGeneral = totalGeneral + CAMIONETA;
            break;

        case 3:
            cantidadAutomoviles++;
            totalAutomoviles = totalAutomoviles + AUTOMOVIL;
            totalGeneral = totalGeneral + AUTOMOVIL;
            break;

        case 4:
            cantidadMotos++;
            totalMotos = totalMotos + MOTOS;
            totalGeneral = totalGeneral + MOTOS;
            break;

    }


    do {
        cierreTurno = Number(prompt(`Desea cerrar el turno? 1)SI _ 2)NO`));

        if (cierreTurno != 1 && cierreTurno != 2) {
            alert(`Ingrese un Opcion Valida`);
        }

    } while (cierreTurno != 1 && cierreTurno != 2);

} while (cierreTurno == 2);

alert(`se cerro el turno`);

console.log(`La cantidad de Camiones es de: ${cantidadCamiones} y el monto total de los autos es de: $${totalCamiones}`);
console.log(`La cantidad de Camionetas es de: ${cantidadCamionetas} y el monto total de los autos es de: $${totalCamionetas}`);
console.log(`La cantidad de Autos es de: ${cantidadAutomoviles} y el monto total de los autos es de: $${totalAutomoviles}`);
console.log(`La cantidad de Motos es de: ${cantidadMotos} y el monto total de los autos es de: $${totalMotos}`);
console.log(`El total General Recaudado en el turno es de: $${totalGeneral}`);

