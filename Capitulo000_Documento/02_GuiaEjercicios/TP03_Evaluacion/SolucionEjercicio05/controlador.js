

const fnCalcularViaje = (destinoSeleccionado,cantidadDePasajeros,idQuiereServicioPremium)=>
    {
        let costoViaje = 0


        switch(destinoSeleccionado)
        {
            case 1:
                {
                    costoViaje = 2000 * cantidadDePasajeros;
                    break;
                }

            case 2:
                {
                    costoViaje = 2200 * cantidadDePasajeros;
                    break;
                }

            case 3:
                {
                    costoViaje = 1200 * cantidadDePasajeros;
                    break;
                }

            default:
                {
                    costoViaje = 0;
                    break;
                }

        }

        if(idQuiereServicioPremium)
        {
            costoViaje = costoViaje * 1.25;
        }

        return costoViaje;


    }



window.addEventListener("load",()=>{

    console.log("funcionando");

    /* (1ro) - Capturamos los objetos/elementos HTML que deseo controlar */

    const idSelectorDestino = document.querySelector("#idSelectorDestino");
    const idCantidadDePasajeros = document.querySelector("#idCantidadDePasajeros");
    const idQuiereServicioPremium = document.querySelector("#idQuiereServicioPremium");
    const idBtnCalcularViaje = document.querySelector("#idBtnCalcularViaje");
    const idTextoCostoTotal = document.querySelector("#idTextoCostoTotal");
    const idComunicarmeConRepresentante = document.querySelector("#idComunicarmeConRepresentante");
    const idDatosPersonales = document.querySelector("#idDatosPersonales");


    idDatosPersonales.style.display ='none';

    /* (2do) - Muestro los objetos/elementos HTML por consola */
    console.log(idSelectorDestino);
    console.log(idCantidadDePasajeros);
    console.log(idQuiereServicioPremium);
    console.log(idBtnCalcularViaje);
    console.log(idTextoCostoTotal);
    console.log(idComunicarmeConRepresentante);
    console.log(idDatosPersonales);

    /* (3ro) - Creo variables donde almacenaré los datos ingresados ó el estado
    de la aplicación */

    let destinoSeleccionado = 0;
    let cantidadDePasajeros = 0;
    let aceptaServicioPremium = 0;
    


    idBtnCalcularViaje.addEventListener("click",()=>{

            destinoSeleccionado = Number(idSelectorDestino.value);
            cantidadDePasajeros = Number(idCantidadDePasajeros.value);
            aceptaServicioPremium = idQuiereServicioPremium.checked;

            if((cantidadDePasajeros >= 1) && (cantidadDePasajeros <= 4))
            {

                let costoTotal = fnCalcularViaje(destinoSeleccionado,cantidadDePasajeros,aceptaServicioPremium);

                idTextoCostoTotal.textContent = `El Costo Total del Viaje es U$$ - ${costoTotal.toLocaleString("ES-es")}`;

                console.log(costoTotal);
            }
            else
            {
                alert("la cantidad permitidad de pasajeros por paquete es hasta 4 pasajeros");
            }

    })

    idComunicarmeConRepresentante.addEventListener("change",()=>
        {
            if(idComunicarmeConRepresentante.checked)
            {
                idDatosPersonales.style.display ='block';
            }
            else
            {
                idDatosPersonales.style.display ='none';
            }
        })

})