
/* Dado un Vector de Productos como el de a continuación 

    realizar:

    1) Recorrer el vector con forEach y mostrar por consola los 
    productos que tienen un precio mayor a 2500 pesos

    2) Recorrer el vector con forEach y obtener el precio 
    promedio de los 
        LACTEOS
        BEBIDAS     
    
    3) Recorrer el vector que tiene los productos y generar un segundo vector
    que podría llamarse ResumenDeProductos que tenga para cada categoria
    la cantidad de productos, el precio promedio, el precio mínimo y el precio máximo de
    esa categoria 
*/



const productos = [
    { codigo: 1001, descripcion: "LECHE ENTERA 1L", categoria: "LACTEOS", precio: 1500.50 },
    { codigo: 1002, descripcion: "QUESO CREMA 300G", categoria: "LACTEOS", precio: 2500.20 },
    { codigo: 1003, descripcion: "YOGUR BEBIBLE FRUTILLA", categoria: "LACTEOS", precio: 900.00 },
  
    { codigo: 2001, descripcion: "AGUA MINERAL 1.5L", categoria: "BEBIDAS", precio: 1250.20 },
    { codigo: 2002, descripcion: "GASEOSA COLA 2.25L", categoria: "BEBIDAS", precio: 2850.50 },
    { codigo: 2003, descripcion: "JUGO EN POLVO NARANJA", categoria: "BEBIDAS", precio: 500.00 },
  
    { codigo: 3001, descripcion: "PAN FRANCÉS", categoria: "PANIFICADOS", precio: 2000.00 },
    { codigo: 3002, descripcion: "FACTURA DE DULCE DE LECHE", categoria: "PANIFICADOS", precio: 6800 },
    { codigo: 3003, descripcion: "GALLETITAS SALADAS 250G", categoria: "PANIFICADOS", precio: 1250 },
  
    { codigo: 4001, descripcion: "ARROZ LARGO FINO 1KG", categoria: "ALMACEN", precio: 5420 },
    { codigo: 4002, descripcion: "AZÚCAR 1KG", categoria: "ALMACEN", precio: 1200 },
    { codigo: 4003, descripcion: "ACEITE GIRASOL 900ML", categoria: "ALMACEN", precio:4820.50 },

    { codigo: 5001, descripcion: "LAVANDINA 1L", categoria: "LIMPIEZA", precio: 950 },
    { codigo: 5002, descripcion: "DETERGENTE LIMÓN 750ML", categoria: "LIMPIEZA", precio: 1100 },
    { codigo: 6001, descripcion: "SHAMPOO SUAVE 400ML", categoria: "PERFUMERIA", precio: 2200 },
    { codigo: 6002, descripcion: "JABÓN DE TOCADOR X3", categoria: "PERFUMERIA", precio: 1850 },
    { codigo: 7001, descripcion: "HAMBURGUESAS CONGELADAS X4", categoria: "CONGELADOS", precio: 5200 },
    { codigo: 7002, descripcion: "VEGETALES MIX CONGELADOS 500G", categoria: "CONGELADOS", precio: 3600 },
    { codigo: 8001, descripcion: "JAMÓN COCIDO 200G", categoria: "FIAMBRES", precio: 3800 },
    { codigo: 8002, descripcion: "QUESO TYBO 200G", categoria: "FIAMBRES", precio: 4200 },
    { codigo: 8003, descripcion: "SALAME MILÁN 150G", categoria: "FIAMBRES", precio: 4100 },
    { codigo: 9001, descripcion: "BIZCOCHUELO VAINILLA 540G", categoria: "ALMACEN", precio: 2950 },
  ];

  const categoria =
  {
    categoriaNombre:"CONGELADOS",
    precioPromedio:0,
    precioMaximo:0,
    precioMinimo:0
  }

  const ResumenDeProductos = [categoria]; 

  productos.forEach(producto => 
    {
       let categoriaABuscar = producto.categoria;

       let seEncuentraCategoria = ResumenDeProductos.find(categoria => categoria.categoriaNombre === categoriaABuscar ? true:false);

       if(seEncuentraCategoria)
       {
            console.log("si se encuentra");
            console.log(categoriaABuscar);
            console.log(seEncuentraCategoria);
       }
       else
       {
            
            const categoriaNueva =
            {
                categoriaNombre:categoriaABuscar,
                precioPromedio:producto.precio,
                precioMaximo:0,
                precioMinimo:0
            }     
            
            ResumenDeProductos.push(categoriaNueva);
          
       }

       console.log(ResumenDeProductos);
    

    })

