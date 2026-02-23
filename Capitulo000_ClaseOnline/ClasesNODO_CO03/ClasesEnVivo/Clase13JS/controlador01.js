

/* cuando se dispare el evento onload
que significa cuando la pagina se cargo
lo que se hace es delegar un trabajo
que estará dentro de esa función */

window.onload = function()
{
    /* vincularme a los elementos HTML 
    los que quiero controlar */

    const idNumero = document.getElementById("idNumero");
    const idBtnCalcular = document.getElementById("idBtnCalcular");
    const idLblResultado = document.getElementById("idLblResultado");
    const idBtnRaizCuadrada = document.getElementById("idBtnRaizCuadrada");

    console.log(idNumero);
    console.log(idBtnCalcular);
    console.log(idLblResultado);
    console.log(idBtnRaizCuadrada);

    /* cuando alguien presione click sobre el boton
    una funcion se encargará de responder a ese 
    evento (eventos de usuario) */

    idBtnCalcular.onclick = function()
    {

        /* aqui obtengo el valor ingresado en el input */
        let numeroIngresado = Number(idNumero.value);

        /* aqui muestro el numero ingresado */
        console.log(numeroIngresado);

        /* aqui me creo una variable auxiliar y 
        la inicializo en cero para comenzar los calculos */
        let resultadoCuadrado = 0;

        /* aqui calculo el cuadrado */
        resultadoCuadrado = numeroIngresado * numeroIngresado;

        /* aqui lo muestro por consola */
        console.log(resultadoCuadrado);

        /* aqui muestro en el label el contenido de texto
        haciendo una interpolación de string. los 
        backsticks        
        */

        idLblResultado.textContent = `Cuadrado: ${resultadoCuadrado}`;

    }

    idBtnRaizCuadrada.onclick = function()
    {
         /* aqui obtengo el valor ingresado en el input */
        let numeroIngresado = Number(idNumero.value);

        if(numeroIngresado < 0) // cuando sea negativo
        {
            idLblResultado.textContent = `No puedo calcular raices de numeros negativos`;

            alert("no puedo calcular raices de numeros negativos");
        }
        else // cuando sea positivo
        {
            /* aqui muestro el numero ingresado */
            console.log(numeroIngresado);

             /* crearme una variable auxiliar donde
            voy a guardar el resultado */

            let raizCuadrada = Math.sqrt(numeroIngresado);

            /* voy mostrar ese resultado en el documento
            HTML por medio de la constante con la que controlo
            ese elemento de resultado */
 
            idLblResultado.textContent = `Raiz Cuadrada: ${raizCuadrada}`;

        }

       

    }

}

