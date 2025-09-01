

/* Esta es la variante 2. de la aplicación
de una cajera de supermercado.
Sabiendo que en la variante 1 => la cajera
solamente podía cargar 4 productos.
*/

{
    /* ciclo mientras => while */

    let totalCobrado = 0; // aqui guardaré el total cobrado
    let precioProducto = 0; // aquí guardaré el precio del producto
    let continuaCargando = "S"; // declarando e inicializando una variable 
    let cantidadProductos = 0;

    while(continuaCargando === "S" || continuaCargando === "s")
    {
        console.log(`esto se hace dentro del ciclo`);

        // estoy leyendo el precio del producto //
        precioProducto = Number(prompt(`Ingrese el Precio`));

        // ir acumulando esos precios en una variable totalizadora //
        totalCobrado = totalCobrado + precioProducto;

        // es ir contabilizando de uno en uno los productos que van ingresando //
        cantidadProductos = cantidadProductos + 1;

        // ir mostrando el precio cargado y el subtotal que llevo hasta este momento //
        console.log(`Precio Leido: ${precioProducto} Subtotal: ${totalCobrado} Productos: ${cantidadProductos}`);

        // preguntarle a la cajera si desea seguir ingresando productos //
        continuaCargando = prompt(`Sr. Desea continuar ?. (S/N)`);
    }

    console.log(`---------- esto es a la salida del ciclo -------`);

    // va a venir por el final //

    /* El ciclo while. no tiene
    una condición de fin clara. es decir
    no tiene un numero "n" de repeticiones
    clara. porque la condición de fin
    puede darse en cualquier momento. 

    while => cuando no puedo determinar con exáctitud la cantida de veces que algo se repite

    la condicion de fin tiene que estar bien
    establecida y se lo tiene que preguntar
    cada vez que se va a salir del ciclo.

    for => cuando SI PUEDO DETERMINAR con exáctitud la cantidad de veces que se repetira algo.

    */

    /*

        La cajera ingresa a las 8:00 de la mañana

        - cuantas personas atenderá ese día ?. => ciclo while => mientras haya personas para atender
        - no puede saber cuantos productos traera cada persona ?. => ciclo while => mientras tenga productos en el carrito

    */
    



}