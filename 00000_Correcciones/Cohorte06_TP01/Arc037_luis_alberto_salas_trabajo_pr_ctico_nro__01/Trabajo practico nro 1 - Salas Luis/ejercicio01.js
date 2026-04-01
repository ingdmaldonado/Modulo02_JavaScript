{
    let num1 = 0;
    let num2 = 0;

    num1 = Number(prompt(`Ingrese el numero A`))
    num2 = Number(prompt(`Ingrese el numero B`))
    
    let suma = num1 + num2
    let resta = num1 - num2
    let multiplicacion = num1 * num2
    let division = num1 / num2

    console.log(`El resultado de la suma es: ${suma}`)
    console.log(`El resultado de la resta es: ${resta}`)
    console.log(`El resultado de la multiplicacion es: ${multiplicacion}`)
    console.log(`El resultado de la division es: ${division}`)

    /*
    Cuando B es igual a cero muestra infinity en consola
    El resultado de la division es: Infinity
    */
}