
/*
    Enunciado 3:

    "Dado el número de productos en el carrito de compras, muestra 
    'Carrito lleno' si hay 10 o más productos, de lo contrario, 
    muestra 'Carrito con espacio'."
*/

{

    /******************************************/
    /* Si lo hacemos con Operadores Ternarios */
    /******************************************/

    let cantidadProductos = 0;
    cantidadProductos = Number(prompt("Ingrese la cantidad de productos comprados"));

    let resultado = cantidadProductos >= 10 ? 'carrito lleno':'carrito disponible';

    console.log(resultado);


}


