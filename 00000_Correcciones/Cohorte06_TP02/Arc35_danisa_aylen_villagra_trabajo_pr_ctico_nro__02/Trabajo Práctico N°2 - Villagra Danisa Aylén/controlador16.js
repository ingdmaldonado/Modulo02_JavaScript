/*Ejercicio Nro. 16: 
El dueño de una concesionaria desea lanzar una promoción de venta de sus vehículos 0 km. que tiene en STOCK. Para ello nos cuenta que tiene tres vehículos disponibles para la venta  y el precio de los mismos es el siguiente: 
1) Amarok V6 (Oferta: 65.000.000) 
2) TAOS 53.000.000 
3) Polo Nuevo 47.000.000 

El Gerente nos indica se debería realizar una aplicación debe permitir a los interesados (clientes): 
- 1ro) Selecciona el Vehículo de interés 
- 2do) Que el cliente pueda ingresar el dinero disponible para la compra del vehículo, sabiendo que el dinero a entregar debe ser mayor al 30% del valor del vehículo y menor al importe total del mismo. 
- 3ro) El Sistema debe calcular la financiación del dinero restante a pagar, sabiendo que la diferencia a pagar sería equivalente al valor total del vehículo elegido menos el dinero a entregar; esa diferencia será financiada de la siguiente forma: 
12 cuotas - 9.9 % ANUAL 
24 cuotas - 22 % ANUAL 
36 cuotas - 33 % ANUAL

Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el 
DOM y cargar los datos de entrada por medio de prompt.*/

{

    let opcion = Number(prompt("Seleccione vehículo: 1 - Amarok V6 ($65.000.000); 2 - TAOS ($53.000.000); 3 - Polo ($47.000.000)"));

    let precioVehiculo;

    if (opcion === 1)
        {
            precioVehiculo = 65000000;
        }
    else if (opcion === 2) 
        {
            precioVehiculo = 53000000;
        }
    else if (opcion === 3) 
        {
            precioVehiculo = 47000000;
        }
    else 
        {
            alert("Opción inválida");
        }

    let dinero = Number(prompt("Ingrese monto de dinero para entrega:"));

    //30% del valor del vehículo
    let minimo = (precioVehiculo * 30) / 100;

    if (dinero > minimo && dinero < precioVehiculo)
        {
            //Financiación
            let diferencia = precioVehiculo - dinero;

            //Plan de cuotas
            let plan = Number(prompt("Seleccione plan de cuotas: 1 - 12 cuotas (9.9%); 2 - 24 cuotas (22%); 3 - 36 cuotas (33%"));

            let interes;
            let cuotas;

            if (plan === 1) 
                {
                    interes = (diferencia * 9.9) / 100;
                    cuotas = 12;
                }
            else if (plan === 2) 
                {
                    interes = (diferencia * 22) / 100;
                    cuotas = 24;
                }
            else if (plan === 3) 
                {
                    interes = (diferencia * 33) / 100;
                    cuotas = 36;
                }
            else 
                {
                    alert("Plan inválido");
                }

            // Total financiado
            let totalFinanciado = diferencia + interes;

            // Valor de cada cuota
            let valorCuota = totalFinanciado / cuotas;

            // Resultados
            console.log(`Precio del vehículo: $${precioVehiculo}`);
            console.log(`Entrega: $${dinero}`);
            console.log(`Saldo a financiar: $${diferencia}`);
            console.log(`Interés: $${interes}`);
            console.log(`Total financiado: $${totalFinanciado}`);
            console.log(`Cantidad de cuotas: ${cuotas}`);
            console.log(`Valor de cada cuota: $${valorCuota}`);

        }
    else 
        {
            alert("El monto debe ser mayor al 30% y menor al valor total del vehículo");
        }
}