
/*  
    particularidades de como definir una variable

    - no pueden comenzar con simbolos excepto $ y el _
    - no pueden comenzar con numeros
    - no deben tener espacios en el medio
        total facturado
    - es que tienen que tener carga semantica fuerte


*/
{
    console.log("la aplicación esta corriendo");

    let total012025 = 0; // declarar e inicializar una variable
    let TOTALFACTURADO012025 = 0; // declarar e inicializar

    // case Sensitive //

    let totalfacturadoenero2025 = 0;
    let totalFacturadoEnero2025 = 0; // se llama case sensitive
    let TOTALFACTURADOENENERO2025 = 0; //

    /* si una variable tiene una sola letra
    con la se diferencia de otra.
    */

    /* TRES TIPOS DE VARIABLES */

        let sueldoDeEnero = 0; // es numerica
        let nombreDeEmpleado = "DANIEL"; // una cadena de texto o string
        let tienePermisoParaElSistema = true; // le decimos variables booleanas

    /* INTERPOLACIÓN DE STRING */

        console.log(`Bienvenido al Sistema ${nombreDeEmpleado}`);

        let dineroATransferir = 0;

        let propinaProfe = 0;

        dineroATransferir = Number(prompt(`Sr. Usuario Ingrese el dinero a transferir`));

        propinaProfe = dineroATransferir + 15000;

        console.log(`El señor ingreso el valor ${dineroATransferir} y el total seria ${propinaProfe}` );


        /* 
            todo lo que el usuario ingresa por prompt
            o por la pantalla del HTML, lo toma
            en formato TEXTO
        */

        let sueldoDeCesarNieva = 22500; 
        let sueldoDeProfe = "22500";

        console.log(sueldoDeCesarNieva + 2000);
        console.log(Number(sueldoDeProfe) + 2000);


        /* EJECUCION LINEAL Y DE FORMA SINCRONA */


        /* ESTRUCTURAS DE CONTROL DE FLUJO O
        ESTRUCTURAS CONDICIONALES 

            if/else => esta en todos los lenguajes 
            operador ternario => javasCript
            switch => todos 
        */

        /* lo que va dentro del if. es 
        un operador de comparación */

        let sueldoGuillermo = 200; // 
        let sueldoProfe = 200; //

        if(sueldoGuillermo > sueldoProfe)
        { // lado verdadero
            console.log(`el sueldo de Guillermo es mas alto que el del profe`);
        }
        else // lado falso
        {
            console.log(`el sueldo del Profe es mas alto que el de Guillermo `);
        }

        /* operadores de comparación 
        
            a = b (se lee a es igual a b) => a === b
        
            a > b (se lee a es mayor a b) => a > b

            a >= b (se lee a es mayor o igual a b) => a >= b

            a < b (se lee a es menor que b)

            a <= b (se lee a menor o igual a b)

            a <> b (se lee a es distinto de b) => a !== b
        
        
        */

        if(2 === 2)
        {

        }

        if(3 > 2)
        {

        }

        if(4 >= 3)
        {

        }

        if(3 !== 2)
        {

        }

        /* 
            Estructura condicional if/else 

            if(operador de comparacion).
        
        */

        let sueldoAntonella = 25000;

        let sueldoGabriel = 15000;

        let sueldoluciaAbigail = 50;

        /* si el sueldo de antonella 
        es mas alto que el de gabriel
        y
        es mas alto que el de lucia */

        if((sueldoAntonella > sueldoGabriel) && (sueldoAntonella > sueldoluciaAbigail))
        {
            console.log(`Lucia cobra mas que los dos`);
        }
        else
        {
            console.log(`por aqui no puedo determinar otra cosa`);
        }


        




}
