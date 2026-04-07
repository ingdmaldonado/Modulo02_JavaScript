/*
    Ejercicio Nro. 13: Estructuras Condicionales (if/else)

    El programa Marcatón, realizado en Catamarca junto al Banco Nación, ofrece descuentos en distintos rubros 
    comerciales.

    Tabla de descuentos:

    Rubro                   Descuento           Tope máximo
    Vestimenta                  20%                 $80.000
    Perfumería                  20%                 $80.000
    Librería                    30%                 $90.000
    Electrodomésticos           15%                 $70.000
    Calzado                     20%                 $80.000

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
    let importeCompra = 0;
    let totalPagar = 0;
    let descuento = 0;
    let topeCompra = 0;
    let rubroValido = true;

    rubro = Number(prompt(`Seleccione un rubro comercial: 1- Vestimenta; 2- perfumeria; 3- Libreria; 4- Electrodomesticos; 5- Calzado`));
    importeCompra = Number(prompt(`Ingrese el importe de la compra`));

    switch( rubro )
    {
        case 1:{
            console.log('Usted selecciono el rubro Vestimenta. Aplica un descuento del 20% con tope de reintegro de $80000');
            descuento =  ( importeCompra * 20 ) / 100;
            topeCompra = 80000;
            break;
        }
        case 2:{
            console.log('Usted selecciono el rubro Perfumería. Aplica un descuento del 20% con tope de reintegro de $80000');
            descuento =  ( importeCompra * 20 ) / 100;
            topeCompra = 80000;
            break;
        }
        case 3:{
            console.log('Usted selecciono el rubro Librería. Aplica un descuento del 30% con tope de reintegro de $90000');
            descuento =  ( importeCompra * 30 ) / 100;
            topeCompra = 90000;
            break;
        }
        case 4:{
            console.log('Usted selecciono el rubro Electrodomésticos. Aplica un descuento del 15% con tope de reintegro de $70000');
            descuento =  ( importeCompra * 15 ) / 100;
            topeCompra = 70000;
            break;
        }
        case 5:{
            console.log('Usted selecciono el rubro Calzado. Aplica un descuento del 20% con tope de reintegro de $80000');
            descuento =  ( importeCompra * 20 ) / 100;
            topeCompra = 80000;
            break;
        }
        default:{
            console.log('Rubro inválido, seleccione un rubro correcto');
            rubroValido = false;
            break;
        }
    }

    //Validacion y calculo de la compra
    if( rubroValido )
    {
        //Verificar el tope de reintegro
        descuento = ( descuento > topeCompra )? topeCompra : descuento;

        //Total a pagar final
        totalPagar = importeCompra - descuento;

        //Imprimo el importe de la compra, descuentos y importe total a pagar
        console.log(`Importe de la compra: $${importeCompra}`);
        console.log(`Descuento aplicado: $${descuento}`);
        console.log(`Importe total a pagar: $${totalPagar}`);
    }
}