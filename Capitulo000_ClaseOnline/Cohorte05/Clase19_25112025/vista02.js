
const notasTP = [10,9,2,7,-1,8,11,3,5];


/* 
    1) forEach => recorre todos los elementos

        forEach( ()=>{} )

    2) map => aplica una función de TRANSFORMACION SOBRE CADA ELEMENTO

        map( ()=>{ return } )

*/


window.onload = ()=>{

    console.log(`running`);

    /* (1er.) Repaso de ForEach 
    pero utilizando las particularidades
    de las arrow function */


    notasTP.forEach((element,indice)=>{
        console.log(element);
    });

    console.log(`------------------`);

    notasTP.forEach((element)=>{console.log(element)});

    console.log(`------------------`);

    notasTP.forEach(element => console.log(element));

    /* (2do) Repaso de map */

    let vector1 = notasTP.map((element)=>{return element * element});

    console.log(vector1);

    /* (3ro) Repaso de map => funcion corta */

    let vector2 = notasTP.map(element=>element * element);

    console.log(vector2);

    /* (4to) find => para buscar en el vector algún
    elemento que cumpla con una condición */

    const resultadofind1 = notasTP.find((nota)=>{

        if(nota === 8)
        {
            return true;
        }
        else
        {
            return false;
        }

    });

    console.log(resultadofind1);

    const resultadofind2 = notasTP.find(nota=>nota === 8);

    console.log(resultadofind2);

    /* (5to) - filter => es un metodo que tienen 
    los vectores y que me permiten obtener un sub-conjunto
    de los elementos de un vector */

    const vectorNuevo1 = notasTP.filter((nota)=>{

        if(nota <= 8)
        {
            return true;
        }
        else
        {
            return false;
        }
    });

    console.log(vectorNuevo1);

    // vamos a hacerlo de la manera corta //

    const vectorNuevo2 = notasTP.filter(nota=>nota <= 8);
    console.log(vectorNuevo2);

    vectorNuevo2.push(-1);
    vectorNuevo2.push(-15);

    console.log(notasTP);
    console.log(vectorNuevo2);

    /* (6to) - some 
    
        aplicar una función callBack que tiene aplicar
        una función callBack dentro ()=>{} 

        Determina si algun elemento cumple con una condición
        en un conjunto de elementos del vector.

    */

    let resultado1 = notasTP.some((nota)=>{

        if(nota < 4)
        {
            return true;
        }
        else
        {
            return false;
        }

    });

    console.log(resultado1);

    // lo hacemos de la forma corta //

    let resultado2 = notasTP.some(nota => nota < 4);

    console.log(resultado2);

    if(notasTP.some(nota => nota < 4))
    {
        console.log(`existen alumnos desaprobados`);
    }
    else
    {
        console.log(`no existen alumnos desaprobados`);
    }


    /* (7mo) => every => si todos cumplen
    con la condición que yo estoy 
    definiendo dentro de la función callBack
    */

    let resultado3 = notasTP.every((nota)=>{

        if(nota > 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    });

    console.log(resultado3);

    // esto es de la forma corta //
    let resultado4 = notasTP.every(nota => nota < 0);

    console.log(resultado4);



    /* 
    
    1 - forEach => recorre todos los elementos => no devuelve nada
    2 - map => transforma todos los elementos => devuelve todos transformados
    3 - find => encuentra y devuelve el primero => devuelve un elemento
    4 - filter => filtra un subconjunto => devuelve un vector
    5 - some => si alguno => devuelve true o false
    6 - every => si todos cumplen alguna condicion => devuelve true o false


    7 - reduce => que permite contabilizar 

    */



};