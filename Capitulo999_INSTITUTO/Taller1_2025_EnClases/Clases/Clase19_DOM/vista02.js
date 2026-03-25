

window.onload = ()=>{

    console.log("este es el programa principal");

    /* por cada objeto o elemento del DOM, que 
    necesito y quiero controlar, voy a crear una
    constante que apunte al id del elemento que quiero
    controlar 
    por convención el nombre de la constante
    tiene que coincidir con el id del boton.

    */

    const idBoton1 = document.querySelector("#idBoton1");

    const idBoton2 = document.querySelector("#idBoton2");

    console.log(idBoton1);

    console.log(idBoton2);


    idBoton1.onclick = ()=>{

        alert("Esta noche juegan y quedan eliminados");

    };

    idBoton2.onclick = ()=>{

        console.log("este mensaje saldra por consola");

    };
};


const fnCuadrado =()=>{}; 