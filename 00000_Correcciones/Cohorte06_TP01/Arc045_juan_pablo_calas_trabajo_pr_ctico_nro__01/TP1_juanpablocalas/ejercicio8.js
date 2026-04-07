/*

Ejercicio Nro. 08: Estructuras Condicionales (if/else) 
    
    Realizar un programa que permita ingresar la edad de una persona y determine si es niño (0 a 12 años), adolescente (13 a 17 años), adulto (18 a 64 años), adulto mayor (más de 64 años). 

*/

{
    let EdadIngresada = 0;

    EdadIngresada = Number(prompt(`Por favor Ingrese la Edad de la persona:`));
    console.log(` La edad que ingreso es ${EdadIngresada}`);

    if((EdadIngresada > 0) && (EdadIngresada <= 12))
    {
        console.log(`La persona es un NIÑO`);
    }
    else
    {
        if((EdadIngresada > 12) && (EdadIngresada <=17))
        {
            console.log(`La persona es un ADOLECENTE`);
        }
        else
        {
            if((EdadIngresada > 17) && (EdadIngresada <=64))
            {
                console.log(`La persona es un ADULTO`);                
            }
            else
            {
                if(EdadIngresada > 64) 
                {
                    console.log(`La persona es un ADULTO MAYOR`);                                    
                }
                else
                {
                    console.log(`No puede ingresar una Edad MENOR que 0 - Edad MAL ingresada - Ingrese Nuevamente la Edad`);                
                }
            }
        }
    }

}