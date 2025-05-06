
const fnLlamadora = (fn,parametro)=>
    {
        let resultado = fn(parametro);

        return resultado;
    }

const fnCuadrado = numero => numero * numero;

const fnCubo = numero => numero * numero * numero;


window.addEventListener("load",()=>{

    console.log("Cargado el controlador.js");

    let resultadoCuadrado = fnLlamadora(fnCuadrado,5);      
    let resultadoCubo = fnLlamadora(fnCubo,5);

    

})