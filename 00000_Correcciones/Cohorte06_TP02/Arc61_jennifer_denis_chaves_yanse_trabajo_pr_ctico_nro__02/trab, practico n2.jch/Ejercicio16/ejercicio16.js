let opcion = prompt(
    "Seleccione vehiculo:\n1-amarok V6\n2-TAOS\n3-polo nuevo"
);

let precio = 0;
let nombre = "";

if (opcion == "1") {
    nombre = "amarok V6";
    precio = 65000000;
}
else if (opcion == "2") {
    nombre = "TAOS";
    precio = 53000000;
}
else if (opcion == "3") {
    nombre = "polo nuevo";
    precio = 47000000;
}
else {
    alert("vehiculo incorrecto");
}

let entrega = parseFloat(prompt("ingrese dinero disponible"));

let minimo = precio * 0.30;

if (entrega > minimo && entrega < precio) {

    let restante = precio - entrega;

    let cuotas = prompt(
        "seleccione cuotas:\n1-12 cuotas\n2-24 cuotas\n3-36 cuotas"
    );

    let interes = 0;
    let cantidadcuotas = 0;

    if (cuotas == "1") {
        interes = 0.099;
        cantidadcuotas = 12;
    }
    else if (cuotas == "2") {
        interes = 0.22;
        cantidadcuotas = 24;
    }
    else if (cuotas == "3") {
        interes = 0.33;
        cantidadcuotas = 36;
    }

    let totalfinanciado = restante + (restante * interes);

    let valorCuota = totalFinanciado / cantidadCuotas;

    alert(
        "vehiculo: " + nombre + "\n" +
        "precio: $" + precio + "\n" +
        "entrega: $" + entrega + "\n" +
        "saldo financiado: $" + totalfinanciado + "\n" +
        "cuotas: " + cantidadCuotas + "\n" +
        "valor cuota: $" + valorcuota
    );

}
else {
    alert("El dinero ingresado no es valido");
}                                                                                                                                                                                                                                                                                                