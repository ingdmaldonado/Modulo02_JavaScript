
/* renderiza => dibuja el HTML original
todo el HTML ese original que estaba
le digo HTML Estático */



/* el evento que se dispara
cuando la página esta cargada
o renderizada */
window.onload = function()
{
    /* creo constantes y las vinculo
    o hago referencia a los elementos
    ó objetos HTML estáticos que hay
    en el HTML */

    const idBtnAuto = document.querySelector("#idBtnAuto");
    const idBtnMoto = document.querySelector("#idBtnMoto");
    const idBtnCamioneta = document.querySelector("#idBtnCamioneta");
    const idBtnCamion = document.querySelector("#idBtnCamion");
    const idBtnConfirmar = document.querySelector("#idBtnConfirmar");

    const idCantidadAutos = document.querySelector("#idCantidadAutos");
    const idTotalDeAutos = document.querySelector("#idTotalDeAutos");
    const idCantidadMotos = document.querySelector("#idCantidadMotos");
    const idTotalDeMotos = document.querySelector("#idTotalDeMotos");
    const idTotalGeneral = document.querySelector("#idTotalGeneral");

    /* aqui muestro por consola esos
    elementos capturados */

    console.log(idBtnAuto);
    console.log(idBtnMoto);
    console.log(idBtnCamioneta);
    console.log(idBtnCamion);


    /* aqui, me voy a declarar variables
    que sean globales a los eventos click
    de los botones, donde lo que haré
    es contabilizar y totalizar por cada
    vehiculo que venga */

    let cantidadAutosCobrados = 0; // aqui voy a guardar la cantidad de autos que pasaron
    let totalCobradoAutos = 0; // aqui voy a guardar el total que voy recaudando por autos

    let cantidadMotosCobrados = 0;
    let totalCobradoMotos = 0;

    /* aqui es delegando en el evento click
    del boton auto, una función. */

    idBtnAuto.onclick = function() // es una función anónima.
    {

        cantidadAutosCobrados = cantidadAutosCobrados + 1;
        totalCobradoAutos = totalCobradoAutos + 4000;

        idCantidadAutos.textContent = `Cantidad de Autos ${cantidadAutosCobrados}`;
        idTotalDeAutos.textContent = `Total de Autos ${totalCobradoAutos}`;

        console.log(`soy un auto - ${cantidadAutosCobrados} - ${totalCobradoAutos}`);
    }

    idBtnMoto.onclick = function()
    {
        cantidadMotosCobrados = cantidadMotosCobrados + 1;
        totalCobradoMotos = totalCobradoMotos + 1;

        console.log(`soy una moto - ${cantidadMotosCobrados} - ${totalCobradoMotos}`);
    }

    idBtnCamioneta.onclick = function()
    {
        console.log(`soy una camioneta - 12.000,00`);
    }

    idBtnCamion.onclick = function()
    {
        console.log(`soy un camion - 22.000,00`);
    }

    idBtnConfirmar.onclick = function()
    {

        /* estas variables, nosotros
        en programación les decimos
        booleanas. son variables
        que devuelven o permiten
        solamente dos valores. true ó false */

        let elClienteAceptaPagarDeContado = confirm("Señor. Desea pagar de Contado ?");

        console.log(elClienteAceptaPagarDeContado);

        if(elClienteAceptaPagarDeContado === true)
        {
            console.log("cliente paga de contado")
        }
        else
        {
            console.log("cliente no quiere pagar de contado");
        }


    }

    console.log("running");

}