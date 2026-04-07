/*

Ejercicio Nro. 07: Estructuras Condicionales (if/else) 
 Un comercio que vende bolsas de alimentos para mascotas trabaja y comercializa únicamente con tres 
grandes marcas de alimentos para perros lo que le permite trabajar con descuentos muy interesantes para sus 
clientes. Las marcas con las que trabaja son: 

Tabla de Catálogo de Productos

 Realice un programa en JavaScript que permita ingresar el código del producto y la cantidad de bolsas a 
comprar y que solo determine el importe total a pagar.

*/

{

    let codigoProducto = 0;
    let cantidadBolsasComprar = 0;
    let importeTotalCompra = 0;
    let nombreProducto = "";
    let valorXUnidad = 0;
    let productoCorrecto = true;

    codigoProducto  = Number(prompt(`Ingrese codigo Producto - 1 = Doguix21kg, 2 = Tiernitosx21kg, 3 = Dogprox21kg`));
    cantidadBolsasComprar = Number(prompt(`Ingrese cantidad de bolsas a comprar`));

    switch (codigoProducto) {
        case 1:{ // DOGUI
            nombreProducto = "Dogui x 21kg";
            if ((cantidadBolsasComprar>0 && cantidadBolsasComprar<5)) { // entre 1 y 5, 38000 X UNIDAD
               
                valorXUnidad = 38000;
                importeTotalCompra = valorXUnidad*cantidadBolsasComprar;

            } else {
                if ((cantidadBolsasComprar>=5 && cantidadBolsasComprar<=10)) { // entre 5 y 10 bolsas, 36000 X UNIDAD
                    
                    valorXUnidad = 36000;
                    importeTotalCompra = valorXUnidad*cantidadBolsasComprar;

                } else { // 11 bolsas o mas, 34000 X UNIDAD
                    
                    valorXUnidad = 34000;
                    importeTotalCompra = valorXUnidad*cantidadBolsasComprar;
                }
            }
            break;
        }
        case 2:{ //TIERNITOS
            nombreProducto = "Tiernitos x 21kg";
            if ((cantidadBolsasComprar>0 && cantidadBolsasComprar<5)) { // entre 1 y 5, 31000 X UNIDAD
               
                valorXUnidad = 31000;
                importeTotalCompra = valorXUnidad*cantidadBolsasComprar;

            } else {
                if ((cantidadBolsasComprar>=5 && cantidadBolsasComprar<=10)) { // entre 5 y 10 bolsas, 29000 X UNIDAD
                    
                    valorXUnidad = 29000;
                    importeTotalCompra = valorXUnidad*cantidadBolsasComprar;

                } else { // 11 bolsas o mas, 27000 X UNIDAD
                    
                    valorXUnidad = 27000;
                    importeTotalCompra = valorXUnidad*cantidadBolsasComprar;
                }
            }
            break;
        }
        case 3:{ //DOGPRO
            nombreProducto = "Dogpro x 21kg";
            if ((cantidadBolsasComprar>0 && cantidadBolsasComprar<5)) { // entre 1 y 5, 46000 X UNIDAD
               
                valorXUnidad = 46000;
                importeTotalCompra = valorXUnidad*cantidadBolsasComprar;

            } else {
                if ((cantidadBolsasComprar>=5 && cantidadBolsasComprar<=10)) { // entre 5 y 10 bolsas, 44000 X UNIDAD
                    
                    valorXUnidad = 44000;
                    importeTotalCompra = valorXUnidad*cantidadBolsasComprar;

                } else { // 11 bolsas o mas, 42000 X UNIDAD
                    
                    valorXUnidad = 42000;
                    importeTotalCompra = valorXUnidad*cantidadBolsasComprar;
                }
            }
            break;
        }
        default:{
            productoCorrecto = false;
            break;
        }
    }

    // muestro los datos: nombre del producto, cantidad de bolsas, precio x unidad y importe total de la compra
    if (productoCorrecto) {
        console.log(`El producto seleccionado es "${nombreProducto}", la cantidad de bolsas a comprar son ${cantidadBolsasComprar}, a un precio X unidad de $${valorXUnidad}`);
        console.log(`El importe total es de $ ${importeTotalCompra}`);
    } else {
        console.log(`ERROR, codigo incorrecto, intente de nuevo!!!`)
    }

}