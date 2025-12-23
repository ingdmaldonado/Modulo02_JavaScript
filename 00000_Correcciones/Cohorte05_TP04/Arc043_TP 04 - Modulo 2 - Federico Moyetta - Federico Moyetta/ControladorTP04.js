
import { cohorte01, cohorte02, cohorte03, cohorte04 } from "./datosTP04.js";
import { fnRecorreCohortes } from "./ModuloTP04.js";

window.onload = () => {

    const idbutton1 = document.querySelector("#idbutton1");
    const idbutton2 = document.querySelector("#idbutton2");
    const idbutton3 = document.querySelector("#idbutton3");
    const idbutton4 = document.querySelector("#idbutton4");
    const contenedorCohorte1 = document.querySelector("#contenedorCohorte1");
    const contenedorCohorte2 = document.querySelector("#contenedorCohorte2");
    const contenedorCohorte3 = document.querySelector("#contenedorCohorte3");
    const contenedorCohorte4 = document.querySelector("#contenedorCohorte4");
    const contenedorListado = document.querySelector("#contenedorListado");
    const idbtnFusion = document.querySelector("#idbtnFusion");
    const idbtnAlumCons = document.querySelector("#idbtnAlumCons");
    const idbtnAprobados = document.querySelector("#idbtnAprobados");
    const idbtnDesaprobados = document.querySelector("#idbtnDesaprobados");
    const idbtnOrdenar = document.querySelector("#idbtnOrdenar");
    const idbtnBusquedaDNI = document.querySelector("#idbtnBusquedaDNI");
    const ingreseDni = document.querySelector("#ingreseDni");
    const buscarXDni = document.querySelector("#buscarXDni");
    const cantAprob = document.querySelector("#cantAprob");
    const cantDesaprob = document.querySelector("#cantDesaprob");
    const btnAprobIfEl = document.querySelector("#btnAprobIfEl");
    const aprobadosIfEl = document.querySelector("#aprobadosIfEl");
    const btnAprobOpTern = document.querySelector("#btnAprobOpTern");
    const aprobOpTern = document.querySelector("#aprobOpTern");


    idbtnAlumCons.onclick = () => {

        console.log(`--------------- Éstos son los alumnos de la Cohorte 01 ------------------`);
        fnRecorreCohortes(cohorte01);
        console.log(`--------------- Éstos son los alumnos de la Cohorte 02 ------------------`);
        fnRecorreCohortes(cohorte02);
        console.log(`--------------- Éstos son los alumnos de la Cohorte 03 ------------------`);
        fnRecorreCohortes(cohorte03);
        console.log(`--------------- Éstos son los alumnos de la Cohorte 04 ------------------`);
        fnRecorreCohortes(cohorte04);

    };

    idbutton1.onclick = () => {
        contenedorCohorte1.innerHTML = "";
        cohorte01.forEach(alumno => {
            const contenedor = document.createElement("div");
            const cadaAlumno = document.createElement("p");
            cadaAlumno.textContent = `Dni: ${alumno.dni} - Nombre: ${alumno.nombre} - Apellido: ${alumno.apellido} - Nota: ${alumno.nota_final}`;
            contenedor.appendChild(cadaAlumno);
            contenedorCohorte1.appendChild(contenedor);
        });
    };

    idbutton2.onclick = () => {
        contenedorCohorte2.innerHTML = "";
        cohorte02.forEach(alumno => {
            const contenedor = document.createElement("div");
            const cadaAlumno = document.createElement("p");
            cadaAlumno.textContent = `Dni: ${alumno.dni} - Nombre: ${alumno.nombre} - Apellido: ${alumno.apellido} - Nota: ${alumno.nota_final}`;
            contenedor.appendChild(cadaAlumno);
            contenedorCohorte2.appendChild(contenedor);
        });
    };

    idbutton3.onclick = () => {
        contenedorCohorte3.innerHTML = "";
        cohorte03.forEach(alumno => {
            const contenedor = document.createElement("div");
            const cadaAlumno = document.createElement("p");
            cadaAlumno.textContent = `Dni: ${alumno.dni} - Nombre: ${alumno.nombre} - Apellido: ${alumno.apellido} - Nota: ${alumno.nota_final}`;
            contenedor.appendChild(cadaAlumno);
            contenedorCohorte3.appendChild(contenedor);
        });
    };

    idbutton4.onclick = () => {
        contenedorCohorte4.innerHTML = "";
        cohorte04.forEach(alumno => {
            const contenedor = document.createElement("div");
            const cadaAlumno = document.createElement("p");
            cadaAlumno.textContent = `Dni: ${alumno.dni} - Nombre: ${alumno.nombre} - Apellido: ${alumno.apellido} - Nota: ${alumno.nota_final}`;
            contenedor.appendChild(cadaAlumno);
            contenedorCohorte4.appendChild(contenedor);
        });
    };

    const cohortesUnificadas = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];

    idbtnFusion.onclick = () => {
        contenedorListado.innerHTML = "";
        cohortesUnificadas.forEach(alumno => {
            const contenedor = document.createElement("div");
            const cadaAlumno = document.createElement("p");
            cadaAlumno.textContent = `Dni: ${alumno.dni} - Nombre: ${alumno.nombre} - Apellido: ${alumno.apellido} - Nota: ${alumno.nota_final}`;
            contenedor.appendChild(cadaAlumno);
            contenedorListado.appendChild(contenedor);
        });
    };


    idbtnOrdenar.onclick = () => {
        const ordenarXNotas = cohortesUnificadas.sort((a, b) => a.nota_final - b.nota_final);
        contenedorListado.innerHTML = "";
        ordenarXNotas.forEach(alumno => {
            const contenedor = document.createElement("div");
            const cadaAlumno = document.createElement("p");
            cadaAlumno.textContent = `Dni: ${alumno.dni} - Nombre: ${alumno.nombre} - Apellido: ${alumno.apellido} - Nota: ${alumno.nota_final}`;
            contenedor.appendChild(cadaAlumno);
            contenedorListado.appendChild(contenedor);
        });
    };

    idbtnAprobados.onclick = () => {
        divAprobados.innerHTML = "";
        const alumnosAprobados = cohortesUnificadas.filter(alumno => alumno.nota_final > 5);
        alumnosAprobados.forEach(alumno => {
            const contenedor = document.createElement("div");
            const cadaAlumno = document.createElement("p");
            cadaAlumno.textContent = `Dni: ${alumno.dni} - Nombre: ${alumno.nombre} - Apellido: ${alumno.apellido} - Nota: ${alumno.nota_final}`;
            contenedor.appendChild(cadaAlumno);
            divAprobados.appendChild(contenedor);
            cantAprob.value = alumnosAprobados.length;
        });
    };

    idbtnDesaprobados.onclick = () => {
        divDesaprobados.innerHTML = "";
        const alumnosDesaprobados = cohortesUnificadas.filter(alumno => alumno.nota_final <= 5);
        alumnosDesaprobados.forEach(alumno => {
            const contenedor = document.createElement("div");
            const cadaAlumno = document.createElement("p");
            cadaAlumno.textContent = `Dni: ${alumno.dni} - Nombre: ${alumno.nombre} - Apellido: ${alumno.apellido} - Nota: ${alumno.nota_final}`;
            contenedor.appendChild(cadaAlumno);
            divDesaprobados.appendChild(contenedor);
            cantDesaprob.value = alumnosDesaprobados.length;
        });
    };

    idbtnBusquedaDNI.onclick = () => {
        buscarXDni.innerHTML = "";
        const dniIngresado = Number(ingreseDni.value);
        if (!dniIngresado) {
            buscarXDni.innerHTML = "<p>Ingrese un DNI válido</p>";
            ingreseDni.focus();
            return;
        }
        const alumnoEncontrado = cohortesUnificadas.find(a => Number(a.dni) === dniIngresado);
        if (alumnoEncontrado) {
            buscarXDni.innerHTML = `<p>Dni: ${alumnoEncontrado.dni} - Nombre: ${alumnoEncontrado.nombre} - Apellido: ${alumnoEncontrado.apellido} - Nota final: ${alumnoEncontrado.nota_final}</p>`;
        } else {
            buscarXDni.innerHTML = "<p>Alumno no encontrado</p>";
        }
        ingreseDni.value = "";
        ingreseDni.focus();
    };

    btnAprobIfEl.onclick = () => {
        const cantidadAprobados_ifElse = cohortesUnificadas.reduce((contador, alumno) => {
            if (Number(alumno.nota_final) > 5) {
                return contador=contador+1;
            } else {
                return contador;
            }
        }, 0);
        aprobadosIfEl.value = cantidadAprobados_ifElse;
    };

    btnAprobOpTern.onclick = () => {
        const cantidadAprobados_ternario = cohortesUnificadas.reduce((contador, alumno) => Number(alumno.nota_final) > 5 ? contador=contador+1 : contador, 0);
        aprobOpTern.value = cantidadAprobados_ternario;
    };

};