4
/* onload es el evento que se dispara automáticamente
cuando la página esta cargada y lista para que el usuario
interactúe con ella */
window.onload = function()
{
    /* mensaje por consola */
    console.log("la aplicación está lista para interactuar");

    /* creamos variables que se vinculen 
    a los elementos HTML del DOM que queremos
    capturar o con los que queremos interactuar */

    let idTxtNumeroIngresado = document.getElementById("idTxtNumeroIngresado");
    let btnCuadrado = document.getElementById("btnCuadrado");
    let idResultado = document.getElementById("idResultado");

    let idCajaInexistente = document.getElementById("idCajaInexistente");

    


    /* mostramos por consola las variables
    creadas y comprobamos que hagan referencia
    a los elementos HTML que queremos capturar
    o interactuar */

    console.log(idTxtNumeroIngresado);
    
    console.log(btnCuadrado);

    console.log(idResultado);

    /* estoy haciendo un console.log
    a una variable que es NULA ó INEXISTENTE
    */

    console.log(idCajaInexistente); 

    /* vamos a programar el evento click
    del boton */

    btnCuadrado.onclick = function()
    {
        console.log("estan haciendo click en el boton");

        let Numero = Number(idTxtNumeroIngresado.value);

        console.log(Numero);

        let Resultado = Numero * Numero;

        /* aqui mostrar la forma de concatenar
        dos strings */

        console.log("El Resultado es " + Resultado);

        idResultado.textContent = `El Resultado es: ${Resultado}`;

        /* este ejemplo sucede
        cuando creo variables y
        no se les asigna ningún 
        valor, por lo tanto su valor es undefined
        ó indefinido y su tipo es undefined */

        let Nombre = "LIONEL ANDRES";
        let Apellido;

        /* concatenación de string tradicional */
        let NombreCompleto = Nombre + " " + Apellido;

        /* concatenación ó interpolación de strings */
        let NombreCompletoDos = `${Nombre} ${Apellido}`;

        console.log(NombreCompleto);

        console.log(NombreCompletoDos);

    }
}