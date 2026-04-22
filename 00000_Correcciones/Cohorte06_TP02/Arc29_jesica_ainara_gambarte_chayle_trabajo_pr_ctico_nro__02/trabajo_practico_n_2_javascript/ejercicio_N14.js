
// Control del programa
let opcion;


// Contadores
let cantAutos = 0;
let cantCamionetas = 0;
let cantCamiones = 0;
let cantMotos = 0;
let totalAutos = 0;
let totalCamionetas = 0;
let totalCamiones = 0;
let totalMotos = 0;

//Control de programa
let continuar = true;

// Precios
const PRECIO_AUTO = 4000;
const PRECIO_CAMIONETA = 12000;
const PRECIO_CAMION = 22000;
const PRECIO_MOTO = 1500;

// Bucle principal
while (continuar) 
    {
        opcion = prompt( "=== PEAJE DEL SUR S.A ===\n\n" + "1 - Automóvil ($4000)\n" + "2 - Camioneta ($12000)\n" + "3 - Camión ($22000)\n" + "4 - Moto ($1500)\n" + "5 - Cerrar caja\n\n" + "Ingrese una opción:" );

    switch (opcion) {

        case "1":
            cantAutos++;
            totalAutos += PRECIO_AUTO;
            alert("Se cobró $" + PRECIO_AUTO);
            break;

        case "2":
            cantCamionetas++;
            totalCamionetas += PRECIO_CAMIONETA;
            alert("Se cobró $" + PRECIO_CAMIONETA);
            break;

        case "3":
            cantCamiones++;
            totalCamiones += PRECIO_CAMION;
            alert("Se cobró $" + PRECIO_CAMION);
            break;

        case "4":
            cantMotos++;
            totalMotos += PRECIO_MOTO;
            alert("Se cobró $" + PRECIO_MOTO);
            break;

        case "5":
            continuar = false;
            break;

        default:
            alert("Opción inválida");
    }
}


// Comparación autos vs camionetas
let comparacion;

if (cantAutos > cantCamionetas) {
    comparacion = "Pasaron más AUTOS que CAMIONETAS";
} else if (cantCamionetas > cantAutos) 
{
    comparacion = "Pasaron más CAMIONETAS que AUTOS";
} else  
    {
    comparacion = "Pasaron la misma cantidad de AUTOS y CAMIONETAS";
}
// Total General
let totalGeneral = totalAutos + totalCamionetas + totalCamiones + totalMotos;
console.log("--- CIERRE DE LA JORNADA ---");
console.log("Cantidad de CAMIONES: " + cantCamiones);
console.log("Total cobrado en CAMIONES: $" + totalCamiones);
console.log("Cantidad de CAMIONETAS: " + cantCamionetas);
console.log("Total cobrado en CAMIONETAS: $" + totalCamionetas);
console.log("Cantidad de AUTOMOVILES: " + cantAutos);
console.log("Total cobrado en AUTOMOVILES: $" + totalAutos);
console.log("Cantidad de MOTOS: " + cantMotos);
console.log("Total cobrado en MOTOS: $" + totalMotos);
console.log("TOTAL GENERAL: $" + totalGeneral);


/** OTRA OPCION PARA OBTENER EL MISMO RESULTADO, USANDO OTRA ETIQUETA
 
 if (cantAutos > cantCamionetas) {
    comparacion = "Pasaron más AUTOS que CAMIONETAS";
} else if (cantCamionetas > cantAutos) {
    comparacion = "Pasaron más CAMIONETAS que AUTOS";
} else {
    comparacion = "Pasaron la misma cantidad de AUTOS y CAMIONETAS";
}

// Cierre de caja
alert(
    "=== CIERRE DE CAJA ===\n\n" +

    "Cantidad de AUTOS: " + cantAutos + "\n" +
    "Total de AUTOS: $" + totalAutos + "\n\n" +

    "Cantidad de CAMIONETAS: " + cantCamionetas + "\n" +
    "Total de CAMIONETAS: $" + totalCamionetas + "\n\n" +

    "Cantidad de CAMIONES: " + cantCamiones + "\n" +
    "Total de CAMIONES: $" + totalCamiones + "\n\n" +

    "Cantidad de MOTOS: " + cantMotos + "\n" +
    "Total de MOTOS: $" + totalMotos + "\n\n" +

    "TOTAL GENERAL COBRADO: $" + totalGeneral + "\n\n" +

    comparacion
)**/