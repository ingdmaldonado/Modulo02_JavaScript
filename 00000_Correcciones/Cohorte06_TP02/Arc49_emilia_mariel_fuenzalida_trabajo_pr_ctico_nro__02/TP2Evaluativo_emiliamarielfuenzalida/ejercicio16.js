/*
Ejercicio Nro. 16:
El dueño de una concesionaria desea lanzar una promoción de venta 
de sus vehículos 0 km. que tiene en STOCK. 
Para ello nos cuenta que tiene tres vehículos disponibles para la venta
y el precio de los mismos es el siguiente:

1) Amarok V6 (Oferta: 65.000.000)
2) TAOS 53.000.000
3) Polo Nuevo 47.000.000

El Gerente nos indica se debería realizar una aplicación debe permitir 
a los interesados (clientes)

1ro) Selecciona el Vehículo de interés
2do) Que el cliente pueda ingresar el dinero disponible para la compra del vehículo,
sabiendo que el dinero a entregar debe ser mayor al 30% del valor del vehículo
y menor al importe total del mismo.
3ro) El Sistema debe calcular la financiación del dinero restante a pagar, 
sabiendo que la diferencia a pagar sería equivalente al valor total del vehículo elegido 
menos el dinero a entregar; esa diferencia será financiada de la siguiente forma:

12 cuotas - 9.9 % ANUAL
24 cuotas - 22 % ANUAL
36 cuotas - 33 % ANUAL

*/

{
    let vehiculo = 0;
    let precio = 0;

    vehiculo = Number(prompt(`Elija vehiculo:
        1) ¡Oferta! Amarok V6 -> 65.000.000
        2) TAOS -> 53.000.000
        3) Polo Nuevo -> 47.000.000`));

    switch (vehiculo) {

        case 1:
            {
                precio = 65000000;
                break;
            }
        case 2:
            {
                precio = 53000000;
                break;
            }
        case 3:
            {
                precio = 47000000;
                break;
            }
        default: {
            console.log(`Elegir 1,2 o 3!`)
        }
    }

    let parteDePago = Number(prompt(`Ingrese monto a entregar (Mayor al 30%):`));
    let minimo = (precio * 30) / 100;

    let restoAPagar = 0;

    if (parteDePago > minimo && parteDePago < precio) {
        restoAPagar = precio - parteDePago;

        let cuotas12 = calculoDeCuotas(restoAPagar, 12, 0.099);
        let cuotas24 = calculoDeCuotas(restoAPagar, 24, 0.22);
        let cuotas36 = calculoDeCuotas(restoAPagar, 36, 0.33);

        console.log("Valor de cuota 12 - 9,9% anual:", cuotas12);
        console.log("Valor de cuota 24 - 22% anual:", cuotas24);
        console.log("Valor de cuota 36 - 33% anual:", cuotas36);
    }
    else {
        console.log(`El monto ingresado no cumple con las condiciones`);
    }
}


function calculoDeCuotas(restoAPagar, cuotas, interés) {

    let totalAPagar = restoAPagar + (restoAPagar * interés);

    /*Cuantose paga por cada mes 12,24,36 */
    let valorFinal = totalAPagar / cuotas;

    return valorFinal
}