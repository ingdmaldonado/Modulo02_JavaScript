

    /* forma 1 de declarar una arrow function */

    const Cuadrado = (numero)=>
        {
            return numero * numero;
        }

    /* forma 2 de declarar una arrow function 
        unicamente cuando recibe un solo parametro de entrada.
        le quitamos los ()
    */

    const Cuadrado2 = numero =>
        {
            return numero * numero;
        }

    /* forma 3 de declarar una arrow function y 
    no hará falta ni los (), ni las {} solamente
    en el caso, de que recibe un parametro y tiene
    una sola instrucción de return */

    const Cuadrado3 = numero => numero * numero;





const Numeros = [];

window.addEventListener("load",()=>{

    console.log("nunca descendí");

    /* (01) agregar al vector por atras*/

        Numeros.push(10);
        Numeros.push("hola Soy Daniel");
        Numeros.push({nombre:"club atletico boca juniors",titulos:"muchos"});

        console.log(Numeros);

    /* (02) acceder a un elemento del vector */

        let elemento = Numeros[2];
        console.log(elemento);

    /* (03) Como reemplazo una posición de un vector */

        Numeros[1] = {dni:24010663,apellido:"MESSI",nombres:"LIONEL ANDRES"};

        console.log(Numeros);

    /* (04) Como quitar elementos del final del vector */

        Numeros.pop();

        console.log(Numeros);

    /* (05) Vamos a Agregar al final */

        Numeros.push({dni:37547772,nombre:"LUIS MIGUEL",apellido:"MIEREZ"})
        Numeros.push({dni:44219694,nombre:"VALENTIN",apellido:"NICOLAU",cbu:"ahmemato"})
        Numeros.push({dni:37547772,nombre:"RIQUELME JUAN ROMAN",apellido:"RIQUELME"})
        Numeros.push({dni:44219694,nombre:"VALENTIN BARCO",apellido:"BARCO",cbu:"ahmemato"})
    

    /* (06) para quitar elementos pero de adelante del vector */

        let quitadoPorDelante = Numeros.shift();
        console.log(quitadoPorDelante);

        console.log(Numeros);

    /* (07) Vamos a agregar por delante */

        Numeros.unshift({titulocancion:"SOY FELIZ",autor:"RIQUI MARTIN"})
        console.log(Numeros);

    /* (08) Vamos a quitar elementos de a dentro del vector */

        /* me permite eliminar desde una determinada
        posición, una cierta cantidad de elementos */

        Numeros.splice(2,2);

        console.log(Numeros);

    /* (09) Dos metodos. indexOf y lastIndexOf 
    
        indexOf => primera ocurrencia
        lastIndexOf => ultima ocurrencia
    */

        /* METODOS */

        const VectorDeNumeros = [20,30,50,50,80,-15,24,50];

        console.log(VectorDeNumeros.indexOf(50));
        console.log(VectorDeNumeros.lastIndexOf(50));
        console.log(VectorDeNumeros.indexOf(15));


     /* (10) - Recorrido clásico */

        for(let i = 0; i < VectorDeNumeros.length;i++)
        {
            console.log(`Elemento ${i} - ${VectorDeNumeros[i]}`);
        }

    /* (11) - Recorrido con forEach 
    
        

    */
        
        VectorDeNumeros.forEach((element,index)=>{

            console.log(`Elemento ${index} - ${element}`);

            let numeroBuscado = element * 2;
            
            console.log(numeroBuscado);

        })


       // VectorDeNumeros.forEach((element,indice)=>{})

        VectorDeNumeros.forEach((element)=>{
            console.log("arrow function completa ",element);
        })

        VectorDeNumeros.forEach(element => console.log("forma resumida",element));

        /* copias de vectores */

        const VectorA = ["uno","dos","tres"];

        let CopiaDeA = VectorA;

        VectorA.push("cuatro");
        VectorA.push("cinco");

        console.log(VectorA);

        console.log(CopiaDeA);

        let a = 20;

        let b = a;

        a = 30;

        console.log(a);
        console.log(b);


        /* la forma de hacer una copia independiente
        entre un vector y otro es la siguiente */

        const Vec1 = ["blanco","negro","rojo","azul"];

        /* lo que estoy haciendo es copiando y clonando el vector1 en el vector 2*/
        const Vec2 = [...Vec1];

        console.log(Vec1);

        console.log(Vec2);

        Vec1.push("oro");
        Vec2.push("rozado");

        console.log(Vec1);

        console.log(Vec2);

        const Vec3 = [...Vec1,...Vec2];

        console.log(Vec3);


        /* metodo MAP */

        const Vec4 = Vec3.map((element,indice)=>
            {
                return `el color es ${element}`;
            })

        console.log(Vec4);


        /* metodo MAP recontra requete abreviado */

        const Vec5 = Vec3.map(element => `el color es ${element}`);

        console.log(Vec5);



})