
/*
    A partir de un dia ingresado por el usuario, vamos a determinar
    el nombre del dia 
    
    1 => LUNES
    2 => MARTES

    ...

    7 => DOMINGO
    
*/

{

    let numeroDeDiaDeLaSemana = 0;

    numeroDeDiaDeLaSemana = Number(prompt("Ingrese el dia de la semana"));

    console.log(numeroDeDiaDeLaSemana);

    
    
    if(numeroDeDiaDeLaSemana === 1)
    {
        console.log("Es dia lunes");

        let resultado = 2 * 40;

        console.log(resultado);
    }
    


    if(numeroDeDiaDeLaSemana === 2)
    {
        console.log("Es dia martes");
    }
    



    
    /* 
        para valores DISCRETOS 

        1
        2
        3
        4

        L
    
    */


    switch(numeroDeDiaDeLaSemana)
    {
        case 1:
            {
                console.log("es dia lunes");
                break;
            }

        case 2:
            console.log("es dia martes");
            break;

        case 3:
            console.log("es dia miercoles");
            break;

        case 4:
            console.log("es dia jueves");
            break;

        case 5:
            console.log("es dia viernes");
            break;

        case 6:
            console.log("es dia sabado");
            break;

        case 7:
            console.log("es dia domingo");
            break;

        default:
            console.log("dia no contemplado");
            break;

    }

}