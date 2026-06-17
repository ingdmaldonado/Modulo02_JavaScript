/*
Ejercicio: Descuentos del programa Marcatón

El programa Marcatón, realizado en Catamarca junto al Banco Nación,
ofrece descuentos en distintos rubros comerciales.

Tabla de descuentos:

Rubro              Descuento      Tope máximo
1 Vestimenta         20%            $80.000
2 Perfumería         20%            $80.000
3 Librería           30%            $90.000
4 Electrodomésticos  15%            $70.000
5 Calzado            20%            $80.000

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
   - importe final a pagar.
*/

{
    let rubro = 0; /* tipo de variable ? */
    rubro = Number(prompt(`Indique el Rubro (1 - Vestimenta, 2 - Perfumeria, 3 - Libreria, 4 - Electro, 5 - Calzado)`));

    let importeCompra = 0;
    importeCompra = Number(prompt(`Ingrese el Importe Compra`));

    let descuento = 0;

    switch(rubro)
    {
        case 1:{}
        case 2:{}
        case 3:{}
        case 4:{}
        case 5:{}
        default:{}
    }
}

