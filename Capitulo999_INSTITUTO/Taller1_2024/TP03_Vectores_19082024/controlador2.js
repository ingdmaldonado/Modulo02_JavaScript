

    /* objetos literales guardados dentro de una constante */
    const producto1 = {codProducto:100,nomProducto:"ARROZ SUSARELLI",preProducto:2500.20};

    const producto2 = {codProducto:105,nomProducto:"FERNET BRANCA LITRO",preProducto:12000.80};

    const producto3 = {codProducto:205,nomProducto:"COCA X 3 LITROS",preProducto:3500.00};

    /* aqui creamos un vector de productos y le cargamos 
    los objetos literales */

    const VectorProductos = [producto1,producto2,producto3,{codProducto:277,nomProducto:"PEPSI DE 2 LITROS",preProducto:2500.00}];

    const VectorProductos2 = [{codProducto:401,nomProducto:"SHAMPOO PLUSBELL",preProducto:7800},{codProducto:402,nomProducto:"ENJUAGUE PLUSBELL",preProducto:8200},{codProducto:403,nomProducto:"CREMA DE AFEITAR",preProducto:7200}];

    const VectorDeVentas = [];

    console.log(VectorProductos);
    
/* esta es la definición de la función
y en la definición de la función. para la
función recibe dos parametros, el primero
se va a llamar vector y el segundo se va a llamar
código. NO LE IMPORTA A LA FUNCIÓN como esos dos
datos datos se llaman a fuera */

const fnBuscarProducto = (vector,codigo)=>
    {
        let productoBuscado = 0;

        /* aqui estoy recorriendo los elementos
        del vector. que a fuera puede llamarse
        con cualquier ese nombre el vector. pero
        como esto esta dentro de una función, y 
        puertas a dentro se llama vector */

        vector.forEach((producto,indice)=>{

            /* el forEach lleva una arrow function
            y esa arrow funcion recibe dos parametros
            el elemento y el indice */

            if(producto.codProducto === codigo)
            {
                //console.log(producto);
                return producto;

             //   productoBuscado = producto.preProducto;
                
            }
        })

        return productoBuscado;
        
    }


window.addEventListener("load",()=>{

    console.log("funcionando");

    const idCodigoBarra = document.querySelector("#idCodigoBarra");
    const idBtnRegistrarVenta = document.querySelector("#idBtnRegistrarVenta");
    const idBtnVerVentas = document.querySelector("#idBtnVerVentas");

    const idTotalVenta = document.querySelector("#idTotalVenta");
    const idCantidadVenta = document.querySelector("#idCantidadVenta");

    console.log(idCodigoBarra);
    console.log(idBtnRegistrarVenta);
    console.log(idTotalVenta);
    console.log(idCantidadVenta);


    let totalVenta = 0;
    let cantidadProductos = 0;

    idBtnRegistrarVenta.addEventListener("click",()=>{

        console.log("deberiamos buscar el código del producto y sacar el precio");

        let codigoBarra = Number(idCodigoBarra.value);

        //console.log(codigoBarra);

        let productoComida = fnBuscarProducto(VectorProductos,codigoBarra);
        console.log(productoComida);
        
        /*
        if (productoComida != 0)
        {

            VectorDeVentas.push(productoComida);

            totalVenta = totalVenta + productoComida;
            cantidadProductos = cantidadProductos + 1;


            idTotalVenta.textContent = totalVenta;
            idCantidadVenta.textContent = cantidadProductos;

          
        }*/

       /* let productoHigiene = fnBuscarProducto(VectorProductos2,codigoBarra); */

       idBtnVerVentas.addEventListener("click",()=>
        {
            console.log(VectorDeVentas);

        })
    


    })
})