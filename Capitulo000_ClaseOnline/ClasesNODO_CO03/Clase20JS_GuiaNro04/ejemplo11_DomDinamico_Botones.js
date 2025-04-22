
/* Vector con el texto de los Botones */

    const textoDeBotones = 
    [
        {
            idBoton: 1,
            textoBoton: "Botón 1",
        },
        {
            idBoton: 2,
            textoBoton: "Botón 2",
        },
        {
            idBoton:3,
            textoBoton: "Botón 3",
        },
        {
            idBoton: 4,
            textoBoton: "Botón 4",
        }
    ];

    const posiblesEnfermedades = [
        {
          idEnfermedad: 1,
          nombreEnfermedad: "Hepatitis B",
          tipoAgente: "Virus (HBV)",
          transmision: "Contacto con sangre o fluidos corporales infectados",
          sintomas: [
            "Fatiga",
            "Ictericia",
            "Nauseas",
            "Dolor abdominal",
            "Orina oscura"
          ],
          prevencion: [
            "Vacunacion",
            "Uso de preservativo",
            "No compartir agujas"
          ],
          tratamiento: "Antivirales de uso prolongado en casos cronicos",
          mortalidad: "Riesgo de evolucion a cirrosis o cancer hepatico"
        },
        {
          idEnfermedad: 2,
          nombreEnfermedad: "Dengue",
          tipoAgente: "Virus (Flavivirus)",
          transmision: "Picadura del mosquito Aedes aegypti",
          sintomas: [
            "Fiebre alta",
            "Dolor de cabeza",
            "Dolor retroocular",
            "Dolor muscular y articular",
            "Erupcion cutanea"
          ],
          prevencion: [
            "Uso de repelente",
            "Ropa clara que cubra extremidades",
            "Eliminacion de criaderos de mosquitos"
          ],
          tratamiento: "Hidratacion y manejo sintomatico. Evitar AINES.",
          mortalidad: "Baja, pero puede aumentar con formas graves"
        },
        {
          idEnfermedad: 3,
          nombreEnfermedad: "COVID-19",
          tipoAgente: "Virus (SARS-CoV-2)",
          transmision: "Aerosoles y contacto cercano con personas infectadas",
          sintomas: [
            "Fiebre",
            "Tos seca",
            "Dificultad para respirar",
            "Perdida del olfato y gusto",
            "Dolor muscular"
          ],
          prevencion: [
            "Vacunacion",
            "Uso de barbijo",
            "Ventilacion de ambientes",
            "Distanciamiento fisico"
          ],
          tratamiento: "Antivirales, corticoides y soporte respiratorio segun gravedad",
          mortalidad: "Variable segun edad, comorbilidades y cepa"
        },
        {
          idEnfermedad: 4,
          nombreEnfermedad: "Gripe A (H1N1)",
          tipoAgente: "Virus de Influenza A",
          transmision: "Goticulas respiratorias al toser, estornudar o hablar",
          sintomas: [
            "Fiebre",
            "Dolor de garganta",
            "Dolor de cabeza",
            "Tos seca",
            "Cansancio"
          ],
          prevencion: [
            "Vacunacion anual",
            "Higiene frecuente de manos",
            "Cubrirse al toser o estornudar"
          ],
          tratamiento: "Antivirales como oseltamivir en los primeros dias",
          mortalidad: "Baja, pero puede ser grave en poblaciones de riesgo"
        },
        {
          idEnfermedad: 5,
          nombreEnfermedad: "Gripe porcina",
          tipoAgente: "Virus Influenza A (H1N1 de origen porcino)",
          transmision: "Contacto directo o cercano con personas infectadas",
          sintomas: [
            "Fiebre",
            "Dolor corporal",
            "Escalofrios",
            "Congestion nasal",
            "Tos"
          ],
          prevencion: [
            "Vacunacion",
            "Evitar contacto cercano con personas enfermas",
            "Limpieza de superficies"
          ],
          tratamiento: "Reposo, hidratacion, y en algunos casos antivirales",
          mortalidad: "Similar a gripe estacional, mas alta en embarazadas"
        }
      ];
      
    const checkBoxGenerados = [];



window.addEventListener("load",()=>{

    const idBtnGenerarBotones1 = document.querySelector("#idBtnGenerarBotones1");
    const idBtnGenerarBotones2 = document.querySelector("#idBtnGenerarBotones2");
    const idBtnGenerarBotones3 = document.querySelector("#idBtnGenerarBotones3");
    const idContenedorBotones = document.querySelector("#idContenedorBotones");

    const idBtnGenerarCheckBox1 = document.querySelector("#idBtnGenerarCheckBox1");
    const idBtnVerCheckBoxElegidos = document.querySelector("#idBtnVerCheckBoxElegidos");
    const idContenedorCheckBox = document.querySelector("#idContenedorCheckBox");   


  
    /* (Variante 1) => vamos a generar botones usando el array 
    de objetos e utilizando map, para transformar el vector 
    de objetos en un vector de botones
    */

    idBtnGenerarBotones1.addEventListener("click",()=>
        {   
            const botonesGenerados = textoDeBotones.map(boton => 
                {
                    const botonDinamico = document.createElement("input");
                    botonDinamico.type = "button";
                    botonDinamico.id = boton.idBoton;
                    botonDinamico.value = boton.textoBoton;

                    botonDinamico.addEventListener("click",()=>{
                        alert(`Has pulsado el botón ${boton.textoBoton}`);
                    })
                    
                    return botonDinamico;
                });

            console.log(botonesGenerados);

            // vaciamos el contenedor de botones        
            idContenedorBotones.innerHTML = "";

            // agregamos los botones al contenedor
            botonesGenerados.forEach(boton => 
                {
                    idContenedorBotones.appendChild(boton);
                });

    })

     /* (Variante 2) => Recorremos el vector original de objetos.
     a medida que lo recorremos, vamos creando los botones, los agregamos
     al contenedor y además a ese botón lo guardamos en el objeto original
     como un atributo nuevo.
    */

    idBtnGenerarBotones2.addEventListener("click",()=>{

        console.log(textoDeBotones);

        textoDeBotones.forEach(boton => {

            const botonDinamico = document.createElement("input");
            botonDinamico.type = "button";
            botonDinamico.id = boton.idBoton;
            botonDinamico.innerText = boton.textoBoton;

            botonDinamico.addEventListener("click",()=>{
                alert(`Has pulsado el botón ${boton.textoBoton}`);
            })

            idContenedorBotones.appendChild(botonDinamico);

            boton.botonGenerado = botonDinamico;
            
        });

        console.log(textoDeBotones);

    });

    /* (Variante 3) => Recorremos el vector original y lo transformamos
    con map, pero esa arrow function recibe el objeto y le hacemos destructuring
    para que pase los atributos ya desestructurados a la función de creación del botón.
    */

    idBtnGenerarBotones3.addEventListener("click",()=>{
        console.log(posiblesEnfermedades);

        const botonesGenerados = textoDeBotones.map(({idBoton,textoBoton}) => 
            {
                const botonDinamico = document.createElement("input");
                botonDinamico.type = "button";
                botonDinamico.id = `idBotonXXX${idBoton}`;
                botonDinamico.value = textoBoton;

                botonDinamico.addEventListener("click",()=>{
                    alert(`Has pulsado el botón ${textoBoton}`);
                })
                
                return botonDinamico;
            });

        // vaciamos el contenedor de botones        
        idContenedorBotones.innerHTML = "";

        // agregamos los botones al contenedor
        botonesGenerados.forEach(boton => 
            {
                idContenedorBotones.appendChild(boton);
            });
    }); 

  
    idBtnGenerarCheckBox1.addEventListener("click",()=>{

       console.log(posiblesEnfermedades);

        let opcionesGeneradas = posiblesEnfermedades.map(({idEnfermedad,nombreEnfermedad}) => 
            {

                const divDinamico = document.createElement("div");

                const checkBoxDinamico = document.createElement("input");
                checkBoxDinamico.type = "checkbox";
                checkBoxDinamico.id = `idCheckBoxXXX${idEnfermedad}`;
                checkBoxDinamico.value = nombreEnfermedad;
                checkBoxDinamico.name = "enfermedades";

                const labelDinamico = document.createElement("label");
                labelDinamico.innerText = nombreEnfermedad;
                labelDinamico.setAttribute("for",checkBoxDinamico.id);

                const objetoDinamico = {checkBoxDinamico,labelDinamico};

                return objetoDinamico;               
             
            });

        checkBoxGenerados.splice(0);
        checkBoxGenerados.push(...opcionesGeneradas);

        console.log(checkBoxGenerados);

        // vaciamos el contenedor de botones
        idContenedorCheckBox.innerHTML = "";


        checkBoxGenerados.forEach(({checkBoxDinamico,labelDinamico}) =>{
            
            //console.log(elemento);
            idContenedorCheckBox.appendChild(labelDinamico);
            idContenedorCheckBox.appendChild(checkBoxDinamico);
            idContenedorCheckBox.appendChild(document.createElement("br"));          

        });

   

})