import paisesAmerica from "./paisesAmerica.js";

window.onload = ()=>{

    console.log(`is running`);

    const idGenerarBoton = document.querySelector("#idGenerarBoton");
    const idCompletarSelector = document.querySelector("#idCompletarSelector");
    const idGenerarPaises = document.querySelector("#idGenerarPaises");

    const idContenedor1 = document.querySelector("#idContenedor1");
    const idPaisesDestino = document.querySelector("#idPaisesDestino");
    const idContenedor2 = document.querySelector("#idContenedor2");

    const idBotonEjemplo = document.querySelector("#idBotonEjemplo");

    /*
    idBotonEjemplo.onclick = ()=>{
        alert("soy el click 1 del boton");
    };
    
    idBotonEjemplo.onclick = ()=>{
        alert("soy el click 2 del boton");
    };
    */

    idBotonEjemplo.addEventListener("click",()=>{

        alert("soy el click 1 del boton");

    });

     idBotonEjemplo.addEventListener("click",()=>{

        alert("soy el click 2 del boton");

    });

    /* me permite a cada elemento del DOM
    incorporarle un listado de eventos, que
    se suman. al evento que ya existe */

    



    let a = 20;

    a = 30;





    /* Cuando trabajo con DOM ESTATICO. 

    el elemento HTML existe primero y luego lo capturo
    desde el controlador */

    /* Cuando trabajo con DOM DINAMICO sucede al revés

    primero generamos una constante donde estará
    el elemento visual que queremos incorporar al DOM,
    una vez generado y habiendoles asignado los eventos.
    recien lo incrustamos en el DOM */


    idGenerarBoton.onclick = ()=>{

        console.log(`aqui voy a generar otros botones dinamicos`);


        for(let i = 0;i <= 500;i=i+1)
        {
             /*(1ro) Crear en una constante o variable. pedirle
        al documento HTML que me devuelva un elemento */

        const BotonDinamico = document.createElement("button");

        /* (2do) Comienzo a asignarle o modificarle propiedades
        para que tome la forma y el comportamiento que yo quiero */

        BotonDinamico.textContent = `Soy un Boton Dinamico ${i}`;

        /* (3er) Incrustar o agregar el elemento generado
        dinamicamente en el DOM */

        /* (4to) Vamos a agregarle comportamiento */

        BotonDinamico.onclick = ()=>{
            alert(`Soy un Boton Generado Dinamicamente por programación ${i}`);
        };


        idContenedor1.appendChild(BotonDinamico);


        }
    };

    /* Cuando presione click en este boton
    vamos a completar las opciones del selector */

    idCompletarSelector.onclick = ()=>{

        console.log(`aqui tengo que completar el selector`);

        console.log(paisesAmerica);

        /* 1ro) Genero a partir de datos un conjunto de elementos del DOM
        usando map */
        const opcionesDelSelector = paisesAmerica.map(pais => {

            /* (1ro) Generamos el elemento HTML dinamico */
            const opcionDinamica = document.createElement("option");

            /* (2do) Le cambiamos las propiedades */
            opcionDinamica.textContent = `${pais.nombre} - ${pais.capital} - ${pais.poblacion}`;
            opcionDinamica.value = pais.id;

            //console.log(opcionDinamica);

            return opcionDinamica;

        });

        /* puedo mostrar todas las opciones
        generadas dinamicamente */

        console.log(opcionesDelSelector);

        /* (2do) Recorrer el vector de Opciones
        e incrustarlas en el contenedor de Destino */

        opcionesDelSelector.forEach(opcion => {

            idPaisesDestino.appendChild(opcion);

        });
        
    };

    /* Click del Boton Generar Paises */
    idGenerarPaises.onclick = ()=>{

        console.log(paisesAmerica);

        /* 
        
        <div>
            <h3>Argentina - Buenos Aires</h3>
            <h4>Poblacion: 46.000.000</h4>
            <img>
            <input type="checkbox">
        </div>

        */

        /* 1RO => GENERAN LOS ELEMENTOS CON MAP */

        const contenedoresPaises = paisesAmerica.map(pais => {

            /* (1ro) Generamos el Contenedor del Pais */

            const contenedorPais = document.createElement("div");

            const tituloPais = document.createElement("h3");
            tituloPais.textContent = `Pais: ${pais.nombre} - ${pais.capital}`;

            const tituloPoblacion = document.createElement("h4");
            tituloPoblacion.textContent = `Poblacion: ${pais.poblacion}`;

            const datosExtras = document.createElement("h6");
            datosExtras.textContent = `Idioma: ${pais.idioma} - Año Inde: ${pais.añoIndependencia} - Moneda: ${pais.moneda}`;

            const imagenBandera = document.createElement("img");
            imagenBandera.src = pais.bandera;
            imagenBandera.alt = `Bandera del Pais`;
            imagenBandera.width = 50;

            const seleccionarPais = document.createElement("input");
            seleccionarPais.type = "checkbox";

            const botonMostrar = document.createElement("button");
            botonMostrar.textContent = `Mostrar datos del pais`;

            botonMostrar.onclick = ()=>{

                datosExtras.textContent = `Soy el Profe Daniel`;

                console.log(`${pais.idioma} - ${pais.añoIndependencia} - ${pais.moneda}`);

            };            




            /* aqui al contenedor del pais le agrego un hijo 
            que sería el titulo */
            contenedorPais.appendChild(tituloPais);
            contenedorPais.appendChild(tituloPoblacion);
            contenedorPais.appendChild(imagenBandera);
            contenedorPais.appendChild(seleccionarPais);
            contenedorPais.appendChild(botonMostrar);
            contenedorPais.appendChild(datosExtras);
            
            //console.log(contenedorPais);

            return contenedorPais;

        });

        /* (2DO) - SE INCRUSTAN O INCORPORAN AL DOM */

        contenedoresPaises.forEach(contenedor => {

            idContenedor2.appendChild(contenedor);

        })

    };

};