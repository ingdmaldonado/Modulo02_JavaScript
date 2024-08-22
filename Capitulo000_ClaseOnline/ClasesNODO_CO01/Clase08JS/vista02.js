

const fnRetornarPrecio = (paisDestino) =>
{

    if(paisDestino === 'ARG')
    {
        return 105000;
    }
    if(paisDestino ==='BRA')
    {
        return 205000;
    }
    if(paisDestino === 'PAR')
    {
        return 157000;
    }

    return 0;

}

window.addEventListener("load",()=>{

    console.log("la pagina esta corriendo");

    const idDestinoVacaciones = document.querySelector("#idDestinoVacaciones");
    const idAceptar1 = document.querySelector("#idAceptar1");

    const idViajeDeIda = document.querySelector("#idViajeDeIda");
    const idViajeDeVuelta = document.querySelector("#idViajeDeVuelta");

    const idAceptar2 = document.querySelector("#idAceptar2");


    console.log(idDestinoVacaciones);
    console.log(idAceptar1);
    console.log(idViajeDeIda);
    console.log(idViajeDeVuelta);
    console.log(idAceptar2);

    idAceptar1.addEventListener("click",()=>{

        console.log(`me estan haciendo click en ${idDestinoVacaciones.value}`);

        let precioDelViaje = fnRetornarPrecio(idDestinoVacaciones.value);

        console.log(precioDelViaje);

    })

    idAceptar2.addEventListener("click",()=>
        {
            console.log(idViajeDeIda.checked);
            console.log(idViajeDeVuelta.checked);

            if((idViajeDeIda.checked) && (idViajeDeVuelta.checked))
            {
                console.log("ida y vuelta");
            }
            if((idViajeDeIda.checked) && (!idViajeDeVuelta.checked))
            {
                console.log("solo ida");
            }
            if((!idViajeDeIda.checked) && (idViajeDeVuelta.checked))
            {
                console.log("solo vuelta");
            }
            if((!idViajeDeIda.checked) && (!idViajeDeVuelta.checked))
            {
                alert("escuchame pibe, viajas o no viajas ?.");
                console.log("no eligio nada");
            }
        })

})