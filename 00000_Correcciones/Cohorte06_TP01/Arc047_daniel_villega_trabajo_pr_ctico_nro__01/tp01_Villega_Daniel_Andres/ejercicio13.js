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
    let rubro = 0; /* tipo de variable ? */
    rubro = Number(prompt(`Indique el Rubro (1 - Vestimenta, 2 - Perfumeria, 3 - Libreria, 4 - Electro, 5 - Calzado)`));
    

    let importeCompra = 0;
    importeCompra = Number(prompt(`Ingrese el Importe Compra`));
    
    console.log(rubro);
    console.log(importeCompra);


    let vestimenta = 80000;
    let perfumeria = 80000;
    let libreria = 90000;
    let electrodomesticos = 70000;
    let calzado = 80000;
    
    let reintegro = 0;
    let descuento = 0;
    
    let importeFinal = 0;

    let operacionCorrecta = false;

    switch(rubro)
    {
        case 1:{
                operacionCorrecta = true;
                rubro = `vestimenta`;
                console.log(`vestimenta`);
                reintegro = (importeCompra * 20)/100;
                descuento = reintegro > vestimenta ? vestimenta : reintegro;
                //console.log (rubro, importeCompra, descuento);
                break;
                }
        case 2:{
                operacionCorrecta = true;
                rubro = `perfumeria`;
                console.log(`perfumeria`);
                reintegro = (importeCompra * 20)/100;
                descuento = reintegro > perfumeria ? perfumeria : reintegro;
                //console.log (rubro, importeCompra, descuento);
                break;
        }
        case 3:{
                operacionCorrecta = true;
                rubro = `libreria`;
                console.log(`libreria`);
                reintegro = (importeCompra * 30)/100;
                descuento = reintegro > libreria ? libreria : reintegro;
                //console.log (rubro, importeCompra, descuento);
                break;
        }
        case 4:{
                operacionCorrecta = true;
                rubro = `electrodomesticos`;
                console.log(`electrodomesticos`);
                reintegro = (importeCompra * 30)/100;
                descuento = reintegro > electrodomesticos ? electrodomesticos : reintegro;
                //console.log (rubro, importeCompra, descuento);
                break;
        }
        case 5:{
                operacionCorrecta = true;
                rubro = `calzado`;
                console.log(`calzado`);
                reintegro = (importeCompra * 30)/100;
                descuento = reintegro > calzado ? calzado : reintegro;
                //console.log (rubro, importeCompra, descuento);
                break;
        }
        default:{
                console.log (`no se encuentra el rubro`);
                operacionCorrecta = false;
                break;

        }

    }


    if(operacionCorrecta)
    {

        importeFinal= importeCompra - descuento;

    

        console.log(`rubro: ${rubro} importe de compra: ${importeCompra} descuento: ${descuento} Total a Pagar: ${importeFinal}`);


    }
    else
    {
        console.log(`Sr. Ud. eligió una opción incorrecta. intente nuevamente`);
    }


   

}

