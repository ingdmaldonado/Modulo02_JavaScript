/*

Un comercio que vende bolsas de alimentos para mascotas trabaja y comercializa únicamente con tres grandes marcas de alimentos para perros lo que le permite trabajar con descuentos muy interesantes para sus clientes. Las marcas con las que trabaja son:

Dogui
Tiernitos
Dogpro

Realice un programa en JavaScript que permita ingresar el código del producto y la cantidad de bolsas a comprar y que solo determine el importe total a pagar.

*/

{
    let marcaDeAlimento = 0;
    let cantidadDeBolsas = 0;

    marcaDeAlimento = Number(prompt(`1 = Dogui, 2 = Tiernitos, 3 = Dogpro`));
    cantidadDeBolsas = Number(prompt(`Ingrese cantidad de bolsas`));

    switch(marcaDeAlimento)
    {
        case 1: {
                    if (cantidadDeBolsas >= 11)
                    {
                        let precioFinal = (34000*cantidadDeBolsas);
                        console.log(`El importe total es: ${precioFinal}`);
                    }
                    else
                    {
                        if (cantidadDeBolsas >= 5)
                        {
                            let precioFinal = (36000*cantidadDeBolsas);
                            console.log(`El importe total es: ${precioFinal}`);
                        }
                        else
                        {
                            let precioFinal = (38000*cantidadDeBolsas);
                            console.log(`El importe total es: ${precioFinal}`);
                        }
                    }
                    break;
                }

        case 2: {
                    if (cantidadDeBolsas >= 11)
                    {
                        let precioFinal = (27000*cantidadDeBolsas);
                        console.log(`El importe total es: ${precioFinal}`);
                    }
                    else
                    {
                        if (cantidadDeBolsas >= 5)
                        {
                            let precioFinal = (29000*cantidadDeBolsas);
                            console.log(`El importe total es: ${precioFinal}`);
                        }
                        else
                        {
                            let precioFinal = (31000*cantidadDeBolsas);
                            console.log(`El importe total es: ${precioFinal}`);
                        }
                    }
                    break;
                }
                
        case 3: {
                    if (cantidadDeBolsas >= 11)
                    {
                        let precioFinal = (42000*cantidadDeBolsas);
                        console.log(`El importe total es: ${precioFinal}`);
                    }
                    else
                    {
                        if (cantidadDeBolsas >= 5)
                        {
                            let precioFinal = (44000*cantidadDeBolsas);
                            console.log(`El importe total es: ${precioFinal}`);
                        }
                        else
                        {
                            let precioFinal = (46000*cantidadDeBolsas);
                            console.log(`El importe total es: ${precioFinal}`);
                        }
                    }
                    break;
                }
                
        default: {console.log(`La opcion es incorrecta`);}
    }
}