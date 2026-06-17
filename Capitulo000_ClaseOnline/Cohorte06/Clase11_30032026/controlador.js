/* 
DOM => document object model 

    modelo que me permite manipular los objetos del DOCUMENTO HTML


*/

/* El evento onload se dispara cuando
el navegador termino de renderizar todos
los elementos en el documento HTML. */

//window.onload = function(){};

const fnRestar = function(){

    alert("soy la funcion restar");
};

window.onload = function(){

    console.log(`La página esta 100% cargada`);

    /* por cada elemento u objeto del documento HTML que quiero
    capturar, voy a crear una constante que apunte a ese elemento */

    const idNumero1 = document.querySelector("#idNumero1");
    const idNumero2 = this.document.querySelector("#idNumero2");
    const idBtnSumar = this.document.querySelector("#idBtnSumar");
    const idBtnRestar = this.document.querySelector("#idBtnRestar");
    const idResultado = this.document.querySelector("#idResultado");

    console.log(idNumero1);
    console.log(idNumero2);
    console.log(idBtnSumar);

    /* delegación de eventos => porque cuando se produce un click
    nosotros delegamos ese manejo o control en una funcion
    */

    /* delegación de eventos en funciones anonimas */
    idBtnSumar.onclick = function(){
        alert("soy el boton sumar");

        let numero1 = Number(idNumero1.value);
        let numero2 = Number(idNumero2.value);

        let suma = numero1 + numero2;

        console.log(numero1,numero2,suma);

        idResultado.textContent = `La Suma de ${numero1} y ${numero2} es igual a ${suma}`;

    };

    /* delegación de eventos en una función que ya existe y tiene nombre */
    idBtnRestar.onclick = fnRestar;


};

/* 
    MODELO VISTA CONTROLADOR

    vista => HTML

    controlador => código JS que se encarga de 
        capturar los eventos que se producen en el DOM

    modelo => encapsular toda la logica de la aplicación aqui.



*/
