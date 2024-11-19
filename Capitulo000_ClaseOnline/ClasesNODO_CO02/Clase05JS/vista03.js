
{
    console.log("funcionando");

    /* acumulando la edad de todos nosotros */
    let edadTotalDelGrupo = 0;

    /* esta variable me permitirá ir 
    leyendo la edad de cada una de las
    personas */
    let edadDeUnaPersona = 0;

    /* esta variable tendrá el contador
    de personas cargadas */

    let cantidadDePersonas = 0;

    /* vamos a crearnos una variable
    que sea la condición de corte del ciclo */

    let continuaCargando = "SI";

    /* Vamos a crearnos dos variables
    contadoras. que me permitan ir
    registrando la cantidad de personas
    por grupo etario. o por rango de edad*/

    let contadorDe20a40 = 0;
    let contadorDe40EnAdelante = 0;

    while(continuaCargando ==="SI")
    {

        // es un contador de personas registradas //
        cantidadDePersonas = cantidadDePersonas + 1;

        /* primer preguntar por la edad de una persona */
        edadDeUnaPersona = Number(prompt(`Ingrese la edad de la persona ${cantidadDePersonas}`));

        if((edadDeUnaPersona>= 20) && (edadDeUnaPersona <= 40))
        {
            contadorDe20a40 = contadorDe20a40 + 1;
        }
        else
        {
            if(edadDeUnaPersona > 40)
            {
                contadorDe40EnAdelante = contadorDe40EnAdelante + 1;
            }
        }


        console.log(`La edad leida es: ${edadDeUnaPersona}`);

        // es un acumulador de años de personas //
        edadTotalDelGrupo = edadTotalDelGrupo + edadDeUnaPersona;

        console.log(`La Edad Acumulada hasta ahora es :${edadTotalDelGrupo} y la cantidad de Personas: ${cantidadDePersonas}`);

        continuaCargando = prompt("desea continuar ? (SI/NO)");
    }

    let promedioDeEdad = 0;

    promedioDeEdad = edadTotalDelGrupo / cantidadDePersonas;

    console.log(`La edad promedio de todos es ${promedioDeEdad}`);

}