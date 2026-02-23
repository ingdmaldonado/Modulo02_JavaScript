
/* 

Un comercio que vende bolsas de alimentos para mascotas 
trabaja y comercializa únicamente con tres grandes marcas de alimentos para perros lo que le permite trabajar con descuentos muy interesantes para sus clientes. Las marcas con las que trabaja son: Catálogo de Productos Codigo Descripción x unidad (cantidad >= 5) y (cantidad <=10) Cantidad >= 11
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

/* 

    tipoAlimento => 1,2,3 

    cantidadBolsas => 1 --- 100 

*/
{
    let tipoAlimento = 0;
    let cantidadBolsas = 0;
    let precioProducto = 0;
    let totalAPagar = 0;

    /* 
        Definir los precios como constantes

    */

    const precioProducto1_Caso1 = 38000;
    const precioProducto1_Caso2 = 36000;
    const precioProducto1_Caso3 = 34000;

    tipoAlimento = Number(prompt("Ingrese tipo Alimento (1=DOGUI,2=TIERNITOS,3=DOGPRO"));
    
    cantidadBolsas = Number(prompt("Ingrese la cantidad de Bolsas"));

   
   
    if((tipoAlimento === 1) || (tipoAlimento === 2) || (tipoAlimento === 3))
    {
       
        // DOGUI CANTIDAD ENTRE 1 Y 4 //
        if(((cantidadBolsas >= 1) && (cantidadBolsas < 5)) && (tipoAlimento === 1))
        // Si cantidad de bolsas es mayor que 1 y menor que 5 y ademas es el alimento 1
        {
            precioProducto = precioProducto1_Caso1;
        }

        // DOGUI CANTIDAD ENTRE 5 Y 10
        if(((cantidadBolsas >= 5) && (cantidadBolsas <= 10)) && (tipoAlimento === 1))
        // Si cantidad de bolsas es mayor que 1 y menor que 5 y ademas es el alimento 1
        {
            precioProducto = precioProducto1_Caso2;
        }

        // DOGUI CANTIDAD MAYOR A 11
        if((cantidadBolsas >= 11) && (tipoAlimento === 1))
        // Si cantidad es mayor que 11
        {
            precioProducto = precioProducto1_Caso3;
        }

        // TIERNITOS CANTIDAD ENTRE 1 Y 4 //
        if(((cantidadBolsas >= 1) && (cantidadBolsas < 5)) && (tipoAlimento === 2))
        // Si cantidad de bolsas es mayor que 1 y menor que 5 y ademas es el alimento 1
        {
            precioProducto = 31000;
        }

        // TIERNITOS CANTIDAD ENTRE 5 Y 10
        if(((cantidadBolsas >= 5) && (cantidadBolsas <= 10)) && (tipoAlimento === 2))
        // Si cantidad de bolsas es mayor que 1 y menor que 5 y ademas es el alimento 1
        {
            precioProducto = 29000;
        }

        // TIERNITOS MAYOR A 11
        if((cantidadBolsas >= 11) && (tipoAlimento === 2))
        // Si cantidad de bolsas es mayor que 11
        {
            precioProducto = 27000;
        }

        totalAPagar = cantidadBolsas * precioProducto;



        console.log(`Tipo De Alimento: ${tipoAlimento}  y Cant. Bolsas ${cantidadBolsas} Precio ${precioProducto} Total ${totalAPagar}`);

    }
    else
    {
        console.log(`Por favor ingre un código valido`);
    }

}

/* esto es modo de ejemplo. modo de comentario 

     switch(tipoAlimento)
    {
        case 1: // DOGUI
        {
            
            // DOGUI CANTIDAD ENTRE 1 Y 4 //
            if(((cantidadBolsas >= 1) && (cantidadBolsas < 5)) && (tipoAlimento === 1))
            // Si cantidad de bolsas es mayor que 1 y menor que 5 y ademas es el alimento 1
            {
                precioProducto = precioProducto1_Caso1;
            }
    
            // DOGUI CANTIDAD ENTRE 5 Y 10
            if(((cantidadBolsas >= 5) && (cantidadBolsas <= 10)) && (tipoAlimento === 1))
            // Si cantidad de bolsas es mayor que 1 y menor que 5 y ademas es el alimento 1
            {
                precioProducto = precioProducto1_Caso2;
            }
    
            // DOGUI CANTIDAD MAYOR A 11
            if((cantidadBolsas >= 11) && (tipoAlimento === 1))
            // Si cantidad es mayor que 11
            {
                precioProducto = precioProducto1_Caso3;
            }      
            
            break;

        }

        case 2: // TIERNITOS
        {

        }

        case 3: // DOGPRO
        {

        }

        default: // 
        {

        }
    }


*/