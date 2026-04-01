/*
Ejercicio Nro. 13: Estructuras Condicionales (if/else)
Programa Marcatón - Descuentos por rubro con tope máximo.
*/
//solicitar datos de usuario//
let rubro = 0;
rubro = Number(prompt("Ingrese el número del rubro:\n1=Vestimenta\n2=Perfumería\n3=Librería\n4=Electrodomésticos\n5=Calzado"));

let importeCompra = 0;
importeCompra = Number(prompt("Ingrese el importe de la compra:"));

//variables para cada rubro//
let nombreRubro = "";
let porcentaje = 0;
let tope = 0;

//determinar rubro, porcentaje y tope//
if (rubro === 1) {
    nombreRubro = "Vestimenta";
    porcentaje = 0.20;
    tope = 80000;
} else if (rubro === 2) {
    nombreRubro = "Perfumería";
    porcentaje = 0.20;
    tope = 80000;
} else if (rubro === 3) {
    nombreRubro = "Librería";
    porcentaje = 0.30;
    tope = 90000;
} else if (rubro === 4) {
    nombreRubro = "Electrodomésticos";
    porcentaje = 0.15;
    tope = 70000;
} else if (rubro === 5) {
    nombreRubro = "Calzado";
    porcentaje = 0.20;
    tope = 80000;
} else {
    console.log("Rubro inválido. Solo se permiten números del 1 al 5.");
}

//calcular descuento//
let descuento = 0;

if (porcentaje > 0) {
    descuento = importeCompra * porcentaje;
    
    if (descuento > tope) {
        descuento = tope;
    }
}

//calcular total a pagar//
let totalPagar = importeCompra - descuento;

//mostrar resultados//
console.log(`Rubro elegido: ${nombreRubro}`);
console.log(`Importe de la compra: $${importeCompra}`);

if (descuento > 0) {
    console.log(`Descuento aplicado: $${descuento}`);
    console.log(`Total a pagar: $${totalPagar}`);
} else {
    console.log("No se aplicó descuento (rubro inválido)");
}