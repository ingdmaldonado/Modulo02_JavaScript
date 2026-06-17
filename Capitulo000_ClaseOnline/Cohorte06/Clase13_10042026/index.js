
{
    // objetos literales - estructuras de datos en memoria //

    let a = 10;
    const b = 20;

    const Persona1 = {dni:27777999,nombres:"ENRIQUE DANIEL",apellido:"MALDONADO"};

    const Persona2 = {dni:29000777,nombres:"JUAN ROMAN",apellido:"RIQUELME"};

    console.log(Persona1);
    console.log(Persona2);

    Persona1.nombres = "ENRI DANIELS";

    console.log(Persona1);

    console.log(Persona1.apellido);

    /* OBJETOS LITERALES => OBJETOS PUROS DE JAVASCRIPT */

    /* JSON => JAVASCRIPT OBJECT NOTATION */


    /* Toma un Objet Javascript y lo convierte a JSON
        Es un texto delimitado de una manera que esta en formato
        String y puede viajar por la Nube.
        
        Puede ser:

        FRONT END => BACKEND

        FRONT END <= BACK END
     */

    // estoy convirtiendo un objeto y pasandolo a JSON y guardandolo en una variable
   

    /* CUANDO CONVIERTO A JSON ?. cuando preparo los datos
    para que viajen por la Nube */

    console.log(Persona1);

    let datosJSON = JSON.stringify(Persona1);

    console.log(datosJSON);


    /* Ahora voy a mostrar como Convertir esos datos
    que supuestamente vienen desde el Back End al Front
    en formato JSON. JSON => JavaScript */

    let objetoRecuperado = JSON.parse(datosJSON);

    console.log(objetoRecuperado);

    /* METODOS QUE TIENEN LOS ELEMENTOS HTML (objetos)
    
    input (numericos / texto)
    checkbox
    select
    
    */








}