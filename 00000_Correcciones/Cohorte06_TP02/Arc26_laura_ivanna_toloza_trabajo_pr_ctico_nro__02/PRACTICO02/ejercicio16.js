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
    36 cuotas - 33 % ANUAL */

    let precioAmarok = 65000000;
    let precioTaos = 53000000;
    let precioPoloNuevo = 47000000;
    let dineroDisponible = 0;

    let vehiculodeInteres = Number(prompt(`Seleccione el vehiculo de interés: 1: Amarok V6, 2: TAOS, 3: Polo Nuevo`));
    switch (vehiculodeInteres) {
        case 1:
            console.log(`Usted ha seleccionado el vehículo Amarok V6, su precio es de $65.000.000`);
            dineroDisponible = Number(prompt("Ingrese el dinero disponible para la compra del vehículo:"));
            if (dineroDisponible > (precioAmarok * 30) / 100 && dineroDisponible < precioAmarok) {
                let diferencia = precioAmarok - dineroDisponible;
                console.log(`La diferencia a pagar es de $${diferencia}`);
                let cuotas = Number(prompt("Seleccione la cantidad de cuotas: 1: 12 cuotas,2: 24 cuotas, 3: 36 cuotas"));
                switch (cuotas) {
                    case 1:
                        let interes12 = (diferencia * 9.9) / 100;
                        let total12 = diferencia + interes12;
                        console.log(`El total a pagar en 12 cuotas es de $${total12}`);
                        console.log(`El valor de cada cuota es de $${total12 / 12}`);
                        break;
                    case 2:
                        let interes24 = (diferencia * 22) / 100;
                        let total24 = diferencia + interes24;
                        console.log(`El total a pagar en 24 cuotas es de $${total24}`);
                        console.log(`El valor de cada cuota es de $${total24 / 24}`);
                        break;
                    case 3:
                        let interes36 = (diferencia * 33) / 100;
                        let total36 = diferencia + interes36;
                        console.log(`El total a pagar en 36 cuotas es de $${total36}`);
                        console.log(`El valor de cada cuota es de $${total36 / 36}`);
                        break;
                }
            }
            break;
        case 2:
            console.log(`Usted ha seleccionado el vehículo TAOS, su precio es de $53.000.000`);
            dineroDisponible = Number(prompt("Ingrese el dinero disponible para la compra del vehículo:"));
            if (dineroDisponible > (precioTaos * 30) / 100 && dineroDisponible < precioTaos) {
                let diferencia = precioTaos - dineroDisponible;
                console.log(`La diferencia a pagar es de $${diferencia}`);
                let cuotas = Number(prompt("Seleccione la cantidad de cuotas: 1: 12 cuotas,2: 24 cuotas, 3: 36 cuotas"));
                switch (cuotas) {
                    case 1:
                        let interes12 = (diferencia * 9.9) / 100;
                        let total12 = diferencia + interes12;
                        console.log(`El total a pagar en 12 cuotas es de $${total12}`);
                        console.log(`El valor de cada cuota es de $${total12 / 12}`);
                        break;
                    case 2:
                        let interes24 = (diferencia * 22) / 100;
                        let total24 = diferencia + interes24;
                        console.log(`El total a pagar en 24 cuotas es de $${total24}`);
                        console.log(`El valor de cada cuota es de $${total24 / 24}`);
                        break;
                    case 3:
                        let interes36 = (diferencia * 33) / 100;
                        let total36 = diferencia + interes36;
                        console.log(`El total a pagar en 36 cuotas es de $${total36}`);
                        console.log(`El valor de cada cuota es de $${total36 / 36}`);
                        break;
                }}
        case 3:
            console.log(`Usted ha seleccionado el vehículo Polo Nuevo, su precio es de $47.000.000`);
            dineroDisponible = Number(prompt("Ingrese el dinero disponible para la compra del vehículo:"));
            if (dineroDisponible > (precioPoloNuevo * 30) / 100 && dineroDisponible < precioPoloNuevo) {
                let diferencia = precioPoloNuevo - dineroDisponible;
                console.log(`La diferencia a pagar es de $${diferencia}`);
                let cuotas = Number(prompt("Seleccione la cantidad de cuotas: 1: 12 cuotas,2: 24 cuotas, 3: 36 cuotas"));
                switch (cuotas) {
                    case 1:
                        let interes12 = (diferencia * 9.9) / 100;
                        let total12 = diferencia + interes12;
                        console.log(`El total a pagar en 12 cuotas es de $${total12}`);
                        console.log(`El valor de cada cuota es de $${total12 / 12}`);
                        break;
                    case 2:
                        let interes24 = (diferencia * 22) / 100;
                        let total24 = diferencia + interes24;
                        console.log(`El total a pagar en 24 cuotas es de $${total24}`);
                        console.log(`El valor de cada cuota es de $${total24 / 24}`);
                        break;
                    case 3:
                        let interes36 = (diferencia * 33) / 100;
                        let total36 = diferencia + interes36;
                        console.log(`El total a pagar en 36 cuotas es de $${total36}`);
                        console.log(`El valor de cada cuota es de $${total36 / 36}`);
                        break;}
                    }}
            
    

