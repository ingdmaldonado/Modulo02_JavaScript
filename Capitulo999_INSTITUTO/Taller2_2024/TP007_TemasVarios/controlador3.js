

window.addEventListener("load",()=>{

    console.log("is running");

    /* Dos formas de declarar un vector */

    const Vector = [1,5,7,"mama","PAPA",2*7,22+5];

    console.log("Vector ",Vector);

    console.log(Vector[3]);

    const Vecto2 = new Array(5);

    console.log(Vecto2);

    /* Recorridos en JavaScript */

    //la clasica con ciclo for //

        for(let i=0;i < Vector.length;i++)
            {
                console.log(Vector[i]);
            }

    // con ciclo while 

        let j = 0;
        while (j < Vector.length)
            {
                console.log(Vector[j]);

                j++;
            }


        Vector.push("METER UN VALOR EN EL VECTOR");


        console.clear();

    // recorrido con forEach

        Vector.forEach(()=>{}) // agrega elemento al vector //

        Vector.forEach((elemento,indice)=>{
            console.log("esto dentro de un for each",elemento,indice);
        })


        Vector.pop();

        Vector.forEach((elemento,indice)=>{
            console.log("esto dentro de un for each",elemento,indice);
        })

        /* vamos a probar aqui por la compañera 
        TANIA */


        const FuncionFlecha = (parametro)=>
            {
                return parametro * parametro;
            }

        const FuncionFlechaCorta = parametro => parametro * parametro;

        console.log(FuncionFlecha(4));

        console.log(FuncionFlechaCorta(4));

        const elementos = Vector.find(element => element > 5);


        const VectorResultado = Vector.find(element => element > 2);
        
        console.log(VectorResultado);

       // console.clear();

        //console.log(elementos);

        /* shift */

        const primerelemento = Vector.shift();

        console.log(primerelemento);

        // agrega un elemento al principio del vector //
        Vector.unshift("esto se agregara al principio del vector");

        /* unshift */

})