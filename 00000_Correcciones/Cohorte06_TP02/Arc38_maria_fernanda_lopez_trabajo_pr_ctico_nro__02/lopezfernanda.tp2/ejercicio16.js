/* Ejercicio Nro. 16:
El dueño de una concesionaria desea lanzar una promoción de venta de sus vehículos 0 km. que tiene en
STOCK. Para ello nos cuenta que tiene tres vehículos disponibles para la venta
y el precio de los mismos es el siguiente:
1) Amarok V6 (Oferta: 65.000.000)
2) TAOS 53.000.000
3) Polo Nuevo 47.000.000
El Gerente nos indica se debería realizar una aplicación debe permitir a los interesados (clientes)
1ro) Selecciona el Vehículo de interés
2do) Que el cliente pueda ingresar el dinero disponible para la compra del vehículo, sabiendo que el
dinero a entregar debe ser mayor al 30% del valor del vehículo y menor al importe total del mismo.
3ro) El Sistema debe calcular la financiación del dinero restante a pagar, sabiendo que la diferencia a
pagar sería equivalente al valor total del vehículo elegido menos el dinero a entregar; esa diferencia será
financiada de la siguiente forma:

12 cuotas - 9.9 % ANUAL
24 cuotas - 22 % ANUAL
36 cuotas - 33 % ANUAL
Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el
DOM y cargar los datos de entrada por medio de prompt.
 */

{
let vehiculo = 0;
let precio = 0;

while (vehiculo < 1 || vehiculo > 3) 
{
    vehiculo = Number (prompt(`Seleccione vehículo de interes: 1-Amarok V6($65.000.000) 2-TAOS($53.000.000)3- Polo($47.000.000`));

    if (vehiculo === 1) 
    {
        precio = 65000000;
    } 
    else 
    {
        if (vehiculo === 2) 
        {
            precio = 53000000;
        } 
        else 
        {
            if (vehiculo === 3) 
            {
                precio = 47000000;
            }
        }
    }
}
let dinero = Number (prompt(`Ingrese el dinero disponible:`));

while (dinero <= precio * 0.30 || dinero >= precio) 
{
    dinero =Number (prompt("Monto inválido. Debe ser mayor al 30% y menor al total:"));
}

let restante = precio - dinero;

let cuotas = Number(prompt(`Seleccione financiación: 12, 24 o 36`));

while  (cuotas < 12 || (cuotas > 12 && cuotas < 24) || (cuotas > 24 && cuotas < 36) || cuotas > 36)
{
    cuotas = Number (prompt("Opción inválida. Ingrese 12, 24 o 36:"));
}

let total = 0;

if (cuotas === 12) 
{
    total = restante + (restante * 0.099);
} 
else 
{
    if (cuotas === 24) 
    {
        total = restante + (restante * 0.22);
    } 
    else 
    {
        if (cuotas === 36) 
        {
            total = restante + (restante * 0.33);
        }
    }
}

let valorCuota = total / cuotas;

console.log(`RESULTADO`);
console.log(`Precio del vehículo:${precio}`);
console.log(`Entrega: $ ${dinero}`);
console.log(`Saldo financiado: $${restante}`);
console.log(`Cantidad cuotas:${cuotas}`);
console.log(`Total con interés : $ ${total}`);
console.log(`Valor de cada cuota: $ ${valorCuota}`);
}
