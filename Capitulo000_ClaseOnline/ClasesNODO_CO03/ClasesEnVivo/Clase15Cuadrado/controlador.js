

/* 
cuando la pagina se carga delegamos en una función 
todo el comportamiento del controlador. el funcionamiento
*/

window.onload = function()
{
   // console.log("hola");
}


/* 
    Esta forma es equivalente a la anterior. nada
    mas que utiliza el ECMJS 15.
*/

/*

    primer parametro = evento que quiero capturar => load

    segundo parametro = funcion delegada

*/

window.addEventListener("load",function()
{
    console.log("la pagina se cargo");

    /* primero => siempre me vinculo a los elementos HTML
    a los que quiero controlar */

    const idNumeroIngresado = document.querySelector("#idNumeroIngresado");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");

    console.log(idNumeroIngresado,idBtnCalcular,idResultado);

    /* segunda parte => comienzo a delegar funcionalidades
    en los elementos HTML que me interesan capturar */

    // forma antigua //
    idBtnCalcular.onclick = function()
    {
       // console.log("asi capturaba el click del boton antes");
    }

    // forma moderna con ECMJS 15 */
    idBtnCalcular.addEventListener("click",function()
    {
        //console.log("aqui deberia calcular el cuadrado");

        let numeroIngresado = 0;

        numeroIngresado = Number(idNumeroIngresado.value);

        console.log(numeroIngresado);

        let cuadradoDeNumero = 0;

        cuadradoDeNumero = numeroIngresado * numeroIngresado;

        console.log(`El Cuadrado es ${cuadradoDeNumero}`);

        idResultado.textContent = `El Cuadrado es ${cuadradoDeNumero}`;


    })


})

