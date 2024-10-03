

/*----------------------------------------------*/
/* (1ro:) importamos el Vector desde un módulo */
/*----------------------------------------------*/
import vectorContribuyentes from "./Datos/VectorContribuyentes_10000.js";



/*---------------------------------------------------*/
/* (11) Me Cargo tres Vectores de Filtros            */
/*---------------------------------------------------*/

const FiltrosImpGanancias = [
    {
        codigo:'',
        descripcion:'SIN FILTRO'
    },
    {
        codigo:'NI',
        descripcion:'NO INFORMA'
    },
    {
        codigo:'AC',
        descripcion:'ACTIVO'
    },
    {
        codigo:'EX',
        descripcion:'EXENTO'
    }
]

const FiltrosIntegranteSociedades = 
    [
        {
            codigo:'',
            descripcion:'SIN FILTRO'
        },
        {
            codigo:'N',
            descripcion:'NO INTEGRA SOCIEDADES'
        },
        {
            codigo:'S',
            descripcion:'SI INTEGRA SOCIEDADES'
        }
    ]

const FiltrosEmpleador = 
[
    {
        codigo:'',
        descripcion:'SIN FILTRO'
    },
    {
        codigo:'N',
        descripcion:'NO ES EMPLEADOR'
    },
    {
        codigo:'S',
        descripcion:'SI ES EMPLEADOR'
    }
]

/* (4to paso) Vamos a crear un objeto literal que
me permita almacenar el estado de la aplicación */

    const estadoAplicacion =
    {
        cuitIngresado:"",
        nombreIngresado:"",
        habilitarBusquedaProgresiva:false,
        filtrosImpGanancias:"",
        filtrosIntegranteSociedades:"",
        filtrosEmpleador:"",

        setCuitIngresado(newValue)
        {
            this.cuitIngresado = newValue;
        },

        setNombreIngresado(newValue)
        {
            this.nombreIngresado = newValue;
        },

        setHabilitarBusquedaProgresiva(newValue)
        {
            this.habilitarBusquedaProgresiva = newValue;
        },

        setfiltrosImpGanancias(newValue)
        {
            this.filtrosImpGanancias = newValue;
        },

        setfiltrosIntegranteSociedades(newValue)
        {
            this.filtrosIntegranteSociedades = newValue;
        },

        setfiltrosEmpleador(newValue)
        {
            this.filtrosEmpleador = newValue;
        }


    }

/* 5to Paso => crearme una arrow function que reciba como parametro un nombre,
y que a partir del vector original, filtre unicamente aquellos donde el nombre
aparece en el atributo PadronAFIPDenominacion */

    const fnFiltrarPorNombre = (pNombre) =>
    {
        /* cuando una arrow function recibe un solo parametro. no es necesario poner las () y
        y recordar que el metodo filter que tienen los vectores. si o si evalua una expresión
        que debería devolver true o false. y necesita llevar la palabra return.

        como esta función. es una función donde hay una sola instrucción.

        a esta parte la evalua => element.PadronAFIPDenominacion.includes(pNombre) y solo se
        da cuenta que tiene que devolver true o false 
        */

        const vectorFiltrado = vectorContribuyentes.filter(element => element.PadronAFIPDenominacion.includes(pNombre));

        return vectorFiltrado;

    }

/* 6to. Vamos a generar una función en forma de arrow function. que se encargue
de tomar un vector de clientes y dibujar las filas de la tabla 
*/

    const fnGenerarFilasDeTabla = (pVector) =>
        {
        
            /* estoy recorriendo el vector que me pasaron por parametro recorriendolo con 
            map => recorre elemento a elemento y los transforma y en este caso.
            va a devolver por cada elemento una fila.
            */
            const filasDeTabla = pVector.map(element => 
                {

                    // aqui lo que estaria haciendo es creandome una fila de una tabla //
                    let FilaDeTabla = document.createElement("tr");

                    // aqui genero la celda1 y le asigno el valor
                    let celda1 = document.createElement("td");
                    celda1.textContent = element.PadronAFIPCUIT;

                    // aqui genero la celda 2 y le asigno el valor 
                    let celda2 = document.createElement("td");
                    celda2.textContent = element.PadronAFIPDenominacion;

                    // aqui genero la celda 3 y le asigno un valor momentaneo 
                    let celda3 = document.createElement("td");

                    let checkBox = document.createElement("input");
                    checkBox.type = "checkbox";
                    celda3.appendChild(checkBox);

                    // aqui genero la celda 4 y le asigno un valor momentaneo
                    let celda4 = document.createElement("td");

                    let imgDinamica = document.createElement("img");
                    imgDinamica.style.width = "24px";
                    imgDinamica.style.height = "24px";
                    imgDinamica.src = "./verdatos.png";
                    
                    celda4.appendChild(imgDinamica);

                    imgDinamica.addEventListener("click",()=>
                        {
                            alert("por aqui deberíamos visualizar el resto de los datos");
                        })


                    //celda4.textContent = 'aqui debería ir un input';

                    // aqui a todas las celdas las agrego a la fila
                    FilaDeTabla.appendChild(celda1);
                    FilaDeTabla.appendChild(celda2);
                    FilaDeTabla.appendChild(celda3);
                    FilaDeTabla.appendChild(celda4);

                    FilaDeTabla.addEventListener("click",()=>
                        {
                            alert("alert me estan haciendo click en la fila");
                        })

                    // retorno la fila completa. => esto es necesario por el meto map.
                    return FilaDeTabla; // esto seria un return elemento a elemento 

                })

            return filasDeTabla; // esto sería el return de todas las filas generadas y transformadas por map //
        }


/* 7mo) Vamos a generar una función. que tome un vector
de FILAS !!!. recorra fila x fila y las agregue al cuerpo de la tabla
*/

        /* Este proceso. es una arrow function. que recibe como parametro
        dos valores, uno un vector de filas y el otro el cuerpo de la tabla.
        recorre elemento a elemento y a medida que los va recorriendo
        los irá agregando en la tabla */

        const fnAgregarFilasATabla = (pFilas,pCuerpoDeTabla) =>
            {   
                fnLimpiarTabla(pCuerpoDeTabla);// antes de recorrer fila x fila. limpio la tabla.

                pFilas.forEach(element => 
                    {
                        pCuerpoDeTabla.appendChild(element); // aqui los agrega en la tabla

                    })

            }

/* (8vo) Vamos a hacer una arrow function que reciba el cuerpo 
de la tabla y la limpie */

        const fnLimpiarTabla = (pCuerpoDeTabla) =>
        {
            pCuerpoDeTabla.innerHTML = "";
        }


/* Función que reciba como parametro un cuit y que devuelva true si tiene
una longitud de 11 caracteres */

    const fnValidarCuit = cuit => 
    {
        // sería un operador ternario. que evalua si el cuit tiene 11 digitos.

        return cuit.length === 11 ? true:false

    }


    const fnFiltrarPorCuit = cuit => 
        {
            /* filter es un metodo que se aplica sobre los vectores y devuelve otro vector nuevo */

            const vectorFiltrado = vectorContribuyentes.filter(element => element.PadronAFIPCUIT === cuit);

            return vectorFiltrado;
        }


    /* esta es una función que se encargara de llenar los 
    selectores con valores que están dentro de un vector */

    const fnCompletarSelector = (idSelector,vectorDeOpciones) =>
        {

            /* recorrer el vector de opciones con un forEach
            y crear cada una de las opciones, que son los elementos
            que trae el vector y luego cargarlos en el selector */
            vectorDeOpciones.forEach(element => 
                {
                    // me genero una opcion dinamica
                    let opcionDinamica = document.createElement("option");

                    // aqui modifique valores de esa opcion dinamica que acabo de crear
                    opcionDinamica.value = element.codigo;
                    opcionDinamica.textContent = element.descripcion;

                    // agregar esa opcion dinamica al selector que me haya pasado por parametro //
                    idSelector.appendChild(opcionDinamica);

                })
        }

/* (2do) Agregar el evento load de la pagina */
window.addEventListener("load",()=>
{
    console.log("andando");

        /*----------------------------------------------------------------------*/
        /*(3ro:) Me vinculo a los elementos/objetos del DOM mediante constantes */
        /*----------------------------------------------------------------------*/

        // BLOQUE 01 - BUSQUEDA POR CUIT
            const idCuitIngresado = document.querySelector("#idCuitIngresado");
            const idBtnBuscarPorCuit = document.querySelector("#idBtnBuscarPorCuit");

        // BLOQUE 02 - BUSQUEDA POR NOMBRE
            const idNombreIngresado = document.querySelector("#idNombreIngresado");
            const idBtnBuscarPorNombre = document.querySelector("#idBtnBuscarPorNombre");
            const idCheckHabilitarBusquedaProgresiva = document.querySelector("#idCheckHabilitarBusquedaProgresiva");

        // BLOQUE 03 - LISTADO DE CLIENTES
            const idBtnVerClientesSeleccionados = document.querySelector("#idBtnVerClientesSeleccionados");
            const idCuerpoTabla = document.querySelector("#idCuerpoTabla");

        // BLOQUE 04 - FILTROS VARIOS 
           const idSelectorImpuestoGanancias = document.querySelector("#idSelectorImpuestoGanancias");
           const idSelectorIntegranteSociedades = document.querySelector("#idSelectorIntegranteSociedades");
           const idSelectorEsEmpleador = document.querySelector("#idSelectorEsEmpleador");
           const idBtnFiltrar = document.querySelector("#idBtnFiltrar");

        /* aqui lo que hago es cargar dinámicamente el selector 
         invocando la funcion fnCompletarSelector que recibe
         dos parametros. el selector y el vector que tiene las opciones
        */
           fnCompletarSelector(idSelectorImpuestoGanancias,FiltrosImpGanancias);

           fnCompletarSelector(idSelectorIntegranteSociedades,FiltrosIntegranteSociedades);

           fnCompletarSelector(idSelectorEsEmpleador,FiltrosEmpleador);



        // visualizamos por consola los elementos/objetos //
        console.log(idCuitIngresado);
        console.log(idBtnBuscarPorCuit);
        console.log(idNombreIngresado);
        console.log(idBtnBuscarPorNombre);
        console.log(idCuerpoTabla);
        console.log(idCheckHabilitarBusquedaProgresiva);

        /* MANTENER EL ESTADO DE LA APLICACIÓN */

        idCuitIngresado.addEventListener("input",()=>
            {
                estadoAplicacion.setCuitIngresado(idCuitIngresado.value);

                console.log(estadoAplicacion);
            })

        idNombreIngresado.addEventListener("input",()=>
            {
                estadoAplicacion.setNombreIngresado(idNombreIngresado.value);

                console.log(estadoAplicacion);

            })

        idCheckHabilitarBusquedaProgresiva.addEventListener("change",()=>
            {
                estadoAplicacion.setHabilitarBusquedaProgresiva(idCheckHabilitarBusquedaProgresiva.checked);

                console.log(estadoAplicacion);
            })


        idBtnBuscarPorNombre.addEventListener("click",()=>{

            alert("tenemos que buscar por nombre");

            console.log(estadoAplicacion);

            /* 
                1ro) Filtramos y seleccionamos los datos con la función Filtrar por Nombre
                y esa función filtrar por nombre. me devuelve un vector nuevo. que se llama
                VectorResultante.

            */

            const VectorResultante = fnFiltrarPorNombre(estadoAplicacion.nombreIngresado.toUpperCase());

            /* 2do) Esta función. se encargará de tomar los valores filtrados en el paso anterior
            y convertirlos en filas 
            */

            const filasDeTabla = fnGenerarFilasDeTabla(VectorResultante);


            /* 3er. Paso) Invocar a la función que se encargue de meter las filas en la tabla */

            fnAgregarFilasATabla(filasDeTabla,idCuerpoTabla);


            //console.log(VectorResultante);

            console.log(filasDeTabla);



        })


        idSelectorImpuestoGanancias.addEventListener("change",()=>
            {
                estadoAplicacion.setfiltrosImpGanancias(idSelectorImpuestoGanancias.value);

                console.log(estadoAplicacion);

            })

        
        idSelectorIntegranteSociedades.addEventListener("change",()=>{

            estadoAplicacion.setfiltrosIntegranteSociedades(idSelectorIntegranteSociedades.value);

            console.log(estadoAplicacion);

        })

        idSelectorEsEmpleador.addEventListener("change",()=>
            {

                estadoAplicacion.setfiltrosEmpleador(idSelectorEsEmpleador.value);

                console.log(estadoAplicacion);

            })



    idBtnBuscarPorCuit.addEventListener("click",()=>{

        //console.log(fnValidarCuit(estadoAplicacion.cuitIngresado));

        if(fnValidarCuit(estadoAplicacion.cuitIngresado))
        {
            /* aqui invocamos una funcion que se encarga de recorrer el vector
                y filtrar por un cuit. 
            */

            const VectorResultante = fnFiltrarPorCuit(estadoAplicacion.cuitIngresado);

            /* aqui lo muestro por consola */
            console.log(VectorResultante);

              /* 2do) Esta función. se encargará de tomar los valores filtrados en el paso anterior
            y convertirlos en filas 
            */

            const filasDeTabla = fnGenerarFilasDeTabla(VectorResultante);


            /* 3er. Paso) Invocar a la función que se encargue de meter las filas en la tabla */

            fnAgregarFilasATabla(filasDeTabla,idCuerpoTabla);


        }
        else
        {
            alert("por favor ingrese un cuit valido");
        }

    })

    }
)