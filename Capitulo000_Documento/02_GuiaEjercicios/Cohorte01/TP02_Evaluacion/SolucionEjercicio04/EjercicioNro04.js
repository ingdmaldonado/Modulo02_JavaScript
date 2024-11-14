

/*

Ejercicio propuesto Nro. 07: (estructura repetitiva while)
	Realizar un programa en JavaScript que permita ingresar las notas 
    de los trabajos finales de los alumnos de la diplomatura en 
    “Desarrollo Web Full Stack con JavaScript” para ello se establecen 
    las siguientes condiciones.
-	No está establecido la cantidad de trabajos finales que se evaluarán

-	Este será el cuadro con el que se analizará y asignará la clasificación de los mismos.
o	Si la nota >= 0 y <= 4 serán trabajos desaprobados
o	Si la nota > 4 y <= 7 serán trabajos aprobados
o	Si la nota > 7 y <10 serán trabajos muy buenos
o	Si la nota = 10 serán trabajos excelentes
-	Contemplar que el operador podría ingresar notas incorrectas, 
    es decir podría poner una nota menor a cero o mayor a 10 con lo que 
    sería claramente un error. Contemplar la cantidad de veces que se equivoca.
-	Siempre preguntar si desea continuar cargando notas ¿?.


*/

let continua = "SI";
let contadorNotas = 0;
let contadorErrores = 0;
let contadorDesaprobados = 0;
let contadorAprobados = 0;
let contadorMuyBuenos = 0;
let contadorExcelentes = 0;


while (continua === "SI")
    {
        let notaAlumno = Number (prompt("Ingrese la nota del alumno")) ;

        contadorNotas = contadorNotas + 1;

        if((notaAlumno < 0) || (notaAlumno > 10))
        {
            contadorErrores = contadorErrores + 1;
        }
        else
        {
            if((notaAlumno >= 0) && (notaAlumno <=4))
            {
                contadorDesaprobados = contadorDesaprobados + 1;
            }
            if((notaAlumno >4) && (notaAlumno <=7))
            {
                contadorAprobados = contadorAprobados + 1;
            }
            if((notaAlumno >7) && (notaAlumno <10))
            {
                contadorMuyBuenos = contadorMuyBuenos + 1;
            }
            if(notaAlumno ===10)
            {
                contadorExcelentes = contadorExcelentes + 1;
            }
        }
        
        continua =  prompt("continua con otro alumno ? (SI/NO)").toUpperCase();
    }

    console.log(`La Cantidad de Desaprobados fueron ${contadorDesaprobados}`);
    console.log(`La Cantidad de Aprobados fueron ${contadorAprobados}`);
    console.log(`La Cantidad de Muy Buenos fueron ${contadorMuyBuenos}`);
    console.log(`La Cantidad de Excelentes fueron ${contadorExcelentes}`);
    




