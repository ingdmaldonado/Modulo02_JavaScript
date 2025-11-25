/*Realizar una arrow function que reciba como parámetro una nota promedio y que según la nota recibida
como parámetro devuelva un texto que diga los siguientes mensajes.

• Si la nota <= 4 debe devolver “Desaprobado”
• Si la nota > 4 y nota <= 7 debe devolver “Aprobado”
• Si la nota >7 y nota <=9 debe devolver “Muy Bueno”
• Si la nota = 10 debe devolver “Excelente”
Nota: Debe Devolver un Texto*/


/* declaracion de la Arrow Fuction*/

export const fncalcularNotaPromedio=(notaObtenida)=>
{
    let condicionDelAlumno=0;
         
       
    if(notaObtenida <= 4 )  /* Si la nota <= 4 debe devolver “Desaprobado”*/


        {

            condicionDelAlumno= "Desaprobado";
                      
        }

    else
    {
         if((notaObtenida >4 ) && (notaObtenida <=7 )) /* Si la nota > 4 y nota <= 7 debe devolver “Aprobado”*/

        condicionDelAlumno= "Aprovado";

        else
            {
                ((notaObtenida >7 ) && (notaObtenida <=9 )) /*  Si la nota >7 y nota <=9 debe devolver “Muy Bueno”*/

              condicionDelAlumno= "Muy Bueno";
            }
        

            if(notaObtenida === 10 ) 
             condicionDelAlumno= " Excelente";  /*Si la nota = 10 debe devolver “Excelente”*/
       
            else
             { 
                if(notaObtenida > 10 ) 
                condicionDelAlumno= " Incorrecto"; /* en esta lína prueboo el valor fuera de rango*/
             }
       
    }
           

    return condicionDelAlumno; /* retorno del valor de la función a controlar*/

    
};


