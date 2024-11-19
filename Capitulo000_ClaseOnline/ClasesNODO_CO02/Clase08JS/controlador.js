

function resetDeInputs(inptGenerico)
{
    inptGenerico.value = 0;
}




/* es el evento principal
que me indica que la página está
100% cargada, con sus elementos,
imágenes y todo lo que hace falta
para la visualización completa de la página 

este evento se ejecuta una sola vez, cuando
toda la página esta renderizada.

*/
window.onload = function()
{
    console.log("corriendo")
    /* crearme constantes que apunten a los
    elementos HTML que quiero capturar o interactuar
    con ellos */

    const idNumero1 = document.querySelector("#idNumero1");
    const idNumero2 = document.querySelector("#idNumero2");
    const idBtnSumar = document.querySelector("#idBtnSumar");
    const idBtnRestar = document.querySelector("#idBtnRestar");

    const idResultado = document.querySelector("#idResultado");
    const idResultado1 = document.querySelector("#idResultado1");
    const idResultado2 = document.querySelector("#idResultado2");
    const idResultado3 = document.querySelector("#idResultado3");
    const idResultado4 = document.querySelector("#idResultado4");

    console.log(idNumero1);
    console.log(idNumero2);
    console.log(idBtnSumar);
    console.log(idBtnRestar);

    console.log(idResultado);
    console.log(idResultado1);
    console.log(idResultado2);
    console.log(idResultado3);
    console.log(idResultado4);


    // agregarle comportamiento click al boton sumar //

    idBtnSumar.onclick = function()
    {
       // alert("me estan presionando click");

        /* 
        declare e inicialicé dos variables
        donde guardaré los valores de los input
        del HTML
        */

        let numero1Ingresado = 0;
        let numero2Ingresado = 0;

        /* asignandole a esas variables los valores
        que tienen los input que capturé desde el HTML,
        lo hago a través de las constantes que hemos
        creado digamos en el punto inicial del evento
        onload */

        numero1Ingresado = Number(idNumero1.value);
        numero2Ingresado = Number(idNumero2.value);

        console.log(numero1Ingresado);
        console.log(numero2Ingresado);

        // variable donde voy a realizar la suma //
        let sumaDeDos = 0;

        sumaDeDos = numero1Ingresado + numero2Ingresado;

        console.log(sumaDeDos);

        /* mostrar el resultado de la suma
        en la etiqueta h3 cuyo id es idResultado
        y lo voy a menajear por medio de la constante
        que tiene el mismo nombre idResultado*/

        // esto es contenido en formato texto //
        idResultado.textContent = `La Suma es: ${sumaDeDos}`;

        idResultado3.innerHTML = `<h6>La suma es: ${sumaDeDos}</h6>`;


        /* esta sería una forma un poco
        cavernícola de inicializar un input */


       // idNumero1.value = 0;
       // idNumero2.value = 0;

        /* ahora, voy a utilizar una función que 
        se llame resetDeInputs para que inicialice
        el valor */

        resetDeInputs(idNumero1);
        
        resetDeInputs(idNumero2);

    }

    /* primero esto se llama delegación de eventos.
        porque cuando se produzca onclick habrá una función
        que se encargará de responder a ese evento.

        cuando una función no tiene nombre. es una
        función ANONIMA 
    */

    idBtnRestar.onclick = function()
    {
        let numero1Ingresado = 0;
        let numero2Ingresado = 0;

        numero1Ingresado = Number(idNumero1.value);
        numero2Ingresado = Number(idNumero2.value);

        console.log(numero1Ingresado);
        console.log(numero2Ingresado);

        
        let restaDeDos = 0;

        restaDeDos = numero1Ingresado - numero2Ingresado;

        console.log(restaDeDos);

        // esto es contenido en formato texto //
        idResultado.textContent = `La Resta es: ${restaDeDos}`;

        idResultado3.innerHTML = `<h6>La suma es: ${restaDeDos}</h6>`;

    }
}