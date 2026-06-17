

/* 
COMO piensa React el estado de la aplicación ?. 

PATRONES DE DISEÑO => estado aplicación + patrón observador

*/

/* Encapsulamos el Estado de la aplicación
en un objeto literal */

const estadoApp = {

};

/* Encapsulamos el estado de la aplicación
de manera individual para cada elemento 
dentro de una función que se llama useState */

const fnUseState = (valorInicio)=>{

    // aqui esta el atributo donde guardare el estado //
    const valorEstado = {valor:valorInicio};

    /* aqui van a estar todos los lugares 
    que se tienen que enterar que este
    valor cambio.
    Si este valor cambio => que haya una actualizacion
    en cadena.   
    
    */

    const suscriptores = [];

    console.log(valorEstado);

    // es una función que a dentro tiene otra función //
    const setvalorEstado = (nuevoValor) =>{
        valorEstado.valor = nuevoValor;

        console.log(valorEstado);

        // este pedacito sirve para notificarle a todos los suscriptores que algo cambio //
        suscriptores.forEach(sus => {

            sus.textContent = valorEstado.valor;
            
        });

    };

    const agregarSuscriptor =(suscriptor)=>{

            suscriptores.push(suscriptor);
            console.log(suscriptores);


    };


    return [valorEstado,setvalorEstado,agregarSuscriptor];



};

window.onload = ()=>{

    // 1) Invocación de la función que genera un estado //
    
    const [valorEstado,setvalorEstado,agregarSuscriptor] = fnUseState(0);

    const idSumar = document.querySelector("#idSumar");
    const idDecrementar = document.querySelector("#idDecrementar");

    // aqui voy a agregar estos suscriptores //
    const idContenedor1 = document.querySelector("#idContenedor1");
    const idContenedor2 = document.querySelector("#idContenedor2");
    const idContenedor3 = document.querySelector("#idContenedor3");
    const idContenedor4 = document.querySelector("#idContenedor4");

    agregarSuscriptor(idContenedor1);
    agregarSuscriptor(idContenedor2);
    agregarSuscriptor(idContenedor3);
    agregarSuscriptor(idContenedor4);

    idSumar.onclick = ()=>{

        setvalorEstado(valorEstado.valor + 1);
        
    };

    idDecrementar.onclick = ()=>{

        setvalorEstado(valorEstado.valor - 1);

    };
  



};
