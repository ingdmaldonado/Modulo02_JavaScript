
window.addEventListener("load",()=>{

    console.log(`aplication is running`);

    const idBtn01 = document.querySelector("#idBtn01");
    const idBtn02 = document.querySelector("#idBtn02");

    console.log(idBtn01,idBtn02);

    /* Explicar un poco el concepto de Vectores
    y los metodos básicos */

    idBtn01.addEventListener("click",()=>
        {
            console.log(`este es el click del boton`);

            /*  variables y las constantes */

            let sueldoAntonella = 2500000.20;

            sueldoAntonella = 3700000.45;

            // esto no me permite una modificación posterior //
            const sueldoGuillermo = 3000000.77;


            // VECTORES O ARRAYS //

            /* coleccion de valores que se almacenan
            en memoria de forma contigua y se puede
            acceder de forma colectiva, grupal o individual
            sobre cada elemento del vector 

            es una estructura lineal y flexible, elástica
            multi tipo.
            */
        

            // mostrando como crear un vector e inicializarlos con valores de arranque //

            let sueldosDeGuillermo2025 = [1500000,1700000,2800000,2900000,"tucuman 4412","banana","manzana"];

            sueldosDeGuillermo2025.unshift(1200000.47);
            sueldosDeGuillermo2025.push("boca no juega a nada");

            console.log(sueldosDeGuillermo2025);

            /* Mostrar los elementos de forma individual */

            console.log(sueldosDeGuillermo2025[2]);

            /* declarando un vector que tiene el nombre de sueldos de
            cesar. pero esta vacio. no esta inicializado. */

            let sueldosDeCesarNieva2025 = [];

            console.log(sueldosDeCesarNieva2025);

            /* push (Agrega) => agrega al final */

            sueldosDeCesarNieva2025.push(31000000.77);
            sueldosDeCesarNieva2025.push(39000000.70);

            console.log(sueldosDeCesarNieva2025);

            /* unshif (Agrega) => agrega al principio */

            sueldosDeCesarNieva2025.unshift(4100000);
            console.log(sueldosDeCesarNieva2025);

            /* como (modifico) o piso un valor */

            sueldosDeCesarNieva2025[2] = 100000;

            console.log(sueldosDeCesarNieva2025);

            /* pop (elimina) => elimina el último elemento como quitar un elemento de un vector */

            let primerElemento = sueldosDeCesarNieva2025.pop();
            
            console.log(sueldosDeCesarNieva2025);

            /* shif (elimina) => elimina adelante */

            let ultimoElemento = sueldosDeCesarNieva2025.shift();

            console.log(sueldosDeCesarNieva2025);

            /* resumen => 
                
            1) Definición de la estructura Vectorial
            como conjunto de elementos contiguos
            que se manipulan con una sola nombre.

                => agregar al final push()
                => agregar al principio unshift()
                => quitar del final pop()
                => quitar del principio shift()

                Vector[n] = valor; => decirle que en la posicion "n" quiero guardar un valor determinado.
                
            */

        })

    /* VARIANTES DE RECORRIDO */

    idBtn02.addEventListener("click",()=>{

        /* Esta particularidad de poder
        modificar valores de una constante
        unicamente sucede con vectores y con OBJETOS 
        */

        let vector1 = [];

        let vector2 = [200,300];

        let vector3 = 
            [
                100,
                200,
                300,
                400,
                500
            ];

        const sueldosTomas = [65000,78000];

        sueldosTomas.push(85000);

        console.log(sueldosTomas);

        const sueldosDelProfesor = [
            300000, // Mes 1
            305000, // Mes 2
            310000, // Mes 3
            315000, // Mes 4
            320000, // Mes 5
            325000, // Mes 6 (Primer semestre)

            330000, // Mes 7
            335000, // Mes 8
            340000, // Mes 9
            345000, // Mes 10
            350000, // Mes 11
            355000, // Mes 12 (Fin del primer año)

            360000, // Mes 13
            365000, // Mes 14
            370000, // Mes 15
            375000, // Mes 16
            380000, // Mes 17
            385000, // Mes 18 (Segundo semestre)

            390000, // Mes 19
            395000, // Mes 20
            400000, // Mes 21
            405000, // Mes 22
            410000, // Mes 23
            415000, // Mes 24 (Fin del segundo año)

            420000, // Mes 25
            425000, // Mes 26
            430000, // Mes 27
            435000, // Mes 28
            440000, // Mes 29
            445000  // Mes 30 (2 años y medio)
            ];

        console.log(sueldosDelProfesor);

        /* forma clasica => ciclo for */

        console.log(sueldosDelProfesor.length);

        for(let indice = 0; indice < sueldosDelProfesor.length;indice = indice + 1)
        {
            console.log(`posicion ${indice} valor: ${sueldosDelProfesor[indice]}`);

            let sueldo = sueldosDelProfesor[indice];

            let sueldoConAumento = sueldo + sueldo * 20/100;
           
            console.log(`Sueldo: ${sueldo} con Aumento : ${sueldoConAumento}`);
        }

        /* 
            RESUMEN DE LA CLASE 

            => Vectores => coleccion de elementos contiguos que se pueden manipular
            con un solo nombre.
            
            => Manipulaciones de esos datos
            
                - Agregar al final
                - Agregar al principio
                - quitar al final
                - quitarl al principio

            => Recorrido => el proceso de iterar elemento a elemento

                => for
                => while
                => for of ()
                => forEach()
        
        */

    })

});