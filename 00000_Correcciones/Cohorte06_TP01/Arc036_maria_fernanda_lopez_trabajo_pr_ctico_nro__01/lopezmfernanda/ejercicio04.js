/* Ejercicio Nro. 04: Estructuras Condicionales (if/else)
Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y
también resuelva el mismo problema utilizando un operador ternario. */

{
    /* Aplicacion con solicitud de edad para poder hacer uso de la misma */
    let  edad= 0;
    edad= Number(prompt(`Ingrese su edad`));
    console.log(edad);

    if (edad >=18)
    { 
        console.log(`Bienvenido a la Plataforma`);
    

    }
    else
    {
        console.log(`No esta permitido el acceso a menores de 18 años de edad`);
        
    }
}

/* Misma situacion con operador ternario */
{
    let edad = 0;
    edad = Number(prompt(`Por favor ingrese su edad`));
    console.log(`Edad del usuario`, edad);

    let accesoPlataforma = edad >= 18 ? 1 : 0;

    console.log(accesoPlataforma == 1? `Bienvenido a la Plataforma` :`No se permite el ingreso`);

}