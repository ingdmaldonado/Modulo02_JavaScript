import {fnRetornePrecioViaje} from "./funciones.js";


window.onload = function()
{
    // esta constante apunta al selector completo //
    const idPaisDestino = document.querySelector("#idPaisDestino");

    // esta constante apunta al boton //
    const idBtnAceptar = document.querySelector("#idBtnAceptar");

    // aqui capturo el h4 donde voy a mostrar el precio //
    const idPrecio = document.querySelector("#idPrecio");


    console.log(idPaisDestino,idBtnAceptar);

    // agregandole comportamiento al boton aceptar //
    idBtnAceptar.onclick = ()=>{

        /* acceder al selector a traves de su 
        / atributo value y guardarlo en una variable */

        let paisDestino = Number(idPaisDestino.value);

        let precioDelViaje = fnRetornePrecioViaje(paisDestino);

        idPrecio.textContent = `El precio del viaje es ${precioDelViaje}`;

        console.log(paisDestino);
        console.log(precioDelViaje);

    };

    /* agregar comportamiento al evento onchange 
    del selector */

    idPaisDestino.onchange = ()=>{

        /* acceder al selector a traves de su 
        / atributo value y guardarlo en una variable */

        let paisDestino = Number(idPaisDestino.value);

        let precioDelViaje = fnRetornePrecioViaje(paisDestino);

        idPrecio.textContent = `El precio del viaje es ${precioDelViaje}`;

        console.log(paisDestino);
        console.log(precioDelViaje);

    };

    /* Cuando Presione Click en el Boton y quiera
    confirmar el Viaje. le diremos la tarifa
    y la tarifa será la siguiente. 
    
        $ 1 - 1500,00 ARGENTINA
        $ 2 - 1200,00 BRASIL
        $ 3 - 950,00 PARAGUAY
        $ 4 - 870,00 URUGUAY

        Tendríamos que hacer una función que reciba como parametro
        el (id del Pais) que me retorne el precio.
    */

}
