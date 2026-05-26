window.onload = function() {

    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idBtnCompra = document.querySelector("#idBtnProducto");
    const idBtnRubro = document.querySelector("#idBtnRubro");
    const idResultado = document.querySelector("#idResultado");

    idBtnCalcular.onclick = function() {

        let compra = Number(idBtnCompra.value);
        let rubro = Number(idBtnRubro.value);

        let descuento = 0;
        let tope = 0;
        let nombreRubro = "";

        if (idBtnRubro.value === "") {
            idResultado.value = "Seleccione un rubro";
            return;
        }

        switch (rubro) {
            case 1:
                nombreRubro = "Vestimenta";
                descuento = 0.20;
                tope = 80000;
                break;

            case 2:
                nombreRubro = "Perfumería";
                descuento = 0.20;
                tope = 80000;
                break;

            case 3:
                nombreRubro = "Librería";
                descuento = 0.30;
                tope = 90000;
                break;

            case 4:
                nombreRubro = "Electrodomésticos";
                descuento = 0.15;
                tope = 70000;
                break;

            case 5:
                nombreRubro = "Calzado";
                descuento = 0.20;
                tope = 80000;
                break;

            default:
                idResultado.value = "Rubro inválido";
                return;
        }

        let montoDescuento = compra * descuento;

        if (montoDescuento > tope) {
            montoDescuento = tope;
        }

        let totalFinal = compra - montoDescuento;

        idResultado.value =
        `Rubro: ${nombreRubro}\n` +
        `Compra: $${compra}\n` +
        `Descuento: $${montoDescuento}\n` +
        `Total a pagar: $${totalFinal}`;
    }
}