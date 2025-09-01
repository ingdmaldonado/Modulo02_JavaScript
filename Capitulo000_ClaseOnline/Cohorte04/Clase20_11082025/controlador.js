
window.addEventListener("load",()=>
{

    console.log("aplication is running");

    /********  objetos literales *********/

    let importeSueldo = 2000;
    const PrimerMes = "ENERO";

    let vectorDeNotas = [8,2,7,9,10,7];

    const vectorDePrecios = [2000,2500,7000,"DANIEL",-7];

    /* LOS VECTORES y/o OBJETOS LITERALES QUE
    SE GUARDAN EN CONSTANTES, SI pueden ser
    modificados. */

    // esto no se puede = > vectorDePrecios = [2500,6000];

    vectorDePrecios.push(7000);
    vectorDePrecios.unshift();

    console.log(vectorDePrecios);

    /* OBJETOS LITERALES - CLAVE = VALOR / ATRIBUTO = VALOR  */

    let persona1 = {dni:24,apellido:"MALDONADO",nombre:"DANIEL",profesion:"INGENIERO"};

    let persona2 = {dni:37,apellido:"HEREDIA",nombre:"ANTONELLA ANACLETA DEL VALLE",domicilio:"NEUQUEN VILLA CHOCON"};

  

    /* CLASE => REPRESENTA UN UNIVERSO O CONJUNTO DE ELEMENTOS
    DE UN MISMO TIPO
    
        Personas => DNI
        Autos => DOMINIO
        Productos => CODIGO DE BARRAS


        PRIMERO TIENE QUE EXISTIR LA CLASE
        DESPUES UNO PUEDE CREAR LOS OBJETOS
    
    */

    let persona3 = {dni:31,apellido:"ACOSTA",nombre:"TOMAS ALBERTO RAMON ATILIO DEL VALLE",clubsimpatizante:"CLUB ATLETICO BOCA JUNIORS"};

    console.log(persona1);
    console.log(persona2);
    console.log(persona3);

    console.log(persona1.apellido);

    persona2.domicilio = "CHILECITO LA RIOJA EN VERANO CON 47 GRADOS A LA SOMBA";

    console.log(persona2);

    /* ESTRUCTURAS DE DATOS 

        - variables
        - constantes
        - vectores
        - objetos literales

        - vectores de objetos literales
    
    */

    const Personas = [persona1,persona2,persona3];

    console.log(Personas);

    /*
        forEach => recorro
        filter => filtro datos
        find => busco algun dato 
        every (si todos) => si existe algun valor u objeto con algun valor en especifico
        map => transformación de esos elementos
        some (si alguno) => Si todos cumplen con alguna condición en especial

        sort
        reduce 
    
    */


})