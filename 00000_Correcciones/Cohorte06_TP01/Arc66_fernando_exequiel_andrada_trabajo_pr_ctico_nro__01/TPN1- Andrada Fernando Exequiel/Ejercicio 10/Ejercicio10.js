window.onload = function() {

    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idBtnCompra = document.querySelector("#idBtnProducto");
    const idBtnPago = document.querySelector("#idBtnPago");
    const idResultado = document.querySelector("#idResultado");

    idBtnCalcular.onclick = function() {

        let compra = Number(idBtnCompra.value);
        let metodoPago = Number(idBtnPago.value);

        let descuento = 0;

       
        if (idBtnPago.value === "") {
            idResultado.value = "Seleccione un método de pago";
            return;
        }

        switch (metodoPago) {
            case 1:
                descuento = 0.10;
                break;
            case 2:
                descuento = 0.05;
                break;
            case 3:
                descuento = 0;
                break;
            default:
                idResultado.value = "Opción inválida";
                return;
        }

        let montoDescuento = compra * descuento;
        let totalFinal = compra - montoDescuento;

        idResultado.value =
        `Compra: $${compra}\n` +
        `Descuento: $${montoDescuento}\n` +
        `Total a pagar: $${totalFinal}`;
    }
}