let importe = Number(prompt("Ingrese importe"));
let descuento = 0;

descuento = (50 * importe) / 100;

if (descuento > 80000)
{
    descuento = 80000;
}

console.log(`Importe sin descuento: ${importe}`);
console.log(`Monto de descuento: ${descuento}`);
console.log(`Importe con descuento: ${importe - descuento}`);