








window.addEventListener("load",()=>
    {
        console.log("andando");

        
    /* Ejemplo 01 => Destructuring. es una facultad que tiene
    javaScript de desarmar, desestructurar un objeto
    
    aqui estoy haciendo una desestructuracion directa


    */

    const usuario1 = {nombre:"AUGUSTO",apellido:"VILLEGAS"};

    const {nombre,apellido} = usuario1;

    console.log(usuario1);
    console.log(nombre,apellido);

    /* Ejemplo 02 => Destructuring. quiero desestructurar un objeto y
    al desestructuralo quiero renombrar o cambiar el nombre
    de un atributo 
    aqui desestructuro y cambio los nombres de los atributos
    */

    const usuario2 =  {nombre:"ALEXIS",apellido:"AGUIRRE"};

    const {nombre:nombreAlexis,apellido:apellidoAlexis} = usuario2;

    console.log(usuario2);
    console.log(nombreAlexis,apellidoAlexis);

    /* Ejemplo 03 => Destructuring pero voy a hacer
    destructuring de un atributo que posiblemente
    no exista y le voy a asignar un valor por defecto */

    const usuario3 = {nombre:"LORENA",apellido:"COLLANTE"};

    const {telefono = "sin datos"} = usuario3;

    console.log(telefono); // undefined => no definida o no inicializada.

    /* 
        JUAN PEREZ
        CARLOS ROMERO
        VICTOR SOSA 
    */

    /* Ejemplo 04 => Destructuring de objetos anidados */

    const cuenta = {
        titular: "Lucía",
        banco: {
          nombreBanco: "Banco Nación",
          sucursalBanco: 1234
        }
    }

    const {banco:{nombreBanco,sucursalBanco}} = cuenta;

    console.log(cuenta);
    console.log(nombreBanco);
    console.log(sucursalBanco);


    /* lo Contrario. a Destructuring */

    const nombreClub = "CLUB ATLETICO BOCA JUNIORS";
    const cantidadDeLibertadores = 6;

    const Club = {nombreClub,cantidadDeLibertadores};
    console.log(Club);













    })