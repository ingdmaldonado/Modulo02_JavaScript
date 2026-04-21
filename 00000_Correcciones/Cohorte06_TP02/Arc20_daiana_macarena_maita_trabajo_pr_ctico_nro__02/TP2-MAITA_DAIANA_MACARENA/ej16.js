// EJERCICIO 16 - VEHÍCULOS

let opcion = prompt("1-Amarok 2-Taos 3-Polo");

let precio = 0;

// Asignación de precio
if (opcion == "1") precio = 65000000;
else if (opcion == "2") precio = 53000000;
else if (opcion == "3") precio = 47000000;
else alert("Opción inválida");

// Dinero disponible
let entrega = parseFloat(prompt("Ingrese dinero disponible"));

// Validación
if (entrega >= precio * 0.30 && entrega < precio) {

    let restante = precio - entrega;

    let cuotas = prompt("12 / 24 / 36");

    let interes = 0;

    if (cuotas == "12") interes = 0.099;
    else if (cuotas == "24") interes = 0.22;
    else if (cuotas == "36") interes = 0.33;

    let total = restante + (restante * interes);

    alert("Total financiado: $" + total);

} else {
    alert("Monto inválido");
}