// Programa de concesionaria

let opcion;
let precio = 0;
let nombreAuto = "";

// Selección del vehículo
opcion = prompt(
    "Seleccione un vehículo:\n" +
    "1 - Amarok V6 ($65.000.000)\n" +
    "2 - TAOS ($53.000.000)\n" +
    "3 - Polo Nuevo ($47.000.000)"
);

// Asignar precio según opción
if (opcion == "1") {
    precio = 65000000;
    nombreAuto = "Amarok V6";
}

if (opcion == "2") {
    precio = 53000000;
    nombreAuto = "TAOS";
}

if (opcion == "3") {
    precio = 47000000;
    nombreAuto = "Polo Nuevo";
}

// Validar opción incorrecta
if (precio == 0) {
    alert("Opción inválida");
} else {

    // Ingreso del dinero disponible
    let dinero = parseFloat(prompt("Ingrese el dinero disponible para la entrega:"));

    let minimo = precio * 0.30;

    // Validar monto
    if (dinero < minimo || dinero >= precio) {
        alert("El monto debe ser mayor al 30% y menor al valor total del vehículo");
    } else {

        // Calcular diferencia
        let diferencia = precio - dinero;

        // Elegir financiación
        let cuotas = prompt(
            "Seleccione financiación:\n" +
            "1 - 12 cuotas (9.9% anual)\n" +
            "2 - 24 cuotas (22% anual)\n" +
            "3 - 36 cuotas (33% anual)"
        );

        let interes = 0;
        let cantidadCuotas = 0;

        if (cuotas == "1") {
            interes = 0.099;
            cantidadCuotas = 12;
        }

        if (cuotas == "2") {
            interes = 0.22;
            cantidadCuotas = 24;
        }

        if (cuotas == "3") {
            interes = 0.33;
            cantidadCuotas = 36;
        }

        if (cantidadCuotas == 0) {
            alert("Financiación inválida");
        } else {

            // Calcular total con interés
            let totalFinanciado = diferencia + (diferencia * interes);

            let valorCuota = totalFinanciado / cantidadCuotas;

            // Mostrar resultado
            alert(
                "RESUMEN DE COMPRA\n\n" +
                "Vehículo: " + nombreAuto + "\n" +
                "Precio: $" + precio + "\n" +
                "Entrega: $" + dinero + "\n" +
                "Saldo financiado: $" + diferencia + "\n" +
                "Cuotas: " + cantidadCuotas + "\n" +
                "Total con interés: $" + totalFinanciado + "\n" +
                "Valor por cuota: $" + valorCuota
            );
        }
    }
}