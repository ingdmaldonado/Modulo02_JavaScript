window.onload = function() {

    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idBtnCantidad = document.querySelector("#idBtnCantidad");
    const idBtnImporte = document.querySelector("#idBtnImporte");
    const idResultado = document.querySelector("#idResultado");

    idBtnCalcular.onclick = function() {

        let cantidad = Number(idBtnCantidad.value);
        let importe = Number(idBtnImporte.value);
        let Vendedor = Number (idBtnVendedor.value);

        let total = cantidad * importe;
        let descuento = 0;

       
        if (cantidad > 3 && total > 500000) {
            descuento = 0.15;
        } else if (cantidad > 3 && total > 250000) {
            descuento = 0.11;
        }

        let montoDescuento = total * descuento;
        let totalFinal = total - montoDescuento;

        idResultado.value =
        `Cantidad: ${cantidad}\n` +
        `Vendedor: ${Vendedor}\n` +
        `Precio pasaje: $${importe}\n` +
        `Total: $${total}\n` +
        `Descuento: $${montoDescuento}\n` +
        `Total a pagar: $${totalFinal}`;
    }
}