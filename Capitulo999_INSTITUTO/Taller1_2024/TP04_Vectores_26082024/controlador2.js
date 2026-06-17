
/* esta es una función. en forma de arrow
function que quién la invoque solamente
hará un alert */

const fnClickEnBotonesDinamicos = ()=>
    {
        alert("soy el Click de un boton dinamico");
    }

window.addEventListener("load",()=>{

    console.log("andando");

    const idBtnGenerarColores = document.querySelector("#idBtnGenerarColores");
    const idBtnGeneracionDebotones = document.querySelector("#idBtnGeneracionDebotones");
    const idBtnAsignarComportamiento = document.querySelector("#idBtnAsignarComportamiento");

    const idBtnGenerarOpciones = document.querySelector("#idBtnGenerarOpciones");
    const idSelectorPais = document.querySelector("#idSelectorPais");

    const idContenedor1 = document.querySelector("#idContenedor1");

    const idDeBotones = document.querySelector("#idDeBotones");

    console.log(idBtnGenerarColores);
    console.log(idContenedor1);
    console.log(idBtnGeneracionDebotones);
    console.log(idSelectorPais);

    idBtnGenerarColores.addEventListener("click",()=>
        {
            console.log("aqui deberiamos mostrar ...");

            /* GENERACIÓN DINAMICA DE COMPONENTES Y RENDERIZACIÓN
            DEL DOCUMENTO */

            /* FORMA1 => innerHTML */

            let etiquetas = '';

            for(let i = 0; i < 10; i++)
            {
                etiquetas = etiquetas +   `<h1>Soy una etiqueta H1 ${i}</h1>`;
            }
            idContenedor1.innerHTML = etiquetas;

        })

    idBtnGeneracionDebotones.addEventListener("click",()=>
        {
            /* genero dentro de una constante un vector con los nombres que tendran
            los botones */
            const textoDeBotones = ["Boton 1","Boton 2","Boton 3","Boton 4","Boton 5","le lu "];

            /* genero una variable donde iré almacenando los botones
            dinamicos que voy a ir haciendo */

            let variosBotones = "";
            
            /* recorro el vector que tiene el texto 
            de los botones y voy generando uno x uno
            y almacenandolo en la variable que se llama
            variosBotones */

            textoDeBotones.forEach(element=>{

                variosBotones = variosBotones + `<input type = 'button' value = '${element}' />`;

            })

            console.log(variosBotones);

            /* textContent sirve para actualizar el texto 
            de un label, una etiqueta h1 ... h6 */

            //idContenedor1.textContent = variosBotones;

            /* innerHTML interpreta el texto y lo renderiza
            dinamicamente como lo que haya puesto dentro ese string */

            idContenedor1.innerHTML = variosBotones;


        })

        idBtnAsignarComportamiento.addEventListener("click",()=>
            {
                let Botones = document.querySelectorAll("#idContenedor1 input");
                console.log(Botones);

                Botones.forEach(element =>
                    {
                        console.log(element.value);

                        element.addEventListener("click",()=>
                            {
                                alert(`Soy el boton ${element.value}`);
                            })
                    })

            })

    
    idBtnGenerarOpciones.addEventListener("click",()=>{

        /* 
            con esto limpiabamos todas
            las opciones del selector 
        */


        //   console.log(paisesEuropa);

        idSelectorPais.innerHTML = "";

        const paisesEuropa = ["ALEMANIA","ESPAÑA","REY UNIDO"];

        /* 
            REGISTRO NACIONAL DE LAS PERSONAS 

               API => aplication programming interfase

                    - Datos Biometricos
                    - Datos de Texto : DNI, APELLIDO Y NOMBRE, DOMICILIO REAL, etc.


            SPOTIFY => aplication programming interfase

                ACCEDER A TODAS LAS LISTAS DE REPRODUCCION
                ACCEDER A TODAS LAS LISTAS DE TEMAS 

            NETFLIX


                VectorDePeliculas = [{idpelicula:105029292,nombrepelicula:'TENGO 3 INTERCONTINENTALES'}, ]




        */

        paisesEuropa.forEach((element)=>
            {
                console.log(element);

                let opcionNueva = document.createElement("option");  
                opcionNueva.textContent = element;

                idSelectorPais.appendChild(opcionNueva);

            })

            const vectorDeBotones = ["Sumar","Multiplicar","Dividir","Restar"];

            vectorDeBotones.forEach((element)=>
                {
                    let BotonDinamico = document.createElement("input");
                    BotonDinamico.type = "button";
                    BotonDinamico.value = element;
    

                    BotonDinamico.addEventListener("click",()=>
                        {
                            alert("soy un boton dinamico");
                        })


    
                    idDeBotones.appendChild(BotonDinamico);
    
                })
    

        })

      

        

})