

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


window.addEventListener("load",()=>
    {

        /* 
        
        TECNICA QUE EXISTE EN JAVASCRIPT para
        guardar momentaneamente datos en el 
        navegador !!!.

            1) cookies => almacenamiento temporal
            y momentaneo en el navegador del cliente

            - viajan desde el front al back end 
            de forma automática. no es necesario transportarlas

            2) sessionStorage => almacenamiento de sesion
            duran mientras la solapa en la que estoy navegando
            esta viva. apenas se cierran, los datos se destruyen

            3) indexDB => almacenamiento en como una base de
            datos pero NO SQL. => del lado del navegador.
                Mongo DB => 

            4) localStorage => almacenamiento de una aplicacion
            web, en el navegador.

            es en el navegador => esto no desaparece, no
            se borra.

            muy importante, si se abren varias solapas. 
            todas, comparten la misma localStorage.  

            ES UN ESQUEMA DISTRIBUIDO.

            porque ?. porque cada persona, almacenara
            en sus navegadores. en los cientos de personas
            que naveguen van a tener datos guardados
            en sus navegadores.

            cuando se elimina esto ?.

            cuando el usuario elimina los datos del historial
            o lo puedo hacer yo mismo con codigo javascript.

            si un usuario esta navegando de forma oculta. no
            tengo posibilidades de ningun almacenamiento.

            SIEMPRE ALMACENA DATOS EN FORMATO STRING = TEXTO

            OBJETO => JSON (TEXTO) => ALMACENO EN LOCAL STORAGE



        */


        /* guardar el dato en local storage 
        
            pares clave / valor

            clave = "minombre"
            valor = "DANIEL MALDONADO"
        
        */

        /*
        localStorage.setItem("minombre","DANIEL MALDONADO");
        console.log("datos guardados");
        */

        /*
        const usuario1 = {
            nombreUsuario:"dmaldonado@laboca.com.ar",
            tipoDeUsuario:"administrador"
        }*/

        /*
        const usuario2 = {
            nombreUsuario:"augustoVillegas@delaBnacional.com.ar",
            tipoDeUsuario:"comun"
        } */

        // guardando este dato en formato json //
   //     localStorage.setItem("usuario1",JSON.stringify(usuario1));
        
     //   localStorage.setItem("usuario2",JSON.stringify(usuario2));
      
/*
        let usuario1DesdeLS = JSON.parse(localStorage.getItem("usuario1")); 
        console.log(usuario1DesdeLS);



        let xxx = localStorage.getItem("minombre");
        console.log(xxx);    
        
        */

       // console.log(posiblesEnfermedades);


       // localStorage.setItem("vectorDeEnfermedades",JSON.stringify(posiblesEnfermedades));

        
        let vector = JSON.parse(localStorage.getItem("vectorDeEnfermedades"));
        console.log(vector);




        



    })