
/*
    while => mientras
    for => para
*/

// programa principal
{

    /* se utiliza cuando
    conozco con exactitud
    la cantidad de veces o 
    iteraraciones que se deben
    hacer */

    let frase = `Boca cada vez juega peor`;

    let frase2 = `HOLA SOY DANIEL hincha de booooocaaa SOY PROFE DE TALLER1 Y TALLER2`;

    /* todas las variables tipo string
    tienen un atributo muy importante
    que es el largo => length */

    console.log(frase.length);
    console.log(frase2.length);

    /* cuando tengo cadenas. puedo
    tratar la cadena caracter
    a caracter */

    let caracter0 = frase2.charAt(0);
    let caracter1 = frase2.charAt(1);

    console.log(caracter0);
    console.log(caracter1);

    /* El ciclo for es un proceso iterativo
    que se maneja generalmente con tres instrucciones

        1 = declara e inicializa un indice => let indice =0
        2 = declara la condición de permanencia a dentro del ciclo => indice < frase2.length
            hace siempre y cuando el indice sea menor al largo

        3 = el incremento del indice => indice = indice + 1

    */

    console.log(`------------------`);

    let contadorVocales = 0;

    for(let indice =0;indice < frase2.length;indice = indice +1)
    {
        let caracter = frase2.toUpperCase().charAt(indice);

        if((caracter === 'A') || (caracter  === 'E') || (caracter  === 'I') || (caracter  === 'O') || (caracter  === 'U'))
        {
            contadorVocales = contadorVocales + 1;
        }
        console.log(`Caracter Posicion ${indice} - ${caracter}`);

    }

    console.log(contadorVocales);

    /* declaren una cadena. ingresen una frase
    y cuenten la cantidad de letras "C" y "D"
    que acaban de ingresar */

    let frase3 = "BIENVENIDOS A LA PRIMERA CLASE DE TALLER 1";




}