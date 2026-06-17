/* 

Se desea realizar una aplicación web 
para una caja de un pequeño mercado de barrio
que siga con estas reglas de negocio.

- puede cobrar "n" productos. El cajero
no sabe con anticipación los productos que
lleva el cliente. (entendido !!!.)

- las compras que totabilizan un importe mayor
a 300.000 pesos en mercadería tienen un descuento
del 5% sobre el total de la compra. (entendido !!!)

    final

- los tickets de compra que contabilicen más
de 7 operaciones tienen un descuento adicional
del 3% (entendido !!!)

    al final.

- al finalizar mostrar el comprobante donde
salgan los siguientes totales
	(1) importe compra:
	(2) descuento 1:
	(3) descuento 2:

	(4) subtotal:(1) - (2) - (3)

	IMPUESTOS:

	IVA (21%)
	ING.BRUTOS (3%)
	TAS.MUNICIPAL (6 6%°)
	
	TOTAL A PAGAR

*/

{
    let continua = `S`; // asigno valores a variables //

    let totalCompra = 0; // declaro e inicializo una variable para el total 

    let importeCompra = 0; // declaro e inicializo una variable para leer los precios de los productos

    let contadorProductos = 0; // se declara e inicializa en cero.

    while (continua === `S` || continua === `s`)
    {
        // contador. es una variable que se suma asi misma de uno en uno.
        contadorProductos = contadorProductos + 1;

        importeCompra = Number(prompt(`Ing. Precio Producto`));

        console.log(`Precio registrado ${importeCompra}`);

        // acumulador, es ir sumando los importes leidos //
        totalCompra = totalCompra + importeCompra;

        continua = prompt(`Quiere Continuar (S/N)`);
    }

    // aplicamos el descuento 1 con un operador ternario
    let descuento1 = totalCompra > 300000 ? (totalCompra * 5)/100:0;

    let descuento2 = contadorProductos > 7 ? (totalCompra * 3)/100:0;

    // aqui vamos a calcular el importe base a pagar //

    let importeBase = totalCompra - (descuento1 + descuento2);

    let IVA = (importeBase * 21)/100;
    let INGBRUTOS = (importeBase * 3)/100;
    let TASAS = (importeBase * 6)/1000;

    let totalAPagar = importeBase + IVA + INGBRUTOS + TASAS;

    /* 
        21% IVA => IMPUESTO AL VALOR AGREGADO => ARCA NACIONAL (AFIP)
        3% INGRESOS BRUTOS => ARCAT 
        6%° TASA MUNICIPAL => TASA MUNICIPAL. => MUNICIPIO DONDE ESTE RADICADO EL NEGOCIO.
    */

    console.log(`total Compra: ${totalCompra}`);

    console.log(`Descuento 1 ${descuento1}`);

    console.log(`Cant. Productos ${contadorProductos}`);

    console.log(`Descuento 2 ${descuento2}`);

    console.log(`Total Base : ${importeBase}`);

    console.log(`El Total a Pagar es: ${totalAPagar}`);

}