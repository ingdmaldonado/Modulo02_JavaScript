// =============================
// CONTROLADOR: Gestiona la interacción entre la vista y el modelo
// =============================

import { calcularPrecioVenta } from './modelo.js';

export const controladorPrecioVenta = (importe, margen) => {
    // Validar entradas
    if (isNaN(importe) || isNaN(margen)) {
        return { error: "Ambos valores deben ser números válidos." };
    }

    if (importe < 0 || margen < 0) {
        return { error: "Los valores deben ser positivos." };
    }

    // Calcular precio de venta usando la arrow function
    const precio = calcularPrecioVenta(importe, margen);

    // Devolver el resultado
    return { resultado: precio };
};
import { controladorPrecioVenta } from './controlador.js';

// Ejemplo de prueba
const importe = 100;
const margen = 25;

// El controlador devuelve un objeto con resultado o error
const respuesta = controladorPrecioVenta(importe, margen);

// AQUÍ se imprime en consola (no en el controlador)
if (respuesta.error) {
    console.log(respuesta.error);
} else {
    console.log(`✅ El precio de venta sin impuestos es: $${respuesta.resultado.toFixed(2)}`);
}