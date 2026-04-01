/* Ejercicio Nro. 07: Estructuras Condicionales (if/else)
Un comercio que vende bolsas de alimentos para mascotas trabaja y comercializa únicamente con tres
grandes marcas de alimentos para perros lo que le permite trabajar con descuentos muy interesantes para sus
clientes. Las marcas con las que trabaja son:
Catálogo de Productos
Codigo  Descripción         x unidad      (cantidad >= 5) y (cantidad<=10)      Cantidad >=11
1       Dogui x 21 kil.     $38.000,00          $ 36.000,00                     $ 34.000,00
2       Tiernitos x 21kil   $31.000,00          $ 29.000,00                     $ 27.000,00
3       Dogpro x 21 kil     $46.000,00          $ 44.000,00                     $ 42.000,00
Realice un programa en JavaScript que permita ingresar el código del producto y la cantidad de bolsas a
comprar y que solo determine el importe total a pagar.
 */

{
    let codigo=0;
    codigo= Number(prompt(`Ingrese codigo del producto`));
    console.log( `Codigo de producto`, codigo);

    let cantidad= 0;
    cantidad= Number( prompt(`Ingrese la cantidad`));
    console.log (`Cantidad`, cantidad);

    let precio=0;

    if( codigo == 1)
        {
            if (cantidad >=1 && cantidad <=4)
            precio= 38000;
            else if (cantidad >= 5 && cantidad <=10)
            precio= 36000;
            else if (cantidad >=11)
            precio= 34000;
        }   
    
    else if (codigo==2)
        {
            if (cantidad >=1 && cantidad <=4)
            precio= 31000;
            else if (cantidad >=5 && cantidad <=10)
            precio= 29000;
            else if (cantidad >=11)
            precio= 27000;
        }
    else if (codigo==3)
        {
            if (cantidad >=1 && cantidad <=4)
            precio= 46000;
            else if (cantidad >=5 && cantidad <=10)
            precio= 44000;
            else if (cantidad >=11)
            precio= 42000;
        }
    else
    {
        console.log (`Codigo invalo, ingrese nuevamente`);
    }
    let totalPagar=0;
    totalPagar= precio * cantidad;
    console.log(`El total a pagar es $`, totalPagar);

}