
/* validar que el usuario
sea mayor de edad para ingresar
a la aplicación */

{
    let edadUsuario = 0;

    edadUsuario = Number(prompt("Ingrese su edad"));

    let validacionUsuario = edadUsuario >= 18 ? "usuario adulto":"usuario menor";

    console.log(validacionUsuario);

}