/*
    Ejercicio Nro. 07: Estructuras Condicionales (if/else)
    Un comercio que vende bolsas de alimentos para mascotas trabaja y comercializa únicamente con tres grandes marcas de alimentos para perros lo que le permite trabajar con descuentos muy interesantes para sus clientes. Las marcas con las que trabaja son:

Catálogo de Productos

Codigo   | Descripción       |  x Unidad |    (Cantidad=>5) y (Cantidad<=10) |  (Cantidad>=11)
1        | Dogui x 21kg      |  $38.000  |     $36.000                       |   $34.000
2        | Tierntitos x 21kg |  $31.000  |     $29.000                       |   $27.000
3        | DogPRO x 21kg     |  $46.000  |     $44.000                       |   $42.000

    Realice un programa en JavaScript que permita ingresar el código del producto y la cantidad de bolsas a comprar y que solo determine el importe total a pagar.
*/

{
    let codigoProducto = 0;
    codigoProducto = Number(prompt(`Ingrese el Código del Producto: 1) Dogui | 2) Tiernitos | 3) DogPRO`));

    let cantidadDeBolsas = 0;
    cantidadDeBolsas = Number(prompt(`Ingrese la Cantidad de Bolsas:`));

    let precioProducto = 0;

    let importeTotal = 0;

    let operacionCorrecta = true;

    /* FASE 1: Determinar Código del Producto */
    switch(codigoProducto){
        case 1: // Dogui
        {
            /* FASE 2: Determinar la Cántidad de Bolsas que llevara el Cliente */
            if(cantidadDeBolsas > 0 && cantidadDeBolsas <= 4){
                precioProducto = 38000;

                importeTotal = precioProducto * cantidadDeBolsas;
            }
            else{
                if(cantidadDeBolsas >= 5 && cantidadDeBolsas <= 10){
                    precioProducto = 36000;

                    importeTotal = precioProducto * cantidadDeBolsas;
                }
                else{
                    if(cantidadDeBolsas >= 11){
                        precioProducto = 34000;

                        importeTotal = precioProducto * cantidadDeBolsas;
                    }
                    else{
                        console.log(`Operacion Invalida. Por favor, intente nuevamente.`)
                    }
                }
            }

            /* FASE 3: Mostrar los Datos de la Compra y el Importe Total a Pagar */
            console.log(`Producto: Dogui | Cantidad de Bolsas: ${cantidadDeBolsas} | Total a Pagar: $${importeTotal}`);

            break;
        }


        case 2: // Tiernitos
        {
            /* FASE 2: Determinar la Cántidad de Bolsas que llevara el Cliente */
            if(cantidadDeBolsas > 0 && cantidadDeBolsas <= 4){
                precioProducto = 31000;

                importeTotal = precioProducto * cantidadDeBolsas;
            }
            else{
                if(cantidadDeBolsas >= 5 && cantidadDeBolsas <= 10){
                    precioProducto = 29000;

                    importeTotal = precioProducto * cantidadDeBolsas;
                }
                else{
                    if(cantidadDeBolsas >= 11){
                        precioProducto = 27000;

                        importeTotal = precioProducto * cantidadDeBolsas;
                    }
                    else{
                        console.log(`Operacion Invalida. Por favor, intente nuevamente.`);
                    }
                }
            }

            /* FASE 3: Mostrar los Datos de la Compra y el Importe Total a Pagar */
            console.log(`Producto: Tiernitos | Cantidad de Bolsas: ${cantidadDeBolsas} | Total a Pagar: $${importeTotal}`);

            break;
        }


        case 3: // DogPRO
        {
            /* FASE 2: Determinar la Cántidad de Bolsas que llevara el Cliente */
            if(cantidadDeBolsas > 0 && cantidadDeBolsas <= 4){
                precioProducto = 46000;

                importeTotal = precioProducto * cantidadDeBolsas;
            }
            else{
                if(cantidadDeBolsas >= 5 && cantidadDeBolsas <= 10){
                    precioProducto = 44000;

                    importeTotal = precioProducto * cantidadDeBolsas;
                }
                else{
                    if(cantidadDeBolsas >= 11){
                        precioProducto = 42000;

                        importeTotal = precioProducto * cantidadDeBolsas;
                    }
                }
            }

            /* FASE 3: Mostrar los Datos de la Compra y el Importe Total a Pagar */
            console.log(`Producto: DogPRO | Cantidad de Bolsas: ${cantidadDeBolsas} | Total a Pagar: $${importeTotal}`);

            break;
        }


        default:
            {
                console.log(`Código Ingresado NO Válido. Por favor, intente nuevamente.`)

                operacionCorrecta = false;

                break;
            }
    }
}