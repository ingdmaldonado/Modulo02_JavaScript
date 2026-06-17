

window.onload = ()=>{

    const idGenerar = document.querySelector("#idGenerar");

    const idContenedor = document.querySelector("#idContenedor");

    const idGenerarEvo2 = document.querySelector("#idGenerarEvo2");

    const idGenerarEvo3 = document.querySelector("#idGenerarEvo3");

    /* Generación Dinamica de Componentes / elementos
    HTML del lado del cliente (FrontEnd) */

    idGenerar.onclick = ()=>{

        let botonesDinamicos = '';

        botonesDinamicos = `<button>Soy un Boton</button>`;

        //idContenedor.textContent = "hola soy Daniel";
        //idContenedor.textContent = botonesDinamicos;

        //idContenedor.innerHTML = botonesDinamicos;

        let quinceBotones = '';

        for(let i= 0;i <= 14;i++)
        {
            quinceBotones = quinceBotones + `<button>Soy el Boton Nro: ${i}</button>`;
        }
        console.log(quinceBotones);

        idContenedor.innerHTML = quinceBotones;

    };    

    idGenerarEvo2.onclick = ()=>{

        /* vamos a agregar un solo botoncito */

        // aqui le pido al navegador que me genere un input //
        let botonDinamico = document.createElement("input");
        botonDinamico.type = "button";
        botonDinamico.value = "Este es un boton dinamico seguro !!!";

        botonDinamico.onclick = ()=>{
            alert("hola soy un codigo de un boton generado dinamicamente");
        };


        console.log(botonDinamico);

        // todos los elementos HTML generados dinamicamente con createElement //

        idContenedor.appendChild(botonDinamico);        

    };

    /* Este es el código de la versión más
    sofisticada para crear elementos en el DOM */

    idGenerarEvo3.onclick = ()=>{

        const vectorDeTextoDeBotones = ["Fecha 0 - ","Fecha 1 - 11/06","Fecha 2 - 12/06","Fecha 3 - 13/06","Fecha 4 - 14/06","Feca 5 - 15/06"];

        console.log(vectorDeTextoDeBotones);

        vectorDeTextoDeBotones.forEach(texto => {

            // primero genero un boton //
            let botonDinamico = document.createElement("input");

            // le toco las propiedades //

            botonDinamico.type="button";
            botonDinamico.value = texto;

            // agregue comportamiento //

            botonDinamico.onclick = ()=>{

                console.log(`Este boton mostrara los partidos de ${texto}`);

            };

            // por ultimo tengo que agregarlo al contenedor //

            idContenedor.appendChild(botonDinamico);



        });



    };


};