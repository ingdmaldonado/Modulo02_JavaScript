

/* Forma1 clásica */

function Cuadrado(Numero)
{
    return (Numero * Numero);
}

/* Forma3 => Clasica dentro de una variable */

let FuncionEnVAriable = function()
{
    console.log("soy un procedimiento medio rara, porque estoy dentro de una variable y soy anonima");
}

/* Forma4 => Clasica dentro de una constante */

const FuncionEnUnaConstante = function()
{
    console.log("soy un procedimiento medio rara, dentro de una constante");
}

/* Forma 5 => Arrow function */

const Cuadrado2 = (Numero) =>
{
    return(Numero * Numero);
}

const Cubo = (Numero)=>
{
    return (Numero * Numero * Numero);
}

/* Una Arrow function que recibe un solo parametro 
no necesita los () para enmarcar los parametros, 
y no necesita las {} para cerrar el cuerpo de la función */


const Cubo2 = Numero => Numero * Numero * Numero;



window.onload = function()
{
    
    /* vamos a tomar control de los elementos del documento con querySelector*/
    const idBtnProbar = document.querySelector("#idBtnProbar");

    console.log(idBtnProbar);

    /* Forma2 clásica y anonima */

    idBtnProbar.onclick = function()
    {

    }

    idBtnProbar.addEventListener("click",function()
    {
        console.log("esto se tiene que disparar cuando hace click");

        console.log(Cubo2(3));

    })



    idBtnProbar.addEventListener("click",function(){

        console.log("me estan haciendo click y estoy ejecutando una función anonima")

        let Resultado = Cuadrado(10);
        console.log(Resultado);

        FuncionEnVAriable(); /* invocando */

        FuncionEnUnaConstante(); /* esto esta dentro de una constante */

        let Resultado2 = Cuadrado2(5);
        console.log(Resultado2);

    })

    console.log("this application is running!!!");

    

}