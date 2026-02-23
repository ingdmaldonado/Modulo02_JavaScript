

/* PATRON DE DISEÑO
MODELO => AQUI ESTA LA LÓGICA ESPECIFICA
VISTA => HTML + CSS
CONTROLADOR => CAPTURA DE DATOS DE ENTRADA Y MANEJO DE EVENTOS Y 
MANEJO DEL DOM
*/

// definicion de la funcion. //

export function dosisDeInsulina(nivelDeGlucosa,pesoEnKilogramos,tipoDeDiabetes)
{
    let dosis = 0; // en esta variable lo que voy a hacer es el calculo
    if(tipoDeDiabetes === 1)
    {
        if(nivelDeGlucosa > 180)
        {
            dosis = (pesoEnKilogramos * 50)/100 + (nivelDeGlucosa * 50)/100 + 10;
        }
        else
        {
            dosis = (pesoEnKilogramos * 50)/100 + 10;
        }
    }
    if(tipoDeDiabetes === 2)
    {
        if(nivelDeGlucosa > 180)
            {
                dosis = (pesoEnKilogramos * 20)/100 + (nivelDeGlucosa * 50)/100 + 10;
            }
            else
            {
                dosis = (pesoEnKilogramos * 20)/100 + 10;
            }
    }

    return (dosis); // parametros de salida o valor de retorno.
}

/* EXISTE UN PATRON DE DISEÑO QUE 
PERMITE UNA MEJOR ORGANIZACION DE CODIGO
Y DEL PROYECTO EN SI.
Y ESTO HACE A UNA MAYOR ESCALABILIDAD 
*/

/* 
    VISTA: HTML Y CSS (DISEÑO RESPONSIVO)

    CONTROLADOR: CODIGO JS QUE PERMITE INTERACTUAR
    Y CAPTURAR DATOS DE ENTRADA QUE EL OPERADOR INGRESE
    EN LA VISTA

    MODELO: CONJUNTO DE FUNCIONES Y TODA LA LOGICA
    QUE SE ENCARGUE DE RESOLVER PUNTUALMENTE EL PROBLEMA

*/