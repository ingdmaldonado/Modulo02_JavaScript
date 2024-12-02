
window.addEventListener("load",()=>
    {


        /* (00) - Spread Operator */

            const vector1 = [400,500,600,700];

            const vector2 = vector1;

            const vector3 = [...vector1];

            vector1.push(777.77);

            console.log(vector1);

            console.log(vector2); // recorcholis ?. !!!.

            console.log(vector3);        


        /* (01) - Creando un Objeto Literal */

            const objetoLiteral1 = {dni:27496209,apellidos:'MALDONADO',nombres:'ENRIQUE DANIEL'};

        /* (02) - Spread Operator a nivel de Objetos */

        const club1 = {nombreClub:'CLUB ATLETICO BOCA JUNIORS',copasIntercontinentales:3};

        const club2 = club1;

        const club3 = {...club1,jugoEnLaBNacional:false};

        club1.nombreClub = 'DEFENSORES DE ESQUIU';
        club1.copasIntercontinentales = 0;

        console.log(club1);
        console.log(club2);
        console.log(club3);


        /* (02) - Destructuring de objetos */

           const {dni,apellidos,nombres} = objetoLiteral1;

            console.log(dni);
            console.log(apellidos);
            console.log(nombres);

        /* (03) - Vector de Objetos Literales */

            const objeto1 = {nombreClub:'CLUB ATLETICO BOCA JUNIORS',copasIntercontinentales:3};

            const objeto2 = {nombreClub:'CLUB ATLETICO BOCA JUNIORS',copasIntercontinentales:1};

            console.log(objeto1,objeto2);

            const vectorDeClubes = [objeto1,objeto2];

            console.log(vectorDeClubes);


        /* (04) - Convertir Objetos Literales a JSON y vicebersa */

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

            let objetoComoStringJSON = JSON.stringify(objeto1);

            console.log(objeto1)
            console.log(objetoComoStringJSON);

            let objetoComoStringJSON_a_JSON = JSON.parse(objetoComoStringJSON);
            console.log(objetoComoStringJSON_a_JSON);


            const diplomatura = {
                estudiantes: [
                    {
                        id: 1,
                        nombre: "Ana Espeche",
                        edad: 25,
                        correo: "ana.espeche@example.com",
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

            console.log(diplomaturaString);




    })