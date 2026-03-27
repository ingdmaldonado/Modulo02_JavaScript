/* TP - EJERCICIO NRO. 13
   El programa Marcatón, realizado en Catamarca junto al Banco Nación, ofrece descuentos en distintos
rubros comerciales.

Tabla de descuentos:
   Rubro               Descuento   Tope máximo
   1 - Vestimenta        20%        $80.000
   2 - Perfumería        20%        $80.000
   3 - Librería          30%        $90.000
   4 - Electrodomésticos 15%        $70.000
   5 - Calzado           20%        $80.000

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

{
    let rubro = 0;
    rubro = Number(prompt(`Indique el Rubro:
1 - Vestimenta
2 - Perfumería
3 - Librería
4 - Electrodomésticos
5 - Calzado`));

    let importeCompra = 0;
    importeCompra = Number(prompt(`Ingrese el Importe de la Compra`));

    let descuento         = 0;
    let operacionCorrecta = false;

    switch(rubro)
    {
        case 1:
        {
            operacionCorrecta = true;
            descuento = (importeCompra * 20) / 100;
            descuento = descuento > 80000 ? 80000 : descuento;
            break;
        }
        case 2:
        {
            operacionCorrecta = true;
            descuento = (importeCompra * 20) / 100;
            descuento = descuento > 80000 ? 80000 : descuento;
            break;
        }
        case 3:
        {
            operacionCorrecta = true;
            descuento = (importeCompra * 30) / 100;
            descuento = descuento > 90000 ? 90000 : descuento;
            break;
        }
        case 4:
        {
            operacionCorrecta = true;
            descuento = (importeCompra * 15) / 100;
            descuento = descuento > 70000 ? 70000 : descuento;
            break;
        }
        case 5:
        {
            operacionCorrecta = true;
            descuento = (importeCompra * 20) / 100;
            descuento = descuento > 80000 ? 80000 : descuento;
            break;
        }
        default:
        {
            console.log(`Rubro inválido. Ingrese una opción entre 1 y 5`);
            operacionCorrecta = false;
            break;
        }
    }

    let totalAPagar = 0;

    if(operacionCorrecta)
    {
        totalAPagar = importeCompra - descuento;
        console.log(`Rubro: ${rubro}`);
        console.log(`Importe de Compra: ${importeCompra}`);
        console.log(`Descuento Aplicado: ${descuento}`);
        console.log(`Importe Final a Pagar: ${totalAPagar}`);
    }
    else
    {
        console.log(`Sr. Ud. eligió un rubro incorrecto. Intente nuevamente`);
    }
}
