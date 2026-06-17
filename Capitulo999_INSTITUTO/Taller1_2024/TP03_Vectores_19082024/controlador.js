
window.addEventListener("load",()=>
    {
        console.log("running");

        let a = 20;

        /* 
            - listado de articulos para el comprar en el super
            - listado de tareas o cosas para arrancar el año.
            - precios de un supermercado
            - listado de materias para cursar
            - listado de profes
            - grupo de whatsapp
        */

        /* aqui declaro un vector. que es flexible
        porque me permite almacenar datos de cualquier tipo */

        const Vector = [5,7,"DANIEL",a,"BARRIO PARQUE LA GRUTA"];

        console.log(Vector);

        /* como agrego elementos al vector */

            Vector.push("Elemento agregado por PUSH");

        console.log(Vector)

        /* recorrido del vector con un ciclo for */

        let b = 20;

        console.log(typeof b);

        for(let i=0;i < Vector.length;i++)
        {
            console.log(`El Elemento ${i} es igual a ${Vector[i]} y es del tipo ${typeof Vector[i]}` );
        }

        /* recorrido con una estructura propia que 
        tienes los arrays y se llama forEach */

        console.log("esto se va a mostrar con un forEach")

        Vector.forEach((element,indice)=>
            {
                console.log(element,indice);
            })

        Vector.forEach((item,indice)=>{
            console.log(item,indice);

            console.log(typeof item)

        })


        let dni = 2233344445;
        let nombre = "DANIEL MALDONADO";
        let domicilio = "LA BOMBONERA";


        /* es un objeto literal */

        let datosPersona = {dni:223344,nombre:"DANIEL MALDONADO",domicilio:"LA BOMBONERA"};

        let datosPersona2 = {dni:22355,nombre:"JUAN CARLOS",domicilio:"LA BOMBONERA"};

        let datosPersona3 = {dni:2233313,nombre:"MANUEL",domicilio:"LA BOMBONERA"};


        console.log(datosPersona);
        console.log(datosPersona2);
        console.log(datosPersona3);

        console.log(datosPersona.dni);

        const Personas = [datosPersona,datosPersona2,datosPersona3];

        console.log(Personas);


        /* recorrer un vector que contiene objetos literales
        y mostrar el nombre de la persona */

        Personas.forEach((element,indice)=>{

            console.log(element.nombre);

        })



    })