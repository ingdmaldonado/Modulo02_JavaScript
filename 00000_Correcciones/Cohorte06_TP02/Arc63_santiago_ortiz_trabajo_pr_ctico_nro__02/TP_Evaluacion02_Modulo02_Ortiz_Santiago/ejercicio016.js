/* El dueño de una concesionaria desea lanzar una promoción de venta de sus vehículos 0 km. que tiene en 
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
*/

let continuar = "si";

do {

let Opcion = parseInt(prompt("Elija el vehiculo que desee: 1) AmarokV6 2) TAOS 3) PoloNuevo".toLowerCase()));
let precio = 0;

if (Opcion === 1) {
    precio = 65000000;
    console.log ("Elegiste Amarok V6.")
} else if (Opcion === 2) {
    precio = 53000000
    console.log ("Elegiste TAOS.")
} else if (Opcion === 3) {
    precio = 47000000;
    console.log ("Elegiste Polo Nuevo.")
} else {
    console.log ("Vehiculo no registrado.")
};

    // Solo si el vehiculo existe

    if (precio > 0) {

        let entrega = parseFloat(prompt("Ingrese dinero disponible:"));

        // validacion de entrega

        if (
            entrega > precio * 0.30 && entrega < precio
        ) {

            let saldo = precio - entrega;
            console.log("Saldo restante: " + saldo);
            let cuotas = parseInt(
                prompt("Ingrese cuotas: 12 / 24 / 36")
            );
            let interes = 0;
            if (cuotas === 12) {
                interes = 0.099;
            } else if (cuotas === 24) {
                interes = 0.22;
            } else if (cuotas === 36) {
                interes = 0.33;
            } else {
                console.log("Cuotas inválidas");
            }

            // CALCULO

            if (interes > 0) {

                let total = saldo + (saldo * interes);
                let cuota = total / cuotas;

                console.log("Total financiado: " + total);
                console.log("Cuotas: " + cuotas);
                console.log("Valor por cuota: " + cuota);

            }

        } else {
            console.log(
                "La entrega debe ser mayor al 30% y menor al total."
            );
        }

    }

continuar = prompt("Desea continuar? SI/NO".toLowerCase());
} while(continuar === "si".toLowerCase())