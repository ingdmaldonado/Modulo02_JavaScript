



window.onload = ()=>
{

    console.log("aplicacion corriendo");

    /* un objeto literal es una estructura
    de datos. muy utilizada en JS. y que
    permite almacenar datos de forma conjunta
    y global y manejarlo con solo nombre de
    constante o variable 
    
        conjunto de clave/valor

        atributo/valor


    
    */

    const persona1 = {dni:41444333,nombre:"MESSI LIONEL",sexo:"VARON"};

    let persona2 = {dni:42222777,nombre:"DI MARIA ANGEL",sexo:"VARON"};

    /* mostrar los valores de los objetos
    directamente en un console.log */

    console.log(persona1);
    console.log(persona2);

    /* las constantes NO SE PUEDEN 
    MODIFICAR. a Excepción de los
    objetos literales y de los vectores */

    // puedo modificar atributos //
    persona1.nombre = "CARLOS RIVERA";

    console.log(persona1);

    /* puedo modificar accediendo al atributo 
    mediante corchetes */

    persona1["nombre"] = "PACHECO CLAUDIO";
    console.log(persona1);    


    /***** VECTORES DE OBJETOS LITERALES *****/

    const PadronElectoral = [persona1,persona2,{dni:77222999,nombre:"RUIZ JOSE",sexo:"X"},{dni:23777888,nombre:"SEGURA LORENA",sexo:"MUJER"}];

    console.log(PadronElectoral);


    /************ REPASO DE TEMAS DE VECTORES *******/

    /* METODOS DE VECTORES BASICOS */

 //   PadronElectoral.pop(); // elimina del final
  //  PadronElectoral.shift(); // elimina del principio
    PadronElectoral.push({dni:44987444,nombre:"CARRIZO ANA",sexo:"MUJER"}); // agrega al final
    PadronElectoral.unshift({dni:21234987,nombre:"TOLOSA LAUTARO",sexo:"VARON"});
    
    console.log(PadronElectoral);
    
    /* METODOS MAS AVANZADOS 
    
    * forEach
    * find => encontrar
    * map => un metodo de transformación
    * filter => un metodo de filtrado
    * reduce => un metodo para contabilizar, agrupar información de un vector
    * some => si alguno
    * every => si todos
    */

    /* REPASAR EL FOR EACH */

    console.log("Repasando for Each 1");

    PadronElectoral.forEach((elemento,indice)=>{

        // estoy mostrando todo el elemento completo //
        console.log(elemento);

        console.log(elemento.nombre);

    })

    console.log("Repasando for Each 2");

    /* 
    
    Particularidades de las arrow function.

    () => {}

    const x = ()=>{}

    (element) => {}

    Si. una arrow function, recibe como parametro
    un solo parametro, se pueden obviar los ()

    (parametro1) => {}

    parametro1 => {}

    */

    // en este ejemplo la arrow function recibe dos parametros
   // PadronElectoral.forEach((elemento,indice)=>{})

    // en este ejemplo la arrow function recibe un solo parametro
  //  PadronElectoral.forEach((elemento)=>{});

    /* en este ejemplo la arrow function recibe un solo parametro
    pero nos agarramos de las particularidades
    de las arrow function. que cuando reciben 
    solo si un solo parametro puedo obviar los () de los parametros.
    */
   
    console.log("Ejemplo de invocación corta. arrow function con un solo parametro");

    PadronElectoral.forEach(Persona => {

        if(Persona.sexo === 'VARON')
        {
            console.log(Persona);
        }
    })

    /*
    
    - OBJETO LITERALES => atributos y valores

    - VECTORES DE OBJETOS LITERALES =>

    - METODOS BÁSICOS DE VECTORES
        * pop, push, shift,unshift

    - METODOS AVANZADOS DE VECTORES
        * forEach, map, reduce, filter, find, every, some
    */




  



}