

window.addEventListener("load",()=>
    {

        console.log("running");

        /*
            ¿Qué es JSON?
        
            JSON (JavaScript Object Notation) es un formato de texto que se utiliza 
            para representar datos estructurados de manera sencilla y legible. 
            Aunque está basado en JavaScript, es un formato independiente de lenguaje, 
            lo que significa que se puede usar en cualquier lenguaje de programación.
            JSON está compuesto de pares clave-valor y es ideal para almacenar y transmitir datos. 
            Un objeto JSON se parece mucho a un objeto literal en JavaScript.

            Estructura de JSON:
                Claves (Keys): Siempre son cadenas (strings) y están rodeadas de comillas dobles "".
                Valores (Values): Pueden ser:
                Cadenas de texto (strings): "Juan Pérez"
                Números: 30
                Booleanos: true o false
                Objetos: {...}
                Arrays: [...]
                null

                JSON en JavaScript:
                En JavaScript, podemos convertir un objeto en formato JSON y viceversa.

                Convertir un objeto JavaScript a JSON (serialización):
                Para convertir un objeto de JavaScript a un formato JSON (esto se llama "serializar"), usamos el método JSON.stringify.

        */


        /* CONVERTIR UN OBJETO LITERAL A JSON */

            const persona = 
            {
                nombre: "Juan Pérez",
                edad: 30,
                correo: "juan.perez@example.com",
                activo: true
            };
                
            const jsonPersona = JSON.stringify(persona);
            console.log(jsonPersona);  // {"nombre":"Juan Pérez","edad":30,"correo":"juan.perez@example.com","activo":true}

        /* CONVERTIR UN JSON A OBJETO JAVASCRIPT */

            const personaObjeto = JSON.parse(jsonPersona);

            console.log(personaObjeto);  // Juan Pérez

        /*  */ 

        const diplomatura = {
            estudiantes: [
                {
                    id: 1,
                    nombre: "Ana Rodríguez",
                    edad: 25,
                    correo: "ana.rodriguez@example.com",
                    modulosCursados: [
                        {
                            moduloId: 1,
                            nombre: "HTML y CSS",
                            aprobado: true
                        },
                        {
                            moduloId: 2,
                            nombre: "JavaScript",
                            aprobado: false
                        }
                    ]
                },
                {
                    id: 2,
                    nombre: "Juan Pérez",
                    edad: 30,
                    correo: "juan.perez@example.com",
                    modulosCursados: [
                        {
                            moduloId: 1,
                            nombre: "HTML y CSS",
                            aprobado: true
                        },
                        {
                            moduloId: 3,
                            nombre: "Back End con JavaScript",
                            aprobado: true
                        }
                    ]
                },
                {
                    id: 3,
                    nombre: "Lucía Fernández",
                    edad: 22,
                    correo: "lucia.fernandez@example.com",
                    modulosCursados: [
                        {
                            moduloId: 2,
                            nombre: "JavaScript",
                            aprobado: false
                        },
                        {
                            moduloId: 4,
                            nombre: "Front End con React",
                            aprobado: false
                        }
                    ]
                }
            ],
            modulosDiplomatura: [
                {
                    moduloId: 1,
                    nombre: "HTML y CSS"
                },
                {
                    moduloId: 2,
                    nombre: "JavaScript"
                },
                {
                    moduloId: 3,
                    nombre: "Back End con JavaScript"
                },
                {
                    moduloId: 4,
                    nombre: "Front End con React"
                }
            ]
        };
        
        

        const diplomaturaString = JSON.stringify(diplomatura);

        /* MUESTRA DE OBJETO TAL COMO ESTA */

            console.log(typeof diplomatura);
            console.log(typeof diplomaturaString);


        /*
        
        https://jsonplaceholder.org/posts

        https://www.freetogame.com/api/games

        */


    })