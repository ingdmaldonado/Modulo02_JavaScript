

    /********************************************/
    /* (1ro) Vector de Productos y sus Precios  */
    /********************************************/

    const vectorDeProductos = [
        {
            codigo: "P001",
            descripcion: "Laptop Gamer 16GB RAM",
            preciocompra: 80000,
            precioventa: 100000
        },
        {
            codigo: "P002",
            descripcion: "Monitor 24 pulgadas Full HD",
            preciocompra: 25000,
            precioventa: 35000
        },
        {
            codigo: "P003",
            descripcion: "Teclado Mecánico RGB",
            preciocompra: 6000,
            precioventa: 9000
        },
        {
            codigo: "P004",
            descripcion: "Mouse Inalámbrico",
            preciocompra: 2000,
            precioventa: 3500
        },
        {
            codigo: "P005",
            descripcion: "Impresora Multifuncional",
            preciocompra: 15000,
            precioventa: 20000
        },
        {
            codigo: "P006",
            descripcion: "Smartphone 128GB",
            preciocompra: 50000,
            precioventa: 70000
        },
        {
            codigo: "P007",
            descripcion: "Auriculares Bluetooth",
            preciocompra: 5000,
            precioventa: 8000
        },
        {
            codigo: "P008",
            descripcion: "Tablet 10 pulgadas",
            preciocompra: 30000,
            precioventa: 45000
        }
    ];


    /* (2do) Función que recorrerá los productos y a partir de esos
    datos generará las filas de la tabla. pero además agregará a 
    los datos que tenían los productos dos atributos más.

        - cantidadProductos
        - subTotalCompra
    
    estas filas no se van a agregar a la tabla en este momento. lo que hará este proceso
    es generar un nuevo vector, que tendrá todos los datos de producto,
    más los atributos nuevos donde guardaré la cantidadProductos y subtotalCompra.
    y la fila que estará vinculada a la tabla, despúes con un proceso
    posterior agregaremos esa fila a la tabla */

    const fnGenerarVectorDeProductosFilas = (vectorDeProductos)=>
        {
            const vectorDeProductosFilas = vectorDeProductos.map(element=>
                {

                    const productoFila = {...element};
                    productoFila.cantidadProductos = 0;
                    productoFila.subTotalCompra = 0;

                    let Fila = document.createElement("tr");

                    let celda1 = document.createElement("td");
                    celda1.textContent = element.codigo;

                    let celda2 = document.createElement("td");
                    celda2.textContent = element.descripcion;

                    let celda3 = document.createElement("td");
                    celda3.textContent = element.precioventa;

                    let celda4 = document.createElement("td");
                    
                    let celda4Cantidad = document.createElement("input");
                    celda4Cantidad.type = "number"
                    celda4Cantidad.value = 0;
                    celda4Cantidad.min = 0;
                    celda4.appendChild(celda4Cantidad);

                    celda4Cantidad.addEventListener("change",()=>{
                    console.log(element);   

                        productoFila.cantidadProductos = Number(celda4Cantidad.value);

                        productoFila.subTotalCompra = Number(celda4Cantidad.value) * element.precioventa;

                        celda5.textContent = productoFila.subTotalCompra.toFixed(2).toLocaleString("ES-es");

                        idBtnCalcularTotalPagar.click();

                    })

                    let celda5 = document.createElement("td");
                    celda5.textContent = 0;

                    Fila.appendChild(celda1);
                    Fila.appendChild(celda2);
                    Fila.appendChild(celda3);
                    Fila.appendChild(celda4);
                    Fila.appendChild(celda5);

                    productoFila.filaDeTabla = Fila;
                   
                    console.log(productoFila);

                    return productoFila;

             

                })

            return vectorDeProductosFilas;

        }

    /* (3ro) Esta función, recibe como parametro un vector de ProductosFilas
    y se encarga de dibujar y agregar esas filas a la tabla. de esa forma
    queda en la tabla una referencia a todos los elementos agregados 
    */

    const fnDibujarTabla = (vectorDeProductosFilas,cuerpoDeTabla)=>
    {
        vectorDeProductosFilas.forEach(element => 
            {
                console.log(element.filaDeTabla);
                cuerpoDeTabla.appendChild(element.filaDeTabla);  
            })
    }

    /*****************************************************************/
    /**************************  PROGRAMA PRINCIPAL ******************/
    /*****************************************************************/

    /********************************************/
    /* (4to) - Programa Principal               */
    /********************************************/

    window.addEventListener("load",()=>
        {
            console.log("funcionando");

            /* (5to) Capturo Boton que permite calcular el Total a Pagar */
            const idBtnCalcularTotalPagar = document.querySelector("#idBtnCalcularTotalPagar");

            /* (6to) Capturo Boton Etiqueta h3 donde visualizaré el total a pagar */
            const idTotalPagar = document.querySelector("#idTotalPagar");

            /* (7mo) Cuerpo de la tabla donde mostraré los productos y tendrá interacción con el usuario */
            const idCuerpoDeTabla = document.querySelector("#idCuerpoDeTabla");

            /*(8vo) Proceso que convierte las filas de productos en ProductoFilas */

            const vectorDeProductosFilas = fnGenerarVectorDeProductosFilas(vectorDeProductos);
            console.log(vectorDeProductosFilas); // lo muestro por consola 

            /* (9no) Invoco al proceso que se encargará de dibujar las filas en la tabla 
            y cada fila, ya tendrá embebida la lógica y la funcionalidad
            que busco.
            */

            fnDibujarTabla(vectorDeProductosFilas,idCuerpoDeTabla);


            /* (10mo) Agrego funcionalidad al boton que debe calcular el total
            para ello lo que hago es recorrer el vector vectorDeProductoFilas
            e ir acumulando los subtotales y mostrarlo en la parte correspondiente */

            idBtnCalcularTotalPagar.addEventListener("click",()=>
                {

                    /* para obtener el total podríamos recorrer el vector de ProductoFilas 
                    e ir sumando los subtotales */

                    console.log(vectorDeProductosFilas);

                    let TotalAPagar = vectorDeProductosFilas.reduce((total,element)=>{

                        if(element.cantidadProductos > 0)
                        {
                            console.log(element);
                            total = total + element.subTotalCompra;
                        }

                     
                        return total;

                    },0);

                    idTotalPagar.textContent = `Total a Pagar ${TotalAPagar.toLocaleString("ES-es")}`;

                })
        })