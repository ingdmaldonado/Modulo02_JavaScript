
/* delegación de eventos */

/* EVENTOS son sucesos que ocurren en el navegador
de los cuales no tengo control, lo que si puedo saber
es capturar y saber cuando se producen esos eventos
y reaccionar a los mismos.

    onload => cuando la pagina se cargo
    click => en un objeto o elemento html.
*/

function cuadrado (numero)
{
    let auxiliar = numero * numero;
    return auxiliar;
}

const cuadrado2 = function(numero)
{
    return (numero * numero);
}

const cuadrado3 = (numero)=>{

    return numero * numero;
    
};

window.onload = function()
{
    console.log(`aplicación is running`);

    /* a todos los elementos que quiero controlar
    del DOM => DOCUMENT OBJECT MODEL 
    los vinculo por medio de constantes que apunten
    a su id
    */

    const idNota = this.document.querySelector("#idNota");
    const idBtnAceptar = this.document.querySelector("#idBtnAceptar");

    console.log(idNota);
    console.log(idBtnAceptar);    

    let cantidadDesaprobados = 0;
    let cantidadAprobados = 0;

    /* delegando en forma de función clasica */
    //idBtnAceptar.onclick = function(){};

    /* aqui estoy delegando en forma de arrow function */
    idBtnAceptar.onclick = ()=>{

        //alert("me esta haciendo click en el boton");

        let nota = Number(idNota.value);

        if(nota >= 0 && nota <= 10)
        {
            

            cantidadDesaprobados = nota >= 0 && nota <= 4 ? cantidadDesaprobados + 1: cantidadDesaprobados;

            cantidadAprobados = nota > 4 && nota <= 7 ? cantidadAprobados + 1: cantidadAprobados;

            console.log(`Nota Ingresada ${nota}`);
            console.log(`Aprobados: ${cantidadAprobados}`);
            console.log(`Desaprobados: ${cantidadDesaprobados}`);

        }
        else
        {
            this.alert(`Los valores permitidos son entre 0 y 10`);
            idNota.value = 0;
        }
    };
    


}