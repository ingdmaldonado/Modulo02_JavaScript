{
 let desaprobados = 0;
 let aprobados = 0;
 let muybueno = 0;
 let excelente = 0;
 let alumno = "s";
 let contadordeErrores = 0;

 while (alumno === `s` || alumno === `s`)
 {
    let nota = Number(prompt(`ingrese la nota (entre 0 y 10)`));

    if ((nota >= 0)&(nota <= 4 ))
    {
        desaprobados = desaprobados +1;
    }
    else if ((nota >4)&(nota <=7))
    {
        aprobados = aprobados +1;
    }
    else if ((nota >7)&(nota <10))
    {
        muybueno = muybueno + 1;
    }
    else if ((nota === 10))
    {
        excelente = excelente + 1;
    }
    else 
    {
        contadordeErrores = contadordeErrores +1;
        alert(`valor no permitido, ingrese nuevamente`);
    }
    alumno = prompt(`desea cargar otro alumno ?. (s/n)?`);
}
console.log("desaprobados: ", desaprobados);
console.log("aprobados: ",aprobados);
console.log("muy buenos: ", muybueno);
console.log("excelentes: ",excelente);
console.log(`errores ${contadordeErrores}`);    
}
