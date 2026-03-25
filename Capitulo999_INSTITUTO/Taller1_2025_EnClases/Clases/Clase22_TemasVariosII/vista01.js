
/* Delegación de eventos */
window.onload = ()=>{

    /* Definir un Vector */

    /* 
        pueden tener cualquier cantidad de elementos
        pueden tener cualquier variedad de elementos

    */

    const vector1 = ["mama",10,"barrio la esperanza"];

    console.log(vector1);

    const vector2 = [10,15,20,-5,-25,3];

    console.log(vector2);

    /* MANIPULACIÓN DE LOS ELEMENTOS */

    // accediendo a un elemento del vector */
    console.log(vector2[3]);

    // accediendolo y guardando en una variable //
    let quintoElemento = vector2[5];

    console.log(quintoElemento);

    /* metodos de inserción y de eliminación */

    // agrega al final //
    vector2.push(5);

    console.log(vector2);

    // agrega al principio //
    vector2.unshift(1);

    console.log(vector2);

    // elimina un elemento del principio */

    let primerElemento = vector2.shift();

    console.log(primerElemento);

    console.log(vector2);

    // elimina desde el final //

    let ultimoEliminado = vector2.pop();

    console.log(ultimoEliminado);

    console.log(vector2);

    // eliminar elementos consecutivos //

    /* 
    el primer parametro es desde donde comienzo  a eliminar 
    el segundo parametro es la cantidad de elementos

    */

    vector2.splice(3,2);

    console.log(vector2);

    /* recorrido de un vector
    tiene mucha similitud con una cadena 
    
        for => cuando conozco el tamaño.


    */

    for(let i =0;i < vector2.length;i++)
    {
        console.log(`Elemento ${i}: ${vector2[i]}`);
    }


    /* Recorrido con funciones CallBack */

    /* una función callBack es una función
    definida por el usuario, que será ejecutada
    por otra función, en este caso creada
    por el propio lenguaje JavaSript y que
    asegura la ejecución segura de la función callBack 
    */

    

    vector2.forEach((element,index)=>{

        console.log(element,index);

    });


}