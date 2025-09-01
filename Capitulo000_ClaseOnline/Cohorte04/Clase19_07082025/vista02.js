

/* Es un VECTOR DE OBJETOS LITERALES */

/* 
    - clientes => cliente1, cliente2, ... clienteN
    - productos => producto1, producto2, ... productoN
    
    - Relación que existen entre estos OBJETOS

    MODULO 1 => HTML, CSS, MAQUETADO, 

    MODULO 2 => FUNDAMENTOS DE PROGRAMACION Y EST. MEMORIA

    MODULO 3 => BACK END => NOD JS (js)

    MODULO 4 => REACT => FRAMEWORK (js)

*/  


const productos = [
    { codigo: 1001, descripcion: "LECHE ENTERA 1L", categoriaNombre: "LACTEOS", precio: 1500.50 },
    { codigo: 1002, descripcion: "QUESO CREMA 300G", categoriaNombre: "LACTEOS", precio: 2500.20 },
    { codigo: 1003, descripcion: "YOGUR BEBIBLE FRUTILLA", categoriaNombre: "LACTEOS", precio: 900.00 },
  
    { codigo: 2001, descripcion: "AGUA MINERAL 1.5L", categoriaNombre: "BEBIDAS", precio: 1250.20 },
    { codigo: 2002, descripcion: "GASEOSA COLA 2.25L", categoriaNombre: "BEBIDAS", precio: 2850.50 },
    { codigo: 2003, descripcion: "JUGO EN POLVO NARANJA", categoriaNombre: "BEBIDAS", precio: 500.00 },
  
    { codigo: 3001, descripcion: "PAN FRANCÉS", categoriaNombre: "PANIFICADOS", precio: 2000.00 },
    { codigo: 3002, descripcion: "FACTURA DE DULCE DE LECHE", categoriaNombre: "PANIFICADOS", precio: 6800 },
    { codigo: 3003, descripcion: "GALLETITAS SALADAS 250G", categoriaNombre: "PANIFICADOS", precio: 1250 },
  
    { codigo: 4001, descripcion: "ARROZ LARGO FINO 1KG", categoriaNombre: "ALMACEN", precio: 5420 },
    { codigo: 4002, descripcion: "AZÚCAR 1KG", categoriaNombre: "ALMACEN", precio: 1200 },
    { codigo: 4003, descripcion: "ACEITE GIRASOL 900ML", categoriaNombre: "ALMACEN", precio:4820.50 },

    { codigo: 4003, descripcion: "CREMOSO QUESO", categoriaNombre: "LACTEOS", precio:8500 },


    { codigo: 5001, descripcion: "LAVANDINA 1L", categoriaNombre: "LIMPIEZA", precio: 950 },
    { codigo: 5002, descripcion: "DETERGENTE LIMÓN 750ML", categoriaNombre: "LIMPIEZA", precio: 1100 },

    { codigo: 6001, descripcion: "SHAMPOO SUAVE 400ML", categoriaNombre: "PERFUMERIA", precio: 2200 },
    { codigo: 6002, descripcion: "JABÓN DE TOCADOR X3", categoriaNombre: "PERFUMERIA", precio: 1850 },

    { codigo: 7001, descripcion: "HAMBURGUESAS CONGELADAS X4", categoriaNombre: "CONGELADOS", precio: 5200 },
    { codigo: 7002, descripcion: "VEGETALES MIX CONGELADOS 500G", categoriaNombre: "CONGELADOS", precio: 3600 },

    { codigo: 8001, descripcion: "JAMÓN COCIDO 200G", categoriaNombre: "FIAMBRES", precio: 3800 },
    { codigo: 8002, descripcion: "QUESO TYBO 200G", categoriaNombre: "FIAMBRES", precio: 4200 },
    { codigo: 8003, descripcion: "SALAME MILÁN 150G", categoriaNombre: "FIAMBRES", precio: 4100 },

    { codigo: 9001, descripcion: "BIZCOCHUELO VAINILLA 540G", categoriaNombre: "ALMACEN", precio: 2950 },
  ];


// objetos literales sueltos //
const cliente1 = {cuit:123,nombre:"123"};
const cliente2 = {cuit:456,nombre:"456"};

const Clientes = [cliente1,cliente2,{cuit:789,nombre:"789"},{cuit:223,nombre:"223 DANIEL"}];


window.addEventListener("load",()=>{

    console.log("La aplicacion de productos esta funcionando");

    // aqui capturo los dos elementos HTML que quiero "CONTROLAR" //
    const idPrecioDesde = document.querySelector("#idPrecioDesde");
    const idBtnForEach = document.querySelector("#idBtnForEach");
    const idDescripcionProducto = document.querySelector("#idDescripcionProducto");

    // aqui esta el click del boton //
    idBtnForEach.addEventListener("click",()=>{

        // lo que hace es limpiar lo anterior //
        console.clear();

        console.log("aqui haremos el boton 1");

        console.log(Clientes);
        console.log(productos);

        /* metodo for each con un vector de
        objetos literales  - con una arrow
        function completa
        */

        console.log("Ejemplo 1 --------");

        productos.forEach((element,indice)=>
            {
                console.log(element);
            })

        /* metodo forEach pero con una arrow function corta 
        
            1 parametro de entrada
            2 una sola instrucción en el cuerpo
            3 se puede obviar la palabra return

        */
        console.log("Ejemplo 2 --------");

        productos.forEach(producto=> console.log(producto));

        /* forEach y dentro solamente vamos a mostrar
        el codigo, la descripción y el precio */

        console.log("Ejemplo 3 --------");

        productos.forEach(producto => console.log(`codigo: ${producto.codigo}`));

        console.log("Ejemplo 4 --------");

        productos.forEach(producto => {

            console.log(`codigo: ${producto.codigo} - desc: ${producto.descripcion} - precio: ${producto.precio}`);

        })

        /*
            EJEMPLO 05: Vamos a Recorrer todo el vector
            con forEach buscando aquellos cuyo precio
            sea mayor a un valor ingresado por el usuario
            en el DOM 
         */

        console.log("Ejemplo 5 --------");


        let precioDesde = 0;

        precioDesde = Number(idPrecioDesde.value);

        productos.forEach(producto => 
            {
                if(producto.precio >= precioDesde)
                {
                      console.log(`codigo: ${producto.codigo} - desc: ${producto.descripcion} - precio: ${producto.precio}`);
                }
            })

        console.log("Ejemplo 6 --------");

        let descripcionIngresada = "";
        descripcionIngresada = idDescripcionProducto.value;

        productos.forEach(producto =>
            {
                if(producto.descripcion.includes(descripcionIngresada))
                {
                    console.log(`codigo: ${producto.codigo} - desc: ${producto.descripcion} - precio: ${producto.precio}`); 
                }
            })
    })

})