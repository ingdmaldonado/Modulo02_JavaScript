// Ejercicio N14

/*
let continuaAtendiendo = "S";

let contadorCamion = 0;
let contadorCamioneta = 0;
let contadorAuto = 0;
let contadorMoto = 0;

let totalcobradoCamion = 0;
let totalcobradoCamioneta = 0;
let totalcobradoAuto = 0;
let totalcobradoMoto = 0;

let totalRecaudado = 0;

while (continuaAtendiendo === "S" || continuaAtendiendo === "s") 
    {
        let IngresodePeaje = prompt("Ingrese el tipo de peaje A (Camion), B (Camioneta), C (Auto) o D (Moto):");
        let tipoPeaje;
        
        if (IngresodePeaje === "A") {
            let valorPeaje = 22000;
            tipoPeaje = "Camion";
            contadorCamion++;
            totalcobradoCamion += valorPeaje;

        } else if (IngresodePeaje === "B") {
            let valorPeaje2 = 12000;
            tipoPeaje = "Camioneta";
            contadorCamioneta++;
            totalcobradoCamioneta += valorPeaje2;
        } else if (IngresodePeaje === "C") {
            let valorPeaje3 = 4000;
            tipoPeaje = "Auto";
            contadorAuto++;
            totalcobradoAuto += valorPeaje3;
        } else if (IngresodePeaje === "D") {
            let valorPeaje4 = 1500;
            tipoPeaje = "Moto";
            contadorMoto++;
            totalcobradoMoto += valorPeaje4;
        } else {
            console.log("Tipo de peaje no válido");
        
        }

        continuaAtendiendo = prompt("¿Ingresa otro vehículo? (S/N):");
    }

console.log(`Cantidad de camiones: ${contadorCamion}, Total cobrado por camiones: ${totalcobradoCamion}`);
console.log(`Cantidad de camionetas: ${contadorCamioneta}, Total cobrado por camionetas: ${totalcobradoCamioneta}`);
console.log(`Cantidad de autos: ${contadorAuto}, Total cobrado por autos: ${totalcobradoAuto}`);
console.log(`Cantidad de motos: ${contadorMoto}, Total cobrado por motos: ${totalcobradoMoto}`);

totalRecaudado = totalcobradoCamion + totalcobradoCamioneta + totalcobradoAuto + totalcobradoMoto;
console.log(`Total recaudado: ${totalRecaudado}`);

if (contadorAuto > contadorCamioneta) {
    console.log("Se atendieron más autos que camionetas");

} else if (contadorCamioneta > contadorAuto) {
    console.log("Se atendieron más camionetas que autos");
} else {
    console.log("Se atendieron la misma cantidad de autos y camionetas");
} */

// Ejercicio N15

/*
let contadorTrabajos = 0;

let continuar = "S";

let notamalIngresada = 0;

    let contadorTrabajosDesaprobados = 0;
    let contadorTrabajosAprobados = 0;
    let contadorTrabajosMuyBuenos = 0;
    let contadorTrabajosExcelentes = 0;

while (continuar === "S" || continuar === "s") {

    let notaTrabajo = Number(prompt("Ingrese la nota del trabajo practico (0-10):"));

    if (notaTrabajo >= 0 && notaTrabajo <= 4) {

        contadorTrabajos = contadorTrabajos + 1;
        contadorTrabajosDesaprobados = contadorTrabajosDesaprobados + 1;

    }
    else if (notaTrabajo > 4 && notaTrabajo <= 7) {

        contadorTrabajos = contadorTrabajos + 1;
        contadorTrabajosAprobados = contadorTrabajosAprobados + 1;

    }
    else if (notaTrabajo > 7 && notaTrabajo < 10) {

        contadorTrabajos = contadorTrabajos + 1;
        contadorTrabajosMuyBuenos = contadorTrabajosMuyBuenos + 1;
  

    }
    else if (notaTrabajo === 10) {

        contadorTrabajos = contadorTrabajos + 1;
        contadorTrabajosExcelentes = contadorTrabajosExcelentes + 1;
    }
    else {
        prompt("Nota no válida. Por favor, ingrese una nota entre 0 y 10.");

        notamalIngresada = notamalIngresada + 1;
    }

    continuar = prompt("¿Desea ingresar otro trabajo? (S/N):");
}

console.log(`Cantidad de trabajos ingresados: ${contadorTrabajos}`);
console.log(`Cantidad de trabajos desaprobados: ${contadorTrabajosDesaprobados}`);
console.log(`Cantidad de trabajos aprobados: ${contadorTrabajosAprobados}`);
console.log(`Cantidad de trabajos muy buenos: ${contadorTrabajosMuyBuenos}`);
console.log(`Cantidad de trabajos excelentes: ${contadorTrabajosExcelentes}`);
console.log(`Cantidad de notas mal ingresadas: ${notamalIngresada}`); */

// Ejercicio N16

/*
let continuar = "S";

let precioVehiculo;

let Vehiculoingresado;


while (continuar === "S" || continuar === "s") {
    let opcionValida = false;
    
    while (!opcionValida) {
        Vehiculoingresado = Number(prompt("Ingrese el vehiculo que desea comprar 1 (Amarok V6), 2 (TAOS) o 3 (Polo Nuevo):"));

        if (Vehiculoingresado === 1) {
            precioVehiculo = 65000000;
            console.log(`Usted ha seleccionado el vehículo Amarok V6, el precio es de $${precioVehiculo}`);
            opcionValida = true;
        }
        else if (Vehiculoingresado === 2) {
            precioVehiculo = 53000000;
            console.log(`Usted ha seleccionado el vehículo TAOS, el precio es de $${precioVehiculo}`);
            opcionValida = true;
        }
        else if (Vehiculoingresado === 3) {
            precioVehiculo = 47000000;
            console.log(`Usted ha seleccionado el vehículo Polo Nuevo, el precio es de $${precioVehiculo}`);
            opcionValida = true;
        }
        else {
           alert("Opción no válida. Por favor, ingrese 1, 2 o 3.");
        }
    }

    continuar = prompt("¿Desea ingresar otro vehículo? (S/N):");
}

    let dineroDisponible = Number(prompt("Ingrese el dinero disponible para la compra:"));

    let valorFinanciamiento = (precioVehiculo - dineroDisponible);

    if (Vehiculoingresado === 1 || Vehiculoingresado === 2 || Vehiculoingresado === 3) {
        if (dineroDisponible >= precioVehiculo) {
            alert(`¡Felicidades! Puede comprar el vehículo.`);
        } else {
            alert("Lo siento, no tiene suficiente dinero para comprar el vehículo.");
            alert("Podemos ofrecerle un plan de financiamiento para que pueda adquirirlo.");
            let planFinanciamiento = Number(prompt("Plan 12 cuotas 9,9% interes anual, Plan 24 cuotas 22% interes anual, Plan 36 cuotas 36% interes anual. ¿Cuál plan le gustaría elegir? (12/24/36):"));

            if (planFinanciamiento === 12) {

                let cuotaMensual = (valorFinanciamiento * 1.099) / 12;
                console.log(`El monto de cada cuota mensual sería de $${cuotaMensual.toFixed(2)} durante 12 meses.`);
            }   else if (planFinanciamiento === 24) {
                let cuotaMensual = (valorFinanciamiento * 1.22) / 24;
                console.log(`El monto de cada cuota mensual sería de $${cuotaMensual.toFixed(2)} durante 24 meses.`);
            }   else if (planFinanciamiento === 36) {
                let cuotaMensual = (valorFinanciamiento * 1.36) / 36;
                console.log(`El monto de cada cuota mensual sería de $${cuotaMensual.toFixed(2)} durante 36 meses.`);
            }

        }
    } */

// Ejercicio N17
/*
{
    let continua = `S`;

    let pesoHuevo = 0;

    let cantidadM = 0;
    let cantidadL = 0;
    let cantidadXL = 0;
    let descartes = 0;

    while (continua === 'S' || continua === 's')

    {
        // Parte 02: Durantes, carga de cada huevo
        pesoHuevo = Number(prompt(`Ing. el Peso del Huevo`));

        if((pesoHuevo >= 53) && (pesoHuevo <63))
        {
            cantidadM = cantidadM + 1; // cantidad de medianos
        }

        else
        {
            if((pesoHuevo >= 63) && (pesoHuevo < 73))
            {
                cantidadL = cantidadL + 1; // cantidad de grandes
            }
            else
            {
                if((pesoHuevo >= 73) && (pesoHuevo < 83))
                {
                    cantidadXL = cantidadXL + 1; // cantidad de extra grandes
                }
                else
                {
                    descartes = descartes + 1; // huevos descartados
                }
            }
        }

        continua = prompt(`Desea continuar? S/N`);
    }

    // Parte 03: Salidas, resultados finales
    console.log(`Cantidad de huevos M: ${cantidadM}`);
    console.log(`Cantidad de huevos L: ${cantidadL}`);
    console.log(`Cantidad de huevos XL: ${cantidadXL}`);
    console.log(`Cantidad de huevos descartados: ${descartes}`);


    let totalHuevos = cantidadM + cantidadL + cantidadXL + descartes;
    console.log(`Total de huevos procesados: ${totalHuevos}`);  

    let proporcionM = (cantidadM / totalHuevos) * 100;
    let proporcionL = (cantidadL / totalHuevos) * 100;
    let proporcionXL = (cantidadXL / totalHuevos) * 100;
    let proporcionDescartes = (descartes / totalHuevos) * 100;

    console.log(`Proporción de huevos M: ${proporcionM.toFixed(2)}%`);
    console.log(`Proporción de huevos L: ${proporcionL.toFixed(2)}%`);
    console.log(`Proporción de huevos XL: ${proporcionXL.toFixed(2)}%`);
    console.log(`Proporción de huevos descartados: ${proporcionDescartes.toFixed(2)}%`);

}
*/


// Ejercicio N18

/*
{
    let continuaAtentiendo = "S";

    let contadorClientes = 0;

        while (continuaAtentiendo === "S" || continuaAtentiendo === "s")
        {
            contadorClientes = contadorClientes + 1;

            console.log(`Atendiendo al cliente número ${contadorClientes}`);

            let ingresaotroProducto = "S";
            let contadorProductos = 0;
            let totalCompraCliente = 0;
            let TotalPagoCliente = 0;
            let precioProducto = 0;

            while (ingresaotroProducto === "S" || ingresaotroProducto === "s")
            { 
                contadorProductos++;

                precioProducto = Number(prompt(`Ingrese el precio del producto N° ${contadorProductos}:`));

                totalCompraCliente = totalCompraCliente + precioProducto;
                
                console.log(`Producto N° ${contadorProductos} agregado. Precio: $${precioProducto.toFixed(2)}. Total parcial: $${totalCompraCliente.toFixed(2)}`);

                ingresaotroProducto = prompt("¿Desea ingresar otro producto? (S/N):");  
            }

            let tipoPago = 0;
            let descuento = 0;
            
            tipoDePago = Number(prompt(`Cómo desea pagar 1-EFE 10% , 2 - VISA 7%,3 - MASTER 7%, 4 - OTRAS ?.`))

            switch (tipoDePago) {
                case 1:{
                    descuento = (totalCompraCliente * 10)/100;
                }

            case 2:
                {
                    descuento = (totalCompraCliente * 7)/100;
                }

            case 3:
                {
                    descuento = (totalCompraCliente * 7)/100;
                }

            default:
                {
                    descuento = 0;
                }
                
        }

        totalPagoCliente = totalCompraCliente - descuento;


        totalCobradoJornada = totalCobradoJornada + totalCompraCliente;
    

        console.log(`Total Cobrado al Cliente ${contadorClientes} - Total: ${totalCompraCliente}`);

        continuaAtendiendo = prompt(`Contínua con otro cliente ?.`);
    }

    console.log(`Clientes Atendidos:= ${contadorClientes} Total Cobrado: ${totalCobradoJornada}`);
            
}
    */



