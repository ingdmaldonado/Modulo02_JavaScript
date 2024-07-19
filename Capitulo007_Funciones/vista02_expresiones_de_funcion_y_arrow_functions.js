

/* una expresión de función es la forma de declarar
una función y asignarla a una variable o una constante */

let Cubo = function(numero)
{
    return numero * numero * numero;
}

/* podemos declarar una arrow function ó función flecha
y guardarla en una variable o constante, que es como 
quitarle la palabra function. unicamente dejar los parametros
seguidos de una flecha y el cuerpo de la función */

let CuboVariante2 = (numero)=>
{
    return numero * numero * numero;
}


/* AQUI Realizaremos las INVOCACIONES */
{

    let Resultado = Cubo(3);
    console.log(`El Resultado del Cubo es := ${Resultado}`);

    let Resultado2 = CuboVariante2(3);
    console.log(`El Resultado del Cubo Variante 2 := ${Resultado2}`);

    

}