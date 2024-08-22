
/* 
    esta es una función, expresada como arrow function
    que se almacena en una constante y tiene nombre (no es anonima)
    fnCuadrado
*/

const fnCuadrado = (x)=>
    {

        return (x * x);

        // la que llevan la palabra return => que devuelven valor
        // las que no llevan la palabra retur => procedimientos
    }

const clickDelBotonPrueba = ()=>
    {
        console.log("soy una arrow function declarada dentro de una constante y voy responder al click");
    }


window.addEventListener("load",()=>{

    console.log("la aplicación esta corriendo");

    /* con estas constantes me voy a poder vincular al DOM */
    const idNumeroIngresado = document.querySelector("#idNumeroIngresado");
    const idBtnCuadrado = document.querySelector("#idBtnCuadrado");
    const idResultado1 = document.querySelector("#idResultado1");
    const idResultado2 = document.querySelector("#idResultado2");
    const idResultado3 = document.querySelector("#idResultado3");
    const idBtnPrueba = document.querySelector("#idBtnPrueba");

    /* con esto visualizo y muestro que las constantes 
    realmente apunten a los objetos/elementos HTML */
    console.log(idNumeroIngresado);
    console.log(idBtnCuadrado);
    console.log(idResultado1);
    console.log(idResultado2);
    console.log(idResultado3);

    /* con esto lo que estoy haciendo, es capturando el evento
    click del boton y agregandole comportamiento a travez de
    una arrow functio ó funcion flecha */

    idBtnCuadrado.addEventListener("click",()=>{
      
        console.log("me estan haciendo click");
        console.log(idNumeroIngresado);
        console.log(idNumeroIngresado.value);

        /* aqui lo que hice es capturar el valor que el usuario 
        ingreso en el input a traves de su propiedad value */
        let numeroIngresado = Number(idNumeroIngresado.value);

        // aqui lo que estoy haciendo es calcular el cuadrado */
       // let resultadoCuadrado = numeroIngresado * numeroIngresado;

        let resultadoCuadrado = fnCuadrado(numeroIngresado);

        console.log(numeroIngresado);

        console.log(resultadoCuadrado);

        /*
            opcion1 => es unicamente cambiar una propiedad de un elemento existente
            puedo poner contenido que se interpreta como texto => textContent

            opcion 2 => crear un nuevo elemento/objeto HTML y renderizarlo
            puedo poner contenido que se interpreta como una etiqueta HTML => innerHTML
        */


        // aqui unicamente cambie el texto de una etiqueta
        idResultado1.textContent = `El resultado del cuadrado es ${resultadoCuadrado}`;

        //
        idResultado2.innerHTML = `<h1>El resultado del cuadrado es ${resultadoCuadrado}</h1>`;

        // aqui cree una etiqueta nueva que renderizo 
        idResultado3.innerHTML = `<h5>El resultado del cuadrado es ${resultadoCuadrado}</h5>`;


    })


    idBtnPrueba.onclick = function()
    {
        console.log("esta es la forma 1");
    }

    idBtnPrueba.onclick = ()=>
        {
            console.log("esta es la forma 2");
        }

    idBtnPrueba.addEventListener("click",()=>
        {
            console.log("forma 1 con arrow function");
        })

    idBtnPrueba.addEventListener("click",()=>
        {
            console.log("forma 2 con arrow function");
        })

    idBtnPrueba.addEventListener("click",()=>
        {
            console.log("forma 3 con arrow function");
        })

    idBtnPrueba.addEventListener("click",clickDelBotonPrueba)

})