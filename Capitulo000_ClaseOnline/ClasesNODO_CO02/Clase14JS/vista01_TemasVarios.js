

/*

POO => PROGRAMACION ORIENTADA A OBJETOS

    CLASES (ABSTRACCIÓN)

    OBJETOS

    EL NACIMIENTO DE LOS OBJETOS SE LLAMA INSTANCIACIÓN

*/

window.addEventListener("load",()=>
{

    /*
        - variables
        - constantes
        - vectores
        - objetos que se instancian a partir de clases
        -> objetos literales
        -> arrays o vectores de objetos literales

    */


    /* Tema 1 - Objetos Literales */

        let datosDePersona1 = 
        {
            dni:272828282,
            nombres:"Enrique daniel",
            domicilio:"san fernando del valle de catamarca"
        }

        let datosDePersona2 = 
        {
            dni:2728229292,
            nombres:"Fernando",
            domicilio:"poman"
        }

        
        const datosDePersona3 = 
        {
            dni:272828282,
            nombres:"JUAN PABLO",
            domicilio:"FRAY MAMERTO ESQUIU"
        }

        console.log(datosDePersona1);
        console.log(datosDePersona2);
        console.log(datosDePersona3);

        console.log(datosDePersona1.nombres);
        console.log(datosDePersona2.nombres);
        console.log(datosDePersona3.nombres);


        const VectorDePersonas = 
            [
                datosDePersona1,
                datosDePersona2,
                datosDePersona3,
                {
                    dni:77888999,
                    nombres:"PEDRO ALEJANDRO",
                    domicilio:"VALLE VIEJO"
                }
            ];

        console.log(VectorDePersonas);

    /* Tema 02: Vectores de OBJETOS LITERALES */

            const persona1 = 
            {
                cuit:"23240103-9",
                nombre:"DANIEL MALDONADO",
                domicilio:"av. la callecita s/n",
                vehiculos:[
                            {
                                patente:"IMX379",
                                vehiculo:"CHEVROLET AGILE"

                            },
                            {
                                patente:"898RUW",
                                vehiculo:"KAWASAKI NINJA 1200"
                            },
                            {
                                patente:"472WTH",
                                vehiculo:"ESCUTER BLA BLA BAL"
                            }
                            ]
            } 


            const persona2 = 
            {
                cuit:"24-240103-7",
                nombre:"FERNANDO",
                domicilio:"av. la callecita s/n",
                vehiculos:[
                            {
                                patente:"IMX279",
                                vehiculo:"CHEVROLET AGILE"

                            },
                            {
                                patente:"828RUW",
                                vehiculo:"KAWASAKI NINJA 1200"
                            }
                          
                            ]
            } 

        console.log(persona1);
        console.log(persona2);

        /* OBJETOS JSON */

        /* 
            XML
            JAVASCRIPT OBJET NOTATION 


        
        
        */

        // aqui tome un objeto y lo converti a JSON //
        let objeto1ComoStringJSON = JSON.stringify(datosDePersona1);

        // aqui lo estoy mostrando en formato ORIGINAL como objeto  //
        console.log(datosDePersona1);

        // aqui lo estoy mostrando en formato STRING JSON //
        console.log(objeto1ComoStringJSON);

        // 

        const objetoDesdeJSON = JSON.parse(objeto1ComoStringJSON);
        console.log(objetoDesdeJSON);


        /* Recorrido de todas esas personas y vamos 
        a mostrar sus datos */

        VectorDePersonas.forEach((element,indice)=>
            {
                console.log(indice);
                console.log(element);
                console.log(`La persona ${indice} es ${element.nombres} vive en ${element.domicilio}`);
            })

        /* particularidades de los array o vectores y de los
        objetos literales */

            let a = 20;

            let b = a;

            a = 30;

            console.log("a ",a); // 30
            console.log("b",b);  // 20


            const VectorDeNotasPrimerCuatrimetre = [10,9,8,7,10,2,9];

            const VectorDeNotasSegundoCuatrimestre = VectorDeNotasPrimerCuatrimetre;

            VectorDeNotasPrimerCuatrimetre.push(7.77);
            VectorDeNotasPrimerCuatrimetre.push(8.44);
            VectorDeNotasPrimerCuatrimetre.push(2.40);

            console.log(VectorDeNotasPrimerCuatrimetre);
            console.log(VectorDeNotasSegundoCuatrimestre);


            const personita1 = {dni:22,nombre:"EL LOCO"};
            const personita2 = personita1;

            console.log(personita1);
            console.log(personita2);

            /* Spread Operator - de VECTORES */

            const VectorDePesosEnero = [90,85.50,70.50];

            const VectorDePesosFebrero = [...VectorDePesosEnero];

            VectorDePesosEnero.push(100);
            VectorDePesosEnero.push(53);

            VectorDePesosFebrero.push(88.500);
            VectorDePesosFebrero.push(70);

            console.log(VectorDePesosEnero);
            console.log(VectorDePesosFebrero);

            /* Spread OPERATOR - OBJETOS */

                const club1 = 
                {
                    id:1,
                    nombre:"VELEZ SARDFIELD",
                    pagina:"nos ganaron bien. culpa de gago"
                }

                const club2 = 
                {
                    ...club1,
                    cantidadCopasIntercontinentales:1
                }

                console.log(club1);
                console.log(club2);

            /* 
                para que sirve esto ? 
            */

                let datosAFIP = 
                {
                    cuit:"232401039",
                    nombres:"daniel maldonado"
                }

                let datosVERAZ =
                {
                    cuit:"232401039",
                    nivelCrediticio:5
                }

                let datosDeRegistroCivil =
                {
                    cuit:"232401039",
                    estadoCivil:"casado"
                }


                let datosUnicos = 
                {
                    ...datosAFIP,
                    ...datosVERAZ,
                    ...datosDeRegistroCivil
                }

                console.log(datosAFIP);
                console.log(datosVERAZ);
                console.log(datosDeRegistroCivil);
                console.log(datosUnicos);





                /*

                    - objetos literales
                    - vectores de objetos literales
                    - objetos que a su vez, tienen vectores dentro
                    - spread operator clonación de vectores y expansión de vectores
                    - spread operator clonación y expansión de objetos literales
                    - destructuring
                
                */
                
                    let datosAFIP2 = 
                    {
                        cuit:"232401232",
                        nombres:"daniel maldonado",
                        domicilio:"av. ocampo 22829",
                        correo:"ingdmaldonado"
                    }

                    /* 
                        nacen a partir de una clase
                        nacen directamente como objeto (sin clase). objetos literales
                    */

                    
                    const {cuit,nombres,domicilio,correo} = datosAFIP2;

                    console.log(cuit);
                    console.log(nombres);
                    console.log(domicilio);
                    console.log(correo);

                    

})