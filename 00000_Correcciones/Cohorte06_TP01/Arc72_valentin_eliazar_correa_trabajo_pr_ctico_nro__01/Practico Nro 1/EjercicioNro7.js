/*
Ejercicio Nro. 07: Estructuras Condicionales (if/else) 
Un comercio que vende bolsas de alimentos para mascotas trabaja y comercializa únicamente con tres 
grandes marcas de alimentos para perros lo que le permite trabajar con descuentos muy interesantes para sus 
clientes. Las marcas con las que trabaja son:
Realice un programa en JavaScript que permita ingresar el código del producto y la cantidad de bolsas a 
comprar y que solo determine el importe total a pagar.

*/
{
    let codigo = 0;
    let cantidad = 0;
    let precio = 0;
    let total = 0;

    codigo = Number(prompt(`Ingrese codigo del producto (1, 2 o 3)`));

    cantidad = Number(prompt(`Ingrese cantidad de bolsas`));

    if (codigo === 1)
    {
        if(cantidad >=11)
        {
            precio = 34000;
        }
        if((cantidad >=5) && (cantidad <= 10))
        {
            precio = 36000;
        }
        if(cantidad < 5)
        {
            precio = 38000;
        }
    }
        if (codigo === 2)
    {
        if(cantidad >=11)
        {
            precio = 27000;
        }
        if((cantidad >=5) && (cantidad <= 10))
        {
            precio = 29000;
        }
        if(cantidad < 5)
        {
            precio = 31000;
        }
    }
        if (codigo === 3)
    {
        if(cantidad >=11)
        {
            precio = 42000;
        }
        if((cantidad >=5) && (cantidad <= 10))
        {
            precio = 44000;
        }
        if(cantidad < 5)
        {
            precio = 46000;
        }
    }
    total = precio * cantidad;
    
    console.log(`La cantidad de bolsas son:${cantidad}`)
    console.log(`El precio unitario es de ${precio}`);
    console.log(`El total a pagar es de ${total}`);








}
