

    /* esta función recibe como parametro un numero
y lo devuelve al cuadrado */
    const Cuadrado = (numero)=>
        {   
            return (numero * numero);
        }

    
    /* esta otra función calcula el indice de masa corporal
    y recibe dos parametros, uno P que signfiica el peso
    y eo otro A que significa la altura */

    const calcularIMC = (P,A)=>
        {
            return (P / Cuadrado(A));
        }

    /* Esta función recibira como parámetro el INDICE DE MASA CORPORAL
    y en función de sus valores, interpretará y dara el resultado
    
        Bajo peso: IMC menor de 18.5
        Peso normal: IMC entre 18.5 y 24.9
        Sobrepeso: IMC entre 25 y 29.9
        Obesidad grado I: IMC entre 30 y 34.9
        Obesidad grado II: IMC entre 35 y 39.9
        Obesidad grado III (Obesidad mórbida): IMC de 40 o más


    
    */

    const analisisDelIMC = (indiceIMC)=>
        {
         
            if(indiceIMC < 18.5)
            {
                return "BAJO PESO";
            }
            if((indiceIMC >= 18.5) && (indiceIMC <= 24.9))
            {
                return "PESO NORMAL";
            }
            if((indiceIMC > 24.9) && (indiceIMC <= 29))
            {
                return "SOBRE PESO";
            }
            if((indiceIMC > 29) && (indiceIMC <= 34.9))
            {
                return "OBESIDAD GRADO 1";
            }
            if((indiceIMC > 34.9) && (indiceIMC <= 39.9))
                {
                    return "OBESIDAD GRADO 2";
                }
            if((indiceIMC > 39.9))
                {
                    return "OBESIDAD GRADO 3";
                }

        }

    /* aqui estoy delegando en una arrow function
    el evento load de la pagina */

    window.addEventListener("load",()=>{

        console.log("la pagina esta cargada");

        const idPeso = document.querySelector("#idPeso");

        const idAltura = document.querySelector("#idAltura");

        const idBtnIMC = document.querySelector("#idBtnIMC");

        const idResultado = document.querySelector("#idResultado");

        console.log(idPeso);
        console.log(idAltura);
        console.log(idBtnIMC);


        /* delegando al evento click una función y esa función
        es una arrow function */

        idBtnIMC.addEventListener("click",()=>{

            console.log("me estan presionando");

            let pesoIngresado = Number(idPeso.value);
            let alturaIngresado = Number(idAltura.value);

            console.log(pesoIngresado);
            console.log(alturaIngresado);

            /* pesticide => pluggins de chrome */


            let resultadoDeIMC = calcularIMC(pesoIngresado,alturaIngresado);

            let interpretacionIMC = analisisDelIMC(resultadoDeIMC);

            console.log(interpretacionIMC);

            console.log(resultadoDeIMC);

            /* ahora vamos a visualizar los resultados */

            idResultado.textContent = `Su Indice de Masa Corporal es ${resultadoDeIMC.toFixed(2)} y su resultado es ${interpretacionIMC}`;




        })


    })