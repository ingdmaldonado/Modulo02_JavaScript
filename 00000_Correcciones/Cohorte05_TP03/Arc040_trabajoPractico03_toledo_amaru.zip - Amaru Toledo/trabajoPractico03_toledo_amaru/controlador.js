window.addEventListener('load', () => {
    console.log('Controlador cargado y listo.');
});




import { 
    calcularPrecioVenta 
} from './modelo.js'; // Asegúrate de que la ruta sea correcta

// 2. FUNCIÓN PRINCIPAL O INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    // 2.1. Referencias a elementos del DOM (Vista.html)
    const inputImporte = document.getElementById('importeCompra');
    const inputMargen = document.getElementById('margenGanancia');
    const btnCalcular = document.getElementById('btnCalcular');
    const pResultado = document.getElementById('resultadoE13');

    // 2.2. Manejo de Eventos
    // Una arrow function se usa para manejar el evento (especificación del TP)[cite: 9].
    btnCalcular.addEventListener('click', () => {
        // Ejecutar la lógica al hacer clic
        manejarCalculoE13();
    });

    // 2.3. Definición de la Función de Manejo (Arrow Function) [cite: 9]
    const manejarCalculoE13 = () => {
        // a. Obtener los valores de la Vista
        const importe = parseFloat(inputImporte.value);
        const margen = parseFloat(inputMargen.value);
        console.log(`Importe de Compra: ${importe}, Margen de Ganancia: ${margen}`);

        // b. Validación básica
        if (isNaN(importe) || isNaN(margen) || importe < 0 || margen < 0) {
            pResultado.textContent = "Error: Por favor, ingrese valores numéricos válidos.";
            return;
        }

        // c. LLAMAR A LA FUNCIÓN DE LÓGICA (MODELO.JS)
        // La función de cálculo está aislada en modelo.js[cite: 10, 16].
        const precioVenta = calcularPrecioVenta(importe, margen);
        console.log(`Precio de Venta calculado: $${precioVenta.toFixed(2)}`);
        // d. ACTUALIZAR LA VISTA (MANEJO DEL DOM)
        pResultado.textContent = `El Precio de Venta calculado es: $${precioVenta.toFixed(2)}`;
    };
});