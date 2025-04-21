



/* Dado un Vector de Productos como el de a continuación 

    realizar:

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

    window.addEventListener("load",()=>
      {
        

        console.clear();

        /* (01) Los productos Originales */

        console.log("--- 1 productos originales");
        console.log(productos);

        /* (01) Buscamos Todos los productos que tenga precio mayor a 2500 pesos */

        console.log("--- 2 productos con precio mayor a 2500 pesos");

        productos.forEach(producto => producto.precio > 2500 ? console.log(producto):'');

        /* (03) Actualizar el precio de los productos de Perfumeria en un 20% */

        productos.forEach(producto => 
          {
            if(producto.categoriaNombre === "PERFUMERIA")
            {
              console.log(producto.precio);
              producto.precio = producto.precio * 1.20;
              console.log("producto actualizado ",producto);
            }
          })

          console.log("--- 3 productos con precios actualizados");
          console.log(productos);

        /* (04) Marcar los productos de FIAMBRERIA en oferta si 
        su precio es menor a 2000 pesos */

        productos.forEach(producto => 
          {
            if((producto.categoriaNombre === "FIAMBRES") && (producto.precio <= 4000))
            {
                producto.productoEnOferta = true;
            }
            else
            {
                producto.productoEnOferta = false;
            }
          })

          console.log("--- 4 Marcamos los productos en oferta");
          console.log(productos);

        /* (05) Buscar productos por Descripción o por parte de la descripción */

        console.log("--- 5 Buscamos los productos por nombre");

        let nombreABuscar = "QUESO";

        productos.forEach(producto => {

          if(producto.descripcion.includes(nombreABuscar))
          {
              console.log(producto);
          }
        })

        productos.forEach(producto => producto.descripcion.includes(nombreABuscar) ? console.log(producto):'');

        /* (06) Totalizar la Cantidad de Productos por Categoria
        y obtener la cantidad de productos y la sumatoria total de precios
        */

        
        const categoria =
        {
          categoriaNombre:"CONGELADOS",
          cantidadProductos:1,
          precioTotal:1
        }

        const ResumenDeProductos = []; 


        productos.forEach(producto => 
        {
          let nombreCategoriaABuscar = producto.categoriaNombre;

          let categoriaEncontrada = ResumenDeProductos.find(categoria => categoria.categoriaNombre === nombreCategoriaABuscar ? true:false);

          if(categoriaEncontrada)
          {
            categoriaEncontrada.cantidadProductos = categoriaEncontrada.cantidadProductos + 1;
            categoriaEncontrada.precioTotal = categoriaEncontrada.precioTotal + producto.precio;
          }
          else
          {
            const categoriaNueva =
            {
              categoriaNombre:nombreCategoriaABuscar,
              cantidadProductos:0,
              precioTotal:0
            }     
            ResumenDeProductos.push(categoriaNueva);
          }
          console.log("Vector ",ResumenDeProductos);
        })

      
      /* (07) Filtrar todos los productos que sean BEBIDAS
      y calcular el impuesto al valor agregado de cada uno
      de los productos. IVA = 21% */

      const vectorDeBebidas = productos.filter(producto => producto.categoriaNombre === "BEBIDAS");

      console.log("--- 7 Filtramos las Bebidas");

      console.log(vectorDeBebidas);

      vectorDeBebidas.forEach(bebida => bebida.IVA = bebida.precio * 21/100)

      console.log(vectorDeBebidas);

      /* Encadenamiento de métodos */

      const vectorDeBebidas2 = productos.filter(producto => producto.categoriaNombre === "BEBIDAS").forEach(Bebida => {Bebida.precio = 0});
      console.log(vectorDeBebidas2);

      /* (08) Filtrar todos los productos que 
      NO SEAN DE ALMACEN
      NO SEAN PANIFICADOS 
      */

      console.log("--- 8 Filtramos y mostramos los productos que NO SON DE ALMACEN, NI SON PANIFICADOS");

      const productosFiltrados = productos.filter(producto => 
        {
          if((producto.categoriaNombre !== "ALMACEN") && (producto.categoriaNombre !== "PANIFICADOS"))
          {
            return true;
          }
      })

      console.log(productosFiltrados);

      /* (09) Crear un Vector de Categorias, 
      que solamente contenga las categorias
      de los productos que necesiten cadena de frio
      */

      const frutas = ["MANZANA", "PERA", "BANANA"];

      console.log(frutas.includes("PERA"));     // true
      console.log(frutas.includes("SANDIA"));   // false



      const productosEnCadenaDeFrio = ["LACTEOS", "FIAMBRES"];

      const productosSensibles = productos.filter(producto =>productosEnCadenaDeFrio.includes(producto.categoriaNombre));

      console.log(productosSensibles);

      /* (10) map => recorre el vector original y realiza una función de
      transformación sobre cada elemento */

      const vectorDeNumeros = [2,5,7,-1,4];

      const vectorDeCuadrados = vectorDeNumeros.map(numero => numero * numero);

      console.log(vectorDeCuadrados);

      /* (11) map => crearemos un vector con texto para Botones */

      const idContenedor1 = document.querySelector("#idContenedor1");

      const textoParaBotones = ["Boton 1","Boton 2","Boton 3","Boton 4"];

      const botonesParaElDOM = textoParaBotones.map(texto => 
        {
            let etiquetasHTML = `<input type='button' value = '${texto}'/>`;
            return etiquetasHTML;
        })

      console.log(botonesParaElDOM);

      botonesParaElDOM.forEach(boton => 
        {
          idContenedor1.innerHTML = idContenedor1.innerHTML + boton;
        })


      /* (12) map => convirtiendo los productos en una etiqueta HTML */

      const etiquetasHTML = productos.map(producto => 
        {
            let salida = `<h3>codigo: ${producto.codigo} - nombre: ${producto.descripcion} - precio: ${producto.precio} </h3>`;

            return salida;

        })

      console.log(etiquetasHTML);

      etiquetasHTML.forEach(etiqueta => 
        {
          idContenedor1.innerHTML = idContenedor1.innerHTML + etiqueta;

        })
      
      
      





      })




