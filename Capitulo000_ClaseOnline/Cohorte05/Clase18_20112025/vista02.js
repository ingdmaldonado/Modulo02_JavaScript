import productos from "./productos.js";

window.onload = ()=>{

    /*(01) voy a mostrar el vector
    de productos */

    console.log(productos);

    /* (02) proceso de actualización
    de precios de los productos del supermercado
    donde a los lacteos le aplicaremos
    el 
        5% => lacteos
        2% =>bebidas
    */

    const productosConAumento = productos.map((producto,indice)=>{

        /* aqui muestro el producto completo */
        console.log(producto);

        /* aqui muestro cada uno de los atributos
        del producto */

        console.log(producto.nombre);
        console.log(producto.precio);
        console.log(producto.tipo);

        if(producto.tipo === 'LACTEOS')
        {
            console.log("bebidas");
            producto.precio = producto.precio  + (producto.precio * 5)/100;
        }

        if(producto.tipo === 'BEBIDAS')
        {
            console.log("lacteos");
            producto.precio = producto.precio  + (producto.precio * 2)/100;
        }

        /* map. siempre, siempre, siempre, always 
        lleva return.
        */

        return producto;


    })

    /* (03) => Voy a mostrar los Productos con 
    el Incremento solicitado por el GERENTE COMERCIAL
    DEL SUPERMERCADO. => Una vez Estuve en la "B" S.R.L.
    */

   // console.log(productos);
    console.log(productosConAumento);
    

};