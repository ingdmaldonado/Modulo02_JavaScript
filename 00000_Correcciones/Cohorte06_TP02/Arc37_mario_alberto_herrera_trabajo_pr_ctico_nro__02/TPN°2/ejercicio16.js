let opcion;
let precio;
let entrega;
let cuotas;
let interes;
let continuar;

do {
    
    opcion = prompt("Seleccione vehículo:\n1- Amarok V6\n2- TAOS\n3- Polo Nuevo");

    while (opcion !== "1" && opcion !== "2" && opcion !== "3") {
        opcion = prompt("ERROR. Seleccione:\n1- Amarok\n2- TAOS\n3- Polo");
    }

    
    if (opcion === "1") {
        precio = 65000000;
    } else if (opcion === "2") {
        precio = 53000000;
    } else {
        precio = 47000000;
    }

    
    entrega = Number(prompt("Ingrese dinero disponible"));

    
    while (entrega < precio * 0.3 || entrega >= precio) {
        entrega = Number(prompt("ERROR. Debe ser >= 30% y menor al total"));
    }

   
    let restante = precio - entrega;

   
    cuotas = prompt("Seleccione cuotas: 12 / 24 / 36");

    while (cuotas !== "12" && cuotas !== "24" && cuotas !== "36") {
        cuotas = prompt("ERROR. Ingrese 12, 24 o 36");
    }

    
    if (cuotas === "12") {
        interes = 0.099;
    } else if (cuotas === "24") {
        interes = 0.22;
    } else {
        interes = 0.33;
    }

   
    let totalFinanciado = restante + (restante * interes);
    let valorCuota = totalFinanciado / Number(cuotas);

   
    console.log("Precio vehículo:", precio);
    console.log("Entrega:", entrega);
    console.log("Restante:", restante);
    console.log("Total financiado:", totalFinanciado);
    console.log("Cuotas:", cuotas);
    console.log("Valor por cuota:", valorCuota);

    
    continuar = prompt("¿Desea continuar? si/no");

    while (continuar !== "si" && continuar !== "no") {
        continuar = prompt("ERROR. Ingrese si o no");
    }

} while (continuar === "si");