/*
--------Ejercicio Nro. 07-------- 
-------Estructuras Condicionales (if/else)-------------
Un comercio que vende bolsas de alimentos para mascotas 
trabaja y comercializa únicamente con tres 
grandes marcas de alimentos para perros 
lo que le permite trabajar con descuentos 
muy interesantes para sus clientes. 
Las marcas con las que trabaja son: 

----------------------
|Catálogo de Productos  |
----------------------

Codigo ------1-----
Descripción --Dogui x 21 kil.
x unidad -----$ 38.000,00
(cantidad >= 5) y (cantidad <=10)--$ 36.000,00 
Cantidad >= 11------$ 34.000,00

Codigo ------2-----
Descripción --Tiernitos x 21 kil
x unidad -----$ 31.000,00
(cantidad >= 5) y (cantidad <=10)--$ 29.000,00 
Cantidad >= 11------$ 27.000,00

Codigo ------3-----
Descripción --Dogpro x 21 kil
x unidad -----$ 46.000,00
(cantidad >= 5) y (cantidad <=10)--$ 44.000,00 
Cantidad >= 11------$ 42.000,00
---------------------------------------------------------------
Realice un programa en JavaScript que permita ingresar 
el código del producto y la cantidad de bolsas a comprar 
y que solo determine el importe total a pagar. 

*/
{
    let codigoProductos = 0;
    let cantidadBolsas = 0;
    let totalAPagar = 0;

    codigoProductos = Number(prompt(`Ingrese el codigo: 1-Dogui x 21kg 2-Tiernitos x 21kg 3-Dogpro x 21kg`));
    cantidadBolsas = Number(prompt(`Ingrese la cantidad de bolsas a comprar:`));

    switch (codigoProductos) {
        case 1:
            {
                if (cantidadBolsas >= 11) /*11 o más cantidad de bolsas*/ {
                    totalAPagar = cantidadBolsas * 34000;

                    console.log(`Total a pagar: $${totalAPagar}`);
                }
                else /*Mayor o igual de 5 hasta 10 bolsas*/ {
                    if ((cantidadBolsas >= 5) && (cantidadBolsas <= 10)) {
                        totalAPagar = cantidadBolsas * 36000;

                        console.log(`Total a pagar: $${totalAPagar}`);
                    }
                    else /*Menos de 5 cantidad de bolsas*/ {
                        totalAPagar = cantidadBolsas * 35000;

                        console.log(`Total a pagar: $${totalAPagar}`);
                    }
                }
                break;
            }
        case 2:
            {
                if (cantidadBolsas >= 11) /*11 o más cantidad de bolsas*/ {
                    totalAPagar = cantidadBolsas * 27000;

                    console.log(`Total a pagar: $${totalAPagar}`);
                }
                else /*Mayor o igual de 5 hasta 10 bolsas*/ {
                    if ((cantidadBolsas >= 5) && (cantidadBolsas <= 10)) {
                        totalAPagar = cantidadBolsas * 29000;

                        console.log(`Total a pagar: $${totalAPagar}`);
                    }
                    else /*Menos de 5 cantidad de bolsas*/ {
                        totalAPagar = cantidadBolsas * 31000;

                        console.log(`Total a pagar: $${totalAPagar}`);
                    }
                }
                break;
            }
        case 3:
            {
                if (cantidadBolsas >= 11) /*11 o más cantidad de bolsas*/ {
                    totalAPagar = cantidadBolsas * 42000;

                    console.log(`Total a pagar: $${totalAPagar}`);
                }
                else /*Mayor o igual de 5 hasta 10 bolsas*/ {
                    if ((cantidadBolsas >= 5) && (cantidadBolsas <= 10)) {
                        totalAPagar = cantidadBolsas * 44000;

                        console.log(`Total a pagar: $${totalAPagar}`);
                    }
                    else /*Menos de 5 cantidad de bolsas*/ {
                        totalAPagar = cantidadBolsas * 46000;

                        console.log(`Total a pagar: $${totalAPagar}`);
                    }
                }
                break;
            }
        default:
        {
            console.log(`¡Opcion inválida!`);
        }

    }


}