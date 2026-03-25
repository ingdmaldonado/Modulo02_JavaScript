
/*
un programa = software, es
un conjunto de instruciones
ordenadas, que tienen una secuencia
lineal de ejecución y tienen una lógica
específica.

    LOGICA: es el ejercicio mental
    que tiene una persona para resolver
    problemas de programación. eso se
    resuelve con mucha practica y con 
    muchos ejercicios variados y diversos.

*/ 

{

    console.log("soy el PROFE DANIEL");

    console.log("esto es 1er. año DESARROLLO DE SOFTWARE");

    // comentario de una sola linea //

    console.log("este mensaje saldra por la consola");

    /* esto es un comentario multilinea
    porque puedo seguir escribiendo aqui abajo */

    /* vamos a ver como declarar variables 
    
    que son las variables ?: son
    lugares de almacenamiento TEMPORAL
    y MOMENTANEO que un programa utiliza
    para
        - realizar operaciones
        - guardar datos que el usuario ingresa
    
    */
   
    let edadMarcos; // declarando una variable

    let edadGabriel = 22; // declarar una variable e inicializar

    /* hay instrucciones de programación
    específicas para mostrar datos, resultados, cosas
    por pantalla. => console.log() */

    /*
        95% SENTENCIAS E INSTRUCCIONES EN UN LENGUAJE
        SON NO VISIBLES PARA EL USUARIO.
    */

    console.log("el valor de la variable 1",edadMarcos);

    console.log("el valor de la variable 2",edadGabriel);

    console.log("mostramos ambos valores edad de marcos ",edadMarcos," edad de gabriel ",edadGabriel)

    /* vamos a crear variables para
    cargar los ingresos de mis alumnos
    que trabajan por la mañana */

    let sueldoDeLuis = 7899.23;

    console.log("sueldo de Luis",sueldoDeLuis);

    let sueldoDeLourdes = 22452.25;

    console.log("sueldo de Lourdes",sueldoDeLourdes);

    let sueldoDeLuciano = 1200.23;

    console.log("sueldo de Luciano",sueldoDeLuciano);

    let sueldoDeGustavo = 1300;

    console.log("sueldo de Gustavo",sueldoDeGustavo);

    let sueldoDeDavid = 1127.44;

    console.log("sueldo de David",sueldoDeDavid);

    let sueldoProfesor = 1;

    console.log("sueldo PROFE",sueldoProfesor);

    let sueldoTOTAL = 0; // aqui declaro y le asigno un valor

    /* cuando trabajo con variables 
    tengo tres momentos 
    
    1) momento de la definición
    2) momento de la asignación del valor inicial
    3) ... cambios futuros que tendra esa variable

    */

    sueldoTOTAL = sueldoDeLuis + sueldoDeLourdes + sueldoDeLuciano + sueldoDeGustavo + sueldoDeDavid + sueldoProfesor;

    console.log("El Sueldo entre todos es",sueldoTOTAL);

}