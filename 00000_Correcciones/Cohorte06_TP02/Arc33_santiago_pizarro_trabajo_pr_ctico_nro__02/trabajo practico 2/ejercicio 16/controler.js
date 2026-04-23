{
    // ========== DATOS DE VEHICULOS ==========
const VEHICULOS = [
  { nombre: "Amarok V6", precio: 65000000 },
  { nombre: "TAOS", precio: 53000000 },
  { nombre: "Polo Nuevo", precio: 47000000 }
];

// ========== FUNCION PARA CALCULAR CUOTA MENSUAL (Interes Simple) ==========
function calcularCuotaMensualSimple(monto, tasaAnual, meses) {
  // Calcular interes total: Capital * tasa * (anios)
  let anios = meses / 12;
  let interesTotal = monto * (tasaAnual / 100) * anios;
  let montoTotal = monto + interesTotal;
  let cuotaMensual = montoTotal / meses;
  return cuotaMensual;
}

// ========== FUNCION PARA FORMATEAR MONEDA ==========
function formatoPesos(valor) {
  return "$ " + valor.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// ========== PROGRAMA PRINCIPAL ==========
alert("Bienvenido a la concesionaria - Promocion 0km");

// --- 1. Seleccion del vehiculo ---
let menu = "Seleccione el vehiculo de su interes:\n\n";
VEHICULOS.forEach((v, index) => {
  menu += (index + 1) + ". " + v.nombre + " - " + formatoPesos(v.precio) + "\n";
});
menu += "\nIngrese el numero de opcion (1, 2 o 3):";

let opcionVehiculo;
let vehiculoElegido;

while (true) {
  let entrada = prompt(menu);
  if (entrada === null) {
    alert("Operacion cancelada.");
    throw new Error("Usuario cancelo la operacion.");
  }
  opcionVehiculo = parseInt(entrada);
  if (!isNaN(opcionVehiculo) && opcionVehiculo >= 1 && opcionVehiculo <= 3) {
    vehiculoElegido = VEHICULOS[opcionVehiculo - 1];
    break;
  } else {
    alert("Opcion invalida. Debe ingresar 1, 2 o 3.");
  }
}

alert("Usted eligio: " + vehiculoElegido.nombre + " - Precio: " + formatoPesos(vehiculoElegido.precio));

// --- 2. Ingreso del dinero disponible ---
const minimo = vehiculoElegido.precio * 0.30;
const maximo = vehiculoElegido.precio;

let dineroEntregado;

while (true) {
  let entrada = prompt(
    "Ingrese el dinero disponible para la compra:\n" +
    "(Debe ser mayor al 30% del valor: " + formatoPesos(minimo) + ")\n" +
    "(Y menor al valor total: " + formatoPesos(maximo) + ")"
  );
  if (entrada === null) {
    alert("Operacion cancelada.");
    throw new Error("Usuario cancelo la operacion.");
  }
  dineroEntregado = parseFloat(entrada);
  if (isNaN(dineroEntregado)) {
    alert("Debe ingresar un numero valido.");
    continue;
  }
  if (dineroEntregado <= minimo) {
    alert("El monto debe ser MAYOR al 30% (" + formatoPesos(minimo) + ").");
    continue;
  }
  if (dineroEntregado >= maximo) {
    alert("El monto debe ser MENOR al valor total (" + formatoPesos(maximo) + ").");
    continue;
  }
  break;
}

// --- 3. Calculo del saldo a financiar ---
let saldoFinanciar = vehiculoElegido.precio - dineroEntregado;

alert(
  "Resumen:\n" +
  "Vehiculo: " + vehiculoElegido.nombre + "\n" +
  "Precio total: " + formatoPesos(vehiculoElegido.precio) + "\n" +
  "Entrega inicial: " + formatoPesos(dineroEntregado) + "\n" +
  "Saldo a financiar: " + formatoPesos(saldoFinanciar)
);

// --- 4. Opciones de financiacion (interes simple) ---
const OPCIONES_FINANCIACION = [
  { cuotas: 12, tasaAnual: 9.9 },
  { cuotas: 24, tasaAnual: 22.0 },
  { cuotas: 36, tasaAnual: 33.0 }
];

let mensajeFinanciacion = "OPCIONES DE FINANCIACION\n\n";
mensajeFinanciacion += "Saldo a financiar: " + formatoPesos(saldoFinanciar) + "\n\n";

OPCIONES_FINANCIACION.forEach(op => {
  let cuota = calcularCuotaMensualSimple(saldoFinanciar, op.tasaAnual, op.cuotas);
  let totalPagar = cuota * op.cuotas;
  mensajeFinanciacion += op.cuotas + " cuotas - Tasa " + op.tasaAnual + "% anual\n";
  mensajeFinanciacion += "   -> Cuota mensual: " + formatoPesos(cuota) + "\n";
  mensajeFinanciacion += "   -> Total a pagar: " + formatoPesos(totalPagar) + "\n\n";
});

alert(mensajeFinanciacion);
console.log(mensajeFinanciacion);

}