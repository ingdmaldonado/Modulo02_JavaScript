
/* 
    Dado un vector de productos, donde cada uno tiene:

    •	nombre (string)
    •	precioCosto (número) → representa el precio de costo
    •	margen (número, en porcentaje) → margen de ganancia deseado
    •	stock (número) → representa la cantidad de unidades indivisibles disponibles para la venta (pueden ser cajas, paquetes, unidades sueltas, etc.)

Se pide recorrer el vector utilizando forEach y destructuring, y calcular para cada producto:

    - El nombre del producto
    - El precio de costo
    - El importe de ganancia (según el margen de ganancia indicado)
    - El importe base, que es:

	Importe Base = Precio de Costo + Ganancia

    Aclaración:
        • El IVA, correspondiente al 21% del Importe Base El IVA es un impuesto nacional que grava el consumo de bienes y servicios.
        • El Impuesto a los Ingresos Brutos, correspondiente al 3% del Importe Base. Ingresos Brutos es un impuesto provincial sobre la actividad comercial.

    El precio final de venta, que se calcula como:
        Precio Final = Importe Base + IVA + Ingresos Brutos
*/

/* EJERCICIO: Guia Nro. 04 - Ejercicio 12

    a) Realizar este proceso para todos los elementos
    b) Realizar este proceso únicamente para los productos que tienen un margen menor o igual al 20%
    c) Realizar este proceso únicamente para los productos cuyo impuesto a los ingresos brutos supere los $4.000
    d) Realizar este proceso únicamente para los productos cuyo precio final esté entre $20.000 y $30.000
    e) Realizar este proceso únicamente para los productos cuyo IVA esté en alguno de los siguientes rangos:
    Entre $2.000 y $4.000 ó Entre $8.000 y $12.000. (todo esto en un único proceso).


    f)
    Crear un sub vector utilizando el método filter, 
    con todos los productos que estén en punto de reposición,
    es decir, aquellos cuya cantidad en stock 
    esté comprendida entre 0 y 5 unidades inclusive.
    Luego, recorrer ese sub vector resultante utilizando forEach, mostrando únicamente:

        - El nombre del producto
        - Su precio de costo
        - actualizar el precio de costo del producto en un 7%

    g) Crear un sub vector utilizando el método filter, 
    con todos los productos que estén en punto de reposición,
    es decir, aquellos cuya cantidad en stock esté comprendida 
    entre 0 y 5 unidades inclusive y el precio de costo de los mismos es superior a 25000 mil pesos.

    Luego, recorrer ese sub vector resultante utilizando forEach, mostrando únicamente:

        -	El nombre del producto
        -	Su precio de costo

    h) A partir del vector de productos original, que tiene los atributos nombre,precio,margen,stock genera un nuevo vector utilizando map. Donde los nuevos datos sea un vector completo, con todos los datos, es decir que incluya los atributos originales y que agregue los atributos nuevos

        Ganancia = que se obtiene de aplicar el % respecto del precio de costo.
        Importe Base = Precio de Costo + Ganancia
        IVA = 21% sobre Importe Base
        IngresosBrutos = 3% sobre Importe Base
        PrecioFinal = Importe Base + IVA + Ingresos Brutos


*/


const productos = [
    { nombre: "Harina 000", precioCosto: 8500, margen: 15, stock: 20 },
    { nombre: "Aceite de Girasol", precioCosto: 16000, margen: 25, stock: 35 },
    { nombre: "Azúcar", precioCosto: 9400, margen: 20, stock: 50 },
    { nombre: "Arroz Largo Fino", precioCosto: 12200, margen: 10, stock: 40 },
    { nombre: "Fideos Tirabuzón", precioCosto: 14500, margen: 30, stock: 25 },
    { nombre: "Mermelada de Durazno", precioCosto: 17800, margen: 18, stock: 60 },
    { nombre: "Yerba Mate Suave", precioCosto: 21000, margen: 12, stock: 15 },
    { nombre: "Café Molido", precioCosto: 26500, margen: 22, stock: 12 },
    { nombre: "Galletitas Dulces", precioCosto: 19500, margen: 28, stock: 45 },
    { nombre: "Queso Cremoso", precioCosto: 32000, margen: 35, stock: 10 }
  ];

  
window.addEventListener("load",()=>
    {

            
    })