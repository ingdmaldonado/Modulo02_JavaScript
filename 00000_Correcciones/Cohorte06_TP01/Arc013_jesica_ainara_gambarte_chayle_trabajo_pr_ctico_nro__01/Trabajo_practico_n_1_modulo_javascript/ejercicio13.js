// 1. Solicitar datos
let rubro = prompt("Ingrese el rubro (Vestimenta, Perfumería, Librería, Electrodomésticos, Calzado):").toLowerCase();
let importe = parseFloat(prompt("Ingrese el importe de la compra:"));

// Variables
let descuento = 0;
let tope = 0;

// 2. Determinar descuento y tope según rubro
if (rubro === "vestimenta") 
    {
    descuento = importe * 0.20;
    tope = 80000;
} 
else if (rubro === "perfumería" || rubro === "perfumeria") 
    {
    descuento = importe * 0.20;
    tope = 80000;
} 
else if (rubro === "librería" || rubro === "libreria") {
    descuento = importe * 0.30;
    tope = 90000;
} 
else if (rubro === "electrodomésticos" || rubro === "electrodomesticos") {
    descuento = importe * 0.15;
    tope = 70000;
} 
else if (rubro === "calzado") {
    descuento = importe * 0.20;
    tope = 80000;
} 
else {
    alert("Rubro inválido");
}

// 3. Aplicar tope si corresponde
if (descuento > tope) 
    {
    descuento = tope;
}

// 4. Calcular importe final
let total = importe - descuento;

// 5. Mostrar resultados
alert(
    "Rubro: " + rubro +
    "\nImporte de la compra: $" + importe +
    "\nDescuento aplicado: $" + descuento +
    "\nTotal a pagar: $" + total
);