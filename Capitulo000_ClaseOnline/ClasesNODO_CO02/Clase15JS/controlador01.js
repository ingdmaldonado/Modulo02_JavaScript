
    const VectorDeVehiculos = 
        [
            {
                opcionId:"1",
                opcionNombre:"AUTO",
                opcionPrecio:2500,
                contador:0,
                acumulador:0
            },
            {
                opcionId:"2",
                opcionNombre:"MOTO",
                opcionPrecio:2200,
                contador:0,
                acumulador:0
            },
            {
                opcionId:"3",
                opcionNombre:"CAMION",
                opcionPrecio:9500
            },
            {
                opcionId:"4",
                opcionNombre:"CAMIONETA",
                opcionPrecio:9200,
                contador:0,
                acumulador:0
            },
            {
                opcionId:"5",
                opcionNombre:"AUTO ELECTRICO",
                opcionPrecio:11500,
                contador:0,
                acumulador:0
            },
            {
                opcionId:"6",
                opcionNombre:"MONOPATIN",
                opcionPrecio:1000,
                contador:0,
                acumulador:0
            },
        ]


        const paises = [
            { id: 1, nombre: "Argentina", capital: "Buenos Aires", poblacion: 45376763 },
            { id: 2, nombre: "Brasil", capital: "Brasilia", poblacion: 214326223 },
            { id: 3, nombre: "Chile", capital: "Santiago", poblacion: 19232159 },
            { id: 4, nombre: "Uruguay", capital: "Montevideo", poblacion: 3494382 },
            { id: 5, nombre: "Paraguay", capital: "Asunción", poblacion: 7152703 },
            { id: 6, nombre: "Perú", capital: "Lima", poblacion: 34000000 },
            { id: 7, nombre: "Colombia", capital: "Bogotá", poblacion: 52344730 },
            { id: 8, nombre: "Venezuela", capital: "Caracas", poblacion: 28230000 },
            { id: 9, nombre: "Ecuador", capital: "Quito", poblacion: 18364865 },
            { id: 10, nombre: "Bolivia", capital: "Sucre", poblacion: 12380000 }
        ];
        

window.addEventListener("load",()=>{

    console.log("running");

    const idGenerar01 = document.querySelector("#idGenerar01");
    const idContenedor01 = document.querySelector("#idContenedor01");

    const idGenerar02 = document.querySelector("#idGenerar02");
    const idContenedor02 = document.querySelector("#idContenedor02");

    const idGenerar03 = document.querySelector("#idGenerar03");
    const idContenedor03 = document.querySelector("#idContenedor03");
    const idSelectorPaises = document.querySelector("#idSelectorPaises");

    const idGenerar04 = document.querySelector("#idGenerar04");
    const idDeTabla = document.querySelector("#idDeTabla");

    idGenerar01.addEventListener("click",()=>
        {
 

            for(let i = 1;i <= 10;i++)
            {
            
            // tengo que generar 10 botones dinamicos //

            // CONCEPTOS DE POO => PROGRAMACION ORIENTADA A OBJETOS //
            /* aqui me cree una variable que se instancio
            a partir de recurrir a un metodo que tiene el
            document que me permite crear un elemento */
            let botonDinamico = document.createElement("input");

            /* comienzo a tocar las propiedades de esos 
            elementos dinamicos. botonDinamico */
            botonDinamico.type = "button";
            botonDinamico.value = `soy un boton generado dinamicamente ${i} `;

            botonDinamico.addEventListener("click",()=>
                {
                    alert(`me estan haciendo click en el boton ${i}`)
                })

            idContenedor01.appendChild(botonDinamico);

            }
        })

    idGenerar02.addEventListener("click",()=>
        {
            // aqui muestro el vector completo
            console.log(VectorDeVehiculos);

            // aqui recorro o itero el vector elemento a elemento
            VectorDeVehiculos.forEach((element,indice)=>
                {
                    /*
                        opcionId:"3",
                        opcionNombre:"CAMION",
                        opcionPrecio:9500
                    */

                    // aqui nacio el objeto = instanciar un objeto //
                    let botonDinamico = document.createElement("input");

                    // le vamos a cambiar las propiedades //
                    botonDinamico.type = "button";
                    botonDinamico.value = `${element.opcionNombre} - ${element.opcionPrecio}`;
                    
                    botonDinamico.addEventListener("click",()=>
                        {
                            console.log(`click en ${element.opcionNombre} y su precio es ${element.opcionPrecio}`)

                            element.contador = element.contador + 1;
                            element.acumulador = element.acumulador + element.opcionPrecio;

                            console.log(VectorDeVehiculos);

                        })

                    idContenedor02.appendChild(botonDinamico);

                    //console.log(element.opcionNombre);

                })

        })

        /* Este boton recorre los Paises
        y agrega los paises del vector
        como opciones del selector dinamico
        */

        idGenerar03.addEventListener("click",()=>
            {
                // recorro todos los paises
                paises.forEach((element,indice)=>
                    {
                        // creo la opcion dinamica - POO
                        let opcionDinamica = document.createElement("option");
                        
                        opcionDinamica.value = indice;

                        // modificando el atributo textContent
                        opcionDinamica.textContent = `${element.nombre} - ${element.capital}`;

                        // aqui lo agrego al selector 
                        idSelectorPaises.appendChild(opcionDinamica);

                    })


            })

    
        idSelectorPaises.addEventListener("change",()=>{

            let posicionElegida = Number(idSelectorPaises.value);

            console.log(posicionElegida);

            console.log(paises[posicionElegida]);

        })

    idGenerar04.addEventListener("click",()=>
        {
            paises.forEach((element,indice)=>
                {
                    /*
                    <tr>
                        <td>ARGENTINA</td>
                        <td>BUENOS AIRES</td>
                        <td>46.000.000</td>
                    </tr>
                    */

                    // primero creo la fila
                    let filaDeTabla = document.createElement("tr");

                    // despues creo celda 1
                    let celda1 = document.createElement("td");
                    celda1.textContent = `${element.nombre}`;
                    
                    // despues creo celda 2
                    let celda2 = document.createElement("td");
                    celda2.textContent = `${element.capital}`;

                    // despues creo celda 3
                    let celda3 = document.createElement("td");
                    celda3.textContent = `${element.poblacion}`;

                    celda3.addEventListener("click",()=>
                        {
                            alert(`me estan haciendo click en ${element.nombre}`);
                        })


                    // despues agrego las celdas a la fila
                    filaDeTabla.appendChild(celda1);
                    filaDeTabla.appendChild(celda2);
                    filaDeTabla.appendChild(celda3);

                    filaDeTabla.addEventListener("click",()=>{

                        console.log("me estan haciendo click en la fila");

                    })


                    // despues agrego la fila completa al cuerpo de la tabla 
                    idDeTabla.appendChild(filaDeTabla);

                })

        })

})