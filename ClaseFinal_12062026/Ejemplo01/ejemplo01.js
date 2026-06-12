
/* Un vector es una estructura super
flexible en javaScript. porque en memoria
puede tener cualquier cosa.
  * valores fijos
  * valores constantes
  * objetos literales {}
  * puede tener a su vez otros vectores
  * puede tener y almacenar funciones (con nombre y anónimas)
  */

const fnCuadrado = numero => numero * numero;

const fnCubo = numero => numero * numero * numero;

const vectorDeOtroNivel = [25,"soy el Profe Daniel",fnCuadrado,fnCubo,{id:1,nombre:"MESSI LIONEL"},(importeBase)=>{return importeBase * 21/100}];

window.onload = ()=>{

  console.log(vectorDeOtroNivel);

  /* Puedo recorrer ese vector super flexible
  y elástico viendo que tipo de elementos tiene */

  vectorDeOtroNivel.forEach(elemento =>{

    // aqui estoy mostrando el elemento //

    /*
    console.log('--- visualizando el elemento ---');
    console.log(elemento);

    console.log('--- visualizando el tipo de elemento ---');
    console.log(typeof(elemento));
    */

    if(typeof(elemento) === 'function')
    {
        console.log(elemento);

        let resultado = elemento(10);
        console.log(resultado);

    }


  });


};