{
    let numero = Number(prompt("Ingrese un número:"));
    
    // Con if/else
    if (numero > 0) {
        console.log(`${numero} es positivo.`);
    } else if (numero < 0) {
        console.log(`${numero} es negativo.`);
    } else {
        console.log(`${numero} es cero (ni positivo ni negativo).`);
    }
}