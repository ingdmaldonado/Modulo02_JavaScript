{
    let codigo = Number(prompt("Ingrese el código de producto: "));
    let cantProducto = Number(prompt("Ingrese la cantidad de producto: "));
    let producto = "";
    let precio = 0;

    switch (codigo) {
        case 1:
            producto = "Dogui x 21kg"
            precio = 38000;
            if (cantProducto >= 5 && cantProducto <= 10){
                precio = 36000;
            }else if (cantProducto >= 11) {
                precio = 34000;
            }
            break;
        case 2:
            producto = "Tiernitos x 21kg"
            precio = 31000;
            if (cantProducto >= 5 && cantProducto <= 10){
                precio = 29000;
            }else if (cantProducto >= 11) {
                precio = 27000;
            }
            break;
        case 3:
            producto = "Dogpro x 21kg"
            precio = 46000;
            if (cantProducto >= 5 && cantProducto <= 10){
                precio = 44000;
            }else if (cantProducto >= 11) {
                precio = 42000;
            }
            break;
        default:
            console.log(`Producto inexistente`);
            codigo = 0;
            break;
    }

    if (codigo >= 1 && codigo <= 3){
        console.log(`---------- PRODUCTO ----------`);
        console.log(`Producto: ${producto} | Cantidad: x${cantProducto}`);
        console.log(`Precio C/U: $${precio}`);
        console.log(`Total: $${precio*cantProducto}`); 
    }
}