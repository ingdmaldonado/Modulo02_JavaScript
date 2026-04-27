// Precios 
const precios = {
  camion: 22000,
  camioneta: 12000,
  auto: 4000,
  moto: 1500
};

// contadores
let camiones = 0;
let camionetas = 0;
let autos = 0;
let motos = 0;

// acumuladores
let totalCamiones = 0;
let totalCamionetas = 0;
let totalAutos = 0;
let totalMotos = 0;

let totalGeneral = 0;

alert("Sistema de peaje");
alert("Escribí el tipo de vehículo o 'fin' para terminar");

while (true) {

  let ingreso = prompt("camion / camioneta / auto / moto / fin");

  // si cancela o no escribe nada
  if (!ingreso) {
    alert("No ingresaste nada");
    continue;
  }

  let tipo = ingreso.toLowerCase().trim();

  if (tipo === "fin") break;

  let precio = 0;

  // uso if en lugar de switch (más común en principiantes)
  if (tipo === "camion") {
    camiones++;
    precio = precios.camion;
    totalCamiones += precio;

  } else if (tipo === "camioneta") {
    camionetas++;
    precio = precios.camioneta;
    totalCamionetas += precio;

  } else if (tipo === "auto") {
    autos++;
    precio = precios.auto;
    totalAutos += precio;

  } else if (tipo === "moto") {
    motos++;
    precio = precios.moto;
    totalMotos += precio;

  } else {
    alert("Tipo inválido");
    continue;
  }

  totalGeneral += precio;

  alert("Cobrado: $" + precio);
}

// resumen
let resumen = "---- CIERRE ----\n\n";

resumen += "Camiones: " + camiones + " | $" + totalCamiones + "\n";
resumen += "Camionetas: " + camionetas + " | $" + totalCamionetas + "\n";
resumen += "Autos: " + autos + " | $" + totalAutos + "\n";
resumen += "Motos: " + motos + " | $" + totalMotos + "\n\n";

resumen += "TOTAL: $" + totalGeneral + "\n\n";

// comparación simple
if (autos > camionetas) {
  resumen += "Pasaron más autos";
} else if (camionetas > autos) {
  resumen += "Pasaron más camionetas";
} else {
  resumen += "Pasaron la misma cantidad";
}

alert(resumen);
console.log(resumen);