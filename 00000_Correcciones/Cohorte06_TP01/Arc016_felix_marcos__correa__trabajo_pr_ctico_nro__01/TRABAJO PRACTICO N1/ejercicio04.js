{ 

     let numero = 0;
     numero = Number(prompt(`ingrese un numero`))

     if (numero >= 0) {
    resultado = "Positivo o Cero";
    } else {
    resultado = "Negativo";
    }
     console.log(`metodo if/else El número es ${resultado}`);

 let resultadoTernario = (numero >= 0) ? "Positivo o Cero" : "Negativo";
console.log(`Metodo ternario: El número es ${resultadoTernario}`);

}
