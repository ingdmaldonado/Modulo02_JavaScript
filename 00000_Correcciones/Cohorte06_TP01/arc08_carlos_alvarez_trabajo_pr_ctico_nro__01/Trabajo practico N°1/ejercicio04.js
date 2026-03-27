 // Ejercicio N° 4

{

     let numero = 0;
     numero = Number(prompt(`ingrese un numero`))

     if (numero >= 0) {
    resultado = "Positivo o Cero";
    } else {
    resultado = "Negativo";
    }
     console.log(`metodo if/elseEl número es ${resultado}`);

     let resultadoTernario = (numero >= 0) ? "Positivo o Cero" : "Negativo";
console.log(`Metodo ternario: El número es ${resultadoTernario}`);}