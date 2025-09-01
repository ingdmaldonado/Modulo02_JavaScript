
/* la columna VERTEBRAL
de javaScript (FrontEnd) (BackEnd) 

    vectores

    - forEach
    - map
    - filter
    - some
    - every
    - find

*/

const consumosEnergia = [
    137000,
    128000,
    350000,
    95000,
    22000,
    64000,
];


window.addEventListener("load",()=>{

    console.log(`aplicación corriendo`);

    // aqui hago un console.log del vector completo *//
    console.log(consumosEnergia);

    /* Recorrido Viejo => for */

    for(let i = 0;i < consumosEnergia.length;i = i+1)
    {
        // console.log elemento x elemento
        console.log(consumosEnergia[i]);   

    }

    /* Recorrido con forEach 
        para cada elemento
    */


    /* forEach => metodo de los vectores
    que permite recorrer todos los
    elementos del vector. lo que el usuario
    quiera hacer con cada elemento. debera
    confeccionar una función. una función
    que se le dice callBack y que esa función
    es la que tratará el elemento 
    
        (elemento,indice) => {}

        (element,index) => {}
            
        (elemento) => {};

        elemento => ;
        

    */

    /* particularidades de las arrow function 
    
        - 1 solo parametro se pueden obviar los ()
        - si el cuerpo de la funcion es una sola sentencia
            se pueden obviar las {}  y el return
    
    */

    /* que es una funcion llamadora y una funcion callBack */
    

    /* Ejemplo 1 => recorrido elemento a elemento */

    consumosEnergia.forEach((elemento,indice)=>
        {
            console.log(`dato: ${elemento} y posicion ${indice}`)
        })

    /* Ejemplo 2 => . Supongamos que un
    gerente de una Empresa, me pide 
    que le muestre por pantalla todas
    las facturas de energia. que sean
    mayores a 100000 */

    consumosEnergia.forEach((factura,posicion)=>
        {
            if(factura > 100000)
            {
                console.log(`Factura: ${factura} Ubica ${posicion}`);
            }
        });

    /* 
    
        forEach(aqui va la funcion callBack)

        elemento,indice
        elemento

        (elemento) => {};

        elemento => console.log(elemento);

    */
    
    console.log("---------------- 1");

    consumosEnergia.forEach(factura => console.log(factura));

    console.log("---------------- 2");

    consumosEnergia.forEach(factura => factura > 100000 ? console.log(factura):'');

    /* 
        particularidades de las arrow function

        caso 1:
            cuando tiene un solo parametro (parametro)=> {};
            puedo obviarme los parametro => {};

        caso 2:
            cuando tiene una sola instrucción en el cuerpo
            puedo obviarme los {} y el return

            parametro => instruccion;
  
    */

    /* funciones callBack  
    
        1 funcion llamadora => recibir
        como parametro una funcion y ejecutarla a dentro.

        1 o n funciones callBack
    
    */
        
    consumosEnergia.forEach((elemento,indice)=>{console.log(elemento)});

    

})