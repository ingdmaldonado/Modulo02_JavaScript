
{

//numeros par e impar

let numero = 0;
let cociente = 0;

numero =Number(prompt(`Ingrese un numero`));

console.log(numero);



if(numero % 2 == 0)
{
    console.log(`El numero ${numero}, ingresado por el usuario, es un numero par`);
}
else
{
    console.log(`El numero ${numero}, ingresado por el usuario, es un numero impar`);
}


}