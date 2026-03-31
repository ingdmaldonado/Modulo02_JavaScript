/*Ejercicio Nro. 13: Estructuras Condicionales (if/else)
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
 - importe final a pagar.*/

    {
        let rubro = 0;

        rubro = Number(prompt(`Ingrese el rubro(1 - vestimenta, 2 - Perfumeria, 3 - Libreria, 4 - electrodomestico, 5 - calzado)`));

        let importeCompra = 0;

        importeCompra = Number(prompt(`Ingrese el importe de la compra`));

        let descuento = 0;

        let totalAPagar

        let rubroValido = true;

        switch(rubro)
        {
            case 1:
            {
                console.log(`El usuario ingreso rubro vestimenta`);
                descuento = (importeCompra * 20)/100;
                descuento = descuento > 80000?80000:descuento;
                totalAPagar = importeCompra - descuento;
                console.log(`Importe de compra ${importeCompra}, Descuento ${descuento} Total a Pagar ${totalAPagar}`);
                break;
            }
            case 2 :
            {
                console.log(`El usuario ingreso rubro Perfumeria`);
                descuento = (importeCompra *20)/100;
                descuento = descuento > 80000?80000:descuento;
                totalAPagar = importeCompra - descuento;
                console.log(`Importe de compra ${importeCompra}, Descuento ${descuento} Total a Pagar ${totalAPagar}`);
                break;
            }
            case 3:
            {
                console.log(`El usuario ingreso rubro Libreria`)
                descuento = (importeCompra * 30)/100;
                descuento = descuento > 90000?90000:descuento;
                totalAPagar = importeCompra - descuento;
                console.log(`Importe de compra ${importeCompra}, Descuento ${descuento} Total a Pagar ${totalAPagar}`);
                break;
            }
            case 4:
            {
                console.log(`Usted ingreso rubro Electrodomestico`);
                descuento = (importeCompra * 15)/100;
                descuento = descuento > 70000?70000:descuento;
                totalAPagar = importeCompra - descuento;
                console.log(`Importe de compra ${importeCompra}, Descuento ${descuento} Total a Pagar ${totalAPagar}`);
                break;
            }
            case 5:
            {
                console.log(`Usted ingreso el rubro calzado`);
                descuento = (importeCompra * 20 )/100;
                descuento = descuento > 80000?80000:descuento;
                totalAPagar = importeCompra - descuento;
                console.log(`Importe de compra ${importeCompra}, Descuento ${descuento} Total a Pagar ${totalAPagar}`);
                break;
            }
            default:
                {
                    console.log(`Ingrese un rubro valido , Por Favor ingrese nuevamente`);
                    rubroValido = false;
                }
            
            
        }
    }