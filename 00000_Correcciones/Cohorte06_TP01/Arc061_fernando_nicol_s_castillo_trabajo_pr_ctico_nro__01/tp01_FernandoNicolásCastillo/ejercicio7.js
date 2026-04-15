/*Un comercio que vende bolsas de alimentos para mascotas trabaja y comercializa únicamente con tres 
grandes marcas de alimentos para perros lo que le permite trabajar con descuentos muy interesantes para sus 
clientes. Las marcas con las que trabaja son:
Catálogo de Productos
Codigo Descripción x unidad
(cantidad >= 5) y (cantidad 
<=10)
Cantidad >= 
11
1 Dogui x 21 kil.
$ 
38.000,00 $ 36.000,00 $ 34.000,00
2
Tiernitos x 21 
kil
$ 
31.000,00 $ 29.000,00 $ 27.000,00
3 Dogpro x 21 kil
$ 
46.000,00 $ 44.000,00 $ 42.000,00
Realice un programa en JavaScript que permita ingresar el código del producto y la cantidad de bolsas a 
comprar y que solo determine el importe total a pagar.
*/

{

let codigo = 0;
codigo = Number(prompt ('1-Dogui, 2-Tiernitos, 3-Dogpro'));

let cantidad = 0;
/*cantidad = Number(prompt ('Ingrese la Cantidad:'));*/

let totalAPagar = 0;

switch(codigo)
{
case 1:
    console.log(`codigo 1: DOGUI`);
    cantidad = Number(prompt ('Ingrese la Cantidad:'));
    if(cantidad < 5) 
    {
        totalAPagar = (cantidad * 38000);
        console.log(`Cantidad`,cantidad);
        console.log(`Precio: 36000`);
        console.log(`Total a Pagar:`, totalAPagar);
    }
    else
    {
        if((cantidad >= 5) && (cantidad <=10))
        {
        totalAPagar = (cantidad * 36000);
        console.log(`Cantidad`,cantidad);
        console.log(`Precio: 36000`);
        console.log(`Total a Pagar:`, totalAPagar);
        }
    }       
    {
        if((cantidad >= 11))
        {
        totalAPagar = (cantidad * 34000);
        console.log(`Cantidad`,cantidad);
        console.log(`Precio: 34000`);
        console.log(`Total a Pagar:`, totalAPagar);    
        } 
        break; 
    }

case 2:
    console.log(`codigo 2: TIERNITOS`);
    cantidad = Number(prompt ('Ingrese la Cantidad:'));
    if(cantidad < 5) 
    {
        totalAPagar = (cantidad * 31000);
        console.log(`Cantidad`,cantidad);
        console.log(`Precio: 31000`);
        console.log(`Total a Pagar:`, totalAPagar);
    }
    else
    {
        if((cantidad >= 5) && (cantidad <=10))
        {
        totalAPagar = (cantidad * 29000);
        console.log(`Cantidad`,cantidad);
        console.log(`Precio: 29000`);
        console.log(`Total a Pagar:`, totalAPagar);
        }
    }       
    {
        if((cantidad >= 11))
        {
        totalAPagar = (cantidad * 27000);
        console.log(`Cantidad`,cantidad);
        console.log(`Precio: 27000`);
        console.log(`Total a Pagar:`, totalAPagar);    
        }  
        break;
    }

case 3:
    console.log(`codigo 3: DOGPRO`);
    cantidad = Number(prompt ('Ingrese la Cantidad:'));
    if(cantidad < 5) 
    {
        totalAPagar = (cantidad * 46000);
        console.log(`Cantidad`,cantidad);    
        console.log(`Precio: 46000`);
        console.log(`Total a Pagar:`, totalAPagar);
    }
    else
    {
        if((cantidad >= 5) && (cantidad <=10))
        {
        totalAPagar = (cantidad * 44000);
        console.log(`Cantidad`,cantidad);
        console.log(`Precio: 44000`);
        console.log(`Total a Pagar:`, totalAPagar);
        }
    }       
    {
        if((cantidad >= 11))
        {
        totalAPagar = (cantidad * 42000);
        console.log(`Cantidad`,cantidad);
        console.log(`Precio: 42000`);
        console.log(`Total a Pagar:`, totalAPagar);    
        } 
        break; 
    }
    default:
    {
        console.log(`Por favor ingrese un código correcto.`);
        break;
    }           

}
    
}
