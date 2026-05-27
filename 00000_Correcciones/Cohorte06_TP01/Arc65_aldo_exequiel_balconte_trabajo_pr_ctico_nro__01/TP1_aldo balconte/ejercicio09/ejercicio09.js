// Ejercicio Nro. 09: Venta de Pasajes con Descuento

// 1. Solicitar la cantidad de pasajes al usuario
let cantidadPasajes = parseInt(prompt("Ingrese la cantidad de pasajes:"));

// Validar que la cantidad de pasajes sea un número válido
if (isNaN(cantidadPasajes) || cantidadPasajes <= 0) {
    console.log("Cantidad de pasajes inválida. Por favor, ingrese un número entero positivo.");
} else {
    // 2. Solicitar el importe por cada pasaje
    let importePasaje = parseFloat(prompt("Ingrese el importe por cada pasaje:"));

    // Validar que el importe por pasaje sea un número válido
    if (isNaN(importePasaje) || importePasaje <= 0) {
        console.log("Importe por pasaje inválido. Por favor, ingrese un número positivo.");
    } else {
        // 3. Calcular el total de la compra sin descuento
        let totalCompraSinDescuento = cantidadPasajes * importePasaje;

        let descuentoAplicado = 0;
        let importeFinalAPagar = totalCompraSinDescuento;

        // Aplicar las reglas de descuento
        // Se evalúa primero el descuento mayor para evitar que se aplique el menor si cumple ambas condiciones
        if (cantidadPasajes > 3) {
            if (totalCompraSinDescuento > 500000) {
                descuentoAplicado = totalCompraSinDescuento * 0.15; // 15% de descuento
                console.log("¡Se aplica un 15% de descuento por la cantidad de pasajes y el monto de la compra!");
            } else if (totalCompraSinDescuento > 250000) {
                descuentoAplicado = totalCompraSinDescuento * 0.11; // 11% de descuento
                console.log("¡Se aplica un 11% de descuento por la cantidad de pasajes y el monto de la compra!");
            }
        }

        // Calcular el importe final después de aplicar el descuento
        importeFinalAPagar = totalCompraSinDescuento - descuentoAplicado;

        // Mostrar los resultados por consola
        console.log("--- Resumen de la Compra de Pasajes ---");
        console.log("Cantidad de pasajes:", cantidadPasajes);
        console.log("Importe por pasaje:", importePasaje.toFixed(2) + " pesos");
        console.log("Total de la compra (sin descuento):", totalCompraSinDescuento.toFixed(2) + " pesos");
        console.log("Descuento aplicado:", descuentoAplicado.toFixed(2) + " pesos");
        console.log("---------------------------------------");
        console.log("Importe final a pagar:", importeFinalAPagar.toFixed(2) + " pesos");
    }
}