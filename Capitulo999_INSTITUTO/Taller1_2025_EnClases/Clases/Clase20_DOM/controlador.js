
/* Es una función, en forma de
arrow function que recibe como 
parametro el Id = identification.
y debería devolver la Historia */

const fnHistoriaDelClub = (idClub)=>
    {
        let textoDeHistoria = "";

        switch(idClub)
        {
            case 1:
                {
                    textoDeHistoria = "El club mas grande del MUNDO";
                    break;
                }

            case 2:
                {
                    textoDeHistoria = "Club que siempre nos gana";
                    break;
                }

            case 3:
                {
                    textoDeHistoria = "los Diablos Rojos";
                    break;

                }

            default:
                {
                    textoDeHistoria = "seguramente es un equipo de la B";
                    break;
                }
        }

        return textoDeHistoria;

    }


/* Delegacion de Eventos */
window.onload = function()
{
    // cuando la página esta 100% cargada

    const idSelectorClub = document.querySelector("#idSelectorClub");
    const idBtnAcepar = document.querySelector("#idBtnAcepar");
    const idHistoriaDelClub = document.querySelector("#idHistoriaDelClub");

    console.log(idSelectorClub);
    console.log(idBtnAcepar);
    console.log(idHistoriaDelClub);

    /* cuando se dispara el evento 
    click sobre el boton Aceptar,
    se delega en una función. en 
    este caso, en una arrow function */

    idBtnAcepar.onclick = ()=>{

        let opcionElegida = Number(idSelectorClub.value);

        console.log(opcionElegida);

        let textoDeHistoria = fnHistoriaDelClub(opcionElegida);

        idHistoriaDelClub.textContent = textoDeHistoria;



    };

    /* */

    idSelectorClub.onchange = ()=>{

        let opcionElegida = Number(idSelectorClub.value);

        console.log(opcionElegida);

        let textoDeHistoria = fnHistoriaDelClub(opcionElegida);

        idHistoriaDelClub.textContent = textoDeHistoria;

    };

}