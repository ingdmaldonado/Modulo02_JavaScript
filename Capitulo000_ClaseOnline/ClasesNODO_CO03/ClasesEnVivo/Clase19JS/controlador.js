
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


const forma1 = (numero)=>
    {
        return numero * numero;
    }

const forma2 = numero => 
    {
        console.log("hola");

        return numero * numero;
    }

const forma3 = numero => numero * numero;



window.addEventListener("load",()=>
    {
        console.log("funcionando !!!");

        /* Vectores. */

        /* objetos literales */

        let a = 0;
        let b = 200;

        const c = 400; // valor inmodificable //

        /* objetos literales son un conjunto
        de pares, clave:valor => atributo:valor
        
            las constantes que tienen objetos literales
            y vectores. si se pueden modificar.

        */

        /* OBJETOS LITERALES Y DE VECTORES */

        const persona1 = {dni:288282928,apellido:"MESSI LIONEL"};

        const persona2 = {dni:288282222,apellido:"ALVAREZ JULIAN"};

        const persona3 = {dni:288282333,apellido:"DE PAUL RODRIGO"};
        console.log(persona1);

        persona1.dni = 45892422;
        persona1.apellido = "MESSI LIONEL ANDRES";

        console.log(persona1,persona2,persona3);

        /* CONSTRUIR VECTORES A PARTIR DE OBJETOS LITERALES */

        const PersonasDeCatamarca = 
            [
                persona1,
                persona2,
                persona3,
                {dni:77666888,apellido:"MALDONADO DANIEL"}
            ];

        console.log(PersonasDeCatamarca);

        /* ejemplo 1) -> recorrido de forEach - arrow function completa */

        console.log("---- ejemplo 1 -------");

        productos.forEach((elemento,indice)=>
            {
                console.log(elemento);
                console.log(`codigo: ${elemento.codigo} - descripcion: ${elemento.descripcion}`);
            })

        /* ejemplo 2) -> recorrido de forEach - arrow function abreviada */

        console.log("---- ejemplo 2 -------");

        productos.forEach(producto => 
            {
                console.log(producto);
                console.log(`codigo: ${producto.codigo} - descripcion: ${producto.descripcion}`);

            })

         /* ejemplo 3) -> recorrido de forEach - arrow function mas abreviada posible
         
        1) recibe un solo parametro
        2) quito los ()
        3) no tiene cuerpo. tiene una sola sentencia puedo evitar las {} 
        del cuerpo
        4) esa única sentencia que tiene. si hace un calculo
        se puede inferir que tiene un return implícito.

         */

        console.log("---- ejemplo 3 -------");

        productos.forEach(producto => console.log(producto));

        /* ejemplo 4) Actualizar datos de algunos elementos del Vector 

            actualización de precios de los productos
            de PERFUMERIA en un 20%

        */

        console.log("---- ejemplo 4 -------");

        productos.forEach(producto => 
            {
                if(producto.categoriaNombre === "PERFUMERIA")
                {
                    producto.precio = producto.precio * 1.20;
                }
            })

        console.log(productos);

        
     /* ejemplo 5) Actualizar datos de algunos elementos del Vector
     usar una arrow function lo mas abreviada posible */

        productos.forEach(producto => producto.categoriaNombre === "PERFUMERIA" ? producto.precio = producto.precio * 1.30:'');

        console.log("---- ejemplo 5 -------");

        console.log(productos);

    /* ejemplo 6) Recorrer el vector de productos y vamos
    a marcar en oferta, todos aquellos productos cuyo
    precio este por debajo de los 2 mil pesos y sean LACTEOS */

        console.log("---- ejemplo 6 -------");

        productos.forEach(producto => 
            {
                if((producto.categoriaNombre === "LACTEOS") && (producto.precio <= 2000))
                {
                    producto.productoEnOferta = true;
                }
                else
                {
                    producto.productoEnOferta = false;
                }

            })

        console.log(productos);


        /* Ejemplo 07 - El mismo ejemplo. pero de forma abreviada */

        console.log("---- ejemplo 7 -------");

        productos.forEach(producto => producto.categoriaNombre === "LACTEOS" && producto.precio <= 2000 ? producto.productoEnOferta2 = true:producto.productoEnOferta2 = false);

        console.log(productos);

        /* Ejemplo 08 - Buscar productos por nombre */

        console.log("---- ejemplo 8 -------");

        let nombreABuscar = "QUESO";

        productos.forEach(producto => {

            if(producto.descripcion.includes(nombreABuscar))
            {
                console.log(producto);
            }
        })

         /* Ejemplo 09 - Buscar productos por nombre */

         console.log("---- ejemplo 9 -------");

         productos.forEach(producto => producto.descripcion.includes(nombreABuscar) ? console.log(producto):'');

        /* FILTER => filtrar datos de un vector 
        
            productos => lacteos 

        */

        /* Ejemplo 10 - Filtrar todos los PANADERIA 

            cuando se aplica el filtro. me devuelve
            un vector nuevo. que lo puedo manejar
            de forma aislada a ese vector. 

            pero => tocar los elementos o modificar los elementos
            del vector resultante del filter => el vector original

        */

        const productosPanificados = productos.filter(producto => producto.categoriaNombre === "PANIFICADOS" ? true:false);

        console.log("---- ejemplo 10 -------");

        console.log(productosPanificados);

        // aqui aplico un 50% sobre ese vector que tiene los panificados //
        productosPanificados.forEach(producto => producto.precio = producto.precio * 1.50);

        console.log(productos);
        console.log(productosPanificados);

        /* 
            forEach (arrow function - callBack)
            filter (arrow function - callBack)
            map (arrow function - callBack)
        */

        /* MAP => recorre el vector y aplica una función
        callBack de transformación sobre cada uno
        de los elementos que va recorriendo.
        es MUY IMPORTANTE que la función tenga
        un return. salvo, que sea una función
        muy corta y siguiendo los principios
        de las arrow function cortas, tenga un return implícito */

        const vectorDeNumeros = [5,2,-1,7,4];

        console.log("---- ejemplo 11 -------");

        const numerosAlCuadrado = vectorDeNumeros.map(numero => 
            {
                return numero * numero;
            })

        const numeros2 = vectorDeNumeros.map(numero => numero * numero);

        console.log(numerosAlCuadrado);
        console.log(numeros2);

        /* Ejemplo 12 - funcion MAP => transformación */

        const idContenedor1 = document.querySelector("#idContenedor1");
        console.log(idContenedor1);

        const productosNuevos = productos.map(producto => 
            {
               // let etiquetaHTML = `<h3>nombre:${producto.descripcion} precio:${producto.precio}</h3>`;
                
                let etiquetaHTML = `<h3>nombre:${producto.descripcion} precio:${producto.precio}</h3><input type='checkbox'>`;
              
                
                return etiquetaHTML;
            });
        
        console.log(productosNuevos);

        /* sobre todas esas etiquetas
        las voy a recorrer con forEach
        y le voy a decir al navegador
        que las inserte en formato
        etiqueta HTML y para eso uso la
        propiedad innerHTML 
        */

        productosNuevos.forEach(etiqueta => 
            {

                /* cualquier etiqueta HTML que muestre 
                texto. como ser
                    los parrafos <p>
                    los label <label>
                    los h1,h2,...h6 
                    los <spam>
                    contendores
                    article
                    section

                    <p id="idParrafo1">aqui va texto => </p>

                    <p> <h1></h1></p>
                    <p><input type></p>
                    */


                // textContent => es el contenido textual. lo interpreta como texto

                // innerHTML => el navegador por medio del DOM lo interpreta y lo dibuja como HTML

                //idContenedor1.textContent = idContenedor1.textContent + "hola";

                idContenedor1.innerHTML =  idContenedor1.innerHTML + etiqueta;

            })

    })


    /* 
        dosis de insulina 
        
        dosisInsulina =  50% peso corporal + 50% glucosa

    */