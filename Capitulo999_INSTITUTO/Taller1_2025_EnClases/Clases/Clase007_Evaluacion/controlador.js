
/* hacer un programa
que permita ingresar
tres numeros y calcular
el promedio de los tres */

{

    console.log(`this application is running`);

    /* primero vamos a declarar
    las variables que voy a necesitar
    */

  
    let numero1 = 0; // declarar e inicializar en cero
    let numero2 = 0; // declarar e inicializar en cero
    let numero3 = 0; // declarar e inicializar en cero
    let sumaDeTresNumeros = 0; // declarar e inicializar en cero
    let promedioDeTresNumeros = 0; // declarar e inicializar en cero

    /* pedirle al usuario que ingrese los valores */

    numero1 = Number(prompt(`por favor ingrese el numero 1`));
    console.log(numero1);

    numero2 = Number(prompt(`por favor ingrese el numero 2`));
    console.log(numero2);

    numero3 = Number(prompt(`por favor ingrese el numero 3`));
    console.log(numero3);

    sumaDeTresNumeros = numero1 + numero2 + numero3;

    console.log(`La suma ${sumaDeTresNumeros}`);

    promedioDeTresNumeros = sumaDeTresNumeros / 3;

    console.log(`El promedio de ${numero1} ${numero2} ${numero3} es ${promedioDeTresNumeros}`)

    if(promedioDeTresNumeros >= 6)
    {
        console.log(`alumno aprobo`);
    }
    else
    {
        console.log(`alumno no aprobo`);
    }
    

}