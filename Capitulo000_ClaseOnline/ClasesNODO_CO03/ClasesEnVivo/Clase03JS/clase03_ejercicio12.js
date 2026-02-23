
/*
Ejercicio Nro.12: Estructuras condicionales if/else / operador ternario

	Realizar una aplicación web que permita ingresar el importe de una compra, si el importe supera los $ 500 aplicar un descuento del 10%, sino, caso contrario no otorgará descuento. Mostrar el importe de la compra, el total a pagar (importe de la compra menos el descuento) y por separado el descuento.

*/

    {
        let importeCompra = 0,descuento = 0,importeNetoCompra = 0;

        importeCompra = Number(prompt("Ingrese el valor de la compra"));

        if(importeCompra > 500)
        {
            console.log(`por aqui debería calcular un descuento del 10%`);

            descuento = (importeCompra * 10)/100;

            importeNetoCompra = importeCompra - descuento;
        }
        else
        {
            descuento = 0;
            importeNetoCompra = importeCompra - descuento;
        }

        console.log(`Total Compra ${importeCompra} descuento ${descuento} a Pagar ${importeNetoCompra}`);


    }