/*

El programa Marcatón, realizado en Catamarca junto al Banco Nación, ofrece descuentos en distintosrubros comerciales.

Tabla de descuentos:
(Rubro, Descuento, Tope máximo)

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

{
    let rubroDeComercio = 0;
    let importeDeCompra =0;
    let descuento = 0;

    rubroDeComercio = Number(prompt(`Ingrese el rubro: 1 Vestimenta, 2 Perfumeria, 3 Libreria, 4 Electrodomesticos, 5 Calzado`));
    importeDeCompra = Number(prompt(`Ingrese el importe de la compra`));

    switch(rubroDeComercio)
    {
        case 1: {
                    let descuento = (importeDeCompra * 20)/100;

                    if(descuento <= 80000)
                    {
                        console.log(`El rubro es: ${rubroDeComercio}`);
                        console.log(`El importe de la compra es: ${importeDeCompra}`);
                        console.log(`El descuento obtenido es: ${descuento}`);
                        console.log(`El importe total es: ${importeDeCompra-descuento}`);
                    }
                    else
                    {
                        console.log(`El rubro es: ${rubroDeComercio}`);
                        console.log(`El importe de la compra es: ${importeDeCompra}`);
                        console.log(`El descuento obtenido es: ${80000}`);
                        console.log(`El importe total es: ${importeDeCompra-80000}`);
                    }
                    break;
                }

        case 2: {
                    let descuento = (importeDeCompra * 20)/100;

                    if(descuento <= 80000)
                    {
                        console.log(`El rubro es: ${rubroDeComercio}`);
                        console.log(`El importe de la compra es: ${importeDeCompra}`);
                        console.log(`El descuento obtenido es: ${descuento}`);
                        console.log(`El importe total es: ${importeDeCompra-descuento}`);
                    }
                    else
                    {
                        console.log(`El rubro es: ${rubroDeComercio}`);
                        console.log(`El importe de la compra es: ${importeDeCompra}`);
                        console.log(`El descuento obtenido es: ${80000}`);
                        console.log(`El importe total es: ${importeDeCompra-80000}`);
                    }
                    break;
                }

        case 3: {
                    let descuento = (importeDeCompra * 30)/100;

                    if(descuento <= 90000)
                    {
                        console.log(`El rubro es: ${rubroDeComercio}`);
                        console.log(`El importe de la compra es: ${importeDeCompra}`);
                        console.log(`El descuento obtenido es: ${descuento}`);
                        console.log(`El importe total es: ${importeDeCompra-descuento}`);
                    }
                    else
                    {
                        console.log(`El rubro es: ${rubroDeComercio}`);
                        console.log(`El importe de la compra es: ${importeDeCompra}`);
                        console.log(`El descuento obtenido es: ${90000}`);
                        console.log(`El importe total es: ${importeDeCompra-90000}`);
                    }
                    break;
                }

        case 4: {
                    let descuento = (importeDeCompra * 15)/100;

                    if(descuento <= 70000)
                    {
                        console.log(`El rubro es: ${rubroDeComercio}`);
                        console.log(`El importe de la compra es: ${importeDeCompra}`);
                        console.log(`El descuento obtenido es: ${descuento}`);
                        console.log(`El importe total es: ${importeDeCompra-descuento}`);
                    }
                    else
                    {
                        console.log(`El rubro es: ${rubroDeComercio}`);
                        console.log(`El importe de la compra es: ${importeDeCompra}`);
                        console.log(`El descuento obtenido es: ${70000}`);
                        console.log(`El importe total es: ${importeDeCompra-70000}`);
                    }
                    break;
                }

        case 5: {
                    let descuento = (importeDeCompra * 20)/100;

                    if(descuento <= 80000)
                    {
                        console.log(`El rubro es: ${rubroDeComercio}`);
                        console.log(`El importe de la compra es: ${importeDeCompra}`);
                        console.log(`El descuento obtenido es: ${descuento}`);
                        console.log(`El importe total es: ${importeDeCompra-descuento}`);
                    }
                    else
                    {
                        console.log(`El rubro es: ${rubroDeComercio}`);
                        console.log(`El importe de la compra es: ${importeDeCompra}`);
                        console.log(`El descuento obtenido es: ${80000}`);
                        console.log(`El importe total es: ${importeDeCompra-80000}`);
                    }
                    break;
                }

        default: {console.log(`La opcion es incorrecta`);}
    }
}