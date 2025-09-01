
// levantar todo el vector completo de clientes //
import vectorContribuyentes from "./Datos/VectorContribuyentes_10000.js";


window.addEventListener("load",()=>{

    console.log("aplicacion esta corriendo");

    const idBtn01 = document.querySelector("#idBtn01");
   
    const idCuit = document.querySelector("#idCuit");
    const idBtn02 = document.querySelector("#idBtn02");

    const idNombre = document.querySelector("#idNombre");
    const idBtn03 = document.querySelector("#idBtn03");

    const idBtn04 = document.querySelector("#idBtn04");

    /* boton 1 => consulta de clientes 
    mostrar id,cuit y denominacion
    */

    idBtn01.addEventListener("click",()=>{

        console.log(`aqui tengo que mostrar los clientes (id,cuit,denominacion)`);

        //console.log(vectorContribuyentes);

        vectorContribuyentes.forEach(cliente => 
            {
                console.log(`Id:${cliente.PadronAFIPId} Cuit:${cliente.PadronAFIPCUIT} Denominacion:${cliente.PadronAFIPDenominacion}`);
            })

    });

    /* Busqueda de una persona por Cuit */
    idBtn02.addEventListener("click",()=>{

        //vectorContribuyentes.find((cliente,indice)=>{});

        let cuitABuscar = idCuit.value;

        let clienteEncontrado = vectorContribuyentes.find(cliente => cliente.PadronAFIPCUIT === cuitABuscar);

        if(clienteEncontrado)
        {
            console.log(clienteEncontrado);

            let clienteDenominacion = clienteEncontrado.PadronAFIPDenominacion;
            let clienteImpGanancias = clienteEncontrado.PadronAFIPImpGanancias;

            console.log(clienteDenominacion,clienteImpGanancias);

        }
        else
        {
            alert("El cuit del Cliente no existe");
        }
    });

    /* Busqueda por Nombre */

    idBtn03.addEventListener("click",()=>{

        let nombreParaBuscar = idNombre.value;

        let personasEncontradas = vectorContribuyentes.filter(cliente => cliente.PadronAFIPDenominacion.includes(nombreParaBuscar));

        console.log(personasEncontradas);

    })

    /* Conteos Generales o reducción de datos => reduce */

    idBtn04.addEventListener("click",()=>
        {
            /*
            Contar empleadores:
            Recorrer y contar cuántos tienen PadronAFIPEmpleador === 'S'.
            */

            /*** con un forEach ****/

            let cantidadDeEmpleadores = 0;

            vectorContribuyentes.forEach(cliente => 
                {
                    if(cliente.PadronAFIPEmpleador === 'S')
                    {
                        cantidadDeEmpleadores = cantidadDeEmpleadores + 1;
                    }
                })

            console.log(`La Cantidad de Empleadores es: ${cantidadDeEmpleadores}`);

            /*
            Ganancias ACTIVO Y Empleadores (AND):
            Recorrer y contar los que cumplen ambas condiciones:
            PadronAFIPImpGanancias === 'AC' && PadronAFIPEmpleador === 'S'. */

            let activosGananciasYEmpleadores = 0;

            let activosGananciasYEmpleadores2 = 0;

            vectorContribuyentes.forEach(cliente => cliente.PadronAFIPImpGanancias === 'AC' && cliente.PadronAFIPEmpleador === 'S' ? activosGananciasYEmpleadores++:0);

            vectorContribuyentes.forEach(cliente => 
                {
                    if(cliente.PadronAFIPImpGanancias === 'AC' && cliente.PadronAFIPEmpleador === 'S')
                    {
                       activosGananciasYEmpleadores2++; 
                    }
                });


            console.log(`La Cantidad de Activos en Ganancias y Empleadores : ${activosGananciasYEmpleadores} - ${activosGananciasYEmpleadores2}`);

            /* REDUCE => es una funcionalidad
            que tienen los vectores, que me permite hacer
            conteos, sumar totales. => reducción. */

            const personas = [
                { nombre: "Ana",    sexo: "F", edad: 60 },
                { nombre: "Carlos", sexo: "M", edad: 52 },
                { nombre: "Pedro",  sexo: "M", edad: 25 },
                { nombre: "antonella",    sexo: "F", edad: 32 },
                { nombre: "lorena",    sexo: "F", edad: 55 },
                { nombre: "anastasia",    sexo: "F", edad: 22 },
            ];

            /* contar la cantidad de mujeres 
            
                reduce
                    1 => funcion callBack (cantidadMujeres,elemento)
                    2 => inicializacion 
            
            */

            let mujeres = personas.reduce((cantidadMujeres,element)=>{

                if(element.sexo === "F")
                {
                    return cantidadMujeres = cantidadMujeres + 1; // lo retorno incrementando en uno
                }
                else
                {
                    return cantidadMujeres;// sin hacerle nada
                }

            },0);

            console.log(`La Cantidad de Mujeres es ${mujeres}`)

        /* Sumar la Edad Total de Todas las Mujeres */

        let edadTotal = personas.reduce((edadTotal,element)=>{

            if(element.sexo === "F")
            {
                return edadTotal = edadTotal + element.edad; // acumulo la edad
            }
            else
            {
                return edadTotal; // aqui devuelvo el acumulador sin hacerle nada
            }
        },0);

        console.log(`La Edad Total de Todas las Mujeres es ${edadTotal}`);

        })

})