

window.addEventListener("load",()=>
    {

        const VectorDeNumero = [2,5,7,-1,30,45,22,33,77,-15];

        console.log(VectorDeNumero);

        /* push() => agrega al final de vector */

            VectorDeNumero.push(35);

            console.log(VectorDeNumero);

        /* pop() => eliminar el último elemento del vector */

            let eliminado1 = VectorDeNumero.pop();
            let eliminado2 = VectorDeNumero.pop();

            console.log(eliminado1);
            console.log(eliminado2);

            console.log(VectorDeNumero);

        /* shift() => elimina el primer del vector */

            let eliminado3 = VectorDeNumero.shift();

            console.log(eliminado3);

            console.log(VectorDeNumero);

        /* unshift() => agregar un elemento al vector desde el principio */
    
            VectorDeNumero.unshift(-77);

            console.log(VectorDeNumero);

        /* PARTICULARIDAD DE LOS VECTORES */

            let valor1 = 20;

            let valor2 = 30;

            let valor3 = 45;

            valor1 = valor2;

            console.log(valor1);
            console.log(valor2);
            console.log(valor3);

            /* con esto lo unico que estoy haciendo
            es creando otra referencia al mismo vector */
            const VectorDeNumeros2 = VectorDeNumero;


        

            /* spread operator */
            const VectorDeNumeros3 = [...VectorDeNumero];

            VectorDeNumeros2.push(25);
            VectorDeNumeros2.push(-105);

            VectorDeNumeros3.push(12);
            VectorDeNumeros3.push(21);

            console.log(VectorDeNumero);
            console.log(VectorDeNumeros2);
            console.log(VectorDeNumeros3);

            /*  
                SPREAD OPERATOR 
            */

            const VectorOriginal1 = [7,14,11];

            const VectorOriginal2 = [21,7,2020];

            const VectorSuma = [...VectorOriginal1,...VectorOriginal2];

            VectorSuma.push(14);
            VectorSuma.push(-44);
            
            console.log(VectorOriginal1);
            console.log(VectorOriginal2);

            console.log(VectorSuma);


        /* splice. Desde la posicion, sacar tantos elementos 
            NO MODIFICA EL VECTOR ORIGINAL, es decir extrae unicamente
        */

            const SubVector = VectorSuma.splice(3,5);

            console.log(SubVector);

        /* slice => extrae y quita los elementos del vector original */


            const SubVector2 = VectorSuma.slice(2,3);

            console.log(SubVector2);
            console.log(VectorSuma);

        
        /* recorrido con el metodo forEach */

            // es decir el ciclo for each, recibe como parametro una arrow function
            // y esa arrow function es una funcion callback.

            VectorSuma.forEach((element)=>{

                console.log(element);

            })

            VectorSuma.forEach(element => {
                console.log(element);
            })
            

            let Suma = 0;

            VectorSuma.forEach(element => {

                Suma = Suma + element;

            })

            console.log(`la Suma total es ${Suma}`);
        

            /* primero => el metodo forEach sería una función o un metodo de orden superior 
               segundo => porque puede recibir como parametro otra funcion, y esa función
               es definida por el usuario. y se llama funcion callBack

               en el cuerpo de la función, el usuario o programador implementa lo que quiere
               o lo que necesite.
            */

            /* filter 
            
            FILTRAR DATOS DE UN VECTOR Y GUARDARLOS EN OTRO
            
            */

        

    })