/*
    Ejercicio Nro. 13: Estructuras Condicionales (if/else)
    El programa Marcatón, realizado en Catamarca junto al Banco Nación, ofrece descuentos en distintos rubros comerciales.

    Tabla de descuentos:
    Rubro             | Descuento | Tope máximo
    Vestimenta        | 20%       | $80.000
    Perfumería        | 20%       | $80.000
    Librería          | 30%       | $90.000
    Electrodomésticos | 15%       | $70.000
    Calzado           | 20%       | $80.000

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
    let rubro = 0;
    rubro = Number(prompt(`Ingrese el Rubro/Comercio: 1) Vestimenta | 2) Perfumería | 3) Librería | 4) Electrodomésticos | 5) Calzado.`));

    let importeDeCompra = 0;
    importeDeCompra = Number(prompt(`Ingrese el Importe de la Compra.`));

    let descuento = 0;

    let totalAPagar = 0;

    let operacionCorrecta = true;

    switch(rubro){
        case 1: // Vestimenta
        {
            console.log(`Rubro: Vestimenta | Marcatón: 20% (Tope Max: $80.000)`);

            descuento = (importeDeCompra * 20)/100;

            descuento = descuento > 80000? 80000 : descuento;

            operacionCorrecta;

            break;
        }

        case 2: // Perfumería
        {
            console.log(`Rubro: Perfumería | Marcatón: 20% (Tope Max: $80.000)`);

            descuento = (importeDeCompra * 20)/100;

            descuento = descuento > 80000? 80000 : descuento;

            operacionCorrecta;

            break;
        }

        case 3: // Librería
        {
            console.log(`Rubro: Librería | Marcatón: 30% (Tope Max: 90.000)`);

            descuento = (importeDeCompra * 30)/100;

            descuento = descuento > 90000? 90000 : descuento;

            operacionCorrecta;

            break;
        }

        case 4: // Electrodomésticos
        {
            console.log(`Rubro: Electrodomésticos | Marcatón: 15% (Tope Max: $70.000)`);

            descuento = (importeDeCompra * 15)/100;

            descuento = descuento >70000? 70000 : descuento;

            operacionCorrecta;

            break;
        }

        case 5: // Calzado
        {
            console.log(`Rubro: Calzado | Marcatón: 20% (Tope Max: $80.000)`);

            descuento = (importeDeCompra * 20)/100;

            descuento = descuento > 80000? 80000 : descuento;

            operacionCorrecta;

            break;
        }

        default: // Rubro NO Válido
        {
            console.log(`El Rubro ingresado NO es Válido. Por favor, intente nuevamente.`);

            operacionCorrecta = false;

            break;
        }
    }

    if(operacionCorrecta === true){
        totalAPagar = importeDeCompra - descuento;

        console.log(`Importe de Compra: $${importeDeCompra} | Descuento: $${descuento} | Total a Pagar: $${totalAPagar}`);
    }
}