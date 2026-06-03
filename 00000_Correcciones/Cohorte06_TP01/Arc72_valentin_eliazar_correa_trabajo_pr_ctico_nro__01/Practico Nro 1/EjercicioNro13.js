/*
Ejercicio Nro. 13: Estructuras Condicionales (if/else) 
El programa Marcatón, realizado en Catamarca junto al Banco Nación, ofrece descuentos en distintos 
rubros comerciales. 
Tabla de descuentos: 
Rubro                Descuento      Tope máximo 
Vestimenta           20%            $80.000
Perfumería           20%            $80.000 
Librería             30%            $90.000 
Electrodomésticos    15%            $70.000 
Calzado              20%            $80.000   
El programa debe: 

1. Solicitar el rubro del comercio. 
2. Solicitar el importe de la compra. 
3. Calcular el descuento correspondiente. 
4. Verificar si el descuento supera el tope del rubro. Si lo supera, aplicar solo el tope. 
5. Mostrar: - rubro - importe de la compra - descuento aplicado - importe final a pagar. 
*/
{
    let rubro = 0;
    let importeCompra = 0
    let descuento = 0;
    let tope = 0;
    let totalAPagar = 0;

    rubro = Number(prompt(`Ingrese el rubro: 1.Vestimenta, 2.Perfumeria, 3.Libreria, 4.Electrodomesticos, 5.Calzado`));

    importeCompra = Number(prompt(`Ingrese el importe de su compra`));

    switch(rubro)
    {
        case 1:
        {
            rubro = (`vestimenta`);
            descuento = (importeCompra * 20)/100;
            tope = 80000;
            break;
        }
        case 2:
        {
            rubro = (`Perfumeria`);
            descuento = (importeCompra * 20)/100;
            tope = 80000;
            break;
        }
        case 3:
        {
            rubro = (`Libreria`)
            descuento = (importeCompra * 30)/100;
            tope = 90000;
            break;
        }
        case 4:
        {
            rubro = (`Electrodomésticos`)
            descuento = (importeCompra * 15)/100;
            tope = 70000;
            break;
        }
        case 5:
        {
            rubro = (`Calzado`)
            descuento = (importeCompra * 20)/100;
            tope = 80000;
            break;
        }
        default:
        {
            console.log(`Pruebe nuevamente`);
            break;
        }
    }
    if(descuento > tope)
    {
        descuento = tope;
    }

    totalAPagar = importeCompra - descuento;

    console.log(`Usted esta comprando ${rubro} Su importe de compra: ${importeCompra} El descuento es de:${descuento} El total a pagar es de: ${totalAPagar}`)
}