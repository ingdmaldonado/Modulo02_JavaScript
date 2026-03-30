/* TP - EJERCICIO NRO. 07
 Un comercio que vende bolsas de alimentos para mascotas trabaja y comercializa únicamente con tres
 grandes marcas de alimentos para perros lo que le permite trabajar con descuentos muy interesantes para sus
 clientes. Las marcas con las que trabaja son:

 Ver Cuadro

 Realice un programa en JavaScript que permita ingresar el código del producto y la cantidad de bolsas a
 comprar y que solo determine el importe total a pagar.
*/

{
    let precioUnitarioDogui     = 38000;
    let precioMedioDogui        = 36000;
    let precioMayorDogui        = 34000;

    let precioUnitarioTiernitos = 31000;
    let precioMedioTiernitos    = 29000;
    let precioMayorTiernitos    = 27000;

    let precioUnitarioDogpro    = 46000;
    let precioMedioDogpro       = 44000;
    let precioMayorDogpro       = 42000;

    let codigoProducto = 0;
    let cantidadBolsas = 0;

    codigoProducto = Number(prompt(`Ingrese el código del producto:
1 - Dogui x 21 kg      $38.000
2 - Tiernitos x 21 kg  $31.000
3 - Dogpro x 21 kg     $46.000`));

    cantidadBolsas = Number(prompt(`Ingrese la cantidad de bolsas a comprar`));

    let precioUnitario    = 0;
    let operacionCorrecta = false;
    let totalAPagar       = 0;

    switch(codigoProducto)
    {
        case 1:
        {
            operacionCorrecta = true;
            if(cantidadBolsas >= 11)
            { precioUnitario = precioMayorDogui; }
            else
            {
                if((cantidadBolsas >= 5) && (cantidadBolsas <= 10))
                { precioUnitario = precioMedioDogui; }
                else
                { precioUnitario = precioUnitarioDogui; }
            }
            break;
        }
        case 2:
        {
            operacionCorrecta = true;
            if(cantidadBolsas >= 11)
            { precioUnitario = precioMayorTiernitos; }
            else
            {
                if((cantidadBolsas >= 5) && (cantidadBolsas <= 10))
                { precioUnitario = precioMedioTiernitos; }
                else
                { precioUnitario = precioUnitarioTiernitos; }
            }
            break;
        }
        case 3:
        {
            operacionCorrecta = true;
            if(cantidadBolsas >= 11)
            { precioUnitario = precioMayorDogpro; }
            else
            {
                if((cantidadBolsas >= 5) && (cantidadBolsas <= 10))
                { precioUnitario = precioMedioDogpro; }
                else
                { precioUnitario = precioUnitarioDogpro; }
            }
            break;
        }
        default:
        {
            console.log(`Código de producto inválido. Ingrese 1, 2 o 3`);
            operacionCorrecta = false;
            break;
        }
    }

    if(operacionCorrecta)
    {
        totalAPagar = cantidadBolsas * precioUnitario;
        console.log(`Código Producto: ${codigoProducto}`);
        console.log(`Cantidad Bolsas: ${cantidadBolsas}`);
        console.log(`Precio Unitario Aplicado: ${precioUnitario}`);
        console.log(`Total a Pagar: ${totalAPagar}`);
    }
    else
    {
        console.log(`Sr. Ud. ingresó un código incorrecto. Intente nuevamente`);
    }
}
