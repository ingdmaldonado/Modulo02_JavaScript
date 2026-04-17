/*
Ejercicio Nro. 13: Estructuras Condicionales (if/else)
El programa Marcatón, realizado en Catamarca junto al Banco Nación, ofrece descuentos en distintos rubros comerciales.
Tabla de descuentos:
Rubro            Descuento    Tope máximo
Vestimenta          20%         $80.000
Perfumería          20%         $80.000
Librería            30%         $90.000
Electrodomésticos   15%         $70.000
Calzado             20%         $80.000
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
    let importeDeCompra = 0;
    let descuento = 0;
    let nombreRubro = "";

    rubro = Number(prompt(`Ingrese el rubro del comercio: 1-vestimenta 2-perfumeria 3-libreria 4-electrodomesticos 5-calzado`));

    importeDeCompra = Number(prompt(`Ingrese el importe de compra $`));

    let operacionCorrecta = false;

    switch(rubro)
    {
        case 1: //vestimenta
        {
            operacionCorrecta = true;
            nombreRubro = "Vestimenta";
            descuento = (importeDeCompra*20)/100;
            descuento = descuento > 80000? 80000: descuento;  
            break;
        }
        case 2:  //perfumeria
        {
            operacionCorrecta = true;
            nombreRubro = "Perfumeria";
            descuento = (importeDeCompra*20)/100;
            descuento = descuento > 80000? 80000: descuento;  
            break;
        }
        case 3:   //Libreria
        {
            operacionCorrecta = true;
            nombreRubro = "Libreria";
            descuento = (importeDeCompra*30)/100;
            descuento = descuento > 90000? 90000: descuento;  
            break;
        }
        case 4:   //Electrodomesticos
        {
            operacionCorrecta = true;
            nombreRubro = "Electrodomesticos";
            descuento = (importeDeCompra*15)/100;
            descuento = descuento > 70000? 70000: descuento;  
            break;
        }
        case 5:  //calzado
        {
            operacionCorrecta = true;
            nombreRubro = "Calzado";
            descuento = (importeDeCompra*20)/100;
            descuento = descuento > 80000? 80000: descuento;  
            break;
        }
        default:
        {
            operacionCorrecta = false;
            console.log(`Ingrese opcion correcta`);
            break;
        }
    }

    let totalAPagar = 0;

    if(operacionCorrecta)
    {
        totalAPagar = importeDeCompra - descuento;
        console.log(`Rubro: ${nombreRubro}`);
        console.log(`Importe de compra: ${importeDeCompra}`);
        console.log(`Descuento aplicado: ${descuento}`);
        console.log(`Importe final a pagar $: ${totalAPagar}`);
    }
    else
    {
        console.log(`Error`);
    }
}
