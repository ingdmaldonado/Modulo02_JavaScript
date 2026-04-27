{

    let nota=0;
    let cantidadErrores=0;
    let continuar=`S`;

    while(continuar===`S`|| continuar===`s`)
    {
        nota=Number(prompt(`Ingrese la nota`));

        if(nota>=0 && nota<=4)
        {
            console.log(`Nota: ${nota} - Trabajo desaprobado`);
        }
        if(nota>4 && nota<=7)
        {
            console.log(`Nota: ${nota} - Trabajo aprobado `);
        }
        if(nota>7 && nota<10)
        {
            console.log(`Nota:${nota} - Trabajo aprobado, muy bueno`);
        }
        if(nota===10)
        {
            console.log(`Nota: ${nota} - Exelente trabajo. Aprobado`)
        }
        if(nota<0 || nota>10)
        {
            console.log(`ERROR al ingresar la nota`);
            cantidadErrores++;
        }

        continuar= prompt(`desea continuar cargando notas? S/N`);
    }

    console.log(`cantidad de veces que ha ingresado una nota incorrecta: ${cantidadErrores}`)
}