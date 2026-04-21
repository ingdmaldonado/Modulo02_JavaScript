//*Ejercicio N14*/
{
    let camion = 22000;
    let camioneta = 12000;
    let automovil = 4000;
    let moto = 1500;

    let ciclo = "s";

    let cantidadDeCamiones = 0;
    let cantidadDeCamionetas = 0;
    let cantidadDeAutos = 0;
    let cantidadDeMotos = 0;

    let totalCamiones = 0;
    let totalCamionetas = 0;
    let totalAutos = 0;
    let totalMotos = 0;

    let autosQuePasaron = "";

    while (ciclo === "S" || ciclo === "s") {

        let peaje = prompt("Ingrese su vehiculo: camion - camioneta - automovil - moto");

        if (peaje === "Camion" || peaje === "camion") {
            cantidadDeCamiones++;
            totalCamiones += camion;
        }
        else if (peaje === "Camioneta" || peaje === "camioneta") {
            cantidadDeCamionetas++;
            totalCamionetas += camioneta;
        }
        else if (peaje === "Automovil" || peaje === "automovil") {
            cantidadDeAutos++;
            totalAutos += automovil;
        }
        else if (peaje === "Moto" || peaje === "moto") {
            cantidadDeMotos++;
            totalMotos += moto;
        }
        else {
            console.log("Usted ingresó un vehículo no registrado");
        }

        ciclo = prompt("Desea continuar? S/N");
    }


    if (cantidadDeCamionetas > cantidadDeAutos) {
        autosQuePasaron = `Pasaron más camionetas que autos: camionetas: ${cantidadDeCamionetas}, autos: ${cantidadDeAutos}`;
    }
    else if (cantidadDeCamionetas < cantidadDeAutos) {
        autosQuePasaron = `Pasaron más autos que camionetas: autos: ${cantidadDeAutos}, camionetas: ${cantidadDeCamionetas}`;
    }
    else {
        autosQuePasaron = `Pasaron la misma cantidad de autos y camionetas: ${cantidadDeAutos}`;
    }

    let totalGenerado = totalCamiones + totalCamionetas + totalAutos + totalMotos;

    console.log(`
Cantidad de camiones: ${cantidadDeCamiones}
Total cobrado camiones: ${totalCamiones}

Cantidad de camionetas: ${cantidadDeCamionetas}
Total cobrado camionetas: ${totalCamionetas}

Cantidad de automóviles: ${cantidadDeAutos}
Total cobrado automóviles: ${totalAutos}

Cantidad de motos: ${cantidadDeMotos}
Total cobrado motos: ${totalMotos}

Total generado: ${totalGenerado}

${autosQuePasaron}
`);
}


//*Ejercicio N15*/
{
    let ciclo = "S"

    let trabajosDesaprobados = 0;
    let trabajosAprobados = 0;
    let trabajosMuyBuenos = 0;
    let trabajosExcelentes = 0;
    let equivocaciones = 0;


    while (ciclo === "S" || ciclo === "s") {

        let notas = Number(prompt("Ingrese las notas de sus alumnos"))

        if (notas >= 0 && notas <= 4) {

            trabajosDesaprobados++;

        }
        else if (notas > 4 && notas <= 7) {

            trabajosAprobados++;

        }
        else if (notas > 7 && notas < 10) {

            trabajosMuyBuenos++;

        }
        else if (notas === 10) {

            trabajosExcelentes++;

        }
        else {

            equivocaciones++;

        }

        ciclo = prompt("Desea continuar? S/N")

    }

    console.log(`

        Trabajos desaprobados: ${trabajosDesaprobados}
        Trabajos aprobados: ${trabajosAprobados}
        Trabajos muy buenos: ${trabajosMuyBuenos}
        Trabajos Excelentes: ${trabajosExcelentes}
        Equivocaciones: ${equivocaciones}
        
        `)

}

//*Ejercicio N16*/
{
    let vehiculo = Number(prompt("Eliga el vehiculo que desea comprar: 1-Amarok (65000000), 2-Taos (53000000), 3-Polo (47000000)"));

    let precio = 0;

    if (vehiculo === 1) {
        precio = 65000000;
    }
    else if (vehiculo === 2) {
        precio = 53000000;
    }
    else if (vehiculo === 3) {
        precio = 47000000;
    }

    let minimo = precio * 30 / 100;

    let dinero = Number(prompt(`Ingrese dinero a entregar mayor a ${minimo} y menor a ${precio}`));

    while (dinero < minimo || dinero >= precio) {
        dinero = Number(prompt(`Monto invalido ingrese nuevamente un monto mayor a ${minimo} y menor a ${precio}`));
    }

    let diferencia = precio - dinero;

    let cuotas = Number(prompt("Seleccione las cuotas en las que desea pagar: 1-12 cuotas, 2-24 cuotas, 3-36 cuotas"));

    let tasa = 0;
    let cantidadCuotas = 0;

    if (cuotas === 1) {
        tasa = 9.9;
        cantidadCuotas = 12;
    }
    else if (cuotas === 2) {
        tasa = 22;
        cantidadCuotas = 24;
    }
    else if (cuotas === 3) {
        tasa = 33;
        cantidadCuotas = 36;
    }

    let interes = diferencia * tasa / 100;
    let totalFinanciado = diferencia + interes;
    let valorCuota = totalFinanciado / cantidadCuotas;

    console.log(`Precio: ${precio}, Dinero entregado: ${dinero}, Diferencia: ${diferencia}, Tasa: ${tasa}, Total financiado: ${totalFinanciado}, Cuotas: ${cantidadCuotas}, Valor cuota: ${valorCuota}`);
}
//*Ejercicio N17*/
{
    let ciclo = "S"
    let huevosM = 0;
    let huevosL = 0;
    let huevosXl = 0;
    let huevosDescartados = 0;

    while (ciclo === "S" || ciclo === "s") {

        let huevos = Number(prompt("Ingrese el peso del huevo"))

        if (huevos >= 53 && huevos < 63) {
            huevosM++;
        }
        else if (huevos >= 63 && huevos < 73) {
            huevosL++;
        }
        else if (huevos >= 73) {
            huevosXl++;
        }
        else {
            huevosDescartados++;
        }

        ciclo = prompt("Desea continuar? S/N")
    }

    let totalDeHuevos = huevosM + huevosL + huevosXl + huevosDescartados

    let porcentajeHuevosM = (huevosM * 100) / totalDeHuevos;
    let porcentajeHuevosL = (huevosL * 100) / totalDeHuevos;
    let porcentajeHuevosXl = (huevosXl * 100) / totalDeHuevos;
    let porcentajeHuevosDescartados = (huevosDescartados * 100) / totalDeHuevos;

    console.log(`Cantidad de huevos M: ${huevosM} su porcentaje es: ${porcentajeHuevosM}%, cantidad de huevos L: ${huevosL} su porcentaje es: ${porcentajeHuevosL}%, cantidad de huevos XL: ${huevosXl} su porcentaje es: ${porcentajeHuevosXl}%, cantidad de huevos descartados: ${huevosDescartados} su porcentaje es: ${porcentajeHuevosDescartados}%, total de huevos: ${totalDeHuevos}`)

}
//*Ejercicio N18*/
{
    let ciclo = "S";

    let ventaTotal = 0;
    let descuentoTotal = 0;
    let importePagarTotal = 0;
    let clientesConDescuento = 0;
    let clientesSinDescuento = 0;

    while (ciclo === "S" || ciclo === "s") {

        let productos = "S";
        let totalCliente = 0;

        while (productos === "S" || productos === "s") {

            let precio = Number(prompt("Ingrese el precio del producto"));
            totalCliente = totalCliente + precio;

            productos = prompt("Desea cargar otro producto S/N");
        }

        let metodo = Number(prompt("Ingrese metodo de pago 1 Efectivo 2 Visa BNA 3 Master BNA 4 Otros"));

        let descuento = 0;

        if (metodo === 1) {
            descuento = totalCliente * 10 / 100;
            clientesConDescuento = clientesConDescuento + 1;
        }
        else if (metodo === 2 || metodo === 3) {
            descuento = totalCliente * 7 / 100;
            clientesConDescuento = clientesConDescuento + 1;
        }
        else {
            descuento = 0;
            clientesSinDescuento = clientesSinDescuento + 1;
        }

        let importeFinal = totalCliente - descuento;

        ventaTotal = ventaTotal + totalCliente;
        descuentoTotal = descuentoTotal + descuento;
        importePagarTotal = importePagarTotal + importeFinal;

        ciclo = prompt("Desea atender otro cliente S/N");
    }

    console.log(`Venta Total: ${ventaTotal}, Descuento Total: ${descuentoTotal},  Importe a Pagar Total: ${importePagarTotal}, Clientes con descuento: ${clientesConDescuento}, Clientes sin descuento: ${clientesSinDescuentomoto
        }`);
}