
function capturarValorDelSelector()
{
    let opcionElegida = Number(idPaisDeOrigen.value);
    console.log(opcionElegida);

    switch(opcionElegida)
    {
        case 1:
            {
                console.log(`ARG: Tiene que traer DNI + Partida de Nacimiento`);
                break;
            }

        case 2:
            {
                console.log(`BRAS: HOY pierden, Tiene que traer copia Pasaporte`);
                break;

            }

        case 3:
            {
                console.log(`URU: Tiene que traer Partida de Nac.`);
                break;

            }

        case 4:
            {
                console.log(`PAR: Tiene traer Pasaporte + DNI`);
                break;
            }

        default:
            {
                console.log(`PAIS NO SELECCIONADO`);
            }

    }

}


window.onload = function()
{
    console.log("esta funcionando");

    /* forma de vincularme desde el controlador al elemento HTML */
    //const idPaisDeOrigen = document.getElementById("idPaisDeOrigen");
    /*
        getElementById =>  querySelector
            => querySelectorAll 
    */

    const idPaisDeOrigen = document.querySelector("#idPaisDeOrigen");
    const idBtnAceptar = document.querySelector("#idBtnAceptar");

    console.log(idPaisDeOrigen);
    console.log(idBtnAceptar);

    idPaisDeOrigen.onchange = function()
    {       
        // aqui la voy a llamar cada vez que alguien cambie de valor //
        capturarValorDelSelector();

    }

    idBtnAceptar.onclick = function()
    {       
        // aqui la voy a llamar cuando alguien presione click en el boton //
        capturarValorDelSelector();
      
    }


}