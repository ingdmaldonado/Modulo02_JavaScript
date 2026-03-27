/*
El programa Marcatón, realizado en Catamarca junto al Banco Nación, ofrece descuentos en distintos 
rubros comerciales.
Tabla de descuentos:
Rubro Descuento Tope máximo
Vestimenta 20% $80.000
Perfumería 20% $80.000
Librería 30% $90.000
Electrodomésticos 15% $70.000
Calzado 20% $80.000
El programa debe:
1. Solicitar el rubro del comercio.
2. Solicitar el importe de la compra.
3. Calcular el descuento correspondiente.
4. Verificar si el descuento supera el tope del rubro. Si lo supera, aplicar solo el tope.
5. Mostrar:
 - rubro
 - importe de la compra
 - descuento aplicado
 - importe final a pagar.
 */
/* VER CLASE 4 */

{

let rubro = 0;
rubro = Number(prompt(`Indique el Rubro: 1-Vestimenta, 2-Perfumería, 3-Librería, 4-Electrodomésticos, 5-Calzado`));

let importeCompra = 0;
importeCompra = Number(prompt(`Ingrese el importe de la compra`));

let descuento = 0;

switch(rubro)
{
    case 1:
    {
        console.log(`Rubro: Vestimenta`);
        descuento = (importeCompra * 20)/100;
        descuento = descuento > 80000 ? 80000 : descuento;
        console.log(`Importe de la Compra ${importeCompra}, Descuento: ${descuento}, Total a Pagar: ${importeCompra - descuento}`);
        break;

    }
    case 2:
    {
        console.log(`Rubro: Perfumería`);
        descuento = (importeCompra * 20)/100;
        descuento = descuento > 80000 ? 80000 : descuento;
        console.log(`Importe de la Compra ${importeCompra}, Descuento: ${descuento}, Total a Pagar: ${importeCompra - descuento}`);
        break;
    }
    case 3:
    {
        console.log(`Rubro: Librería`);
        descuento = (importeCompra * 30)/100;
        descuento = descuento > 9000 ? 90000 : descuento;
        console.log(`Importe de la Compra ${importeCompra}, Descuento: ${descuento}, Total a Pagar: ${importeCompra - descuento}`);
        break;
    }
    case 4:
    {
        console.log(`Rubro: Electrodómesticos`)
        descuento = (importeCompra * 15)/100;
        descuento = descuento > 70000 ? 70000 : descuento;
        console.log(`Importe de la Compra ${importeCompra}, Descuento: ${descuento}, Total a Pagar: ${importeCompra - descuento}`);
        break;
    }
    case 5:
    {
        console.log(`Rubro: Calzado`)
        descuento = (importeCompra * 20)/100;
        descuento = descuento > 80000 ? 80000 : descuento;
        console.log(`Importe de la Compra ${importeCompra}, Descuento: ${descuento}, Total a Pagar: ${importeCompra - descuento}`);
        break;
    }
    default:
    {
        console.log(`Por favor ingrese un valor dentro de los parámetros.`);
        break;
    }               
}

}