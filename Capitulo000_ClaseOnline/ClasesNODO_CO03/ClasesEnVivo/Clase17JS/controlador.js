


window.addEventListener("load",()=>
    {
        const idBtn1 = document.querySelector("#idBtn1");
        const idBtn2 = document.querySelector("#idBtn2");
        const idBtn3 = document.querySelector("#idBtn3");
        const idBtn4 = document.querySelector("#idBtn4");
        const idBtn5 = document.querySelector("#idBtn5");
        const idBtn6 = document.querySelector("#idBtn6");
        const idBtn7 = document.querySelector("#idBtn7");
        const idBtn8 = document.querySelector("#idBtn8");
        const idBtn9 = document.querySelector("#idBtn9");
        const idBtn10 = document.querySelector("#idBtn10");

        const idBtn11 = document.querySelector("#idBtn11");
        const idBtn12 = document.querySelector("#idBtn12");
        const idBtn13 = document.querySelector("#idBtn13");
        const idBtn14 = document.querySelector("#idBtn14");
        const idBtn15 = document.querySelector("#idBtn15");
        const idBtn16 = document.querySelector("#idBtn16");
        const idBtn17 = document.querySelector("#idBtn17");
        const idBtn18 = document.querySelector("#idBtn18");
        const idBtn19 = document.querySelector("#idBtn19");
        const idBtn20 = document.querySelector("#idBtn20");

        const idBtn21 = document.querySelector("#idBtn21");
        const idBtn22 = document.querySelector("#idBtn22");
        const idBtn23 = document.querySelector("#idBtn23");
        const idBtn24 = document.querySelector("#idBtn24");
        const idBtn25 = document.querySelector("#idBtn25");
        const idBtn26 = document.querySelector("#idBtn26");
        const idBtn27 = document.querySelector("#idBtn27");
        const idBtn28 = document.querySelector("#idBtn28");
        const idBtn29 = document.querySelector("#idBtn29");
        const idBtn30 = document.querySelector("#idBtn30");
    

        /* de forma global defino esta variable */
        let variableGlobal = 5;

        /* arrays o vectores */
        let paisesDeSudAmerica = [-1,"ARGENTINA","BRASIL","URUGUAY",2,7];

        idBtn1.addEventListener("click",()=>{

            /* boton 1 - aqui visualizo un vector o array de forma completa */

           console.log("boton 1 - asi visualizo un vector");
           console.log(paisesDeSudAmerica);
        
        })

        idBtn2.addEventListener("click",()=>{

            /* boton 2 - mostrar elementos específicos del vector */

            console.log(paisesDeSudAmerica[0]);
            console.log(paisesDeSudAmerica[1]);
            console.log(paisesDeSudAmerica[3]);

        })

        idBtn3.addEventListener("click",()=>{

            /* boton 3 - como acceder y guardar valores en el vector 
            en variables. extraer copias de esos valores del vector
            */

            let elemento0 = paisesDeSudAmerica[0];
            let elemento3 = paisesDeSudAmerica[3];

            console.log(elemento0);
            console.log(elemento3);

        })

        idBtn4.addEventListener("click",()=>{

            /* boton 4 - el vector original y 
            luego voy a modificar esos valores
            y voy a volver a mostrar de nuevo */

            console.log(paisesDeSudAmerica);

            paisesDeSudAmerica[0] = "PARAGUAY";
            paisesDeSudAmerica[4] = "BOLIVIA";
            paisesDeSudAmerica[5] = "CHILE";

            paisesDeSudAmerica[250] = "VENEZUELA";
            paisesDeSudAmerica[150] = "COLOMBIA";

            console.log(paisesDeSudAmerica);

            console.log(paisesDeSudAmerica[100]);
            console.log(paisesDeSudAmerica[-1]);

            let a = 100;

            let b;

            console.log(a,b);



        })

        idBtn5.addEventListener("click",()=>
            {
                // aqui muestro el largo del vector //
                console.log(paisesDeSudAmerica.length);

                paisesDeSudAmerica.push("ECUADOR");
                
                console.log(paisesDeSudAmerica.length);

                console.log(paisesDeSudAmerica);

            })

        idBtn6.addEventListener("click",()=>
            {
                /* Boton 6 - pop */

                console.log(paisesDeSudAmerica);

                let ultimoElemento = paisesDeSudAmerica.pop();

                console.log(paisesDeSudAmerica);

                console.log(ultimoElemento);

            })

        idBtn7.addEventListener("click",()=>{

            /* Boton 7 - shift => elimina el primero */

            console.log(paisesDeSudAmerica);

            let primerElemento = paisesDeSudAmerica.shift();

            console.log(paisesDeSudAmerica,primerElemento);

        })

        idBtn8.addEventListener("click",()=>
            {
             
                /* Boton 8 - unshif => agregar por adelante */
                
                console.log(paisesDeSudAmerica);

                paisesDeSudAmerica.unshift("ESTADOS UNIDOS");

                console.log(paisesDeSudAmerica);

                
            })
        
    })

    /*
        console.log(idBtn1);
        console.log(idBtn2);
        console.log(idBtn3);
        console.log(idBtn4);
        console.log(idBtn5);
        console.log(idBtn6);
        console.log(idBtn7);
        console.log(idBtn8);
        console.log(idBtn9);
        console.log(idBtn10);

        console.log(idBtn11);
        console.log(idBtn12);
        console.log(idBtn13);
        console.log(idBtn14);
        console.log(idBtn15);
        console.log(idBtn16);
        console.log(idBtn17);
        console.log(idBtn18);
        console.log(idBtn19);
        console.log(idBtn20);

        console.log(idBtn21);
        console.log(idBtn22);
        console.log(idBtn23);
        console.log(idBtn24);
        console.log(idBtn25);
        console.log(idBtn26);
        console.log(idBtn27);
        console.log(idBtn28);
        console.log(idBtn29);
        console.log(idBtn30);
        */