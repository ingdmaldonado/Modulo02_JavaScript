
let valorCompra = Number(prompt(`Ingrese el valor de la compra:`));
console.log(`El valor de la compra ingresado es: ${valorCompra}`);
let descuento = (valorCompra * 50) / 100;

if (descuento > 80000) 
    {
    descuento = 80000;
    console.log(`El descuento calculado es: ${descuento}`);
    }
else
    {    console.log(`El descuento calculado es: ${descuento}`);
    }

let importeFinal = valorCompra - descuento;
console.log(`El Importe final a pagar por el cliente es: ${importeFinal}`);
