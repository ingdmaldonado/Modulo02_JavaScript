window.onload = function() {

    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idBtnCompra = document.querySelector("#idBtnProducto");
    const idBtnZona = document.querySelector("#idBtnZona");
    const idResultado = document.querySelector("#idResultado");

    idBtnCalcular.onclick = function() {

        let compra = Number(idBtnCompra.value);
        let zona = Number(idBtnZona.value);

   
        let envioCentro = 2500;
        let envioOeste = 3750;
        let envioNorte = 4225;
        let envioSur = 5222.50;
        let envioEste = 4288.50;

        let costoEnvio = 0;

        if (idBtnZona.value === "") {
            idResultado.value = "Seleccione una zona";
            return;
        }

        switch (zona) {
            case 1:
                costoEnvio = envioCentro;
                break;
            case 2:
                costoEnvio = envioOeste;
                break;
            case 3:
                costoEnvio = envioNorte;
                break;
            case 4:
                costoEnvio = envioSur;
                break;
            case 5:
                costoEnvio = envioEste;
                break;
            default:
                idResultado.value = "Zona inválida";
                return;
        }

        let totalFinal = compra + costoEnvio;

        idResultado.value =
        `Compra: $${compra}\n` +
        `Envío: $${costoEnvio}\n` +
        `Total a pagar: $${totalFinal}`;
    }
}