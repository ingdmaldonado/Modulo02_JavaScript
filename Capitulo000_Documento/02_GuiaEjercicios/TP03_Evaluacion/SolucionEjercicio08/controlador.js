

    /* Función en forma de arrow function que recibe tres parametros

        destinoSeleccionado
        cantidadDePasajeros
        Si quiere el Servicio Premium
    */

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

    /* función que valida un dato del tipo texto y determina si 
    tiene una longitud mayor o igual a 5, en ese caso lo considera válido
    */

    const fnValidarDato = (texto)=>
        {
            if(texto.length >=5)
            {
                return true;
            }
            return false;
        }


/* incorporamos el evento principal de la página que es el load de la misma,
esto ocurre una vez que la página esta renderizada */

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
    const idNombre = document.querySelector("#idNombre");
    const idTelefono = document.querySelector("#idTelefono");


    const idBtnAceptar = document.querySelector("#idBtnAceptar");
    const idBtnCancelar = document.querySelector("#idBtnCancelar");

    /* oculto el div que contiene los datos personales */
    idDatosPersonales.style.display ='none';

    /* (2do) - Muestro los objetos/elementos HTML por consola */

    console.log(idSelectorDestino);
    console.log(idCantidadDePasajeros);
    console.log(idQuiereServicioPremium);
    console.log(idBtnCalcularViaje);
    console.log(idTextoCostoTotal);
    console.log(idComunicarmeConRepresentante);

    console.log(idDatosPersonales);
    console.log(idBtnAceptar);
    console.log(idBtnCancelar);
    console.log(idBtnAceptar);
    console.log(idBtnCancelar);

    /* (3ro) - Creo variables donde almacenaré los datos ingresados ó el estado
    de la aplicación */

    let destinoSeleccionado = 0;
    let cantidadDePasajeros = 0;
    let aceptaServicioPremium = 0;
    let Nombre = "";
    let Telefono = "";
    

    /* (4to) cuando presiona el boton calcular el viaje */
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

    /* (5to) cada vez que cambia el checkbox de comunicarme con un representante */
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

    /* (6to) cuando presiona el boton aceptar del popup para ingresar los datos de una persona */
    idBtnAceptar.addEventListener("click",()=>{       
        idComunicarmeConRepresentante.checked = false;
        Nombre = idNombre.value;
        Telefono = idTelefono.value;

        if(!fnValidarDato(Nombre))
        {
            alert("por favor ingrese su nombre");
        }
        else
        {
            if(!fnValidarDato(Telefono))
            {
                alert("por favor ingrese su telefono");
            }
            else
            {
                alert("nos comunicaremos con ud. a la brevedad");
                idDatosPersonales.style.display ='none';
            }
        }
    })

    /* (7mo) cuando presiona el boton cancelar del popup para ingresar los datos de una persona */

    idBtnCancelar.addEventListener("click",()=>
        {
            idDatosPersonales.style.display ='none';
            idComunicarmeConRepresentante.checked = false;
        })

})