
/* 

    - variables que se declaan con let
    - constantes que se declaran con const
    - vectores o arrays





*/

const vectorDeNotas = [10,11,14,17,15,19,18,14,22,80];

window.addEventListener("load",()=>
    {

        console.log("running");

        const idBtn01_Mostrar = document.querySelector("#idBtn01_Mostrar");
        const idBtn02_Individual = document.querySelector("#idBtn02_Individual");
        const idBtn03_Agregar = document.querySelector("#idBtn03_Agregar");
        const idBtn04_Quitar = document.querySelector("#idBtn04_Quitar");
        const idBtn05_QuitarDeADentro = document.querySelector("#idBtn05_QuitarDeADentro");
        const idBtn06_Particularidades = document.querySelector("#idBtn06_Particularidades");
        const idBtn07_RecorridoFOR = document.querySelector("#idBtn07_RecorridoFOR");
        const idBtn08_ForEach = document.querySelector("#idBtn08_ForEach");

        console.log(idBtn01_Mostrar);

        /* forma1 - declarandolo como variable */

        let VectorGenerico1 = ["uno",400,-15,"av. la callecita sin numero",10,20,30,40,50];

       
        /* mostrar todo el contenido del vector */
        idBtn01_Mostrar.addEventListener("click",()=>
            {
                console.clear();

                console.log(VectorGenerico1);
            })

        /* aqui lo que voy a hacer es mostrar individualmente
        el contenido de algunas posiciones del vector */

        idBtn02_Individual.addEventListener("click",()=>
            {

                // mostrar el largo del vector */

                console.clear();

                let largoDeVector = VectorGenerico1.length;
                console.log("largo del vector ",largoDeVector);

                let valorEnposicion2 = VectorGenerico1[2];
                console.log(valorEnposicion2);

            })

        idBtn03_Agregar.addEventListener("click",()=>{

            console.clear();

            console.log(VectorGenerico1);

            /* push me permite agregar al final del vector */
            VectorGenerico1.push("DANIEL");
            VectorGenerico1.push(5*20);

            /* unshift me permite agregar al principio del vector */

            VectorGenerico1.unshift("Esto debería quedar al principio");

            console.log(VectorGenerico1);

        })

        idBtn04_Quitar.addEventListener("click",()=>
            {

                // con esto limpio la pantalla
                console.clear();

                // muestro el vector como estaba originalmente
                console.log(VectorGenerico1);

                // quitar el primer valor y guardarlo en una variable //

                let primerElemento = VectorGenerico1.shift();

                // muestro el elemento quitado y guardado en la variable primerElemento
                console.log(primerElemento);

                // muestro el vector como quedo
                console.log(VectorGenerico1);

               
                // acceder al ultimo elemento del vector. sin quitarlo */
                let ultimoElemento1 = VectorGenerico1[VectorGenerico1.length-1];

                // aqui muestro como queda sin sacarlo //
                console.log(VectorGenerico1);

                // elimine el ultimo elemento del vector //
                let ultimoElemento2 = VectorGenerico1.pop();

                console.log(ultimoElemento1);
                console.log(ultimoElemento2);

                // mostrar el vector completo //

                console.log(VectorGenerico1);

            })

        idBtn05_QuitarDeADentro.addEventListener("click",()=>{

            console.clear();

            // mostrar como estaba el vector originalmente

            console.log(VectorGenerico1);

            // quitar, desde la posicion 2. voy a quitar 3 elementos

            VectorGenerico1.splice(2,3);

            // mostrar como queda el vector

            console.log(VectorGenerico1);

        })

    idBtn06_Particularidades.addEventListener("click",()=>
        {

            console.clear();

            console.log(VectorGenerico1);

            /* con esto estoy guardando en una 
            variable un elemento de un vector */

            let variable1 = VectorGenerico1[5];
            console.log(variable1);

            /* ahora. voy a guardar un valor
            en una posicion especifica */

            VectorGenerico1[2] = "Soy del MAS GRANDE";

            console.log(VectorGenerico1);

            VectorGenerico1[500] = 777.77;

            console.log(VectorGenerico1);


            /* como hago cuando un vector es una
            constante ?. */

            const totalFacturado = 50485.20;
            //totalFacturado = 300;

            const vectorComoConstante = [];

            vectorComoConstante.push(5);
            vectorComoConstante.push(15);
            vectorComoConstante.push(25);
            vectorComoConstante.push("DANIEL");
            vectorComoConstante.push("fernando");
            vectorComoConstante.push("enzo");
            vectorComoConstante.push("natalia");
            vectorComoConstante.push("mario");

            console.log(vectorComoConstante);

        })

    idBtn07_RecorridoFOR.addEventListener("click",()=>
        {

            

            console.log(vectorDeNotas);

            /* Recorrido Tradicional */
            for(let indice = 0; indice <= vectorDeNotas.length -1 ;indice = indice + 1)
            {
                let elemento = vectorDeNotas[indice];
                
                console.log(`el indice es ${indice} y el elemento ${elemento}`);

            }

            /* Recorrido moderno. forEach */

            vectorDeNotas.forEach((element,indice)=>
                {
                    console.log(`esto es con forEach ${element}`);
                })

            

        })

    idBtn08_ForEach.addEventListener("click",()=>
        {

            vectorDeNotas.forEach((element,indice)=>
                {
                    console.log(element,indice);
                })

        })

    })