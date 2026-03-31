
let rubro = prompt("Ingrese el rubro del comercio: 1-Vestimenta, 2-Perfumería, 3-Librería, 4-Electrodomésticos o 5-Calzado:");

let importeCompra = Number(prompt("Ingrese el importe de la compra:"));
console.log(`Rubro del comercio: ${rubro}`);

console.log(`Importe de la compra: ${importeCompra}`);
let descuento = 0;

if (rubro === "1")
{
    descuento = (importeCompra * 20) / 100;
    if (descuento > 80000)
    {
        descuento = 80000;
    }
}
else if (rubro === "2")
{
    descuento = (importeCompra * 20) / 100;
    if (descuento > 80000)
    {
        descuento = 80000;
    }
}
else if (rubro === "3")
{
    descuento = (importeCompra * 30) / 100;
    if (descuento > 90000)
    {
        descuento = 90000;
    }
}
else if (rubro === "4")
{
    descuento = (importeCompra * 15) / 100;
    if (descuento > 70000)
    {
        descuento = 70000;
    }
}
else if (rubro === "5")
{
    descuento = (importeCompra * 20) / 100;
    if (descuento > 80000)
    {
        descuento = 80000;
    }
}
else
{
    console.log(`Rubro no válido.`);
}

console.log(`Descuento aplicado: ${descuento}`);

let importeFinal = importeCompra - descuento;
console.log(`Importe final a pagar: ${importeFinal}`);
