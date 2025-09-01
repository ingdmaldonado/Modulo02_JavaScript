
{
    console.log(`application is running`);

    /* sirve para multiples condiciones
    está pensado para variables que son
    discretas.

        variables continuas => pueden asumir infinitos valores

            - peso
            - altura
            - cotizacion del dolar

        variables discretas => pueden asumir valores finitos 
        y conocidos. 
            - el dia de la semana
            - el numero de mes
            
    */

        /* tenga que ingresar el numero de dia 
        
            1 = > lunes
            2 = > martes
            ...

        */

        let numeroDeDiaIngresado = 0;
        numeroDeDiaIngresado = Number(prompt("Ingrese numero de dia (1 a 7"));

        /* case => muchos
            switch => c#, java, kotlin, 
        */
       
            /* 
                React => break;
                angular => break;
                node js => break;
            
            */

        switch(numeroDeDiaIngresado)
        {
            case 1: // lunes
                {
                    console.log(`es lunes`);
                    break;
                }
            case 2: // martes
                {
                    console.log(`es martes`);
                    break;
                }
            case 3:// miercoles
                {
                    console.log(`es miercoles`);
                    break;
                }
            case 4: // es jueves
                {
                    console.log(`es jueves`);
                    break;
                }

            case 5:// es viernes
                {
                    console.log(`es viernes`);
                    break;
                }

            case 6:
                {
                    console.log(`es sábado`);
                    break;
                }

            case 7:// domingo
                {
                    console.log(`es domingo`);
                    break;
                }

            default:
                {
                    console.log(`Por favor Ing. un dia correcto`);
                    break;
                }
        }

        console.log(`este mensaje esta por fuera del switch`);

        /* RESUMEN DE LAS ESTRUCTURAS CONDICIONALES */

        if((2 > 1) && (4 > 7))
        {
            /* por aqui podría haber un montón de lineas */
            console.log(`en el ejemplo 01 del if -  se cumple la condición`);
        }
        else
        {
            console.log(`en el ejemplo 01 - el if - no se cumple`);
        }

        if((4 === 2 + 2) || (5 === 1+1)) // cuando una sea verdadera. entro por el lado verdadero
        {
            console.log(`en el ejemplo 02 del if - entro por el verdadero`);
        }
        else
        {
            console.log(`en el ejemplo 02 del if - entro por el lado falso`);
        }

        /* ejemplo del operador ternario */

        let esSocioDelClub = true;
        let importeInscripcion = 20000;

        if(esSocioDelClub)
        { // por aqui la persona es socia
           
            importeInscripcion = (importeInscripcion * 80)/100;
            console.log(`es socio del club. tiene 20% de descuento ${importeInscripcion}`);
        }
        else
        {
            console.log(`no es socio. no tiene descuento ${importeInscripcion}`);
        }

        /* 
           (2 * x) + y 
            entre sumas y restas => + y - 
        */

        /* operador ternario => o entra por uno o entra por el otro*/

        let valorFinalInscripcion =  esSocioDelClub ? (importeInscripcion * 80)/100 : importeInscripcion;
        console.log(valorFinalInscripcion);

        /* switch => comparaciones de variables discretas y
        el prblema que tiene es que tengo que poner break 
        */

}