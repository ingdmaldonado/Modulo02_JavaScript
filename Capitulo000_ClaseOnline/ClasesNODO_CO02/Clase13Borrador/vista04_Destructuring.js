
window.addEventListener("load",()=>
    {
        console.log("running !!!");

        
    /***********************************************/
    /* Ejemplo 1: Destructuring básico de un array */
    /***********************************************/

    const numeros = [10, 20, 30];

    const [primero, segundo, tercero] = numeros;

    console.log("ejemplo 1");
    console.log(primero);  // 10
    console.log(segundo);  // 20
    console.log(tercero);  // 30


    /***********************************************/
    /* Destructuring con valores predeterminados:  */
    /***********************************************/

     const colores = ["rojo"];

     const [color1 = "azul", color2 = "verde"] = colores;

    console.log("ejemplo 2");
    console.log(color1);  // "rojo"
    console.log(color2);  // "verde" (se usa el valor por defecto)

    /***********************************************/
    /*3. Destructuring en Objetos:                 */
    /***********************************************/

    const persona1 = {
        nombre: "Ana",
        edad: 25,
        profesion: "Desarrolladora"
    };
    
    const { nombre, edad, profesion } = persona1;
    
    console.log("ejemplo 3");
    console.log(nombre);  // "Ana"
    console.log(edad);  // 25
    console.log(profesion);  // "Desarrolladora"

    /****************************************************/
    /* 4. Destructuring con alias (nombres diferentes): */
    /****************************************************/

    const persona2 = {
        nombre: "Carlos",
        edad: 30
    };
    
    const { nombre: nombrePersona, edad: edadPersona } = persona2;
    
    console.log("ejemplo 4");
    console.log(nombrePersona);  // "Carlos"
    console.log(edadPersona);  // 30

    /*************************************************/
    /* Ejemplo 5: Destructuring de un objeto anidado */
    /*************************************************/

    const empleado = {
        nombreempleado: "Lucía",
        direccion: {
            ciudad: "Buenos Aires",
            pais: "Argentina"
        }
    };

    const { nombreempleado, direccion: { ciudad, pais } } = empleado;
    
    console.log("ejemplo 5");
    console.log(nombreempleado);  // "Lucía"
    console.log(ciudad);  // "Buenos Aires"
    console.log(pais);  // "Argentina"

    /****************************************************************/
    /* Ejemplo 06 : Destructuring en paso de parametro de funciones */
    /****************************************************************/

    function mostrarEmpleado({ nombreclub,paginaoficial }) {
        console.log(`Nombre: ${nombreclub}`);
        console.log(`Profesión: ${paginaoficial}`);
    }
    
    const clubChico = {
       nombreclub:'Club 1',
       paginaoficial:'www.tengounamanchadelab.com'
    };
    
    mostrarEmpleado(clubChico);  // "Nombre: Laura", "Profesión: Ingeniera"
    

    const numerosDeMesa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    /****************************************************************/
    /* Ejemplo 07 : Destructuring en paso de parametro de funciones */
    /****************************************************************/


    const misHermanos = ["PATRICIA","EMILCE","MARCELO","NESTOR","GLADYS","DANIEL"];

    const [patricia,emilce,...resto] = misHermanos;

    console.log(patricia);
    console.log(emilce);
    console.log(resto);



    })