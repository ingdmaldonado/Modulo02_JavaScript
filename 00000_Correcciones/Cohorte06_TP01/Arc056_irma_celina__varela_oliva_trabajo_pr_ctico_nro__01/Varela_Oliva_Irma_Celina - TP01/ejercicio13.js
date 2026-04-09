/*
 EJERCICIO NRO. 09: Programa Marcatón 
El programa Marcatón, realizado en Catamarca junto al Banco Nación, ofrece descuentos en distintos 
rubros comerciales. 

Tabla de descuentos:       
  Rubro                     Descuento         Tope máximo 
1 - Vestimenta                  20%              $80.000
2 - Perfumería                  20%              $80.000
3 - Librería                    30%              $90.000
4 - Electrodomésticos           15%              $70.000
5 - Calzado                     20%              $80.000

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

{

    //etapa 1

    let rubro = 0;
    rubro = Number(prompt(`Indique el Rubro: 1 - vestimenta, 2 - perfumeria, 3 - libreria, 4 - electrodomesticos, 5 - calzado`));

    let importeCompra = 0;
    importeCompra = Number(prompt(`Ingrese el importe de compra:`));

    let descuento = 0;

    let rubroValido = true;

    switch(rubro)
    {
        case 1:
            {
                console.log(`Rubro 1 - vestimenta`);

                console.log(`Descuento del 20%`);

                descuento = (importeCompra * 20) / 100;

                descuento = descuento > 80000 ? 80000:descuento;

                break;
            }

        case 2:
            {
                console.log(`Rubro 2 - perfumeria`);

                console.log(`Descuento del 20%`);

                descuento = (importeCompra * 20) / 100;

                descuento = descuento > 80000 ? 80000:descuento;

                break;
            }

        case 3:
            {
                console.log(`Rubro 3 - libreria`);

                console.log(`Descuento del 30%`);

                descuento = (importeCompra * 30) / 100;

                descuento = descuento > 90000 ? 90000:descuento;

                break;
            }

        case 4:
            {
                console.log(`Rubro 4 - electrodomesticos`);

                console.log(`Descuento del 15%`);

                descuento = (importeCompra * 15) / 100;

                descuento = descuento > 70000 ? 70000:descuento;

                break;
            }

        case 5:
            {
                console.log(`Rubro 5 - calzado`);

                console.log(`Descuento del 20%`);

                descuento = (importeCompra * 20) / 100;

                descuento = descuento > 80000 ? 80000:descuento;

                break;
            }

        default:
            {
                console.log(`Rubro incorrecto, intente nuevamente`);

                rubroValido = false;

                break;
            }
    }

    //etapa 2

    if(rubroValido)
    {
        let totalPagar = 0;
        totalPagar = importeCompra - descuento;

        console.log(`importe de la compra: ${importeCompra} - descuento: ${descuento} - total a pagar: ${totalPagar}`);
    }

}