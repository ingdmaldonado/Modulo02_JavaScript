




window.addEventListener("load",()=>
    {
        
        console.log("funcionando");

        const idBtnGenerarBotones1 = document.querySelector("#idBtnGenerarBotones1");
        const contenedor1 = document.querySelector("#contenedor1");

        const idBtnGenerarBotones2 = document.querySelector("#idBtnGenerarBotones2");
        const contenedor2 = document.querySelector("#contenedor2");

        const idBtnGenerarBotones3 = document.querySelector("#idBtnGenerarBotones3");
        const contenedor3 = document.querySelector("#contenedor3");

        const idBtnGenerarBotones4 = document.querySelector("#idBtnGenerarBotones4");
        const idSelectorPaises = document.querySelector("#idSelectorPaises");

        const idBtnGenerarBotones5 = document.querySelector("#idBtnGenerarBotones5");
        const idBtnGenerarBotones5Encendidos = document.querySelector("#idBtnGenerarBotones5Encendidos");
        const contenedor5 = document.querySelector("#contenedor5");

        const idBtnGenerarBotones6 = document.querySelector("#idBtnGenerarBotones6");
        const contenedor6 = document.querySelector("#contenedor6");

        const idBtnGenerarBotones7 = document.querySelector("#idBtnGenerarBotones7");
        const idCuerpoDeLaTabla = document.querySelector("#idCuerpoDeLaTabla");
        
        /**********************************************************/
        /* forma 1: Generar Botones con un ciclo iterativo        */
        /***********************************************************/

        idBtnGenerarBotones1.addEventListener("click",()=>
            {
                for(let i = 1;i <= 10; i++)
                {

                    let botonDinamico = document.createElement("input");
                    botonDinamico.type = 'button';

                    botonDinamico.addEventListener("click",()=>
                        {
                            alert(`soy un boton creado dinámicamente con js ${i}`);
                        })

                    let espacio = document.createElement("br");

                    botonDinamico.value = `Soy un boton dinamico ${i}`;
                    contenedor1.appendChild(botonDinamico);
                    contenedor1.appendChild(espacio);    

                }
            })

     

        /***************************************************************/
        /* forma 2: Generar Botones desde un vector                     */
        /***************************************************************/

        const TextoDeBotones = ["Camioneta","Camion","Moto","Auto"];

        idBtnGenerarBotones2.addEventListener("click",()=>
            {
               
                TextoDeBotones.forEach((element)=>
                    {
                        let botonDinamico = document.createElement("input");
                        botonDinamico.type = 'button';
                        botonDinamico.value = `${element}`;

                        botonDinamico.addEventListener("click",()=>
                            {
                                alert(`soy un boton creado dinámicamente con js ${element}`);
                            })
    
                        contenedor2.appendChild(botonDinamico);

                    })

            })

        
        /*****************************************************************************/
        /* forma 3: Generar Botones desde un Vector y guardarlos en el mismo vector  */
        /*****************************************************************************/

        const TextoDeBotonesConObjetos = 
            [
                {
                    textoBoton:'CAMION',
                    valorOpcion:4000,
                    totalCobrado:0,
                    cantidadCobrado:0
                },
                {
                    textoBoton:'CAMIONETA',
                    valorOpcion:2500,
                    totalCobrado:0,
                    cantidadCobrado:0
                },
                {
                    textoBoton:'AUTOMOVIL',
                    valorOpcion:1500,
                    totalCobrado:0,
                    cantidadCobrado:0
                },
                {
                    textoBoton:'MOTO',
                    valorOpcion:500,
                    totalCobrado:0,
                    cantidadCobrado:0
                },
            ]
     
        idBtnGenerarBotones3.addEventListener("click",()=>
            {
                TextoDeBotonesConObjetos.forEach((element)=>
                    {

                        let botonDinamico = document.createElement("input");
                        botonDinamico.type = "button";
                        botonDinamico.value = element.textoBoton;

                        element.botonGenerado = botonDinamico;

                        botonDinamico.addEventListener("click",()=>
                            {
                                element.totalCobrado = element.totalCobrado + element.valorOpcion;
                                element.cantidadCobrado++;

                                alert("registrado !!!");

                                console.log(TextoDeBotonesConObjetos);

                            })

                        contenedor3.appendChild(botonDinamico);

                    })

                console.log(TextoDeBotonesConObjetos);

            })

        /**********************************************************/
        /* forma 4: Generar Opciones de un Selector HTML           */
        /***********************************************************/

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

        idBtnGenerarBotones4.addEventListener("click",()=>
            {

                idSelectorPaises.innerHTML = "";

                paisesAmerica.forEach((element)=>
                    {
                        let opcionDinamica = document.createElement("option");
                        opcionDinamica.value = element.id;
                        opcionDinamica.textContent = `${element.nombre} - ${element.capital}`;
                        idSelectorPaises.appendChild(opcionDinamica);

                    })

                idSelectorPaises.addEventListener("change",()=>
                    {
                        let idOpcionElegida = idSelectorPaises.value;
                        console.log(idOpcionElegida);
                       
                    })

            })


        /**********************************************************/
        /* forma 5: Generar CheckBoxes Dinamicos                  */
        /***********************************************************/

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

        let OpcionesCheckDelDOM = [];

        idBtnGenerarBotones5.addEventListener("click",()=>{

            OpcionesCheckDelDOM = 
                VectorDeGastosDePatentamiento.map((element)=>
                {

                    const objetoNuevo = {...element};


                    let labelDinamico = document.createElement("label");
                    labelDinamico.textContent = `${element.nombre} - ${element.precio.toLocaleString("ES-es")}`;

                    let checkDinamico = document.createElement("input");
                    checkDinamico.type = "checkbox";

                    objetoNuevo.etiquetaDelCheck = labelDinamico;
                    objetoNuevo.checkBox = checkDinamico;

                    contenedor5.appendChild(labelDinamico);
                    contenedor5.appendChild(checkDinamico);
      
                    return objetoNuevo;

                })

            console.log(OpcionesCheckDelDOM);
        })

        idBtnGenerarBotones5Encendidos.addEventListener("click",()=>
            {
                const OpcionesActivadas = OpcionesCheckDelDOM.filter(element => element.checkBox.checked);

                console.log(OpcionesActivadas);
            })

        
        /**********************************************************/
        /* forma 6: Generar Div Dinamicos                         */
        /***********************************************************/

        idBtnGenerarBotones6.addEventListener("click",()=>
            {
                paisesAmerica.forEach(element =>
                    {

                        console.log(element);

                        let divDinamico = document.createElement("div");

                        let tituloPais = document.createElement("h3");
                        tituloPais.textContent = element.nombre

                        let tituloCapital = document.createElement("h4");
                        tituloCapital.textContent = element.capital;

                        let imgBandera = document.createElement("img");
                        imgBandera.src = element.bandera;
                        imgBandera.style.width = "80px";  // Cambia el valor según el tamaño que prefieras
                        imgBandera.style.height = "80px";  // Mantener la proporción de la imagen
                        imgBandera.style.objectFit = "cover";  // Hace que la imagen se ajuste al contenedor, recortando si es necesario
                        

                        divDinamico.appendChild(tituloPais);
                        divDinamico.appendChild(tituloCapital);
                        divDinamico.appendChild(imgBandera);

                        contenedor6.appendChild(divDinamico);

                    });
            })

        /**********************************************************/
        /* forma 7: Filas Dinámicas de una Tabla                   */
        /***********************************************************/

        idBtnGenerarBotones7.addEventListener("click",()=>
            {
                idCuerpoDeLaTabla.innerHTML = "";


                let filasDeLaTabla = paisesAmerica.map(element => {

                    let Fila = document.createElement("tr");

                    let celda1 = document.createElement("td");
                    celda1.textContent = element.nombre;

                    let celda2 = document.createElement("td");
                    celda2.textContent = element.capital;

                    Fila.appendChild(celda1);
                    Fila.appendChild(celda2);

                    return Fila;

                })

                console.log(filasDeLaTabla);

                filasDeLaTabla.forEach(element =>idCuerpoDeLaTabla.appendChild(element));

                //idCuerpoDeLaTabla.appendChild(filasDeLaTabla);


                /*
                paisesAmerica.forEach(element => {

                    let Fila = document.createElement("tr");

                    let celda1 = document.createElement("td");
                    celda1.textContent = element.nombre;

                    let celda2 = document.createElement("td");
                    celda2.textContent = element.capital;

                    Fila.appendChild(celda1);
                    Fila.appendChild(celda2);

                    idCuerpoDeLaTabla.appendChild(Fila);


                })
                    */

            })


    })