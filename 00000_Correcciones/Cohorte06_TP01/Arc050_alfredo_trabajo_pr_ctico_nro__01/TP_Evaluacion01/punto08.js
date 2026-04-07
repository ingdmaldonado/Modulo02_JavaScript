/*Ejercicio Nro. 08: Estructuras Condicionales (if/else)
Realizar un programa que permita ingresar la edad de una persona y determine si es niño (0 a 12 años), adolescente (13 a 17 años), adulto (18 a 64 años), adulto mayor (más de 64 años). */

{

let edad=0;


edad=Number(prompt(`Ingrese la edad:`));




console.log(`La edad es:${edad}`);



if (edad>64)
{
    console.log(`Usted es adulto mayor.`);

}
else if(edad>=18)
{
    console.log(`Usted es adulto.`);
} else if(edad>=13)
{
    console.log(`Usted es adolecente.`);
}
else if (edad>=0)
{
console.log(`Usted es niño.`);
}
else
    {
        console.log(`Edad invalidad, intente de nuevo.`);
    } 



}