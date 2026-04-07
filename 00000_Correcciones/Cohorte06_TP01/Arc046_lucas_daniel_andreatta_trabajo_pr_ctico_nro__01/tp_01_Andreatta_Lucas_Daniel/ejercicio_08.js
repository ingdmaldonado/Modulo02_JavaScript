/*

Ejercicio Nro. 08: Estructuras Condicionales (if/else) 
Realizar un programa que permita ingresar la edad de una persona y determine si es niño (0 a 12 años), 
adolescente (13 a 17 años), adulto (18 a 64 años), adulto mayor (más de 64 años).

*/

{
    let edadPersona = 0;

    edadPersona = Number(prompt(`Ingrese su edad`));

    if ((edadPersona>=0 && edadPersona<=12)) { // NIÑO

        console.log(`Es un NIÑO de ${edadPersona} años de edad`);

    } else {
        if ((edadPersona>=13 && edadPersona<=17)) {  // ADOLESCENTE

            console.log(`Es un ADOLESCENTE de ${edadPersona} años de edad`);
            
        } else {
            if ((edadPersona>=18 && edadPersona<=64)) { // ADULTO

                console.log(`Es un ADULTO de ${edadPersona} años de edad`);
                
            } else {
                if ((edadPersona>64)) { // ADULTO MAYOR
                    
                    console.log(`Es un ADULTO MAYOR de ${edadPersona} años de edad`);

                } else {

                    console.log(`ERROR, Ingrese una edad numerica positiva!!!`);
                }
            
            }
        }
    }

}