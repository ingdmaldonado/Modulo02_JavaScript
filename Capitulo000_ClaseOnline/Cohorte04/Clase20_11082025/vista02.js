

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

    const idPrecioDesdeA = document.querySelector("#idPrecioDesdeA");
    const idPrecioHastaA = document.querySelector("#idPrecioHastaA");
    const idBtnFiltrar = document.querySelector("#idBtnFiltrar");

    const idBtnSome = document.querySelector("#idBtnSome");
    const idBtnEvery = document.querySelector("#idBtnEvery");

    const idBtnMap = document.querySelector("#idBtnMap");
    const idContenedor = document.querySelector("#idContenedor");

    console.log(idPrecioDesdeA,idPrecioHastaA,idBtnFiltrar);

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

    idBtnFiltrar.addEventListener("click",()=>
        {

            console.clear();

            let importeDesde = 0;
            let importeHasta = 0;

            importeDesde = Number(idPrecioDesdeA.value);
            importeHasta = Number(idPrecioHastaA.value);

            console.log(`filtro desde: ${importeDesde} hasta: ${importeHasta}`);

            // productos.forEach();

            /* El Filter. es un metodo de los vectores
            que me permite obtener un subVector a partir
            del Vector Original. y trabajarlo de forma "aislada"
            */

            let productosFiltrados = productos.filter((element,indice)=>
                {
                    if((element.precio >= importeDesde) && (element.precio <= importeHasta))
                    {
                       return true; 
                    }    
                    else
                    {
                        return false;
                    }

                });

            let productosFiltrados2 = productos.filter(element => element.precio >= importeDesde && element.precio <= importeHasta ? true:false);

            console.log(productosFiltrados);

            console.log(productosFiltrados2);

            /* aqui voy a tratar de hacerme una copia
            del vector productos 
            
                cuando son constantes, variables,
                vectores de valores simples => el copiado es un copiado profundo.

            */

            let a = 200;

            let b = a; 

            a = 400;

            console.log(a,b);

            // creandome un vector productos2 que va a ser igual al vector de productos //

            const productos2 = productos; // aqui hice la copia

            // al vector de productos2 le hice una actualizacion de precios //

            productos2.forEach(producto => producto.precio = 15555.55);


            console.log(productos2);
            console.log(productos);

            /*
            A => LOS DOS VECTORES VAN A SER IGUALES
                


            B => LOS DOS VECTORES VAN A SER DISTINTOS
                - GUILLERMO
                - ANTONELLA
                - LEANDRO
                - EDILIA
                
            */


            let total = 200;

            const subTotal = 4000;

            const notasDeGuillermo = [2,7,9,8,4,3];

            /* cuando tengo objetos literales
            y/o estructuras de objetos literales 
            las copias que hago NO SON INDEPENDIENTES.

            sino. que se hacen copias por referencia */

            const persona1 = 
                {
                    dni:77666888,
                    apellido:"MESSI",
                    nombres:"LIONEL ANDRES",
                    clubSimpatizante:"NEWLS OLD BOYS DE ROSARIO"
                }

            const persona2 = persona1;

            persona2.clubSimpatizante = `CLUB ATLETICO BOCA JUNIORS QUE NO LE GANAMOS A NADIE`;

            console.log(persona1,persona2);

            /* SPREAD OPERATOR => OPERADOR DE PROPAGACION */

            const productos3 = [...productos]; // copia por referencia

            
          

            productos3.forEach(producto => producto.precio = 27777.77);

            const productos4 = productos.map(producto => ({ ...producto }));
            
            productos4.forEach(producto => producto.precio = 33333.33);

            console.log(productos);
            console.log(productos2);
            console.log(productos3);
            console.log(productos4);
           

            /*
                forEach
                filter
                find

                some
                every

                map =>

            */
        })


    /* Boton Some => Si alguno */

    idBtnSome.addEventListener("click",()=>{

        productos.some((producto,indice)=>{})

        let resultado = productos.some(producto => producto.precio === 25577);

        if(resultado)
        {
            alert("si. existe al menos un producto de valor de 500 pesos");
        }
        else
        {
            alert("no. no existe ningun producto");
        }


    })


    // Boton Every => Si todos deben cumplir la condicion */
    idBtnEvery.addEventListener("click",()=>
        {


            let resultado = productos.every(producto => producto.precio >= 6000);

            console.log(resultado);


    })

    idBtnMap.addEventListener("click",()=>{

        console.log("aqui vamos a probar el click del boton map");

        /* map => recorre todos los elementos de un vector
        aplicandoles una función de TRANSFORMACIÓN */

       // idContenedor.textContent = "hola esto es texto";

      //  idContenedor.innerHTML = "<h4>esta es una etiqueta dinamica</h4>";

      //  idContenedor.innerHTML = "<input type='number' value=0>";

      //  idContenedor.innerHTML = `<input type='checkbox'>`;

      
        /* MAP => es una funcionalidad que tienen
        los vectores. que me permiten recorrer
        todo un vector y a partir de el, generar un
        segundo vector. aplicando una función
        de transformación.

        para cada producto => genere 1 etiqueta html

        */

        /* PRIMERO => SE GENERAN LOS ELEMENTOS CON MAP */

        const resultado = productos.map(producto => {

            let etiquetaHTMLDinamica = `<h3>${producto.codigo} - ${producto.descripcion} - ${producto.precio}</h3> `;

            return etiquetaHTMLDinamica;

        })

        console.log(resultado);

        /* DESPUES => RECORRER EL RESULTADO Y DIBUJARLOS O RENDERIZARLOS EN EL DOM */


        resultado.forEach(elemento => 
            {
                idContenedor.innerHTML =  idContenedor.innerHTML + elemento;

            })


    })

})