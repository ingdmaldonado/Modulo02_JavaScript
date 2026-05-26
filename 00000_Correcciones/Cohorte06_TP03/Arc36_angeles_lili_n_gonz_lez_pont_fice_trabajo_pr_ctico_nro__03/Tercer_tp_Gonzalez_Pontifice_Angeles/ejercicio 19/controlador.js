import { calcularPrecioVenta } from "./modelo";

window.onload = () => {

    const estadoAplicacion = {
        precioCompra: 0,
        margen: 0
    };
    // Elementos del DOM//
    const inputPrecioCompra = document.getElementById("precioCompra");
    const inputMargen = document.getElementById("margen");
    const btnCalcular = document.getElementById("btnCalcular");
    const btnGuardar = document.getElementById("btnGuardar");
    const btnRecuperar = document.getElementById("btnRecuperar");
    const resultado = document.getElementById("resultado");

    // Función principal como arrow function//
    const calcularPrecio = () => {
        
        const precioCompra = parseFloat(inputPrecioCompra.value) || 0;
        const margenGanancia = parseFloat(inputMargen.value) || 0;

        // Actualizar el estado de la aplicación//
        estadoAplicacion.precioCompra = precioCompra;
        estadoAplicacion.margen = margenGanancia;

        // Llamada a la función del modelo//
        const precioVenta = calcularPrecioVenta(precioCompra, margenGanancia);

        // Mostrar resultado//
        if (precioCompra <= 0) {
            resultado.innerHTML = "El precio de compra debe ser mayor a 0";
        } else {
            resultado.innerHTML = `
                Precio de Compra: ${precioCompra.toFixed(2)}
                Margen de Ganancia: ${margenGanancia} ${precioVenta}
              
            `;
        }
    };

    
    btnCalcular.onclick = calcularPrecio;

    btnGuardar.onclick = () => {
        localStorage.setItem(JSON.stringify(estadoAplicacion));
        alert("Datos guardados correctamente");
    };

    btnRecuperar.onclick = () => {
        const datos = localStorage.getItem;
        
        if (datos) {
            const datosParseados = JSON.parse(datos);
            
            estadoAplicacion.precioCompra = datosParseados.precioCompra || 0;
            estadoAplicacion.margen = datosParseados.margen || 0;

            inputPrecioCompra.value = estadoAplicacion.precioCompra;
            inputMargen.value = estadoAplicacion.margen;

            calcularPrecio(); 
        } else {
            alert("No hay datos guardados");
        }
    };

    // Cargar datos guardados al iniciar la página de la app//
    const datosGuardados = localStorage.getItem;
    if (datosGuardados) {
        const datos = JSON.parse(datosGuardados);
        inputPrecioCompra.value = datos.precioCompra;
        inputMargen.value = datos.margen ;
        estadoAplicacion.precioCompra === datos.precioCompra || 0;
        estadoAplicacion.margen = datos.margen || 0;
    }
};