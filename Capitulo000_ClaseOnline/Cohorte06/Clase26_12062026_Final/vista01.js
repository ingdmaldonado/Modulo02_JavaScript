

const fnCuadrado = numero => numero * numero;

const fnCubo = numero => numero * numero * numero;


const vectorElastico = [200,{dni:222,nombre:"dos"},fnCuadrado,fnCubo,(importeBase)=>{return importeBase * 21/100}];

/* TYPE SCRIPT */

window.onload = ()=>{

   // console.log(vectorElastico);

    vectorElastico.forEach(elemento => {

       // console.log(elemento);

       // console.log(typeof(elemento));

        if(typeof(elemento)=== 'function')
        {
            console.log(elemento);

            let resultado = elemento(10);
            console.log(resultado);

        }



    });


};