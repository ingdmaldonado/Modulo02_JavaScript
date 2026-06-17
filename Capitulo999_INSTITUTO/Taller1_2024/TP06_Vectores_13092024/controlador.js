

const paises = [
    { 
        nombre: "Argentina", 
        bandera: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
        capital: "Buenos Aires",
        poblacion: 45376763,
        continente: "América del Sur"
    },
    { 
        nombre: "Brasil", 
        bandera: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
        capital: "Brasilia",
        poblacion: 18000000,
        continente: "América del Sur"
    },
    { 
        nombre: "Estados Unidos", 
        bandera: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
        capital: "Washington D.C.",
        poblacion: 331893745,
        continente: "América del Norte"
    },
    { 
        nombre: "España", 
        bandera: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
        capital: "Madrid",
        poblacion: 47351567,
        continente: "Europa"
    },
    { 
        nombre: "Francia", 
        bandera: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
        capital: "París",
        poblacion: 15000000,
        continente: "Europa"
    },
    { 
        nombre: "Alemania", 
        bandera: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
        capital: "Berlín",
        poblacion: 83155031,
        continente: "Europa"
    },
    { 
        nombre: "Japón", 
        bandera: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
        capital: "Tokio",
        poblacion: 125584838,
        continente: "Asia"
    },
    { 
        nombre: "Italia", 
        bandera: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
        capital: "Roma",
        poblacion: 60367477,
        continente: "Europa"
    },
    { 
        nombre: "México", 
        bandera: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
        capital: "Ciudad de México",
        poblacion: 126705138,
        continente: "América del Norte"
    },
    { 
        nombre: "Reino Unido", 
        bandera: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
        capital: "Londres",
        poblacion: 67215293,
        continente: "Europa"
    },
    { 
        nombre: "Canadá", 
        bandera: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
        capital: "Ottawa",
        poblacion: 38131104,
        continente: "América del Norte"
    },
    { 
        nombre: "Australia", 
        bandera: "https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg",
        capital: "Canberra",
        poblacion: 25766605,
        continente: "Oceanía"
    },
    { 
        nombre: "India", 
        bandera: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
        capital: "Nueva Delhi",
        poblacion: 1417173173,
        continente: "Asia"
    },
    { 
        nombre: "Rusia", 
        bandera: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg",
        capital: "Moscú",
        poblacion: 143376126,
        continente: "Europa y Asia"
    },
    { 
        nombre: "China", 
        bandera: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
        capital: "Pekín",
        poblacion: 1411780000,
        continente: "Asia"
    }
];

console.log(paises);

    const cuadrado = (numero)=>
        {
            return numero * numero;
        }

    const cuadrado2 = numero => numero * numero;
    

window.addEventListener("load",()=>
{

    const idBtn01 = document.querySelector("#idBtn01");
    const idBtn02 = document.querySelector("#idBtn02");
    const idBtn03 = document.querySelector("#idBtn03");
    const idBtn04 = document.querySelector("#idBtn04");

    const idSelectorDePais = document.querySelector("#idSelectorDePais");

    console.log(idBtn01);
    console.log(idBtn02);
    console.log(idBtn03);
    console.log(idBtn04);
    console.log(idSelectorDePais);

    /**** aqui voy a repasar el forEach */

    idBtn01.addEventListener("click",()=>
        {

            /* el forEach recorre todos los elementos.
            no tengo forma de salir del forEach 
            no devuelve nada. solamente recorre y punto.
            */
            
            paises.forEach((element)=>
                {
                    console.log(element);
                    console.log(element.nombre);
                })



        })

    /* el filter toma una porción del vector que
    estoy recorriendo y me devuelve otro vector
    distinto */

    idBtn02.addEventListener("click",()=>
        {
            /* este ejemplo son varias lineas */
            const paisesChicos = paises.filter((element)=>
                {
                    console.log(element);

                    if((element.poblacion <= 20000000) && (element.continente ==='Europa'))
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                })

            console.log(paisesChicos);

            /* dos lineas */
            const paisesChicos2 = paises.filter(element =>element.poblacion <= 20000000 && element.continente ==='Europa');
            console.log(paisesChicos2);

        })

    /* map, recorre el vector aplicando 
    una función de transformación de los elementos
    y devuelve otro vector */

    idBtn03.addEventListener("click",()=>
        {
            const VectorDeNumeros = [2,1,7,-1,15];

            const NuevoVector = VectorDeNumeros.map((element)=>
                {
                    return element * element;
                })

            console.log(NuevoVector);

        })

    idBtn04.addEventListener("click",()=>
        {

            idSelectorDePais.innerHTML = "";

            paises.forEach(element =>
                {
                    let opcionDinamica = document.createElement("option");
                    opcionDinamica.textContent = `${element.nombre} - ${element.capital}`;
                    idSelectorDePais.appendChild(opcionDinamica);
                })

        })
})