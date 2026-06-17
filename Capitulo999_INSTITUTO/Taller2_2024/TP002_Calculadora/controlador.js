


window.onload = function() /* El Evento onload se produce una sola vez, cuando la página se carga de forma completa */
{

   // alert("La pagina se cargo correctamente"); /* alert es un mensajito por pantalla que me permite mostrar una especie de popu */

    /* Creo variables y las vinculo con sus respectivos input.
    generalmente les doy el mismo nombre */

    let txtNumero1 = document.getElementById("txtNumero1"); 
    let txtNumero2 = document.getElementById("txtNumero2");
    let btnSumar = document.getElementById("btnSumar");

    /* Muestro por consola, las variables capturadas en el paso anterior */
    console.log(txtNumero1);
    console.log(txtNumero2);
    console.log(btnSumar);

    /* Al boton sumar, en su evento click le asigno una función anónima 
    que creo y defino en ese mismo momento */

    btnSumar.onclick = function()
    {
        alert("me estan haciendo click");

        let N1 = txtNumero1.value; /* obtengo el valor del input txtNumero1 accediendo a su propiedad value */
        let N2 = txtNumero2.value; /* obtengo el valor del input txtNumero2 accediendo a su propiedad value */

        /* realizo la operación de la suma */
        let Resultado = N1 + N2;

        /* Muestro los dos numeros por consola */
        console.log(N1);
        console.log(N2);

        /* muestro el resultado de la suma */
        console.log(Resultado);


    }


}