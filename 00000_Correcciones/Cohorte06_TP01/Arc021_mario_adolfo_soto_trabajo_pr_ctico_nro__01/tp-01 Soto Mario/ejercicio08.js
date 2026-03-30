/*xRealizar un programa que permita ingresar la edad de una persona y determine si es niño (0 a 12 años),
adolescente (13 a 17 años), adulto (18 a 64 años), adulto mayor (más de 64 años).*/
{
let edad = 0;
edad=prompt(`ingrese la edad de la persona`);

if(edad>64)
    {console.log(`Ud es adulto mayor`);}
else if ((edad<=64)&&(edad>=18)) 
    {console.log(`Ud es adulto`);}
else if ((edad<18)&&(edad>=13))
    {console.log(`Ud es adolecente`);}
else (edad<13)
{console.log(`Ud es niño`);}
}