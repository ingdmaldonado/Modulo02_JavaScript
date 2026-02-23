

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



window.addEventListener("load",()=>{


    const empleado1 = {
        dni:27496222,
        apellido:"RAMIREZ",
        nombre:"VICTOR DANIEL",
    }

    console.log(empleado1);

    /* CONVERTIR UN OBJETO A JSON => TEXTO CON FORMATO ENRIQUECIDO */

    let empleado1JSON = JSON.stringify(empleado1);
    console.log(empleado1JSON);

    /* CONVERTIR UN DATO EN FORMATO JSON => OBJETO JAVASCRIPT */


    let empleado1OBJETO = JSON.parse(empleado1JSON);

    console.log(empleado1OBJETO);

    /* CONVERTIR UN ARRAY EN FORMATO JSON PARA QUE 
    VIAJE POR MEDIO DE LA WEB (IDA => SERVIDOR) */

    let posiblesEnfermedadesJSON = JSON.stringify(posiblesEnfermedades);
    console.log(posiblesEnfermedades);
    console.log(posiblesEnfermedadesJSON);


    /* los datos CUANDO VIAJAN DESDE EL BACK END AL FRONT END */


    /* web (servidor web) = front end (navegador) */

    /* API = APLICATION PROGRAMMING INTERFASE 
    
        conjunto de funciones, que cada una
        responde a un interes en particular

        guardarUnCliente() => DEVUELVEN DATOS EN FORMATO JSON

        eliminarUnCliente()

        - 

    
    */

    
    /* 
        1 SOLO SERVIDOR DE BACK END = JSON

            => funcion1
            => funcion2
            => funcion3

        fronEnd CON javaScript

        frontEnd con Reac

        fronEnd con ANGULAR

        

        aplicaciones móviles que el lenguaje de programacion no es javascript
        (java para movil, Swif (iphone))

        aplicaciones locales (java, PHYTON)

        



    /* BACK END */


})