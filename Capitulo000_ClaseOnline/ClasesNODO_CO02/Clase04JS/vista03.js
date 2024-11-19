
/* tenemos que ingresar la edad
de una persona y determinar si 
es mayor ó igual a 18 años => mayor de edad
y sino es menor de edad. */
{
    let edadDeUnAlumno = 0; // declaramos e inicializamos en cero.

    edadDeUnAlumno = Number(prompt("Ingrese la edad del alumno"));

    // operador ternario => estructura condicional muy simple, de una sola linea //
   
    //edadDeUnAlumno >= 18 ? console.log("es mayor de edad"):console.log("es menor de edad");

    let resultado = edadDeUnAlumno >= 18 ? "es mayor de edad":"es menor de edad";

    console.log(resultado);

    



}