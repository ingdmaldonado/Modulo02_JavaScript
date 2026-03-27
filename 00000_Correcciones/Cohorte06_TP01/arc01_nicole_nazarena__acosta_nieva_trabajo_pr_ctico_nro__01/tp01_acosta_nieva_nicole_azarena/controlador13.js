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
    let rubro = Number(prompt(`ingrese el rubro del comercio 1vestimenta 2perfumeria 3libreria 4electrodomesticos 5calzado`));
    let importeCompra = Number(printrompt(`ingrese el importe de la compra`));
    let descuento = 0;
    let importefinal = 0;


    switch (rubro) {
        case 1:
            rubro = "vestimenta";
            descuento = (importeCompra * 20) / 100;
            if (descuento > 80000) {
                descuento = 80000;
                importefinal = importeCompra - descuento;
            }
            else {
                importefinal = importeCompra - descuento;
            }
            break;
        case 2:
            rubro = "perfumeria";
            descuento = (importeCompra * 20) / 100;
            descuento = (importeCompra * 20) / 100;
            if (descuento > 80000) {
                descuento = 80000;
                importefinal = importeCompra - descuento
            }
            else {
                importefinal = importeCompra - descuento;
            }

        case 3:
             rubro = "libreria";
            descuento = (importeCompra * 30) / 100;
            if (descuento > 90000) {
                descuento = 90000;
                importefinal = importeCompra - descuento
            }
            else {
                importefinal = importeCompra - descuento;
            }
        case 4:
            rubro = "electrodomesticos";
            descuento = (importeCompra * 15) / 100;
             if (descuento > 70000) {
                descuento = 70000;
                importefinal = importeCompra - descuento
            }
            else {
                importefinal = importeCompra - descuento
            }

        case 5:
            rubro
            descuento = (importeCompra * 20) / 100;
            if (descuento > 80000) {
                descuento = 80000;
                importefinal = importeCompra - descuento
            }
            else {
                importefinal = importeCompra - descuento;
            }
        default: console.log(`el numero ingresado es incorrecto`);
            break;
    }
    console.log(`el descuento aplicado es:${descuento}`);
    console.log(`el importe final es : ${importefinal}`);
    console.log(`el importe de la compra es: ${importeCompra}`);
    console.log(`el rubro es: ${rubro}`);
}
