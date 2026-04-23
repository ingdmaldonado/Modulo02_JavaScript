
/*
Realizar un programa en JavaScript que permita ingresar las notas de los trabajos finales de los alumnos de
la diplomatura en “Desarrollo Web Full Stack con JavaScript” para ello se establecen las siguientes condiciones.
- No está establecido la cantidad de trabajos finales que se evaluarán
- Este será el cuadro con el que se analizará y asignará la clasificación de los mismos.
o Si la nota >= 0 y <= 4 serán trabajos desaprobados
o Si la nota > 4 y <= 7 serán trabajos aprobados
o Si la nota > 7 y <10 serán trabajos muy buenos
o Si la nota = 10 serán trabajos excelentes
- Contemplar que el operador podría ingresar notas incorrectas, es decir podría poner una nota menor
a cero o mayor a 10 con lo que sería claramente un error. Contemplar la cantidad de veces que se
equivoca.
- Siempre preguntar si desea continuar cargando notas.
Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el
DOM y cargar los datos de entrada por medio de prompt. */

let desaprobados = 0;
let aprobados = 0;
let muybueno = 0;
let excelentes = 0;
let contadorErrores = 0;

let alumno= "s";


while (alumno ===`S` || alumno === 's')
{
    let nota = Number(prompt(`Ingresar la nota (entre 0 y 10)`));

    if ((nota >= 0)&(nota <=4 ))
    {
        desaprobados += 1;
       
    }
    else if ((nota > 4)&(nota <=7 ))
    {
        aprobados += 1;
    }
    else if ((nota > 7 )&(nota < 10 )){
                muybueno += 1;
    }
      else if (nota === 10){
            excelentes += 1;
    }
    else{
        
      contadorErrores = contadorErrores + 1;
      alert(`este valor no está permitido, cargue nuevamente`);
        
    }    
    
    alumno = prompt(`Desea cargar otro alumno ?. (S/N) ?`);

}


console.log(`los alumnos desaprobados son:${desaprobados}`);
console.log(`los alumnos aprobados son:${aprobados}`);
console.log(`los alumnos muy buenos son:${muybueno}`);
console.log(`los alumnos excelentes son:${excelentes}`);
console.log(`Errores ${contadorErrores}`);

alert (` los alumnos desaprobados son:${desaprobados} 
  los alumnos aprobados son:${aprobados}
  los alumnos muy buenos son:${muybueno} 
  los alumnos excelentes son:${excelentes}
  Errores ${contadorErrores}`);