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
36 cuotas - 33 % ANUAL */


{
    let vehiculo=0;
    let precio=0;
    let financiacion=0;
    let entrega=0;
    let cuotas=0;
    let interes=0;
    let valorCuota=0;
    let saldo=0;
   

    vehiculo=Number(prompt(`Selecione vehiculo 1. Amarok v6(65.000.000) 2. Taos (53.000.000)3. Polo Nuevo (47.000.00)`));
    
    switch (vehiculo) {
        case 1: {

            precio=65000000;
        }
            
            break;
        case 2:{
            precio=53000000;
        }  
        break; 
        case 3 :{
            precio=47000000;
        }
        break;
    
        default:
            console.log(`Opción Incorrecta`);
            break;
    }
     
     entrega = Number(prompt("Ingrese dinero para la entrega"));
       if (entrega < precio * 0.30 || entrega >= precio) {
            console.log("Debe ser mayor al 30% y menor al total");
            
    }

        saldo = precio - entrega;

    if (entrega < precio * 0.30 || entrega >= precio) {
    console.log("Debe ser mayor al 30% y menor al total");
} else {

    saldo = precio - entrega;

    cuotas = Number(prompt(`Seleccione cuotas: 12/ 24 / 36`));

    switch(cuotas){
        case 12: interes=9.9; break;
        case 24: interes=22; break;
        case 36: interes=33; break;
        default:
            console.log("Opción incorrecta");
            break;
    }

    financiacion = saldo + (saldo * interes/100);
    valorCuota = financiacion / cuotas;

    console.log(`Precio del vehiculo seleccionado ${precio}`);
    console.log(`Entrega ${entrega}`);
    console.log(`Saldo a financiar ${financiacion}`);
    console.log(`Interes ${interes}`);
    console.log(`Cuotas elegidas ${cuotas}`);
    console.log(`Valor de la cuotas ${valorCuota}`);
}
}