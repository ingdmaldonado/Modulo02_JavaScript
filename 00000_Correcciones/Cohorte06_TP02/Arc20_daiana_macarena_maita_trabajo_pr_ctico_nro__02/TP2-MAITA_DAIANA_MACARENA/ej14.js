// EJERCICIO 14 - PEAJE

// Contadores
let autos = 0,
    camionetas = 0,
    camiones = 0,
    motos = 0;

// Acumuladores
let totalAutos = 0,
    totalCamionetas = 0,
    totalCamiones = 0,
    totalMotos = 0;

// Control del ciclo
let continuar = true;

while (continuar) {

    // Pedimos tipo de vehículo
    let tipo = prompt("Ingrese tipo: auto / camioneta / camion / moto");

    // Evaluamos el tipo
    switch (tipo.toLowerCase()) {
        case "auto":
            autos++;
            totalAutos += 4000;
            break;
        case "camioneta":
            camionetas++;
            totalCamionetas += 12000;
            break;
        case "camion":
            camiones++;
            totalCamiones += 22000;
            break;
        case "moto":
            motos++;
            totalMotos += 1500;
            break;
        default:
            alert("Tipo inválido");
    }

    continuar = confirm("¿Seguir?");
}

// Total general
let totalGeneral = totalAutos + totalCamionetas + totalCamiones + totalMotos;

// Resultados
alert("Autos: " + autos + " $" + totalAutos);
alert("Camionetas: " + camionetas + " $" + totalCamionetas);
alert("Camiones: " + camiones + " $" + totalCamiones);
alert("Motos: " + motos + " $" + totalMotos);
alert("TOTAL: $" + totalGeneral);

// Comparación
if (autos > camionetas) alert("Más autos");
else if (camionetas > autos) alert("Más camionetas");
else alert("Iguales");