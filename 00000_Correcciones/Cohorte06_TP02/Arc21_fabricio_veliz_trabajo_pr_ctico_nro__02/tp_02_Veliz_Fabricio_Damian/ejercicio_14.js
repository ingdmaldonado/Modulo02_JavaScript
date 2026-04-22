/*
Ejercicio Nro. 14:
Una empresa de Peajes del SUR S.A. desea realizar una aplicación que permita cobrar y otorgar los
comprobantes a los clientes. 
CAMION = 22.000,00 | CAMIONETA = 12.000,00 | AUTOMOVIL = 4.000,00 | MOTOS = 1.500,00
Al finalizar la jornada realizar el cierre mostrando cantidades y totales por categoría, y el Total General.
Comparar si pasaron más camionetas que autos o al revés.
*/
{
    let precioCamion = 22000;
    let precioCamioneta = 12000;
    let precioAuto = 4000;
    let precioMoto = 1500;

    let cantCamiones = 0;
    let totalCamiones = 0;
    let cantCamionetas = 0;
    let totalCamionetas = 0;
    let cantAutos = 0;
    let totalAutos = 0;
    let cantMotos = 0;
    let totalMotos = 0;
    let totalGeneral = 0;

    let opcion = 0;
    let continuar = "s";
    let comparacion = "";

    while (continuar.toLowerCase() === "s") {
        opcion = Number(prompt("Ingrese tipo de vehículo:\n1: Camión\n2: Camioneta\n3: Automóvil\n4: Moto"));

        switch (opcion) {
            case 1:
                cantCamiones++;
                totalCamiones += precioCamion;
                break;
            case 2:
                cantCamionetas++;
                totalCamionetas += precioCamioneta;
                break;
            case 3:
                cantAutos++;
                totalAutos += precioAuto;
                break;
            case 4:
                cantMotos++;
                totalMotos += precioMoto;
                break;
            default:
                console.log("Opción incorrecta.");
                break;
        }

        continuar = prompt("¿Desea ingresar otro vehículo? (s/n)");
    }

    totalGeneral = totalCamiones + totalCamionetas + totalAutos + totalMotos;

    if (cantCamionetas > cantAutos) {
        comparacion = "Pasaron más camionetas que autos.";
    } else if (cantAutos > cantCamionetas) {
        comparacion = "Pasaron más autos que camionetas.";
    } else {
        comparacion = "Pasó la misma cantidad de autos que de camionetas.";
    }

    console.log(`--- CIERRE DE CAJA ---`);
    console.log(`Cantidad de AUTOS: ${cantAutos} - Total Cobrado: $${totalAutos}`);
    console.log(`Cantidad de CAMIONETAS: ${cantCamionetas} - Total Cobrado: $${totalCamionetas}`);
    console.log(`Cantidad de CAMIONES: ${cantCamiones} - Total Cobrado: $${totalCamiones}`);
    console.log(`Cantidad de MOTOS: ${cantMotos} - Total Cobrado: $${totalMotos}`);
    console.log(`TOTAL GENERAL COBRADO: $${totalGeneral}`);
    console.log(`Comparación: ${comparacion}`);
}