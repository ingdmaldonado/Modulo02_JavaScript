{
    // Precios según tipo de vehículo
const PRECIOS = {
  CAMION: 22000,
  CAMIONETA: 12000,
  AUTOMOVIL: 4000,
  MOTO: 1500
};

// Variables acumuladoras
let cantCamiones = 0;
let totalCamiones = 0;
let cantCamionetas = 0;
let totalCamionetas = 0;
let cantAutomoviles = 0;
let totalAutomoviles = 0;
let cantMotos = 0;
let totalMotos = 0;
let totalGeneral = 0;

let continuar = true;

while (continuar) {
  // Mostrar menú y capturar opción
  let opcion = prompt(
    "PEAJE SUR S.A.\n" +
    "Seleccione el tipo de vehículo:\n" +
    "1. Camión ($22.000)\n" +
    "2. Camioneta ($12.000)\n" +
    "3. Automóvil ($4.000)\n" +
    "4. Moto ($1.500)\n" +
    "5. Finalizar jornada y mostrar resumen\n\n" +
    "Ingrese el número de opción:"
  );

  // Validar que se ingresó algo
  if (opcion === null) {
    // Si el usuario cancela, preguntamos si desea salir
    let confirmar = confirm("¿Está seguro que desea salir sin finalizar la jornada?");
    if (confirmar) {
      break;
    } else {
      continue;
    }
  }

  opcion = parseInt(opcion);

  switch (opcion) {
    case 1:
      cantCamiones++;
      totalCamiones += PRECIOS.CAMION;
      totalGeneral += PRECIOS.CAMION;
      alert("Camión registrado. Pago: $" + PRECIOS.CAMION.toFixed(2));
      break;
    case 2:
      cantCamionetas++;
      totalCamionetas += PRECIOS.CAMIONETA;
      totalGeneral += PRECIOS.CAMIONETA;
      alert("Camioneta registrada. Pago: $" + PRECIOS.CAMIONETA.toFixed(2));
      break;
    case 3:
      cantAutomoviles++;
      totalAutomoviles += PRECIOS.AUTOMOVIL;
      totalGeneral += PRECIOS.AUTOMOVIL;
      alert("Automóvil registrado. Pago: $" + PRECIOS.AUTOMOVIL.toFixed(2));
      break;
    case 4:
      cantMotos++;
      totalMotos += PRECIOS.MOTO;
      totalGeneral += PRECIOS.MOTO;
      alert("Moto registrada. Pago: $" + PRECIOS.MOTO.toFixed(2));
      break;
    case 5:
      continuar = false;
      break;
    default:
      alert("Opción no válida. Intente nuevamente.");
  }
}

// Mostrar resumen de cierre
let mensajeResumen = "===== CIERRE DE JORNADA =====\n\n";
mensajeResumen += `Cantidad de CAMIONES: ${cantCamiones}\n`;
mensajeResumen += `Total cobrado CAMIONES: $${totalCamiones.toFixed(2)}\n\n`;
mensajeResumen += `Cantidad de CAMIONETAS: ${cantCamionetas}\n`;
mensajeResumen += `Total cobrado CAMIONETAS: $${totalCamionetas.toFixed(2)}\n\n`;
mensajeResumen += `Cantidad de AUTOMÓVILES: ${cantAutomoviles}\n`;
mensajeResumen += `Total cobrado AUTOMÓVILES: $${totalAutomoviles.toFixed(2)}\n\n`;
mensajeResumen += `Cantidad de MOTOS: ${cantMotos}\n`;
mensajeResumen += `Total cobrado MOTOS: $${totalMotos.toFixed(2)}\n\n`;
mensajeResumen += `TOTAL GENERAL COBRADO: $${totalGeneral.toFixed(2)}\n\n`;

// Comparación entre camionetas y autos (camiones)
mensajeResumen += "----- COMPARACIÓN CAMIONETAS vs CAMIONES -----\n";
if (cantCamionetas > cantCamiones) {
  mensajeResumen += "Pasaron MÁS camionetas que camiones.";
} else if (cantCamiones > cantCamionetas) {
  mensajeResumen += "Pasaron MÁS camiones que camionetas.";
} else {
  mensajeResumen += "Pasó la MISMA cantidad de camionetas y camiones.";
}

alert(mensajeResumen);
// También puedes mostrarlo por consola si prefieres:
console.log(mensajeResumen);
}