
// importamos los productos //
import {productos,Facturacion} from "./datos.js";
import {productosVendidos} from "./datos.js";

let totalFacturado = 0;

window.onload = ()=>
    {
        console.log("running");

        const idCodProducto = document.querySelector("#idCodProducto");
        const idBtnRegistrar = document.querySelector("#idBtnRegistrar");
        const idTotal = document.querySelector("#idTotal");
        const idProducto = document.querySelector("#idProducto");
        const idBtnCobrar = document.querySelector("#idBtnCobrar");
        const idBtnVerVentas = document.querySelector("#idBtnVerVentas");
        const idVerProductosVendidos = document.querySelector("#idVerProductosVendidos");

        console.log(idCodProducto,idBtnRegistrar,idTotal);

        idBtnRegistrar.onclick = ()=>{

            let codigoIngresado = Number(idCodProducto.value)

            console.log(productos);

            console.log(`codigo ingresado ${codigoIngresado}`);

            /* Ejemplo 01 - de Busqueda con find 
            donde la función callBack esta completa
            */

            let productoEncontrado1 = productos.find((producto)=>{

                if(producto.codigo === codigoIngresado)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            });

            console.log(productoEncontrado1);

            /* Vamos a hacer el find de una forma mas
            corta */

            let productoEncontrado2 = productos.find(producto => producto.codigo === codigoIngresado);

            console.log(productoEncontrado2);

            if(productoEncontrado2)
            {
                // muestro los datos del producto registrado en parrafo //
                idProducto.textContent = `codigo: ${productoEncontrado2.codigo} - descripcion: ${productoEncontrado2.descripcion} - precio: ${productoEncontrado2.precio}`;

                // aqui primero acumulo //
                totalFacturado = totalFacturado + productoEncontrado2.precio;

                // despues muestro el total en el h3 //
                idTotal.textContent = totalFacturado;

                // registramos el producto que vendimos //
                productosVendidos.push(productoEncontrado2);
            }
            else
            {
                idProducto.textContent = `producto no registrado`;
            }
        }
    
        idBtnCobrar.onclick = ()=>
            {
                Facturacion.push(totalFacturado);

                totalFacturado = 0;

                idTotal.textContent = "";
            }

        idBtnVerVentas.onclick = ()=>
            {
                console.log(Facturacion);
            }

        idVerProductosVendidos.onclick = ()=>
            {
                // cuando hace click muestro por consola el vector de produtos vendidos//
                console.log(productosVendidos);
            }

    }

    /* REPASO DE ARROW FUNCTION 
    
    1) General (los parametros)=>{cuerpo + inst. return}

    const cuadrado = (numero)=>{ return numero * numero};

    2) Particularidad 1. 
        Si y solo si, recibe un parametro de entrada.
        se pueden obviar los () de los parametros.

    const cuadrado = numero =>{ return numero * numero};
    
    3) Particularidad 2.
        Si y solo si, en el cuerpo de la función {}
        hay una sola instrucción, se puede obviar la palabra
        return, se pueden quitar los {}
    */

    const cuadrado = numero => numero * numero;

