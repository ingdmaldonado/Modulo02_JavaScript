/*
Ejercicio Nro. 11: Estructuras Condicionales (if/else)
Un local de venta de comida rápida, lanza su aplicación online que le permite al cliente pagar por la misma y además aclara que se incluye en el precio total el costo del envío dependiendo la zona en la que vive el cliente.
1) Zona Centro = $ 2500,00
2) Zona Oeste = $ 3750,00
3) Zona Norte = $ 4225,00
4) Zona Sur = $ 5222,50
5) Zona Este = $ 4288,50
Debe ingresar el importe de la compra, sumarle el costo del envío en función de la zona del cliente.
Recomendación: Es mejor guardar los costos de envío en variables, de tal forma que si en un futuro cambian, no haya que tocar la lógica del programa.
*/

// Capturamos los elementos del DOM
let importeInput = document.getElementById("importe");
let codigoInput = document.getElementById("codigo");
let btnCalcular = document.getElementById("btnCalcular");
let resultadoDiv = document.getElementById("resultado");

// Costos de envío guardados en variables (como recomienda el ejercicio)
let costoCentro = 2500;
let costoOeste = 3750;
let costoNorte = 4225;
let costoSur = 5222.5;
let costoEste = 4288.5;

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
    if (codigo < 1 || codigo > 5 || isNaN(codigo)) {
        resultadoDiv.innerHTML = <p style="color:red;">❌ Código inválido. Solo del 1 al 5.</p>;
        return;
    }

    // Variable para guardar el costo de envío
    let costoEnvio = 0;
    let nombreZona = "";

    // Estructura switch para elegir el costo según la zona
    switch(codigo) {
        case 1:
            costoEnvio = costoCentro;
            nombreZona = "Centro";
            break;
        case 2:
            costoEnvio = costoOeste;
            nombreZona = "Oeste";
            break;
        case 3:
            costoEnvio = costoNorte;
            nombreZona = "Norte";
            break;
        case 4:
            costoEnvio = costoSur;
            nombreZona = "Sur";
            break;
        case 5:
            costoEnvio = costoEste;
            nombreZona = "Este";
            break;
    }

    // Calculamos el total final
    let totalFinal = importe + costoEnvio;

    // Mostramos el resultado en pantalla
    let htmlResultado = `
        <h2>Resumen de tu pedido</h2>
        <p><strong>Importe de la compra:</strong> $${importe}</p>
        <p><strong>Zona seleccionada:</strong> ${nombreZona}</p>
        <p><strong>Costo de envío:</strong> $${costoEnvio}</p>
        <p style="font-size:22px; color:#e74c3c; font-weight:bold;">TOTAL A PAGAR: $${totalFinal.toFixed(2)}</p>
    `;

    resultadoDiv.innerHTML = htmlResultado;
});