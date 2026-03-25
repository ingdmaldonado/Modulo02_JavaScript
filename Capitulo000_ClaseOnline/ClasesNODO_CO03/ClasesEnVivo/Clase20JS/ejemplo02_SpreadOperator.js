
window.addEventListener("load",()=>
    {

        /* recordatorio */

        const vector1 = [10,1,9,7]; // cree el vector 1

        const vector2 = vector1; // cree el vector 2 y le digo es la copia del 1

        vector2.push(14);

        console.log(vector1);
        console.log(vector2);

        // caramba. que paso ?.

        let total1 = 200;

        let total2 = total1; // duplicación independiente de valores

        total2 = 400;

        console.log(total1,total2);


        /*********************************************
        Ejemplo 01: Spread Operator en 
        Vectores  Spread => Propagacion => Expansión => 
        *********************************************/
        
       
        

        // una copia del vector 1 totalmente aislada del vector original //
        const vector3 = [...vector1]; 

        vector3.push(-17);

        console.log(vector1);
        console.log(vector3);

        /*
        Ejemplo 02: quiero clonar o unir dos vectores


        */

        const sueldosDeEnero = [9200000,7900000,10500000.50];

        const sueldosDeFebrero = [120000000,9200000,114000000];

        const sueldosUnificados = [...sueldosDeEnero,...sueldosDeFebrero];

        console.log(sueldosDeEnero);
        console.log(sueldosDeFebrero);
        console.log(sueldosUnificados);

        // voy a hacer es obtener el sueldo promedio //
        let sueldoAcumuladoTotal = 0;
        sueldosUnificados.forEach(sueldo => 
            {
                // aqui voy acumulando los sueldos
                sueldoAcumuladoTotal = sueldoAcumuladoTotal + sueldo;
            })

        console.log(sueldosUnificados.length);
        console.log(sueldoAcumuladoTotal);
        let sueldoPromedio = sueldoAcumuladoTotal/sueldosUnificados.length;


        /*
            Ejemplo 03: Spread Operator en OBJETOS 
        */

        const alumno1 = {apellidos:"MESSI",nombres:"LIONEL ANDRES"};

        const alumno2 = alumno1; // copia de referencia

        alumno1.apellidos = "MARADONA";

        console.log(alumno1);
        console.log(alumno2);

        const alumno3 = {...alumno1,clubSimpatizante:"BOCA JUNIORS"};
        alumno3.nombres = "DIEGO ARMANDO";
        console.log(alumno3);

        
        



  




    })