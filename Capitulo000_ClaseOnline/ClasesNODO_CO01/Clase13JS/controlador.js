


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

        console.log(idBtn01);
        console.log(contenedor1);

        console.log(idBtn02);
        console.log(contenedor2);

        console.log(idBtn03);
        console.log(contenedor3);


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

    })