
/* Realizar un programa en JavaScript que permita 
ingresar el número de día y evalúe y diga a que dia
de la semana corresponde */

{
    let diaDeLaSemana = 0;

    diaDeLaSemana = prompt("Ingrese el día de la semana");

    if(!isNaN(diaDeLaSemana))
    {
        diaDeLaSemana = Number(diaDeLaSemana);

        switch(diaDeLaSemana)
        {
            case 1:
                console.log(`es lunes`);
                break;
            case 2:
                console.log(`martes`);
                break;

            case 3:
                console.log(`miercoles`);
                break;
            case 4:
                console.log(`jueves`);
                break;
            case 5:
                console.log(`viernes`);
                break;
            case 6:
                console.log(`sabado`);
                break;
            case 7:
                console.log(`domingo`);
                break;
            default:
                console.log(`sin equivalencia`);
                break;
        }
    }
    else
    {
        alert("por favor ingrese un número válido");
    }
}