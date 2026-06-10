
import {cohorte01,cohorte02,cohorte03,cohorte04,fnRetornaCorteSeleccionada,fnMuestraAlumno,fnMuestraAlumnonNota,fnCuentaAprobados,fnCuentaDesAprobados, fnCuentaAprobadosOT,fnCuentaDesAprobadosOT} from "./modelo.js";
import {fnGenerarRenglonTabla,fnInsrtaRenglonTabla,fnGenerarRenglonTabla1} from "./vista.js";


window.onload = ()=>{

//    const EstadoAplicacion = {CodigoCohorte:0, NombreCohorte:"" }

    // Capturas de la Vista PUNTO 1
    const IdSeleccioneCohorte = document.querySelector("#IdSeleccioneCohorte")
    const IdListaCohortes = document.querySelector("#IdListaCohortes");

    // Capturas de la Vista PUNTO 2 
    const IdConsulteTodas = document.querySelector("#IdConsulteTodas");
    const IdListaTodasCohortes = document.querySelector("#IdListaTodasCohortes")

    // Capturas de la Vista PUNTO 3    
    const IdAprobados = document.querySelector("#IdAprobados");
    const IdListaAprobados = document.querySelector("#IdListaAprobados");
    const IdDesaprobados = document.querySelector("#IdDesaprobados");
    const IdListaDesAprobados = document.querySelector("#IdListaDesAprobados");

    // Capturas de la Vista PUNTO 4    
    const IdBusquedaDni = document.querySelector("#IdBusquedaDni");
    const IdBuscarxDni = document.querySelector("#IdBuscarxDni");    
    const IdNombreAlu = document.querySelector("#IdNombreAlu");

    // Capturas de la Vista PUNTO 5    
    const IdOrdenarLista = document.querySelector("#IdOrdenarLista");
    const IdListaPorNota = document.querySelector("#IdListaPorNota")

    // Capturas de la Vista PUNTO 6    
    const IdChkAprobados = document.querySelector("#IdChkAprobados");
    const IdCantAbrobados = document.querySelector("#IdCantAbrobados");
    const IdCantAbrobadosOT = document.querySelector("#IdCantAbrobadosOT");
    const IdChkDesAprobados = document.querySelector("#IdChkDesAprobados");
    const IdCantDesAbrobados = document.querySelector("#IdCantDesAbrobados");
    const IdCantDesAbrobadosOT = document.querySelector("#IdCantDesAbrobadosOT");

    //spread operator
    const TodasLasCohortes = [...cohorte01,...cohorte02,...cohorte03,...cohorte04];
    
// PUNTO 1
// PUNTO 1
    IdSeleccioneCohorte.onchange = ()=>{
        const IdCohorteSeleccionada = Number(IdSeleccioneCohorte.value);
        const CohorteSeleccionada = fnRetornaCorteSeleccionada(IdCohorteSeleccionada);

        const TablaCohorte = fnGenerarRenglonTabla(CohorteSeleccionada);
        fnInsrtaRenglonTabla(TablaCohorte,IdListaCohortes);
    };
    
// PUNTO 2
// PUNTO 2
IdConsulteTodas.onclick = ()=>{

    const ListadoTodos = fnGenerarRenglonTabla(TodasLasCohortes);
    fnInsrtaRenglonTabla(ListadoTodos,IdListaTodasCohortes);
    const ListadoTodos1 = fnMuestraAlumno(TodasLasCohortes,"ALUMNOS DE TODAS LAS COHORTES");
    console.log(ListadoTodos1);

};


// PUNTO 3
// PUNTO 3
IdAprobados.onclick = ()=>{
    const AlumnosAprobados = TodasLasCohortes.filter(alumnos => alumnos.nota_final > 5 );
    fnMuestraAlumnonNota(AlumnosAprobados,"ALUMNOS APROBADOS");

    const AlumnosAprobadosLi = TodasLasCohortes.filter(alumnos => alumnos.nota_final > 5 );
    const ListadoAlumnosAprobados = fnGenerarRenglonTabla1(AlumnosAprobadosLi);
    fnInsrtaRenglonTabla(ListadoAlumnosAprobados,IdListaAprobados);
/*
    const ListadoTodos1 = fnMuestraAlumnonNota(ListadoTodos1,"ALUMNOS Aprobados");
    console.log(ListadoTodos1);
    */
};

IdDesaprobados.onclick = ()=>{
    const AlumnosDesAprobados = TodasLasCohortes.filter(alumnos => alumnos.nota_final <= 5 );
    fnMuestraAlumnonNota(AlumnosDesAprobados,"ALUMNOS DESAPROBADOS");  
    
    const AlumnosDesAprobadosLi = TodasLasCohortes.filter(alumnos => alumnos.nota_final <= 5 );
    const ListadoAlumnosDesAprobados = fnGenerarRenglonTabla1(AlumnosDesAprobadosLi);
    fnInsrtaRenglonTabla(ListadoAlumnosDesAprobados,IdListaDesAprobados);
    

};

// PUNTO 4
// PUNTO 4
IdOrdenarLista.onclick = ()=>{
    TodasLasCohortes.sort((a,b)=> a.nota_final - b.nota_final);
        TodasLasCohortes.forEach(alumnos => {
        console.log(`Apellido: ${alumnos.apellido} - Nombre: ${alumnos.nombre} - Nota: ${alumnos.nota_final}`);
    });

    const AlumnosOrdenNotas = TodasLasCohortes.sort((a,b)=> a.nota_final - b.nota_final);
    const ListadoAlumnosPorNotas = fnGenerarRenglonTabla1(AlumnosOrdenNotas);
    fnInsrtaRenglonTabla(ListadoAlumnosPorNotas,IdListaPorNota);


};

// PUNTO 5
// PUNTO 5
IdBuscarxDni.onclick = ()=>{
    const NombreAlumno = TodasLasCohortes.find(alumno => Number(alumno.dni) === Number(IdBusquedaDni.value) );
    if(NombreAlumno){
        IdNombreAlu.textContent = `El alumno Buscado es: ${NombreAlumno.apellido}, ${NombreAlumno.nombre} - Dni: ${NombreAlumno.dni} Nota: ${NombreAlumno.nota_final}` 
    }
    else{
        IdNombreAlu.textContent = `El alumno Buscado NO EXISTE` 
    }

};


// PUNTO 6
// PUNTO 6
IdChkAprobados.onchange = ()=>{
    if(IdChkAprobados.checked){
        let CantidadAluAprobados = fnCuentaAprobados(TodasLasCohortes);
        IdCantAbrobados.textContent = `Alumnos APROBADOS : ${CantidadAluAprobados}`   

        let CantidadAluAprobadosOT = fnCuentaAprobadosOT(TodasLasCohortes);
        IdCantAbrobadosOT.textContent = `Alumnos APROBADOS con Op. ternario: ${CantidadAluAprobadosOT}` 
    }
    else
    {
        IdCantAbrobados.textContent = ``
        IdCantAbrobadosOT.textContent = ``
    }
};

IdChkDesAprobados.onchange = ()=>{
    if(IdChkDesAprobados.checked){
        let CantidadAluDesAprobados = fnCuentaDesAprobados(TodasLasCohortes);
        IdCantDesAbrobados.textContent = `La Cantidad de Alumnos DESAPROBADOS es ${CantidadAluDesAprobados}` 
        
        let CantidadAluDesAprobadosOT = fnCuentaDesAprobadosOT(TodasLasCohortes);
        IdCantDesAbrobadosOT.textContent = `Alumnos DESAPROBADOS con Op. ternario: ${CantidadAluDesAprobadosOT}`
    }
    else
    {
        IdCantDesAbrobados.textContent = ``
        IdCantDesAbrobadosOT.textContent = ``
    }
};

};