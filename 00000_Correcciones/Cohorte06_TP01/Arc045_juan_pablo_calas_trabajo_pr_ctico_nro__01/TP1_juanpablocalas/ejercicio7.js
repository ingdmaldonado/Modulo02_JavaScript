/*
Ejercicio Nro. 07: Estructuras Condicionales (if/else)
Un comercio que vende bolsas de alimentos para mascotas trabaja y comercializa únicamente con tres grandes marcas de alimentos para perros lo que le permite trabajar con descuentos muy interesantes para sus clientes. Las marcas con las que trabaja son: Catálogo de Productos Codigo Descripción x unidad (cantidad >= 5) y (cantidad <=10) Cantidad >= 11
1
Dogui x 21 kil.
$ 38.000,00
$ 36.000,00
$ 34.000,00
2
Tiernitos x 21 kil
$ 31.000,00
$ 29.000,00
$ 27.000,00
3
Dogpro x 21 kil
$ 46.000,00
$ 44.000,00
$ 42.000,00
Realice un programa en JavaScript que permita ingresar el código del producto y la cantidad de bolsas a comprar y que solo determine el importe total a pagar.
*/
{
    let CodigoProducto = 0;
    let PrecioUnitarioProducto = 0;
    let PrecioMayorUno = 0;
    let PrecioMayorDos = 0;
    let CantidadBolsas = 0;

    let TotalAPagar = 0;

    CodigoProducto = Number(prompt(`Por favor ingrese Codigo del Producto`));
    CantidadBolsas = Number(prompt(`Ingrese la Cantidad de Bolsas a Comprar`));

    ProductoCorrecto = true

    switch(CodigoProducto)
    {
        case 1:
            console.log(`El Producto ingresado es ${CodigoProducto} - DOGUI X 21 KILOS`);
            PrecioUnitarioProducto = 38000;
            PrecioMayorUno = 36000;
            PrecioMayorDos = 34000;
            break;
        case 2:
            console.log(`El Producto ingresado es ${CodigoProducto} - TIERNITOS X 21 KILOS`);
            PrecioUnitarioProducto = 31000;
            PrecioMayorUno = 29000;
            PrecioMayorDos = 27000;
            break;       
    
        case 3:
            console.log(`El Producto ingresado es ${CodigoProducto} - DOGPRO X 21 KILOS`);
            PrecioUnitarioProducto = 46000;
            PrecioMayorUno = 44000;
            PrecioMayorDos = 42000;
            break;
        default:
            ProductoCorrecto = false
            break;
    }
    console.log(`La cantidad de Bolsas ingresadas es  ${CantidadBolsas}`);
    if(ProductoCorrecto)
    {
        if(CantidadBolsas < 5)
        {
            console.log(`El Precio UNITARIO por Bolsa es ${PrecioUnitarioProducto} `);
            TotalAPagar = PrecioUnitarioProducto * CantidadBolsas;
        }
        else
        {
            if((CantidadBolsas > 4) && (CantidadBolsas < 11))
            {
                console.log(`El Precio UNITARIO por Bolsa es ${PrecioMayorUno} `);
                TotalAPagar = PrecioMayorUno * CantidadBolsas;
            }
            else
            {
                console.log(`El Precio UNITARIO por Bolsa es ${PrecioMayorDos} `);
                TotalAPagar = PrecioMayorDos * CantidadBolsas;
            }
        }    
        console.log(`El TOTAL a Pagar por ${CantidadBolsas} Bolsas es ${TotalAPagar} `);
    }
    else
    {
        console.log(`El Codigo de Producto ingresado es Incorrecto - Ingrese codigo Correcto`)
    }

}