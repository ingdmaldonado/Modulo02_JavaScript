

export const fnPromedio = (nota1, nota2, nota3)=>{
   
    let resultado = 0;
    resultado = (nota1 + nota2 + nota3)/3;
    return resultado;
    };

export const fnEstadoAlumno =(notaPromedio)=>{
        let estadoAlumno;
        if(notaPromedio<=4){ estadoAlumno =`Alumno desaprobado`}
        else if ((notaPromedio>4)&&(notaPromedio <=7)) {estadoAlumno =`alumno aprobado`}
        else if ((notaPromedio>7)&&(notaPromedio <=9)) {estadoAlumno =`alumno muy bueno`}
        else if (notaPromedio ===10) {estadoAlumno =`alumno excelente`};

        return estadoAlumno;
    };   