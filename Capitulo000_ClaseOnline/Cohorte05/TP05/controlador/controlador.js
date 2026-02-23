
import {fnUnirPaisesDelMundo} from "../modelo/fusionDeDatos.js";
import {fnGenerarVectorSimple} from "../modelo/fusionDeDatos.js";


const fnCrearElementosParaDOM = (PaisesSimples)=>{

    const elementosDOM = PaisesSimples.map(pais => {

        /*nombreOficial, poblacion, png*/

        const {nombreOficial,poblacion,png} = pais;

        const contenedor = document.createElement("div");
        const titulo = document.createElement("h2");
        titulo.textContent = nombreOficial;

        const tituloPoblacion = document.createElement("h3");
        tituloPoblacion.textContent = poblacion;
        
        const imagenBandera = document.createElement("img");
        imagenBandera.width = 40;
        imagenBandera.src = png;

        const lineaDivisoria = document.createElement("hr");

        contenedor.appendChild(lineaDivisoria);
        contenedor.appendChild(titulo);
        contenedor.appendChild(tituloPoblacion);
        contenedor.appendChild(imagenBandera);
        contenedor.appendChild(lineaDivisoria);

        return contenedor;
    });

    return elementosDOM;

};

const fnRender = (elementosDelDOM,idContenedor)=>{

    idContenedor.innerHTML = "";

    elementosDelDOM.forEach(elemento => idContenedor.appendChild(elemento));
    
};



window.onload = async ()=>{

    console.log(`aplication is running`);

    const idRecuperarPaises = document.querySelector("#idRecuperarPaises");
    const idContenedor = document.querySelector("#idContenedor");

    idRecuperarPaises.onclick = async ()=>{

        const Paises = await fnUnirPaisesDelMundo();

        const PaisesSimples = fnGenerarVectorSimple(Paises);

        console.log(PaisesSimples);

        fnCrearElementosParaDOM(PaisesSimples);

        const elementosDelDOM = fnCrearElementosParaDOM(PaisesSimples);

        console.log(elementosDelDOM);

        fnRender(elementosDelDOM,idContenedor);


    };


    /* aqui estoy fusionando todos los paises
    pero me devuelve una estructura de objetos
    compleja. y que no es util para lo que yo necesito */

    

};

/*
    MODELO VISTA CONTROLADOR


    VISTA: 
        ESTATICOS: HTML, CSS, ...

        DINAMICA: RENDERIZACION DINAMICA DEL COM
            * map
            * ForEach

    CONTROLADOR:

        - CAPTURAR LOS EVENTOS QUE SUCEDEN EN EL DOM (Document Object Model)
            - click
            - checkbox
            - selectores
            - capturar los valores que se ingresaron en los input
            - onload

            - Buscar => click del Buscar. capturar el valor que ingreso en un input =>

                tiene que llamar a una función del Modelo
                que se encargue del trabajo "SUCIO"
                de conectarse al endPoint en la nube
                pasarle el parametro del valor que quiere buscar
                esa función del Modelo, seguramente
                recuperara datos en formato JSON. y
                el controlador, se va a encargar de tomar
                esos datos (esos resultados) y dibujarlos en el DOM

    MODELO: (No significa que sea un solo archivo)
        - recuperar datos desde APIS
        - recuperar datos desde APIs haciendo funciones
        que reciban parametros y devuelve un dato en particular
        - recuperar datos desde APIs => localStorage

        - recuperar datos desde localStorage => vectores

        - find, 
        - reduce

        - consultar datos de una persona desde el REGISTRO NACIONAL DE LAS PERSONAS





*/