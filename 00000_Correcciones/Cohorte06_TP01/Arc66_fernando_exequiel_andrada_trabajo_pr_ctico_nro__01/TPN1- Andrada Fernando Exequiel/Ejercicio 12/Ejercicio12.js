window.onload = function() {

    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idBtnCompra = document.querySelector("#idBtnProducto");
    const idBtnDia = document.querySelector("#idBtnDia");
    const idResultado = document.querySelector("#idResultado");

    idBtnCalcular.onclick = function() {

        let compra = Number(idBtnCompra.value);
        let dia = idBtnDia.value;

        let reintegro = 0;
        let tope = 80000;
        let aplica = false;

     
        if (dia === "") {
            idResultado.value = "Seleccione un día";
            return;
        }

    
        if (dia === "viernes" || dia === "sabado" || dia === "domingo") {
            aplica = true;
        }

        if (aplica) {
            reintegro = compra * 0.5;

            if (reintegro > tope) {
                reintegro = tope;
            }
        }

        let totalFinal = compra - reintegro;

        idResultado.value =
        `Día: ${dia}\n` +
        `Compra: $${compra}\n` +
        `Reintegro: $${reintegro}\n` +
        `Total pagado: $${totalFinal}`;
    }
}