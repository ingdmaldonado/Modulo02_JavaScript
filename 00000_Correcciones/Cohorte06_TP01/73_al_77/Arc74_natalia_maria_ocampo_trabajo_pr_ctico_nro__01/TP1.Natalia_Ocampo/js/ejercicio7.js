{
    let totalPagar = 0;

    let cantidadBolsas = parseInt(prompt("Ingrese la cantidad de bolsas a comprar:"));
    let codigoAlimento = prompt("Ingrese el código del alimento (1-> Dogui,2-> Tiernito,3-> Dogpro): ");


    if (codigoAlimento === "1") {
        if (cantidadBolsas >= 5 && cantidadBolsas <= 10) {
            totalPagar = cantidadBolsas * 36000;
        }
        else if (cantidadBolsas >= 11) {
            totalPagar = cantidadBolsas * 34000;
        }
        else {
            totalPagar = cantidadBolsas * 38000;
        }
    }
    else if (codigoAlimento === "2") {
        if (cantidadBolsas >= 5 && cantidadBolsas <= 10) {
            totalPagar = cantidadBolsas * 29000;
        }
        else if (cantidadBolsas >= 11) {
            totalPagar = cantidadBolsas * 27000;
        }
        else {
            totalPagar = cantidadBolsas * 31000;
        }
    }
    else if (codigoAlimento === "3") {
        if (cantidadBolsas >= 5 && cantidadBolsas <= 10) {
            totalPagar = cantidadBolsas * 44000;
        }
        else if (cantidadBolsas >= 11) {
            totalPagar = cantidadBolsas * 42000;
        }
        else {
            totalPagar = cantidadBolsas * 46000;
        }
    }
    else {
        console.log("El código ingresado no existe.");
    }

    console.log("El total a pagar es: " + totalPagar);

}