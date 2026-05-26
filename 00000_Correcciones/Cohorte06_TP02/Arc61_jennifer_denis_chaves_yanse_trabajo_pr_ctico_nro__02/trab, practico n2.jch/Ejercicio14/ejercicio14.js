let cantidadcamiones = 0;
let totalcamiones = 0;

let cantidadcamionetas = 0;
let totalcamionetas = 0;

let cantidadautos = 0;
let totalautos = 0;

let cantidadmotos = 0;
let totalmotos = 0;

let totalgeneral = 0;

let continuar = "SI";

while (continuar == "SI") {

    let vehiculo = prompt(
        "ingrese tipo de vehiculo:\n1-Camion\n2-Camioneta\n3-Automovil\n4-moto"
    );

    if (vehiculo == "1") {
        cantidadcamiones++;
        totalcamiones += 22000;
        totalgeneral += 22000;
    }
    else if (vehiculo == "2") {
        cantidadcamionetas++;
        totalcamionetas += 12000;
        totalgeneral += 12000;
    }
    else if (vehiculo == "3") {
        cantidadAutos++;
        totalautos += 4000;
        totalgeneral += 4000;
    }
    else if (vehiculo == "4") {
        cantidadmotos++;
        totalmotos += 1500;
        totalgeneral += 1500;
    }
    else {
        alert("vehiculo incorrecto");
    }

    continuar = prompt("¿desea continuar? SI / NO");
}

alert(
    "cantidad camiones: " + cantidadcamiones + "\n" +
    "total camiones: $" + totalcamiones + "\n\n" +

    "Cantidad Camionetas: " + cantidadcamionetas + "\n" +
    "Total Camionetas: $" + totalcamionetas + "\n\n" +

    "cantidad autos: " + cantidadautos + "\n" +
    "total autos: $" + totalautos + "\n\n" +

    "cantidad motos: " + cantidadmotos + "\n" +
    "total motos: $" + totalmotos + "\n\n" +

    "totalengeneral: $" + totalengeneral
);

if (cantidadcamionetas > cantidadautos) {
    alert("pasaron mss camionetas que autos");
}
else if (cantidadautos > cantidadcamionetas) {
    alert("Pasaron mas autos que camionetas");
}
else {
    alert("Pasó la misma cantidad de autos y camionetas");
}