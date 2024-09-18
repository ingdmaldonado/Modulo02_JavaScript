


window.addEventListener("load",()=>
    {

        const idBtn01 = document.querySelector("#idBtn01");
        const contenedor1 = document.querySelector("#contenedor1");

        const idBtn02 = document.querySelector("#idBtn02");
        const contenedor2 = document.querySelector("#contenedor2");

        const idBtn03 = document.querySelector("#idBtn03");
        const contenedor3 = document.querySelector("#contenedor3");

        const idBtn04 = document.querySelector("#idBtn04");
        const contenedor4 = document.querySelector("#contenedor4");
        const idSelectorPais = document.querySelector("#idSelectorPais");

        const idBtn05 = document.querySelector("#idBtn05");
        const contenedor5 = document.querySelector("#contenedor5");
        const idBtn05Encendidos = document.querySelector("#idBtn05Encendidos");

        const idBtn06 = document.querySelector("#idBtn06");
        const contenedor6 = document.querySelector("#contenedor6");

        const idBtn07 = document.querySelector("#idBtn07");
        const idCuerpoDeTabla = document.querySelector("#idCuerpoDeTabla");
        const contenedor7 = document.querySelector("#contenedor7");


        console.log(idBtn01);
        console.log(contenedor1);

        console.log(idBtn02);
        console.log(contenedor2);

        console.log(idBtn03);
        console.log(contenedor3);

        console.log(idBtn05);
        console.log(contenedor5);

        console.log(idBtn06);
        console.log(contenedor6);

        console.log(idCuerpoDeTabla);
        console.log(idBtn07);
        console.log(contenedor7);


        /*****************************************************************/
        /* Forma 1: agregar botones dinamicos */
        /**************************************************************** */

        idBtn01.addEventListener("click",()=>{

            alert("vamos a crear elementos dinamicos");

            /* usuario que aprovecha toda la infraestructura creada */

            /* programadores o equipos de programadores que contruyen clases
            y se didican a la POO */

            for(let i = 1; i <= 500; i++)
            {
                /* instanciar un objeto a partir de un metodo constructor que tiene el DOM */

                // lo que hice es crear el objeto 
                let botonDinamico = document.createElement("input");

                // una vez instanciado el objeto, modifique sus propiedades //
                botonDinamico.type = "button";
                botonDinamico.value = `Soy el Boton Dinamico ${i}`;

                botonDinamico.addEventListener("click",()=>
                    {
                        alert(`Soy el Boton Generado Dinámicamente con programación ${i}`);
                    })

                // los agregue a un objeto contenedor en el DOM //
                contenedor1.appendChild(botonDinamico);

            }

            /* HTML, CSS Y JAVASCRIP */

            /* React View */

        })

        /*****************************************************************/
        /* Forma 2: agregar botones dinamicos desde un Vector             */
        /**************************************************************** */

        idBtn02.addEventListener("click",()=>{

            const botonesDePeaje = ["CAMIONES","CAMIONETAS","AUTOS","MOTOS","CUATRICLO","MAQUINARIA AGRICOLA"];

            botonesDePeaje.forEach((element)=>
                {
                    let botonDinamico = document.createElement("input");
    
                    botonDinamico.type = "button";
                    botonDinamico.value = element;
    
                    botonDinamico.addEventListener("click",()=>
                        {
                            alert(`Aqui debería cobrar por ${element}`);
                        })
    
                    contenedor2.appendChild(botonDinamico);
    
                })
        })

        /**************************************************************************************/
        /* Forma 3: agregar botones dinamicos desde un Vector con objetos literales           */
        /**************************************************************************************/

        idBtn03.addEventListener("click",()=>
            {

                alert("fuuncaaa");

                const vectorDeOpcionesDePeaje = 
                    [
                        {
                            nombreVehiculo:"CAMION",
                            precioVehiculo:22550
                        },
                        {
                            nombreVehiculo:"CAMIONETA",
                            precioVehiculo:13250
                        },
                        {
                            nombreVehiculo:"AUTO",
                            precioVehiculo:4520
                        },
                        {
                            nombreVehiculo:"MOTO",
                            precioVehiculo:2770
                        },
                        {
                            nombreVehiculo:"CUATRICICLO",
                            precioVehiculo:500
                        }
                    ];

                vectorDeOpcionesDePeaje.forEach(element =>
                    {
                        element.contadorDeVehiculos = 0;
                        element.totabilizadorDeVehiculos = 0;

                        let botonDinamico = document.createElement("input");

                        botonDinamico.type = "button";
                        botonDinamico.value = `${element.nombreVehiculo} - ${element.precioVehiculo}`;

                        botonDinamico.addEventListener("click",()=>
                            {
                                element.contadorDeVehiculos = element.contadorDeVehiculos + 1;

                                element.totabilizadorDeVehiculos = element.totabilizadorDeVehiculos + element.precioVehiculo;

                                console.log(vectorDeOpcionesDePeaje);

                            })


                        contenedor3.appendChild(botonDinamico);

                        

                    })


            })

        /**************************************************************************************/
        /* Forma 4: Selector Dinámico de Paises                                               */
        /**************************************************************************************/

        const paisesAmerica = 
            [
                { id: 1, nombre: "Argentina", capital: "Buenos Aires", poblacion: 46044703, region: "SUD AMERICA", bandera: "https://flagcdn.com/w320/ar.png" },
                { id: 2, nombre: "Bolivia", capital: "Sucre", poblacion: 12491925, region: "SUD AMERICA", bandera: "https://flagcdn.com/w320/bo.png" },
                { id: 3, nombre: "Brasil", capital: "Brasilia", poblacion: 203062512, region: "SUD AMERICA", bandera: "https://flagcdn.com/w320/br.png" },
                { id: 4, nombre: "Chile", capital: "Santiago", poblacion: 19212362, region: "SUD AMERICA", bandera: "https://flagcdn.com/w320/cl.png" },
                { id: 5, nombre: "Colombia", capital: "Bogotá", poblacion: 53734553, region: "SUD AMERICA", bandera: "https://flagcdn.com/w320/co.png" },
                { id: 6, nombre: "Ecuador", capital: "Quito", poblacion: 18466153, region: "SUD AMERICA", bandera: "https://flagcdn.com/w320/ec.png" },
                { id: 7, nombre: "Guyana", capital: "Georgetown", poblacion: 808726, region: "SUD AMERICA", bandera: "https://flagcdn.com/w320/gy.png" },
                { id: 8, nombre: "Paraguay", capital: "Asunción", poblacion: 7226276, region: "SUD AMERICA", bandera: "https://flagcdn.com/w320/py.png" },
                { id: 9, nombre: "Perú", capital: "Lima", poblacion: 34217279, region: "SUD AMERICA", bandera: "https://flagcdn.com/w320/pe.png" },
                { id: 10, nombre: "Surinam", capital: "Paramaribo", poblacion: 639528, region: "SUD AMERICA", bandera: "https://flagcdn.com/w320/sr.png" },
                { id: 11, nombre: "Uruguay", capital: "Montevideo", poblacion: 3489015, region: "SUD AMERICA", bandera: "https://flagcdn.com/w320/uy.png" },
                { id: 12, nombre: "Venezuela", capital: "Caracas", poblacion: 33687314, region: "SUD AMERICA", bandera: "https://flagcdn.com/w320/ve.png" },
                { id: 13, nombre: "Belice", capital: "Belmopán", poblacion: 441471, region: "AMERICA CENTRAL", bandera: "https://flagcdn.com/w320/bz.png" },
                { id: 14, nombre: "Costa Rica", capital: "San José", poblacion: 5348829, region: "AMERICA CENTRAL", bandera: "https://flagcdn.com/w320/cr.png" },
                { id: 15, nombre: "El Salvador", capital: "San Salvador", poblacion: 6680660, region: "AMERICA CENTRAL", bandera: "https://flagcdn.com/w320/sv.png" },
                { id: 16, nombre: "Guatemala", capital: "Ciudad de Guatemala", poblacion: 19297534, region: "AMERICA CENTRAL", bandera: "https://flagcdn.com/w320/gt.png" },
                { id: 17, nombre: "Honduras", capital: "Tegucigalpa", poblacion: 10254526, region: "AMERICA CENTRAL", bandera: "https://flagcdn.com/w320/hn.png" },
                { id: 18, nombre: "Nicaragua", capital: "Managua", poblacion: 7022075, region: "AMERICA CENTRAL", bandera: "https://flagcdn.com/w320/ni.png" },
                { id: 19, nombre: "Panamá", capital: "Ciudad de Panamá", poblacion: 4538809, region: "AMERICA CENTRAL", bandera: "https://flagcdn.com/w320/pa.png" },
                { id: 20, nombre: "Canadá", capital: "Ottawa", poblacion: 39554391, region: "AMERICA DEL NORTE", bandera: "https://flagcdn.com/w320/ca.png" },
                { id: 21, nombre: "Estados Unidos", capital: "Washington D.C.", poblacion: 331883986, region: "AMERICA DEL NORTE", bandera: "https://flagcdn.com/w320/us.png" },
                { id: 22, nombre: "México", capital: "Ciudad de México", poblacion: 128932753, region: "AMERICA DEL NORTE", bandera: "https://flagcdn.com/w320/mx.png" },
                { id: 23, nombre: "Cuba", capital: "La Habana", poblacion: 11303316, region: "AMERICA CENTRAL", bandera: "https://flagcdn.com/w320/cu.png" },
                { id: 24, nombre: "República Dominicana", capital: "Santo Domingo", poblacion: 11084180, region: "AMERICA CENTRAL", bandera: "https://flagcdn.com/w320/do.png" },
                { id: 25, nombre: "Haití", capital: "Puerto Príncipe", poblacion: 11402533, region: "AMERICA CENTRAL", bandera: "https://flagcdn.com/w320/ht.png" }
        ];


        idBtn04.addEventListener("click",()=>
            {
                idSelectorPais.innerHTML = "";

                paisesAmerica.forEach((element)=>
                    {
                        // POO => 
                        let opcionDinamica = document.createElement("option");
                        opcionDinamica.textContent = `${element.nombre} - ${element.capital}`;
                        opcionDinamica.value = element.id;

                        idSelectorPais.appendChild(opcionDinamica);

                    })




               // idSelectorPais

            })

        /****************************************************************************/
        /******************* EJEMPLO 05 - como hacer CHECKBOX DINAMICOS  ************/
        /****************************************************************************/
        
        const VectorDeGastosDePatentamiento = 
            [
                {
                    id:100,
                    nombre:'FLETE',
                    precio:95000,
                },
                {
                    id:101,
                    nombre:'SEGURO ANUAL CONTRA TERCEROS',
                    precio:1250000.25,
                },
                {
                    id:102,
                    nombre:'GASTOS ADMINISTRATIVOS',
                    precio:144280.44,
                },
                {
                    id:103,
                    nombre:'PATENTAMIENTO',
                    precio:103280.21,
                },
                {
                    id:103,
                    nombre:'ALUMBRADO PUBLICO',
                    precio:100.20,
                }
            ]

        
        /* el click del boton 5 */

        idBtn05.addEventListener("click",()=>
            {
                console.log("funcionando");

                /* aqui recorro todos los elementos del vector con un forEach */
                VectorDeGastosDePatentamiento.forEach((element)=>
                    {
                        //element.seleccionado = false;

                        // mostrando cada opcion que tiene el vector, cada elemento //
                        console.log(element);

                        /* aqui me estoy creando un label dinamico. con programación
                        orientada a objetos */

                        let labelDinamico = document.createElement("label");
                        labelDinamico.textContent = `${element.nombre} - ${element.precio}`;

                        /* aqui, genero con POO, genero un input y luego de generarlo
                        lo modifico y le toco la propiedad y le digo que va a ser un checkbox */
                        let CheckBoxDinamico = document.createElement("input"); // aqui le digo primero creame un elemento
                        CheckBoxDinamico.type = "checkbox";// aqui le digo que va ser un checkbox

                        /*le voy a agregar un atributo nuevo donde voy a guardar el checkbox
                        dinamico generado en el paso anterior */

                        element.selectorDinamico = CheckBoxDinamico;

                        // aqui lo que hago es agregar el checkbox al contenedor5 */
                        contenedor5.appendChild(CheckBoxDinamico);

                        // aqui lo que hago es agregar el label al contenedor5 */
                        contenedor5.appendChild(labelDinamico);
                    


                    })

                // muestro como quedo el vector. que supuestamente debería tener el selectorDinamico
                console.log(VectorDeGastosDePatentamiento);

            })

        /* el boton donde voy a determinar cuales son los que están encendidos y al mismo tiempo
        determinar cuanto es el total a pagar */

        idBtn05Encendidos.addEventListener("click",()=>
            {
                console.clear();

                let totalAPagar = 0;

                /* recorro las opciones */
                VectorDeGastosDePatentamiento.forEach(element => 
                    {
                        /* pregunto por los selectores dinamicos encendidos unicamente */
                        if(element.selectorDinamico.checked)
                        {
                            /* voy acumulando los totales */
                            totalAPagar = totalAPagar + element.precio;

                            console.log(element);

                            console.log(element.selectorDinamico);

                            console.log(element.selectorDinamico.checked);
                        }
                    })

                console.log(`Total a Pagar ${totalAPagar}`);
            })

        /***********************************************************************/
        /*********** FORMA 6-  EJEMPLO 06 - DIVs. DINAMICOS  *******************/
        /***********************************************************************/

        idBtn06.addEventListener("click",()=>{

            alert("seguimos en 10 minutos");

            paisesAmerica.forEach(element =>
                {
                    console.log(element);

                    // aqui me genero un div dinamico //
                    let divDinamico = document.createElement("div");

                    // aqui me genero una etiqueta h1 dinamica
                    let tituloPais = document.createElement("h1");
                    // aqui a esa etiqueta h1 le digo que se guardará el nombre del pais
                    tituloPais.textContent = element.nombre;

                    // aqui genero una etiqueta dinamica h3 //
                    let tituloCapital = document.createElement("h3");
                    // aqui le digo que a esa etiqueta h3 guardaré el nombre de la capital del pais
                    tituloCapital.textContent = element.capital;


                    let imgBandera = document.createElement("img");
                    imgBandera.src = element.bandera;
                    imgBandera.style.width = "80px";
                    imgBandera.style.height = "80px";

                    imgBandera.addEventListener("click",()=>
                        {
                            alert(`El Pais que ud. Eligio corresponde a la region ${element.region} y su poblacion es ${element.poblacion}`);
                        })

                    // a la etiqueta h1 que se llama titulopais la agrego al contenedor //
                    divDinamico.appendChild(tituloPais);

                    // a la etiqueta h3 que se llama titulocapital la agrego al contenedor //
                    divDinamico.appendChild(tituloCapital);

                    // aqui vamos a agregar la imagen //
                    divDinamico.appendChild(imgBandera);

                    contenedor6.appendChild(divDinamico);



                })
        })

        /**********************************************************************/
        /******************** FORMA 07 - TABLA DINAMICA  **********************/
        /**********************************************************************/

        idBtn07.addEventListener("click",()=>
            {

                idCuerpoDeTabla.innerHTML = "";

                paisesAmerica.forEach(element =>
                    {
                        console.log(element);

                        // aqui genero la fila dinamica //
                        let filaDinamica = document.createElement("tr");

                        // aqui genero la celda 1 donde tengo que guardar el pais //
                        let celda1Pais = document.createElement("td");
                        celda1Pais.textContent = element.nombre;

                        // aqui voy a generar la celda 2 donde voy a guardar la capital //
                        let celda2Capital = document.createElement("td");
                        celda2Capital.textContent = element.capital;

                        // aqui voy a generar la celda 3 donde voy a guardar la poblacion //
                        let celda3Poblacion = document.createElement("td");
                        celda3Poblacion.textContent = element.poblacion;

                        // aqui voy a generar una celda dinamica //

                        let celda4BotonDinamico = document.createElement("td");
                        let botonDinamico = document.createElement("input");
                        botonDinamico.type = "button";
                        botonDinamico.value = "Ver Zona Dinamica";

                        botonDinamico.addEventListener("click",()=>
                            {
                                alert(`El Pais elegido es ${element.nombre} y es de la zona ${element.region}`);
                            })

                        celda4BotonDinamico.appendChild(botonDinamico);

                        filaDinamica.appendChild(celda1Pais);
                        filaDinamica.appendChild(celda2Capital);
                        filaDinamica.appendChild(celda3Poblacion);
                        filaDinamica.appendChild(celda4BotonDinamico);

                        idCuerpoDeTabla.appendChild(filaDinamica);

                    })

            })

    })