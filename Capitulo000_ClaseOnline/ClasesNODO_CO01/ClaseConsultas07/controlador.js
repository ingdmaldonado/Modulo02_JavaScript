
let paisesAmerica = [
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


const Cuadrado = (numero)=>
    {
        return numero * numero;
    }

/* cuando reciben un solo parametro se puede obviar los ()
y además, si tiene una sola línea de código se puede obviar
la palabra return y también se pueden obviar las llaves {}
*/

const Cuadrado2 = numero => numero * numero;


/* PROGRAMA PRINCIPAL */

window.addEventListener("load",()=>
    {
        const idBtnRecorridoConForEach = document.querySelector("#idBtnRecorridoConForEach");
        const idBtnFiltrar = document.querySelector("#idBtnFiltrar");
        const idBtnMap = document.querySelector("#idBtnMap");

        console.log(idBtnRecorridoConForEach);
        console.log(idBtnFiltrar);

        /* cuando presionen click en el boton recorrido disparamos esta arrow function */

        /* objeto literal */
        let objeto1 = {dni: 55777888,nombre:'LIONEL ANDRES',apellido:'MESSI'};

        /* objeto literal */
        let objeto2 = {dni: 55777999,nombre:'ANGEL',apellido:'DI MARIA'};

        const VectorDePersonas = [objeto1,objeto2];

      //  console.log(VectorDePersonas);


        /* Cuando presionan click en el boton Recorrer */
        idBtnRecorridoConForEach.addEventListener("click",()=>
            {

                /* 
                    Recorrido con forEach voy a mostrar por consola todo el elemento

                    1ro) Recorre todos los elementos, absolutamente todos.
                    2do) no hay forma de salir del bucle iterativo.
                    3ro) el forEach es preciso en el sentido que recorrerá todos
                    los elementos, inclusive, si el vector durante mi proceso iterativo
                    está sufriendo modificaciones.

                        1,2,3

                            1,2,3,4,5,6,7,8


                
                */

                paisesAmerica.forEach((element)=>
                    {
                       // console.log(element.nombre);

                        console.log(`Nombre del País: ${element.nombre} - Cant habitantes : ${element.poblacion}`);
                    })

            })

        /* Cuando presionan click en el boton filtrar */

        idBtnFiltrar.addEventListener("click",()=>
            {

                /* Forma1 : la forma más larga y expresiva posible */

                const paisesGrandes = paisesAmerica.filter((element)=>
                    {
                        if(element.poblacion > 50000000)
                        {
                            return true;
                        }
                        else
                        {
                            return false;
                        }
                    })

                console.log(paisesGrandes);

                /* Forma2 : la forma abreviada. la forma cortante */

                const paisesGrandes2 = paisesAmerica.filter(element => element.poblacion > 50000000);

                console.log(paisesGrandes2);

            })


        idBtnMap.addEventListener("click",()=>
            {

                const vectorDeSueldos = [7200,9200,50];

                console.log(vectorDeSueldos);

                const vectorDeSueldosConAumento = vectorDeSueldos.map(element => element * 1.15);

                console.log(vectorDeSueldosConAumento);



            })

    })