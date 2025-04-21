
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

/* EJERCICIO: 
    a) Realizar este proceso para todos los elementos
    b) Realizar este proceso únicamente para los productos que tienen un margen menor o igual al 20%
    c) Realizar este proceso únicamente para los productos cuyo impuesto a los ingresos brutos supere los $4.000
    d) Realizar este proceso únicamente para los productos cuyo precio final esté entre $20.000 y $30.000
    e) Realizar este proceso únicamente para los productos cuyo IVA esté en alguno de los siguientes rangos:
    Entre $2.000 y $4.000 ó Entre $8.000 y $12.000. (todo esto en un único proceso).


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
        /* punto a */

        console.log("🔸 a) Todos los productos:");
        productos.forEach(({ nombre, precioCosto, margen, stock }) => 
            {
                const ganancia = precioCosto * (margen / 100);
                const importeBase = precioCosto + ganancia;
                const iva = importeBase * 0.21;
                const ingresosBrutos = importeBase * 0.03;
                const precioFinal = importeBase + iva + ingresosBrutos;

                console.log(`Producto: ${nombre} | Costo: $${precioCosto} | Ganancia: $${ganancia.toFixed(2)} | Precio Final: $${precioFinal.toFixed(2)} | Stock: ${stock}`);
            });

        /* punto b */

        console.log("🔸 b) Productos con margen menor o igual al 20%:");
        productos.forEach(({ nombre, precioCosto, margen }) => 
            {
                if (margen <= 20) 
                    {
                        const ganancia = precioCosto * (margen / 100);
                        const importeBase = precioCosto + ganancia;
                        const iva = importeBase * 0.21;
                        const ingresosBrutos = importeBase * 0.03;
                        const precioFinal = importeBase + iva + ingresosBrutos;

                        console.log(`Producto: ${nombre} | Margen: ${margen}% | Precio Final: $${precioFinal.toFixed(2)}`);
                    }
            });

        console.log("🔸 c) Productos con Ingresos Brutos mayores a $4.000:");
        productos.forEach(({ nombre, precioCosto, margen }) => 
            {
                const ganancia = precioCosto * (margen / 100);
                const importeBase = precioCosto + ganancia;
                const ingresosBrutos = importeBase * 0.03;
            
                if (ingresosBrutos > 4000) 
                    {
                        console.log(`Producto: ${nombre} | Ingresos Brutos: $${ingresosBrutos.toFixed(2)}`);
                    }
            });   
            
        console.log("🔸 d) Productos con Precio Final entre $20.000 y $30.000:");
        productos.forEach(({ nombre, precioCosto, margen }) => 
            {
              const ganancia = precioCosto * (margen / 100);
              const importeBase = precioCosto + ganancia;
              const iva = importeBase * 0.21;
              const ingresosBrutos = importeBase * 0.03;
              const precioFinal = importeBase + iva + ingresosBrutos;
            
              if (precioFinal >= 20000 && precioFinal <= 30000) 
                {
                    console.log(`Producto: ${nombre} | Precio Final: $${precioFinal.toFixed(2)}`);
                }
            });

        console.log("🔸 e) Productos con IVA en los rangos $2.000–$4.000 ó $8.000–$12.000:");
        productos.forEach(({ nombre, precioCosto, margen }) => {
        const ganancia = precioCosto * (margen / 100);
        const importeBase = precioCosto + ganancia;
        const iva = importeBase * 0.21;
            
        if ((iva >= 2000 && iva <= 4000) || (iva >= 8000 && iva <= 12000)) 
            {
                console.log(`Producto: ${nombre} | IVA: $${iva.toFixed(2)}`);
            }
        });
            
    })