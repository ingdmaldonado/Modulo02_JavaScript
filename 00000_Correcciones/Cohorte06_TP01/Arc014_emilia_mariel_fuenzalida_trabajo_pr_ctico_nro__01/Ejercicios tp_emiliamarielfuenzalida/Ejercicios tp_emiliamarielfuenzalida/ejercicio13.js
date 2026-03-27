/*
------------------------------------------------------
Ejercicio Nro. 13: Estructuras Condicionales (if/else)
------------------------------------------------------
El programa Marcatón, realizado en Catamarca 
junto al Banco Nación, ofrece descuentos en distintos
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
4. Verificar si el descuento supera el tope del rubro. 
Si lo supera, aplicar solo el tope.
5. Mostrar:

- rubro
- importe de la compra
- descuento aplicado
- importe final a pagar
 */

{
    let rubro = 0;
    let importeCompra = 0;

    rubro = Number(prompt(`Elige un Rubro:
1) Vestimenta 
2) Perfumería 
3) Librería 
4) Electrodomésticos 
5) Calzado`));

    importeCompra = Number(prompt(`Indique su importe de compra:`));

    let descuento = 0;
    let totalCompra = 0;
    let tope = 0;

    switch (rubro) {
        case 1:
            console.log(`Vestimenta 20%`);

            descuento = (importeCompra * 20) / 100;
            tope = 80000;
            break;

        case 2:
            console.log(`Perfumeria 20%`);

            descuento = (importeCompra * 20) / 100;
            tope = 80000;
            break;

        case 3:
            console.log(`Librería 30%`);

            descuento = (importeCompra * 30) / 100;
            tope = 90000;
            break;

        case 4:
            console.log(`Electrodomesticos 15%`);

            descuento = (importeCompra * 15) / 100;
            tope = 70000;
            break;

        case 5:
            console.log(`Calzados 20%`);

            descuento = (importeCompra * 20) / 100;
            tope = 80000;
            break;

        default:
            console.log(`Opción incorrecta`);
            break;
    }

    if (descuento > tope) {
        descuento = tope;
    }
    else {
        console.log(`Incorrecto`);
    }
    totalCompra = importeCompra - descuento;

    console.log(`Importe de compra: $${importeCompra}`);
    console.log(`Descuento: $${descuento}`);
    console.log(`Total a pagar: $${totalCompra}`);
}