

// aqui voy a registrar varios productos //
const productosRegistrados = [];

window.onload = ()=>{

    const idCodigo = document.querySelector("#idCodigo");
    const idDescripcion = document.querySelector("#idDescripcion");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");

    
    /* este bloque de codigo tiene como 
    objetivo recuperar datos de productos
    que se hayan venido registrando y volverlos
    a cargar en el vector => productosRegistrados */

    let productosRecuperados = JSON.parse(localStorage.getItem("productos")); 

    // usar spread operator para voler a cargar el vector original //
    productosRegistrados.push(...productosRecuperados);
    
    console.log(productosRegistrados);

    


    console.log(idCodigo,idDescripcion,idBtnGuardar);

    idBtnGuardar.onclick = ()=>{




        let codigo = Number(idCodigo.value);
        let descripcion = idDescripcion.value;

        console.log(codigo,descripcion);

        /* CONSTRUCTURING */

        let producto = {codigo,descripcion};

        // aqui voy guardando los productos en un vector //
        productosRegistrados.push(producto);

        console.log(producto);

        /* (1RO) - Convertimos a JSON
        que no es mas que un String 
        que representa a ese objeto. */

        let productoJSON = JSON.stringify(producto);

        console.log(productoJSON);

        let todosLosProductosJSON = JSON.stringify(productosRegistrados);


        /* (2DO.) - Persitir en el Navegador */

        localStorage.setItem("productoGuardado",productoJSON);
        localStorage.setItem("productos",todosLosProductosJSON);

    };

    idBtnRecuperar.onclick = ()=>{

        console.log("recuperar");

        // aqui recupere como string //
        let productoRecuperado = localStorage.getItem("productoGuardado");

        let productosRecuperados = localStorage.getItem("productos");

        // aqui vamos a convertir a objeto nuevamente //

        const productosGuardados =  JSON.parse(productosRecuperados);


        // aqui lo estaria mostrando en formato string //        
        console.log(productoRecuperado);

        console.log(productosRecuperados);

        // aqui lo estaria mostrando en formato objeto //
        console.log(productosGuardados);



    };



};