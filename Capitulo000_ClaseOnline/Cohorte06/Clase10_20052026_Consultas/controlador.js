
const paises = [
  {
    nombre: "Argentina",
    capital: "Buenos Aires",
    continente: "América",
    bandera: "https://flagcdn.com/w320/ar.png"
  },
  {
    nombre: "Brasil",
    capital: "Brasilia",
    continente: "América",
    bandera: "https://flagcdn.com/w320/br.png"
  },
  {
    nombre: "Chile",
    capital: "Santiago",
    continente: "América",
    bandera: "https://flagcdn.com/w320/cl.png"
  },
  {
    nombre: "Uruguay",
    capital: "Montevideo",
    continente: "América",
    bandera: "https://flagcdn.com/w320/uy.png"
  },
  {
    nombre: "Paraguay",
    capital: "Asunción",
    continente: "América",
    bandera: "https://flagcdn.com/w320/py.png"
  },
  {
    nombre: "Perú",
    capital: "Lima",
    continente: "América",
    bandera: "https://flagcdn.com/w320/pe.png"
  },
   {
    nombre: "Colombia",
    capital: "Bototá",
    continente: "América",
    bandera: "https://flagcdn.com/w320/pe.png"
  }
];


window.onload = ()=>{

    const idGenerador = document.querySelector("#idGenerador");
    const idContenedor1 = document.querySelector("#idContenedor1");
    const idDatosPais = document.querySelector("#idDatosPais");
    const idImagen = document.querySelector("#idImagen");
    const idSelectorPais = document.querySelector("#idSelectorPais");

    idGenerador.onclick = ()=>{

        console.log(paises);

        /* Ejemplo 01: todo este fragmento de codigo genera un elemento pero
        no lo inscrusta en ningun lado */

        const botonDinamico = document.createElement("input");
        botonDinamico.type = "button";
        botonDinamico.value = "soy un boton Generado dinamicamente";

        idContenedor1.appendChild(botonDinamico);

        /* Ejemplo 02: La idea es recorrer el vector de Paises, 
        por cada pais generar un boton, que ese boton tenga 
        en su propiedad value (el nombre del pais) y que cuando
        presionen sobre el pais, en la consola o en algun lugar
        mostremos la capital 
        
        en este ejemplo. no utilice destructuring

        */

        paises.forEach((pais)=>{

            /* esta parte construyo el elemento u objeto */
            const boton = document.createElement("input");
            boton.type = "button";
            boton.value = pais.nombre;

            /* delegar comportamiento a ese boton dinamico */
            boton.onclick = ()=>{

                //alert(`La capital es ${pais.capital} y es del continente ${pais.continente}`);

                idDatosPais.textContent = `La capital es ${pais.capital} y es del continente ${pais.continente}`;

                idImagen.src = pais.bandera;

            };

            /* esta lo agrega y el navegador renderiza el 
            elemento u objeto sin recargar la página. es d
            decir esta haciendo renderización "parcial" de la
            página */

            idContenedor1.appendChild(boton);

        });

        /* Ejemplo 03: hare lo mismo que en el ejemplo 02, con 
        la diferencia que aplicaré destructuring para descomponer
        el objeto pais en constantes por separado. y tengo dos
        opciones
            1) destructuring en el cuerpo de la función
            2) hacer destructuring en el encabezado de la funcion
        */

            paises.forEach(({nombre,capital,continente,bandera})=>{

               // const {nombre,capital,continente,bandera} = pais;

                /* esta parte construyo el elemento u objeto */
                const boton = document.createElement("input");
                boton.type = "button";
                boton.value = nombre;

                /* delegar comportamiento a ese boton dinamico */
                boton.onclick = ()=>{

                    //alert(`La capital es ${pais.capital} y es del continente ${pais.continente}`);

                    idDatosPais.textContent = `La capital es ${capital} y es del continente ${continente}`;

                    idImagen.src = bandera;

                };

                /* esta lo agrega y el navegador renderiza el 
                elemento u objeto sin recargar la página. es d
                decir esta haciendo renderización "parcial" de la
                página */

                idContenedor1.appendChild(boton);

        });

        /* Ejemplo 04: Voy a completar dinamicamente
        un selector HTML que ya existe previamente 
        en el documento HTML. */

        paises.forEach(({nombre,capital})=>{

            const opcionDinamica = document.createElement("option");

            opcionDinamica.textContent = `${nombre} - ${capital}`;

            idSelectorPais.appendChild(opcionDinamica);

        });

    };


};