//EJERCICIO N°1 - recorrido de las cohortes 
export const RecorreCohorte=(cohorteX)=>{
    cohorteX.forEach(alumno => {
        //utilice Destructuring
        const {apellido, nombre}=alumno;
        console.log(`Apellido: ${apellido} -- Nombre: ${nombre}`);
    });
};
//EJERCICIO N°3 - ver aprobados y desaprobados del vector unificado.
export const alumnosAprobados=(totalAlumnos)=>
    totalAlumnos.filter(alumno=>alumno.nota_final>5);

export const alumnosDesaprobados=(totalAlumnos)=>
    totalAlumnos.filter(alumno=>alumno.nota_final<=5);

//EJERCICIO N°4 - ordenar por nota de menor a mayor.
export const ordenarPorNotas=(totalAlumnos)=>{
    // Se hace una copia del array original usando spread (...)
    // para no modificar el array original
    const ordenNota=[...totalAlumnos].sort((menor, mayor)=>menor.nota_final-mayor.nota_final);
    console.log(ordenNota);
};

//EJERCICIO N°5 - buscar el alumno por su DNI del vector unificado.
export const busquedaAlumno=(totalAlumnos, documento)=> // se pasa como parametro el vector y dni que se desea buscar.
    totalAlumnos.find(alumno=>alumno.dni===documento);

//EJERCICIO N°6 - contabilizar la cantidad de alumnos aprobados.
export const contabilizarAprobados1=(totalAlumnos)=>{
    const resultado=totalAlumnos.reduce((contador, alumno)=>{
        if(alumno.nota_final>5){
            contador++;
        }
        return contador;
     }, 0);
    console.log(resultado);
};

export const contabilizarAprobados2=(totalAlumnos)=>{
    const resultado=totalAlumnos.reduce((contador, alumno)=>
        alumno.nota_final>5 ? contador +1 : contador, 0);
    console.log(resultado);
};



