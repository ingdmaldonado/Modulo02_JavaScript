import {cohortes,cohorte01,cohorte02,cohorte03,cohorte04} from "./datos.js";


//---------------------------------------------------------------------------------------------------------------------------
//--------------------------------------Oculto todos los Div select Cohorte -------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------

export const ocultar = () => {
    idSelectCohortes.style.display = 'none'; 
    }
    

//---------------------------------------------------------------------------------------------------------------------------
//-------------------------------------- COLOCA TITULOS ---------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------

export const fnTitulo = (xTitulo) => {
    idTitulo.textContent = xTitulo;
};

//---------------------------------------------------------------------------------------------------------------------------
//--------------------------------------FUNCION QUE MUESTRA UN SELECT DE LAS DISTINTAS COHORTES------------------------------
//---------------------------------------------------------------------------------------------------------------------------

export const fnMuestraListadoCohortes = (cohortesx => {
        //Limpio 
        idSelectCohortes.innerHTML = "";
        idResultados.innerHTML = "";
        //Cargo Opcion Seleccionar Cohorte
        const Seleccionar = document.createElement("option");
        Seleccionar.value = "";
        Seleccionar.textContent = "Seleccionar Cohorte";
        Seleccionar.disabled = true;
        Seleccionar.selected = true;
        idSelectCohortes.appendChild(Seleccionar);
    
        cohortesx.forEach((cohortexx, index) => {

        const listCohortes = document.createElement("option");
        listCohortes.textContent = cohortexx.nombre;
        listCohortes.value = index;   // ← valor correcto
        idSelectCohortes.appendChild(listCohortes);

    });    

       
    idSelectCohortes.onchange = () => {

        const idx = Number(idSelectCohortes.value);
        fnTitulo(`Listado de Alumnos -  ${cohortesx[idx].nombre}` );
        if (isNaN(idx)) return;

        const alumnos = cohortesx[idx].id;

        let campos = ["apellido", "nombre"]
        fnMuestraVectorAlumnos(alumnos,campos);
        
    };

}); 



//---------------------------------------------------------------------------------------------------------------------------
//--------------------------------------FUNCION QUE MUESTRA VECTOR DE ALUMNOS EN COSOLE.LOG Y EN PANTALLA--------------------
//---------------------------------------------------------------------------------------------------------------------------

export const fnMuestraVectorAlumnos = ((Alumnos, campos) => {

    // Limpio pantalla
    idResultados.innerHTML = "";

    // Creo tabla
    const tabla = document.createElement("table");
    tabla.style.borderCollapse = "collapse";

    // Encabzado Tabla
    let encabezado = "<tr>";
    campos.forEach(campo => {
        encabezado += `<th style="border:1px solid #ddd;padding:6px">${campo.toUpperCase()}</th>`;
    });
    encabezado += "</tr>";

    tabla.innerHTML = encabezado;

    // Filas
    Alumnos.forEach(Datos => {

        // Solo para consola (mostrar campos seleccionados)
        const linea = campos.map(campo => Datos[campo]).join(" , ");
        console.log(linea);

        // Crear fila
        let fila = "<tr>";
        campos.forEach(campo => {
            fila += `<td style="border:1px solid #ddd;padding:6px">${Datos[campo]}</td>`;
        });
        fila += "</tr>";

        tabla.innerHTML += fila;
    });

    // Mostrar tabla en pantalla
    idResultados.appendChild(tabla);

});




//---------------------------------------------------------------------------------------------------------------------------
//--------------------------------------FUNCION FILTRA APROBADOS ------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------

export const filtrarAprobados = (vector) => vector.filter(a => a.nota_final > 5);

//---------------------------------------------------------------------------------------------------------------------------
//--------------------------------------FUNCION FILTRA DESAPROBADOS----------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------


export const filtrarDesaprobados = (vector) => vector.filter(a => a.nota_final <= 5);


//---------------------------------------------------------------------------------------------------------------------------
//--------------------------------------FUNCION ORDENA POR NOTA -------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------


export const ordenarPorNota = (vector) => {
    return [...vector].sort((a, b) => a.nota_final - b.nota_final);
};

//---------------------------------------------------------------------------------------------------------------------------
//--------------------------------------FUNCION BUSCA ALUMNO POR DNI --------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------


export const buscarAlumnoPorDni = (vector, dni) => {

    const alumno = vector.find(a => a.dni === dni);

    if (alumno) {
        return {
            encontrado: true,
            mensaje: "Alumno encontrado",
            datos: [alumno]
        };
    } else {
        return {
            encontrado: false,
            mensaje: "No existe alumno con ese DNI",
            datos: null
        };
    }
};

//---------------------------------------------------------------------------------------------------------------------------
//--------------------------------------FUNCION CUENTA POR METODO (IF) ALUMNOS APROBADOS ------------------------------------
//---------------------------------------------------------------------------------------------------------------------------

export const contarAprobadosIF = (vector) => {
    return vector.reduce((acum, alumno) => {
        if (alumno.nota_final > 5) 
            return acum + 1;
        else 
            return acum;
    }, 0);
};

//---------------------------------------------------------------------------------------------------------------------------
//--------------------------------------FUNCION CUENTA POR METODO (TERNARIO) ALUMNOS APROBADOS ------------------------------
//---------------------------------------------------------------------------------------------------------------------------

export const contarAprobadosTernario = (vector) => {
    
    return vector.reduce((acc, a) =>
        a.nota_final > 5 ? acc + 1 : acc, 0);
};
