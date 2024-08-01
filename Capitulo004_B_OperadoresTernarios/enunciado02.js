
/*

    "Dado un usuario que ha ingresado su edad, determina si es mayor de edad o menor de edad. 
    Si tiene 18 años o más, muestra 'Es mayor de edad', de lo contrario, muestra 'Es menor de edad'."

    Ejemplo:

        let edad = 20;
        let mensaje = edad >= 18 ? 'Es mayor de edad' : 'Es menor de edad';
        console.log(mensaje);
*/


{

    /******************************************/
    /* Si lo hacemos con Operadores Ternarios */
    /******************************************/

        let edadPersona = 0;
        edadPersona = Number(prompt("Por favor ingrese su edad"));

        let esMayorDeEdad = 0;

        esMayorDeEdad = edadPersona > 18 ? "Es mayor de edad":"Es menor de edad";

        console.log(esMayorDeEdad);

}