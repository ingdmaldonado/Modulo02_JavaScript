// ======================
// EJERCICIO 1
// ======================
console.log("===== EJERCICIO 1 =====");

let A = Number(prompt("Ingrese A"));
console.log("A:", A);

let B = Number(prompt("Ingrese B"));
console.log("B:", B);

let suma = A + B;
console.log("Suma:", suma);

let resta = A - B;
console.log("Resta:", resta);

let producto = A * B;
console.log("Producto:", producto);

let division;

if (B !== 0) {
    division = A / B;
} else {
    division = "No se puede dividir por cero";
}
console.log("División:", division);


// ======================
// EJERCICIO 2
// ======================
console.log("===== EJERCICIO 2 =====");

let importeCompra = Number(prompt("Ingrese el importe de la compra"));
console.log("Importe:", importeCompra);

let descuentoCompra = importeCompra * 15 / 100;
console.log("Descuento 15%:", descuentoCompra);

let totalFinalCompra = importeCompra - descuentoCompra;
console.log("Total final:", totalFinalCompra);


// ======================
// EJERCICIO 3
// ======================
console.log("===== EJERCICIO 3 =====");

let gastoLuz = Number(prompt("Ingrese gasto de luz"));
console.log("Luz:", gastoLuz);

let gastoInternet = Number(prompt("Ingrese gasto de internet"));
console.log("Internet:", gastoInternet);

let gastoAgua = Number(prompt("Ingrese gasto de agua"));
console.log("Agua:", gastoAgua);

let luzFutura = gastoLuz + (gastoLuz * 12.5 / 100);
console.log("Luz futura:", luzFutura);

let internetFutura = gastoInternet + (gastoInternet * 7 / 100);
console.log("Internet futura:", internetFutura);

let aguaFutura = gastoAgua + (gastoAgua * 3 / 100);
console.log("Agua futura:", aguaFutura);


// ======================
// EJERCICIO 4
// ======================
console.log("===== EJERCICIO 4 =====");

let numero = Number(prompt("Ingrese un número"));
console.log("Número:", numero);

let esPositivo = numero >= 0;
console.log("Es positivo:", esPositivo);

if (esPositivo) {
    console.log("Resultado: positivo");
} else {
    console.log("Resultado: negativo");
}


// ======================
// EJERCICIO 5
// ======================
console.log("===== EJERCICIO 5 =====");

let numeroParImpar = Number(prompt("Ingrese un número"));
console.log("Número:", numeroParImpar);

let esPar = numeroParImpar % 2 === 0;
console.log("Es par:", esPar);

if (esPar) {
    console.log("Resultado: par");
} else {
    console.log("Resultado: impar");
}


// ======================
// EJERCICIO 6
// ======================
console.log("===== EJERCICIO 6 =====");

let compra = Number(prompt("Ingrese el importe de la compra"));
console.log("Compra:", compra);

let descuentoCompra2 = compra * 50 / 100;
console.log("Descuento inicial:", descuentoCompra2);

if (descuentoCompra2 > 80000) {
    descuentoCompra2 = 80000;
}
console.log("Descuento final:", descuentoCompra2);

let totalFinal = compra - descuentoCompra2;
console.log("Total final:", totalFinal);

// ======================
// EJERCICIO 7
// ======================
console.log("===== EJERCICIO 7 =====");

let codigoProducto = Number(prompt("Ingrese código del producto (1, 2 o 3)"));
console.log("Código producto:", codigoProducto);

let cantidad = Number(prompt("Ingrese cantidad de bolsas"));
console.log("Cantidad:", cantidad);

let precioUnitario;

// Determinar precio según código y cantidad
if (codigoProducto === 1) {
    if (cantidad >= 5 && cantidad <= 10) {
        precioUnitario = 38000;
    } else if (cantidad >= 11) {
        precioUnitario = 36000;
    } else {
        precioUnitario = 38000;
    }
} 
else if (codigoProducto === 2) {
    if (cantidad >= 5 && cantidad <= 10) {
        precioUnitario = 31000;
    } else if (cantidad >= 11) {
        precioUnitario = 29000;
    } else {
        precioUnitario = 34000;
    }
} 
else if (codigoProducto === 3) {
    if (cantidad >= 5 && cantidad <= 10) {
        precioUnitario = 46000;
    } else if (cantidad >= 11) {
        precioUnitario = 42000;
    } else {
        precioUnitario = 44000;
    }
} 
else {
    precioUnitario = 0;
    console.log("Código inválido");
}

console.log("Precio unitario:", precioUnitario);

let total = precioUnitario * cantidad;
console.log("Total a pagar:", total);

// ======================
// EJERCICIO 8
// ======================

let edad = Number(prompt("Ingrese su edad"));

// Verificamos la edad ingresada y clasificamos

if (edad >= 0 && edad <= 12) {
    console.log("Niño");
} 

else if (edad >= 13 && edad <= 17) {
    console.log("Adolescente");
} 

else if (edad >= 18 && edad <= 64) {
    console.log("Adulto");
} 

else if (edad > 64) {
    console.log("Adulto mayor");
} 

else {
    console.log("Edad inválida");
}
// ======================
// EJERCICIO 9
// ======================

let cantidadPasajes = Number(prompt("Ingrese la cantidad de pasajes"));
console.log("Cantidad de pasajes:", cantidadPasajes);

let importePasaje = Number(prompt("Ingrese el importe de cada pasaje"));
console.log("Importe por pasaje:", importePasaje);

let totalCompra9 = cantidadPasajes * importePasaje;
console.log("Total compra:", totalCompra9);

let descuento9 = 0;
let totalFinal9 = totalCompra9;

// Aplicación de descuentos

if (cantidadPasajes > 3 && totalCompra9 > 500000) {
    descuento9 = totalCompra9 * 15 / 100;
    console.log("Se aplicó 15% de descuento");
} 
else if (cantidadPasajes > 3 && totalCompra9 > 250000) {
    descuento9 = totalCompra9 * 11 / 100;
    console.log("Se aplicó 11% de descuento");
} 
else {
    console.log("No se aplicó descuento");
}

// Resultado final
totalFinal9 = totalCompra9 - descuento9;

console.log("Descuento aplicado:", descuento9);
console.log("Total final:", totalFinal9);

// ======================
// EJERCICIO 10
// ======================

let importeCompra10 = Number(prompt("Ingrese el importe de la compra"));
console.log("Importe de compra:", importeCompra10);

let formaPago10 = Number(prompt("Ingrese forma de pago: 1-Efectivo 2-Débito 3-Crédito"));
console.log("Forma de pago:", formaPago10);

let descuento10 = 0;
let totalFinal10 = importeCompra10;

// Switch de forma de pago

switch (formaPago10) {

    case 1:
        descuento10 = importeCompra10 * 10 / 100;
        console.log("Efectivo - 10% descuento");
        break;

    case 2:
        descuento10 = importeCompra10 * 5 / 100;
        console.log("Débito - 5% descuento");
        break;

    case 3:
        descuento10 = 0;
        console.log("Crédito - sin descuento");
        break;

    default:
        console.log("Opción inválida");
}

// Resultado final
totalFinal10 = importeCompra10 - descuento10;

console.log("Descuento aplicado:", descuento10);
console.log("Total final:", totalFinal10);


// ======================
// EJERCICIO 11
// ======================

let importeCompra11 = Number(prompt("Ingrese el importe de la compra"));
console.log("Importe de compra:", importeCompra11);

let zona = prompt("Ingrese la zona: Centro, Oeste, Norte, Sur o Este");
console.log("Zona ingresada:", zona);

let envio = 0;
let totalFinal11 = 0;

// Determinamos costo de envío según zona

if (zona == "Centro") {
    envio = 2500;
    console.log("Zona Centro - Envío $2500");
} 
else if (zona == "Oeste") {
    envio = 3750;
    console.log("Zona Oeste - Envío $3750");
} 
else if (zona == "Norte") {
    envio = 4225;
    console.log("Zona Norte - Envío $4225");
} 
else if (zona == "Sur") {
    envio = 5222.50;
    console.log("Zona Sur - Envío $5222.50");
} 
else if (zona == "Este") {
    envio = 4288.50;
    console.log("Zona Este - Envío $4288.50");
} 
else {
    console.log("Zona inválida");
}

// Cálculo final
totalFinal11 = importeCompra11 + envio;

console.log("Costo de envío:", envio);
console.log("Total final:", totalFinal11);


// ======================
// EJERCICIO 12
// ======================

let diaCompra = prompt("Ingrese el día de compra (viernes, sábado o domingo)");
console.log("Día de compra:", diaCompra);

let importeCompra12 = Number(prompt("Ingrese el importe de la compra"));
console.log("Importe de compra:", importeCompra12);

let reintegro = 0;
let totalFinal12 = importeCompra12;


// Verificamos si aplica el beneficio

if (diaCompra == "viernes" || diaCompra == "sábado" || diaCompra == "domingo") {

    reintegro = importeCompra12 * 50 / 100;

    // Tope de reintegro
    if (reintegro > 80000) {
        reintegro = 80000;
        console.log("Se aplicó tope de reintegro $80.000");
    } 
    else {
        console.log("Se aplicó 50% de reintegro");
    }

} 
else {
    console.log("No aplica beneficio");
}

// Cálculo final
totalFinal12 = importeCompra12 - reintegro;

console.log("Reintegro obtenido:", reintegro);
console.log("Total final:", totalFinal12);


// ======================
// EJERCICIO 13
// ======================

let rubro = prompt("Ingrese el rubro (Vestimenta, Perfumería, Librería, Electrodomésticos, Calzado)");
console.log("Rubro:", rubro);

let importeCompra13 = Number(prompt("Ingrese el importe de la compra"));
console.log("Importe de compra:", importeCompra13);

let descuento13 = 0;
let totalFinal13 = importeCompra13;

// Determinamos descuento según rubro

if (rubro == "Vestimenta") {
    descuento13 = importeCompra13 * 20 / 100;
    console.log("Descuento 20% - Vestimenta");

    if (descuento13 > 80000) {
        descuento13 = 80000;
        console.log("Se aplicó tope $80.000");
    }

} 
else if (rubro == "Perfumería") {
    descuento13 = importeCompra13 * 20 / 100;

    if (descuento13 > 80000) {
        descuento13 = 80000;
        console.log("Se aplicó tope $80.000");
    }

} 
else if (rubro == "Librería") {
    descuento13 = importeCompra13 * 30 / 100;

    if (descuento13 > 90000) {
        descuento13 = 90000;
        console.log("Se aplicó tope $90.000");
    }

} 
else if (rubro == "Electrodomésticos") {
    descuento13 = importeCompra13 * 15 / 100;

    if (descuento13 > 70000) {
        descuento13 = 70000;
        console.log("Se aplicó tope $70.000");
    }

} 
else if (rubro == "Calzado") {
    descuento13 = importeCompra13 * 20 / 100;

    if (descuento13 > 80000) {
        descuento13 = 80000;
        console.log("Se aplicó tope $80.000");
    }

} 
else {
    console.log("Rubro inválido");
}

// Total final
totalFinal13 = importeCompra13 - descuento13;

console.log("Descuento aplicado:", descuento13);
console.log("Total final:", totalFinal13);