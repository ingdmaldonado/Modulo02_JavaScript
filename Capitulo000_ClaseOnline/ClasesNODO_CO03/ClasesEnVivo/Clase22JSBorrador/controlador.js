
window.addEventListener("load",()=>
    {
        console.log("running !!!");

        /* find ()
        Devuelve el primer elemento del array que cumple con una condición.
        Si ninguno la cumple, devuelve undefined.
        */

            const numeros1 = [3, 8, 15, 7];
            const mayor10 = numeros1.find(n => n > 10);

            const ubicacion = numeros1.findIndex(n => n > 10);

            console.log(mayor10); // 15

            if(mayor10)
            {
                console.log("lo encontre",mayor10,ubicacion);
            }
            else
            {
                console.log("no encontre ninguno");
            }

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

        /* 
        Qué hace .every()?
            Devuelve true si todos los elementos del array cumplen la condición dada.
            Devuelve false en cuanto encuentra el primer elemento que no cumple.
        */

        const numeros3 = [4, 8, 15, 23];

        const todosPositivos1 = numeros.every(num => num > 0);
            
        console.log(todosPositivos1); // true ✅
            

        /* ejemplo donde no todos cumplen la condición */

        const numeros4 = [10, -5, 20, 3];

        const todosPositivos2 = numeros4.every(n => n > 0);

        console.log(todosPositivos2); // false ❌ (porque -5 no cumple)


        /* REDUCE  
        
        
     /*
    
        el método reduce() en JavaScript es una herramienta poderosa para operar 
        sobre arrays, ya que permite reducir (o acumular) todos los elementos 
        de un array en un solo valor. A continuación, te explico en detalle cómo funciona, 
        con ejemplos para ilustrar su uso.
        Descripción del Método reduce()
        El método reduce() aplica una función a un acumulador y a cada elemento del array
        (de izquierda a derecha) para reducirlo a un solo valor. La sintaxis básica es:


        Reduce un array a un único resultado, aplicando una función acumuladora a cada elemento, de izquierda a derecha.

        */

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



        const numerosPares = [10,20,30,40];

        let SumaTotal = numerosPares.reduce((acumulador,numero)=>{

            return acumulador = acumulador + numero;

        },0)

        console.log(SumaTotal);


        const facturasEnero = 
            [
                {
                    numeroFac:1,
                    importe:100,
                },
                {
                    numeroFac:2,
                    importe:300,
                }

            ]


        let resultadoX = facturasEnero.reduce((totalizador,factura)=>
            {
                totalizador.cantidad = totalizador.cantidad + 1;
                totalizador.total = totalizador.total + factura.importe;

                return totalizador;

            },{cantidad:0,total:0});

        
        console.log(resultadoX);

    })