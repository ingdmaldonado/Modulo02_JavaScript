{

let numero = 0;

numero =Number(prompt(`Ingrese un numero`));

console.log(numero);

if(numero >= 0)
{
    console.log(`El numero ${numero}, ingresado por el usuario, es un numero positivo`);
}
else
{
    console.log(`El numero ${numero}, ingresado por el usuario, es un numero negativo`);
}


//Operador ternario

let positivoNegativo = numero > 0 ? "Positivo" : "Negativo";
console.log(`El numero ingresado ${numero} es:`, positivoNegativo);


}
