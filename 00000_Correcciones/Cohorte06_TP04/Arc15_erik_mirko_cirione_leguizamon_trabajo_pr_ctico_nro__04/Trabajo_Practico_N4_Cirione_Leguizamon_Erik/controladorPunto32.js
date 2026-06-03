
import { mostrarAlumnos, seleccionarCohorte, obtenerNombresDeCohortes, unificarTodasLasCohortes, mostrarCohorte, obtenerAprobados, obtenerDesaprobados, ordenarPorNotaAsc, buscarAlumnoPorDni, contarAprobadosIf, contarAprobadosTernario } from "./modelos.js";
import { crearOpcionSelect } from "./views.js";

window.addEventListener('DOMContentLoaded', () => {

    const estadoAplicacion = {
        datos: {
            selectorCorte: "",
            dniBusqueda: ""
        },

        guardar: function () {
            localStorage.setItem("estadoAplicacion", JSON.stringify(this.datos));
        },

        recuperar: function () {
            let guardado = localStorage.getItem("estadoAplicacion");
            if (guardado) {
                this.datos = JSON.parse(guardado);
                return true;
            }
            return false;
        }
    };


    /*
        Sub Punto 1
    */ 
    const selectCohortes = document.getElementById('selectCohortes');
    const btnListar = document.getElementById('btnListar');
    const btnGuardar = document.getElementById('btnGuardar');
    const btnRecuperar = document.getElementById('btnRecuperar');

    obtenerNombresDeCohortes().forEach(nombreCohorte => {  //obtengo una lista de las claves (nombres nomas) de todas las cortes para poder generar toodos los selec de forma dinamica
        const nuevaOpcion = crearOpcionSelect(nombreCohorte);
        selectCohortes.appendChild(nuevaOpcion);
    });

    selectCohortes.addEventListener('input', () => {
        estadoAplicacion.datos.selectorCorte = selectCohortes.value;
    })

    btnListar.addEventListener('click', () => {
        const cohorteSeleccionada = seleccionarCohorte(estadoAplicacion.datos.selectorCorte);

        if (cohorteSeleccionada) {
            mostrarAlumnos(cohorteSeleccionada);
        } else {
            console.log("No se seleccionó una cohorte válida o está vacía.");
        }
    });


    /*
        Sub-punto 2
    */

    const btnUnificarCohortes = document.getElementById('btnUnificarCohortes');

    btnUnificarCohortes.addEventListener('click', () => {
        const totalCohortes = unificarTodasLasCohortes();
        mostrarCohorte(totalCohortes);
        console.log("Cohortes unificadas con exito");
    });


    /*
        Sub-Punto 3
    */

    const btnUAlumnosAprobados = document.getElementById('btnUAlumnosAprobados');
    const btnUAlumnosDesaprobados = document.getElementById('btnUAlumnosDesaprobados');

    btnUAlumnosAprobados.addEventListener('click', () => {
        const totalAlumnos = unificarTodasLasCohortes();
        const alumnosAprobados = obtenerAprobados(totalAlumnos);
        //console.log(`Listado de Alumnos Aprobados ${alumnosAprobados}`);   Aca esta el Nuevo vector
        mostrarCohorte(alumnosAprobados);
    });

    btnUAlumnosDesaprobados.addEventListener('click', () => {
        const totalAlumnos = unificarTodasLasCohortes();
        const alumnosDesaprobados = obtenerDesaprobados(totalAlumnos);
        //console.log(`Listado de Alumnos Desaprobados ${alumnosDesaprobados}`); Aca esta el Nuevo vector
        mostrarCohorte(alumnosDesaprobados);
    });

    /*
        Sub-Punto 4
    */
    const btnOrdenarNotas = document.getElementById('btnOrdenarNotas');

    btnOrdenarNotas.addEventListener('click', () => {
        const totalAlumnos = unificarTodasLasCohortes();
        const alumnosOrdenados = ordenarPorNotaAsc(totalAlumnos);
        console.log("--- Inciso 4: Vector Resultante Ordenado ---");
        //console.log(alumnosOrdenados);     Aca esta el nuevo vector
        mostrarCohorte(alumnosOrdenados);
    });

    /*
        Sub-Punto 5
    */

    const inputDni = document.getElementById('inputDni');
    const btnBuscarDni = document.getElementById('btnBuscarDni');

    inputDni.addEventListener('input', () => {
        estadoAplicacion.datos.dniBusqueda = inputDni.value.trim(); // .trim() elimina espacios fantasma 
    });

    btnBuscarDni.addEventListener('click', () => {
        const dniObjetivo = estadoAplicacion.datos.dniBusqueda;

        if (!dniObjetivo) {
            alert("Por favor, ingrese un número de DNI para realizar la búsqueda.");
            return;
        }

        const totalAlumnos = unificarTodasLasCohortes();

        const alumnoEncontrado = buscarAlumnoPorDni(totalAlumnos, dniObjetivo);

        if (alumnoEncontrado) {
            console.log("¡Alumno encontrado con éxito!");
            console.log(alumnoEncontrado);

        } else {
            console.log(`No se encontró ningún alumno registrado con el DNI: ${dniObjetivo}`);
        }
    });

    /*
        Sub-Punto 6
    */

    const btnContarIf = document.getElementById('btnContarIf');
    const btnContarTernario = document.getElementById('btnContarTernario');

    btnContarIf.addEventListener('click', () => {
        const totalAlumnos = unificarTodasLasCohortes();
        const cantidadAprobados = contarAprobadosIf(totalAlumnos);

        console.log(`Cantidad total de alumnos aprobados: ${cantidadAprobados}`);
    });

    btnContarTernario.addEventListener('click', () => {
        const totalAlumnos = unificarTodasLasCohortes();
        const cantidadAprobados = contarAprobadosTernario(totalAlumnos);

        console.log(`Cantidad total de alumnos aprobados: ${cantidadAprobados}`);
    });

    /*
        botones de local Store
    */

    btnGuardar.addEventListener('click', () => {
        estadoAplicacion.guardar();
        console.log("¡Estado guardado con éxito en LocalStorage!");
    });

    btnRecuperar.addEventListener('click', () => {
        if (estadoAplicacion.recuperar()) {

            selectCohortes.value = estadoAplicacion.datos.selectorCorte;

            selectCohortes.dispatchEvent(new Event('change', { bubbles: true })); //Aca a traves de js simul un evento (como si lo hubiera hecho el usuario)

            inputDni.value = estadoAplicacion.datos.dniBusqueda || "";

            console.log(`¡Estado recuperado con éxito!`);

        } else {
            console.log("No se encontraron datos guardados previamente.");
        }
    });

});








