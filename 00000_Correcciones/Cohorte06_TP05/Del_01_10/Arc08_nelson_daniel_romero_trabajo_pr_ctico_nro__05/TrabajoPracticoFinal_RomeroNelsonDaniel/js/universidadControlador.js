import { recuperarPaisesOptimizado, recuperarUniversidadesOptimizado, guardarEstadoApp, recuperarEstadoApp } from "./universidadModelo.js"
import { crearFilasTabla, renderizarTabla, crearFila, crearMultiplesOpciones, renderizarSelector } from "./universidadVista.js"

//el controlador actúa como una interfaz entre el modelo y la vista, lo único que maneja son los eventos

window.onload = () => {
    const botonMostrarUniversidades = document.querySelector("#botonMostrarUniversidades");
    const selectorPais = document.querySelector("#selectorPais");
    const cuerpoDeTabla = document.querySelector("#cuerpoDeTabla");
    const tabla = document.querySelector("#tabla");

    //crea los elementos option del selector de país y los inserta
    const paises = recuperarPaisesOptimizado();
    const opciones = crearMultiplesOpciones(paises);
    renderizarSelector(opciones, selectorPais);

    recuperarEstadoApp()

    //guarda la opción seleccionada en cada cambio
    selectorPais.addEventListener("change", () => guardarEstadoApp())


    //la función anónima debe ser asíncrona debido a que llama una función asíncrona en su bloque de código
    botonMostrarUniversidades.addEventListener("click", async () => {
        let paisElegido = "";
        try {
            paisElegido = selectorPais.value;

            //obtiene y muestra los datos en JSON crudo
            const datosRecuperados = await recuperarUniversidadesOptimizado(paisElegido);
            console.log("JSON de universidades:");
            console.log(datosRecuperados);

            //crea una fila de la tabla usando la primera posición del array
            const fila = crearFila(datosRecuperados[0]);
            console.log("Fila creada con el primer elemento del array:");
            console.log(fila);

            //crea las filas de la tabla recorriendo el array y las muestras
            const filas = crearFilasTabla(datosRecuperados);
            console.log("Filas creadas para insertar en tabla:");
            console.log(filas);

            //vuelve visible la tabla
            tabla.hidden = false;

            //renderiza las filas creadas anteriormente
            renderizarTabla(filas, cuerpoDeTabla);
        } catch (error) {
            console.error(`${error.message}`);
        }
    })
}