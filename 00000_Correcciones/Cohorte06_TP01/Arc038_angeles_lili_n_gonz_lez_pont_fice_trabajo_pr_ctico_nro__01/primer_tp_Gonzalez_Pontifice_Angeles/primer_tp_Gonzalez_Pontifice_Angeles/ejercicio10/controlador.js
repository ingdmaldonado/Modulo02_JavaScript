/*
Ejercicio Nro. 10: Estructuras Condicionales (if/else) + Switch
Un comercio aplica descuentos sobre el importe de compra según forma de pago:
1) Efectivo → 10% descuento
2) Débito → 5% descuento
3) Crédito → Sin descuento
Calcular el descuento y Mostrar total final. Utilizar estructura switch
*/

// Esperamos que la página cargue completamente
window.onload = function() {

    // Capturamos los elementos del DOM
    let importeInput = document.getElementById("importe");
    let codigoInput = document.getElementById("codigo");
    let btnCalcular = document.getElementById("btnCalcular");
    let resultadoDiv = document.getElementById("resultado");

    // Capturamos el evento click del botón
    btnCalcular.addEventListener("click", function() {

        // Obtenemos los valores ingresados
        let importe = Number(importeInput.value);
        let codigo = Number(codigoInput.value);

        // Validación básica
        if (importe <= 0 || isNaN(importe)) {
            resultadoDiv.innerHTML = <p style="color:red;">❌ El importe debe ser mayor a 0.</p>;
            return;
        }
        if (codigo < 1 || codigo > 3 || isNaN(codigo)) {
            resultadoDiv.innerHTML = <p style="color:red;">❌ Código inválido. Solo 1, 2 o 3.</p>;
            return;
        }

        // Variables para el descuento
        let porcentajeDescuento = 0;
        let mensajeForma = "";

        // Estructura switch según el código de pago
        switch(codigo) {
            case 1:
                porcentajeDescuento = 10;
                mensajeForma = "Efectivo → 10% de descuento";
                break;
            case 2:
                porcentajeDescuento = 5;
                mensajeForma = "Débito → 5% de descuento";
                break;
            case 3:
                porcentajeDescuento = 0;
                mensajeForma = "Crédito → sin descuento";
                break;
        }

        // Calculamos descuento y total final
        let descuento = importe * (porcentajeDescuento / 100);
        let totalFinal = importe - descuento;

        // Mostramos el resultado en pantalla
        let htmlResultado = `
            <h2>Resumen de la compra</h2>
            <p><strong>Importe total:</strong> $${importe}</p>
            <p><strong>Forma de pago:</strong> ${mensajeForma}</p>
            <p style="color:#27ae60; font-weight:bold;">Descuento aplicado: ${porcentajeDescuento}% → $${descuento.toFixed(2)}</p>
            <p style="font-size:22px; color:#e74c3c; font-weight:bold;">TOTAL A PAGAR: $${totalFinal.toFixed(2)}</p>
        `;

        resultadoDiv.innerHTML = htmlResultado;
    });
};