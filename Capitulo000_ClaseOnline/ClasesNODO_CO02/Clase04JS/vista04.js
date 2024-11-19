
/*Desarrolla un programa en JavaScript 
que asigne una calificación a un estudiante
basado en su puntuación en una prueba. 
El programa debe cumplir las siguientes condiciones:

La puntuación estará en el rango de 0 a 100. 

Si la puntuación excede este rango o es negativa, 
el programa debe indicar que la puntuación es inválida.
Las calificaciones se asignarán de acuerdo con el siguiente criterio:

A: si la puntuación está en el rango de 90 a 100, inclusive.
B: si la puntuación está en el rango de 80 a 89, inclusive.
C: si la puntuación está en el rango de 70 a 79, inclusive.
D: si la puntuación está en el rango de 60 a 69, inclusive.
F: si la puntuación está en el rango de 0 a 59, inclusive.
Si la puntuación es mayor a 100 o menor a 0, 


el programa deberá indicar que la puntuación está fuera del rango permitido.
*/

{
    let notaDeEvaluacion = 0;

    notaDeEvaluacion = Number(prompt("ingrese la nota"));

    console.log(notaDeEvaluacion);

    let calificacionEscrita = 
        notaDeEvaluacion > 100 || notaDeEvaluacion < 0 // este operador evalua que este fuera de rango
            ? "nota invalida"
        :notaDeEvaluacion >= 0 && notaDeEvaluacion < 60 // este operador evalua cuando es letra F
            ? "calificacion F"
        :notaDeEvaluacion >= 60 && notaDeEvaluacion < 70 // este operador evalua la nota o calificación D 
            ? "califacion D"
        :notaDeEvaluacion >= 70 && notaDeEvaluacion < 80 // este operador evalua la nota C
            ? "calificacion C"
        :notaDeEvaluacion >= 80 && notaDeEvaluacion < 90 // este operador evalua la letra B
            ? "calificacion B"
        :notaDeEvaluacion >= 90 && notaDeEvaluacion < 100 // este operador captura la nota mas alta
            ? "calificacion A":"calificacion A +";
        
    console.log(calificacionEscrita);

    /* TRES ESTRUCTURAS CONDICIONALES POR EXCELENCIA 
    
        if/else => 

            - primero me permite realizar comparaciones complejas.
            - tener bloques de codigo { aqui dentro puedo hacer }
            - me permite la anidación de esta instrucción
            - no retornan un valor por lo tanto no lo puedo asignar a
            una variable

        switch
            - es ideal para hacer comparaciones de valores discretos
            de una variable.
                variable = 1
                variable = 2
                ...

            - me permite tambien en cada opción crear un bloque
            de codigos, { aqui dentro puedo tener muchas instrucciones }
            - no puedo asiganrla a una variable

        operador ternario (expresion ? "valor verdadero":"valor falso")

            - es que se puede asignar a una variable
            - se pueden realizar comparaciones complejas
            - pero no me permite tener un bloque de codigo 
                {
            
                - no podria crear variables
                - no podría hacer mas de una instrucción


                }
        
    
    
    */

    




}
