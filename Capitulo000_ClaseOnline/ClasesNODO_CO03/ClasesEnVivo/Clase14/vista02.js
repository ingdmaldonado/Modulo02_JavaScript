

function capturarValoresRadio()
{
    console.log("masculino");
    console.log(idMasculino.checked);

    console.log("femenino");
    console.log(idFemenino.checked);

    console.log("x");
    console.log(idX.checked);   
}

window.onload = function()
{
    // estas opciones eran para el ejemplo del checkbox //
    const idPrecioProducto = document.querySelector("#idPrecioProducto");
    const idPagoEnvio = document.querySelector("#idPagoEnvio");
    const idPagaGarantia = document.querySelector("#idPagaGarantia");
    const idBtnAceptar = document.querySelector("#idBtnAceptar");


    // estas opciones son para el ejemplo del radio//

    const idMasculino = document.querySelector("#idMasculino");
    const idFemenino = document.querySelector("#idFemenino");
    const idX = document.querySelector("#idX");

    console.log(idPagoEnvio,idPagaGarantia,idBtnAceptar);


    // aqui vamos a capturar el evento onchange de un checkbox //

    idPagoEnvio.onchange = function()
    {
        console.log(idPagoEnvio.checked);
    }

    // cuando hacen click en el boton //
    idBtnAceptar.onclick = function()
    {
        // creo una variable donde guardare el precio del prodcto //
        let precioProducto = Number(idPrecioProducto.value);

        // muestro por consola el precio y el estado de los checkbox //
        console.log(precioProducto);
        console.log(idPagoEnvio.checked);
        console.log(idPagaGarantia.checked);

        // si esta encendido el checkbox calculo el 5%
        let costoPorEnvio = idPagoEnvio.checked ? (precioProducto * 5/100):0;

        // si esta encendido el checkbox calculo el 10%
        let costoPorGarantia = idPagaGarantia.checked ? (precioProducto * 10/100):0;

        let precioProductoFinal = precioProducto + costoPorEnvio + costoPorGarantia;

        console.log(precioProductoFinal);
    }

    idMasculino.onchange = function()
    {
        capturarValoresRadio();
    }

    idFemenino.onchange = function()
    {
        capturarValoresRadio();
    }

    idX.onchange = function()
    {
        capturarValoresRadio();  
    }


}

/******************************

    - input type = texto
    - input type = number
    - select => selectores de opciones unica
    - checkbox => selectores de opcion múltiple
    - radio => selectores de opcion unica (name = "todos tienen que tener el mismo valor")

*/