

window.addEventListener("load",()=>
    {

        const idBtnVectores = document.querySelector("#idBtnVectores");
        const idBAccederIndividualmente = document.querySelector("#idBAccederIndividualmente");
        const idBtnCambiarValores = document.querySelector("#idBtnCambiarValores");
        const idBtFuncionalidadesVarias_push = document.querySelector("#idBtFuncionalidadesVarias_push");
        const idBtFuncionalidadesVarias_pop = document.querySelector("#idBtFuncionalidadesVarias_pop");
        const idBtFuncionalidadesVarias_shift = document.querySelector("#idBtFuncionalidadesVarias_shift");
        const idBtFuncionalidadesVarias_unshift = document.querySelector("#idBtFuncionalidadesVarias_unshift");
        const idBtFuncionalidadesVarias_splice = document.querySelector("#idBtFuncionalidadesVarias_splice");
        const idBtFuncionalidadesVarias_indexof = document.querySelector("#idBtFuncionalidadesVarias_indexof");
        const idBtFuncionalidadesVarias_find = document.querySelector("#idBtFuncionalidadesVarias_find");
        const idBtFuncionalidadesVarias_filter = document.querySelector("#idBtFuncionalidadesVarias_filter");
        const idBtnRecorridoTradicional = document.querySelector("#idBtnRecorridoTradicional");
        const idBtnRecorridoForEach = document.querySelector("#idBtnRecorridoForEach");
        const idBtnRecorridoMap = document.querySelector("#idBtnRecorridoMap");
        const divContainerPruebas = document.querySelector("#divContainerPruebas");
        const idBtnReduce = document.querySelector("#idBtnReduce");
        const idBtnSort = document.querySelector("#idBtnSort");
        const idBtnReverse = document.querySelector("#idBtnReverse");
        const idBtnSpreadOperator = document.querySelector("#idBtnSpreadOperator");

        console.log(idBtnVectores);
        console.log(idBAccederIndividualmente);
        console.log(idBtnCambiarValores);
        console.log(idBtFuncionalidadesVarias_push);
        console.log(idBtFuncionalidadesVarias_pop);
        console.log(idBtFuncionalidadesVarias_shift);
        console.log(idBtFuncionalidadesVarias_unshift);
        console.log(idBtFuncionalidadesVarias_splice);
        console.log(idBtFuncionalidadesVarias_indexof);
        console.log(idBtFuncionalidadesVarias_find);
        console.log(idBtFuncionalidadesVarias_filter);
        console.log(idBtnRecorridoTradicional);
        console.log(idBtnRecorridoForEach);
        console.log(idBtnRecorridoMap);
        console.log(divContainerPruebas);
        console.log(idBtnReduce);
        console.log(idBtnSort);
        console.log(idBtnReverse);
        console.log(idBtnSpreadOperator);

        /*********************************/
        /* (01) Declaración de Vectores */
        /*********************************/

        /* Declaración literal de un Vector ó Array */

        let vectorGenerico = [1,5,7,1,-15,25,44,288,77,88,"HOLA COMO ESTAS","JORGE",44,28,-127,25,44,112,28,44,99,-101,"-101"];

    
        idBtnVectores.addEventListener("click",()=>
            {
                /* en JavaScript es tan simple mostrarlo al vector como
                mostrarlo por una consola */

                console.log("1 - mostramos el contenido de un vector");
                console.log("vector originalmente ",vectorGenerico);

            })

        idBAccederIndividualmente.addEventListener("click",()=>
            {
                /* muestro el contenido del vector en la posición 2 */
                console.log("2 - mostramos elementos puntuales de un vector ");

                console.log(vectorGenerico[2]);

                /* muestro el contenido del vector en la posicion 5*/

                console.log(vectorGenerico[5]);

                /* recupero y guardo en una variable el contenido del vector en la posicion 10 */

                let datoEnPosicion10 = vectorGenerico[10];
            
                /* muestro el dato recuperado */

                console.log(datoEnPosicion10);

            })

        
        /*******************************************************/
        /* (04) Cambiando Valores en las Posiciones del Vector */
        /*******************************************************/

        idBtnCambiarValores.addEventListener("click",()=>{

            console.log("3 - modificamos elementos de un vector ");
            /* muestro como estaba originalmente el vector */
            console.log("vector originalmente ",vectorGenerico);

            /* le estoy asignando un valor al vector en la posición 2 */
            vectorGenerico[2] = "RIQUELME JUAN ROMAN";

            /* estoy asignandole un valor en una posición */
            vectorGenerico[400] = 1560.20; //me completa con 391 posiciones vacias //

            /* muestro como quedo el vector despues */
            console.log("vector modificado ",vectorGenerico);

        })
        
    /********************************************************************************************/
    /* (05) Funcionalidades Varias - push . agrega un elemento en la ultima posicion del vector */
    /********************************************************************************************/

    idBtFuncionalidadesVarias_push.addEventListener("click",()=>{

        console.log("4 - agregamos elementos al final del vector");

        /* muestro como estaba originalmente el vector */
        console.log("vector originalmente",vectorGenerico);

        /* push => agregar un elemento a un vector al final de todos los elementos */
        vectorGenerico.push("este valor se agregará al final");

        /* muestro como quedo el vector despues de agregar el elemento */
        console.log("vector modificado",vectorGenerico);
        
    })


    /***************************************************************************************/
    /* (06) Funcionalidades Varias - POP. saca el último elemento del vector y lo devuelve */
    /***************************************************************************************/

    idBtFuncionalidadesVarias_pop.addEventListener("click",()=>
        {
            console.log("4 - quitamos el último elemento del vector");
 
            /* muestro como estaba originalmente el vector */
            console.log("vector originalmene ", vectorGenerico);
    
            /* quito el último elemento del vector y lo guardo en una variable */
            let ultimoelemento = vectorGenerico.pop();
    
            /* muestro el elemento quitado */
            console.log("elemento quitado ",ultimoelemento);
    
            /* muestro el vector como quedo despues de la eliminación */
            console.log("vector modificado ",vectorGenerico);

        })

    /*****************************************/
    /* (07) - Funcionalidades Varias - shif */
    /*****************************************/

    idBtFuncionalidadesVarias_shift.addEventListener("click",()=>
        {
            console.log("5 - quitamos el primer elemento del vector");

            /* mostramos como esta el vector antes de la eliminación */
            console.log("vector originalmente ",vectorGenerico);
    
            /* remueve el primer elemento del vector */
            let primerElemento = vectorGenerico.shift();    
    
            /* muestro el elemento quitado de la priemra posicion del vector */
            console.log("elemento quitado ",primerElemento);
    
            /* muestro como quedo el vector */
            console.log("vector modificado ",vectorGenerico);

        })

    /******************************************/
    /* (08) - Funcionalidades Varias - unshif */
    /******************************************/

    idBtFuncionalidadesVarias_unshift.addEventListener("click",()=>
        {

            
        console.log("6 - agregamos al principio del vector");

        /* muestro como estaba el vector originalmente */
        console.log("vector originalmente ",vectorGenerico);

        /* le agrego un dato al principio del vector */
        vectorGenerico.unshift("esto se debería agregar al principio");

        /* muestro como quedó el vector */
        console.log("vector modificado ",vectorGenerico);

        })

    
   

    /*******************************************/
    /* (09) - Funcionalidades Varias - splice */
    /*******************************************/

    idBtFuncionalidadesVarias_splice.addEventListener("click",()=>
        {
            console.log("7 - eliminamos elementos contiguos ");

            /* muestro el vector como estaba originalmente */
            console.log(vectorGenerico);
    
            /* le quito 4 elementos y los almaceno en una variable */
            let elementosQuitados = vectorGenerico.splice(2,4); //desde la posicion 2 voy a sacar 1*/
    
            /* muestro los elementos quitados del vector */
            console.log("elementos contiguos eliminados",elementosQuitados);
    
            /* muestro como quedó el vector despues de quitarle los datos */
            console.log("vector modificado ",vectorGenerico);

        })


    /******************************/
    /* (10) indexOf y lastIndexOf */
    /******************************/

    idBtFuncionalidadesVarias_indexof.addEventListener("click",()=>
        {
            console.log("8 - primera posición de un elemento indexOf, segunda posicón de un elemento lastIndexOf");

            console.log(vectorGenerico);
    
            /* devuelve el índice donde se encuentra por primera vez el elemento 44*/
            console.log(vectorGenerico.indexOf(-44)); 
    
            /* obtiene el índice donde se encuentra por segunda vez el elemento 44 */
            console.log(vectorGenerico.lastIndexOf(-44));

        })

    


    /**************************/
    /* (11) find y findIndex */
    /**************************/

    idBtFuncionalidadesVarias_find.addEventListener("click",()=>
        {

            console.log("11 - find y findIndex");

            /* muestro el vector original */
            console.log("Vecor Original ",vectorGenerico);
    
            /* find busca el elemento y lo devuelve*/
            console.log("Resultado de find de buscar elementos negativos ",vectorGenerico.find((element)=>element < 0));
    
            /* find busca el elemento y devuelve su posición */
            console.log("Resulado de findIndex de buscar elementos negativos ",vectorGenerico.findIndex((element)=>element < 0));

        })

    /*************************************************************************************************************/
    /* (12) filter y devuelve todos los elementos que coinciden con el predicado que va dentro de los parentesis */
    /*************************************************************************************************************/

    idBtFuncionalidadesVarias_filter.addEventListener("click",()=>
        {
            console.log("12 - filter con sus 4 formas de pasarle el parametro a la función filter");

            /* como esta el vector originalmente */
    
                console.log("vector original ",vectorGenerico);
    
            /* forma 1: esta es la forma más corta, resumida y presumiblemente la mas usada */
                console.log("forma resumida de invocar a filter ",vectorGenerico.filter(element=>element < 0));
    
            /* forma 2 :esta es una forma un poquito mas larga, donde la arrow functions está completa */
                console.log("forma un poquito mas larga de invocar a filter ",vectorGenerico.filter((element)=>{return element < 0}));
    
            /* forma 3: esta es la forma tradicional, con una funcion anonima */
                console.log("forma tradicional con una funcion anonima para buscar los elemenos que cumplan la condición");
                let valoresBuscados = vectorGenerico.filter(function(element)
                {
                    if(element < 0) return true;
                    if(element >=0) return false;
                })
    
    
                console.log("forma tradicional con una función anonima ",valoresBuscados);
    
    
            /* forma 4: esta es la forma tradicional, donde primero declaramos la función, luego se la pasamos al metodo */
    
            const fnNumeroEsNegativo = function(element)
            {
                if(element < 0)
                {
                    return true;
                }
                return false;
            }
    
            let valoresBuscados2 = vectorGenerico.filter(fnNumeroEsNegativo);
    
            console.log("forma 5 con una función definida previamente y pasada como parametro de filter",valoresBuscados2);
            
        })

   /*************************************************************************************************************/
    /* (13) Recorrido Tradicional con CICLO FOR */
    /*************************************************************************************************************/

    idBtnRecorridoTradicional.addEventListener("click",()=>
        {
            console.log("13 - Recorrido tradicional de un Vector con un Ciclo For");

            for(let i = 0;i<vectorGenerico.length;i++)
            {
                console.log(`Elemento ${i} ${vectorGenerico[i]}`);
            }

        })


    /*************************************************************************************************************/
    /* (14) Recorrido con CICLO FOR EACH */
    /*************************************************************************************************************/

    idBtnRecorridoForEach.addEventListener("click",()=>
        {
            console.log("14 - Recorrido de los elementos de un vector con forEach");

            vectorGenerico.forEach((element,indice)=>{
                console.log(`Elemento ${indice} ${element}`);
            })

        })

    /*************************************************************************************************************/
    /* (15) Transformacion con MAP */
    /*************************************************************************************************************/

    idBtnRecorridoMap.addEventListener("click",()=>
        {
            console.log("15 - Transformación de elementos con MAP y devolve otro array");

            console.log("vector original ",vectorGenerico);
    
            let vectorResultado = vectorGenerico.map((element,indice)=>
                {
                    return `<h1>${indice} ${element}</h1>`
                })
    
            console.log("vector resultado ",vectorResultado);
    
            divContainerPruebas.innerHTML = vectorResultado;
    

        })



    /******************************************************************/
    /* (16) Transformacion con reduce y reduceright                   */
    /******************************************************************/

     /*
    
        el método reduce() en JavaScript es una herramienta poderosa para operar 
        sobre arrays, ya que permite reducir (o acumular) todos los elementos 
        de un array en un solo valor. A continuación, te explico en detalle cómo funciona, 
        con ejemplos para ilustrar su uso.
        Descripción del Método reduce()
        El método reduce() aplica una función a un acumulador y a cada elemento del array
        (de izquierda a derecha) para reducirlo a un solo valor. La sintaxis básica es:

    */

    idBtnReduce.addEventListener("click",()=>
    {

        console.log("16 - Funciones de Reducción - reduce");
    
        vectorDeNumeros = [10,10,20,25];
        
        let acumulador = 0; // según la documentación puede estar o no declarada
        
        console.log(vectorDeNumeros);
        
        let resultado = vectorDeNumeros.reduce((acumulador,element,indice)=>
        {
            // esto demuestra que el acumulador en la primera iteración es el primer elemento //
            console.log(`acumulador ${acumulador} en posicion ${indice}`);
        
            // esto va mostrando los datos del vector //
            console.log(`elemento ${element} en posicion ${indice}`);
        
            return acumulador + element;
        })
        
        console.log(resultado);

    })


    /******************************************************************/
    /* (17) Sort                                                      */
    /******************************************************************/

    idBtnSort.onclick = function()
    {
        console.log("17 - Funciones de Ordenamiento sort");

        /* ejemplo 1 - El método sort() en JavaScript se utiliza
        para ordenar los elementos de un array en su lugar y 
        devuelve el array ordenado. Por defecto, los elementos se
        ordenan como cadenas de texto en orden alfabético.  
        */

        const frutas = ['naranja', 'manzana', 'banana', 'cereza'];

        console.log("Vector Originalmente ",frutas);
        frutas.sort();
        console.log("Vector Ordenado" , frutas); // Imprime ["cereza", "manzana", "naranja", "plátano"]

        /*

        Resumen
        sort() ordena los elementos de un array en su lugar y devuelve el array ordenado.
        Sin una función de comparación, los elementos se convierten en cadenas de texto y 
        se ordenan lexicográficamente.
        Para ordenación numérica u otras ordenaciones específicas, 
        se debe proporcionar una función de comparación.
        La función de comparación define el criterio de ordenación y 
        debe devolver un número para determinar el orden de dos elementos.

        */
        

        const numeros = [10, 5, 20, 15];

        console.log(numeros);

        numeros.sort((a, b) => a - b); // orden ascendente 

        /*
        
            a - b: Significa la resta de a menos b.

                Si a es menor que b (por ejemplo, 5 - 10), 
                el resultado será negativo, y a se posicionará antes que b.

                Si a es mayor que b (por ejemplo, 20 - 15), 
                el resultado será positivo, y a se posicionará después 
                que b.

                Si a es igual a b (por ejemplo, 10 - 10),
                el resultado será cero, y el orden relativo no 
        
        */

        console.log("Vector original",numeros); // Imprime [20, 15, 10, 5]
        numeros.sort((a, b) => b - a); // orden ascendente 
        console.log("Vector Modificado",numeros);

    }

    
    /******************************************************************/
    /* (18) Reverse                                                   */
    /******************************************************************/

    idBtnReverse.addEventListener("click",()=>
        {
            console.log("18 - Funciones Reverse");

            const numeros = [10, 5, 20, 15];
    
            console.log("Vector Original",numeros);
    
            console.log("Vector Transformado al revés",numeros.reverse())

        })

    
    idBtnSpreadOperator.addEventListener("click",()=>
        {

             /* las variables del tipo vector y constantes son una especie de punteros
        que apuntan a un conjunto de elementos con un nombre único. cuando 
        cambio creo otra variable y le digo que es igual a otra variable 
        en realidad lo que estoy diciendole es que copio el apuntador a esa
        posición */


        /* (00 - el problema de la copia de variables del tipo vector u objeto ) */

        const numeros1 = [10, 5, 20, 15];

        console.log(numeros1);

        const numeros2 = numeros1;

        console.log(numeros2);

        numeros2.push(100);
        numeros2.push(200);

        console.log(numeros1);
        console.log(numeros2);

    /* (1ro) - El Spread Operador como simbolo de clonación de vectores u objetos */

        const Vector1 = ["uno","dos",3,"cuatro"];

        const Vector2 = [...Vector1];

        Vector2.push("cinco");
        Vector2.push("seis");
        Vector2.push(7);

        console.log(Vector1);
        console.log(Vector2);

    /* (2do) - El Spread Operator como unificador de dos Arrays */

        const Vector3 = [1, 2, 3];
        const Vector4 = [4, 5, 6];
        const vectorUnido = [...Vector3, ...Vector4];

        console.log(vectorUnido); // [1, 2, 3, 4, 5, 6]

    /* (3ro) - El Spread Operator como ampliación de un vector */

        const Vector5 = ["uno","dos","tres"];

        const Vector6 = [...Vector5,"cuatro","cinco"];

        console.log(Vector6);

    /* (4to) - Copia superficial de objetos */

        const originalObj = { a: 1, b: 2 };
        const copiedObj = { ...originalObj };
        
        console.log(copiedObj); // { a: 1, b: 2 }
    
    /* (5to) - Combinar las propiedades de los Objetos en un solo */

        let objeto1 = {clienteCuit:"2324010663",clienteNombre:"MALDONADO DANIEL"};

        let objeto2 = {clienteDomicilio:"BARRIO PARQUE LA GRUTA"};

        let objeto3 = {...objeto1,...objeto2};

        console.log(objeto3);

    /* (6to) - Clonar un objeto y agregarle atributos nuevos */

        let objeto4 = {proveedorID:"200",proveedorCuit:"27-2749209-2"}

        let objeto5 = {...objeto4,proveedorDomicilio:"BARRIO IPONA - CORDOBA CAPITAL"};

        console.log(objeto5);

    /* (7mo) - Declarar una funcion que reciba tres parametros y los sume */

        const SumaTresParametros = (parametro1,parametro2,parametro3)=>
            {
                let Resultado = parametro1 + parametro2 + parametro3;
                return Resultado;
            }

        const VectorConValores = [10,20,30,40]
        console.log(VectorConValores);

        let ResultadoSuma = SumaTresParametros(...VectorConValores);
        console.log(ResultadoSuma);



    /* (8vo) - Definir una función que recibirá múltiples parametros */

        const Sumar = (...elementos)=>
        {
            console.log(elementos);

            let Suma = 0;
            elementos.forEach(element=>{
                
                Suma = Suma + element;

            })

            console.log("La suma es: ",Suma);

            return Suma;

        }   
        

        Sumar(2,3,4,5,6);



    /* (9no) Convertir Nodos/Collections a Arrays
    El Spread Operator puede convertir objetos parecidos a arrays (como NodeLists) en arrays reales.*/

        const nodeList = document.querySelectorAll('*');
        const nodeArray = [...nodeList];
        
        console.log("elementos como una lista",nodeList);
        console.log("elemenos como un array",nodeArray); // Array of div elements

        })

})


/*********************************** LO QUE ESTA FALTANDO  ***********************************************/

/*



4. Propiedades Útiles
length: Número de elementos en el array.

let length = arr.length;

5. ES6 y Nuevas Características

Spread Operator: Expande un array en lugares donde se esperan cero o más elementos.

let arr2 = [...arr, 5, 6];

Destructuring Assignment: Asignación de variables desde arrays.

let [first, second] = arr;
Array.from() y Array.of(): Creación de arrays a partir de objetos iterables y lista de argumentos respectivamente.

let arrFrom = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']
let arrOf = Array.of(1, 2, 3); // [1, 2, 3]

6. Array.prototype.includes()
Verificar si un array contiene un elemento específico.

let hasElement = arr.includes(2);

7. Multidimensional Arrays
Arrays de arrays (matrices).

let matrix = [[1, 2], [3, 4]];
let value = matrix[0][1]; 


8. Métodos de Array en ECMAScript 2019 y Posteriores
flat() y flatMap(): Aplanar arrays anidados.
javascript
Copiar código
let flattened = [1, [2, 3], [4, [5]]].flat(2); // [1, 2, 3, 4, 5]
let flatMapped = arr.flatMap(x => [x, x * 2]);

*/