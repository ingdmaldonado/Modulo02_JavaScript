

/* MODULO => todo archivo de javaScript
aparte del controlador, que contiene 
funciones, variables, constantes, vectores,
que le sirven a la aplicación principal
y lógicamente NO SON DEL CONTROLADOR 
*/

/* aqui lo que le digo es que va a
exportar la funcion fnCalcularCuadrado */

export const fnCalcularCuadrado = (x)=>
    {
        return x * x;
    };

export const fnCalcularCubo = (x)=>
    {
        return x * x * x;
    };

export function devolverSaludo()
{
    return "somos los alumnos de Taller1 Año 2025";
}

export const versionDelSistema = "5.1";

export const sistemaEnlinea = false;

/* los MODULOS y/o BIBLIOTECAS
DE FUNCIONES, pueden estar en la NUBE
no necesariamente junto con la aplicación 
*/

