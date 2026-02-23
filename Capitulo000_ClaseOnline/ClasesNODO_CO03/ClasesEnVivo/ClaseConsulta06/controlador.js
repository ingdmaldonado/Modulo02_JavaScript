
window.addEventListener("load",()=>
    {
        // //

        const idBtnAceptar = document.querySelector("#idBtnAceptar");

        idBtnAceptar.addEventListener("click",()=>
            {

                /* estructuras de datos que vimos 


                    * variables => let
                    * constantes => const son inmodificables
                        a excepción de:

                            una constante que sea vector
                            una constante que sea un objeto literal

                    *vectores o arrays

                    *objeto literales
                */

                /* conjunto de clave:valor */

                /* atributo:valor */

                /* crear variables sueltas para tratar de guardar
                los datos de una persona. ESTO NO ES VIABLE, NO 
                CORRESPONDE ALGO ASI */

                let dni = 27492777
                let nombre = "MESSI LIONEL ANDRES"
                let domicilio = "MIAMI BEACH 855"

                /* Estructura de datos llamada objeto literal */

                let datosPersona1 = {dni:27492777,nombre:"MESSI LIONEL",domicilio:"MIAMI BEACH 855 - FLORIDA"};

                let datosPersona2 = {dni:27492888,nombre:"DANIEL MALDONADO",domicilio:"MIAMI BEACH 856 - FLORIDA"};


                console.log(datosPersona1);

                datosPersona1.nombre = "MESSI LIONEL ANDRES";

                console.log(datosPersona1);
                console.log(datosPersona2);

                /* crear vectores de OBJETOS LITERALES */

                const VectorDeProductos = [{codigoBarras:900,nombre:"ALFAJOR AGUILA CHOCOLATE NEGRO",precio:2000,tipo:"GOLOSINAS"},{codigoBarras:901,nombre:"BON O BON",precio:600,tipo:"GOLOSINAS"}]; // definiendo un vector vació de productos.

                const producto1 = {codigoBarras:1001,nombre:"DULCE DE LECHE LA SERENISIMA",precio:3200,tipo:"LACTEO"};
                const producto2 = {codigoBarras:1002,nombre:"LECHE SERENISIMA",precio:1450,tipo:"LACTEO"};
                const producto3 = {codigoBarras:1003,nombre:"FERNET DE 1 LITRO",precio:10500,tipo:"BEBIDAS"};
                const producto4 = {codigoBarras:1004,nombre:"COCA X 1500 VIDRIO RETORNABLE",precio:2500,tipo:"BEBIDAS"};

                /* estructura vectorial. que a 
                dentro tiene objetos literales */

                /* agregando a los productos */

                VectorDeProductos.push(producto1);
                VectorDeProductos.push(producto2);
                VectorDeProductos.push(producto3);
                VectorDeProductos.push(producto4);


                VectorDeProductos.push({codigoBarras:1004,nombre:"COCA X 2000 PLASTICA RETORNABLE",precio:3200,tipo:"BEBIDAS"})

                console.log(VectorDeProductos)

                /* (01 - como podes recorrer ese vector mostrando las bebidas ?) 
                
                    1ro) con un forEach( aqui lleva una arrow function  )

                */

                console.log("------------------------- 1");

                /* forEach donde la arrow function que recibe 
                como parametro. es una arrow function completa

                () => los parentesis de los parametros de la funcion
                {} => lleva las llaves del cuerpo.
                */

                VectorDeProductos.forEach((producto,indice)=>
                    {
                        console.log(producto);
                    })

                /* debe recibir un solo parametro
                debe tener en el cuerpo de la funcion una sola instruccion 
                */

                console.log("------------------------- 2");

                VectorDeProductos.forEach(producto => console.log(producto));

                /* que tendremos el vector cargado
                de productos. que vendrá desde la base de datos
                y lo que haré es actualizar o incrementar en un 20%
                todos los lacteos */


                console.log("------------------------- 3");

                VectorDeProductos.forEach((producto,indice)=>
                    {
                        if((producto.tipo === "LACTEO") || (producto.tipo === "GOLOSINA"))
                        {
                            producto.precio = producto.precio * 1.20; // incremeta un 20%
                        }
                        if(producto.tipo === "BEBIDAS")
                        {
                            producto.precio = producto.precio +  (producto.precio * 5)/100; // incrementa un 5%
                        }
                        
                    })

                console.log(VectorDeProductos);


            })
    })