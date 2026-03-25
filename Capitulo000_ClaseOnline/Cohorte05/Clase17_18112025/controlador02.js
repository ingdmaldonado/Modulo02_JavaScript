
const vectorSueldos = [15000,22700,170000,45200];

const vectorDeAlumnos = [
    {nombre:"Guillermo",sueldo:27700,dpto:"capital"},
    {nombre:"Ever",sueldo:9700,dpto:"fme"},
    {nombre:"Gaby Centeno",sueldo:105000,dpto:"fme"},
    {nombre:"Juan Nugues",sueldo:1,dpto:"vviejo"}
];

window.onload = ()=>
    {
        console.log("running");

        console.log(vectorSueldos);

        /* Metodo forEach => para cada uno 
        de los elementos del vector */


        /* Ejemplo 01 - forEach - pasando como 
        parametro una funcion callBack anonima 
        que a su vez recibe como parametro el elemento
        y el indice.

        */

        vectorSueldos.forEach((element,indice)=>{

            console.log(`Sueldo :${element} - posicion ${indice}`);

        });

        /* Ejemplo 02 => Recorrido del vector. aplicando
        un 12% de incremento en dolares */

        vectorSueldos.forEach((sueldo)=>{

            // creo una variable y la inicializo //
           let sueldoConAumento = 0;

           // a esa variable, es el sueldo mas un 12% //
           sueldoConAumento = sueldo * 1.12;

           // muestro ese sueldo con aumento
           console.log(sueldoConAumento);
           
        });

        /* Mostrar el Vector - de Sueldos.
        pero con objetos literales */

        console.log(vectorDeAlumnos);

        /* Recorrer el Vector de alumnos, con sueldos
        calculando el 7% para Capital, un 25% para fme
        y un 9% para valle viejo */

        vectorDeAlumnos.forEach((alumno)=>{

            //console.log(alumno);

            let aumentoSueldo = 0;

            if(alumno.dpto === 'capital')
            {
                aumentoSueldo = alumno.sueldo + (alumno.sueldo * 7)/100;
            }

            if(alumno.dpto === 'vviejo')
            {
                aumentoSueldo = alumno.sueldo + (alumno.sueldo * 9)/100;
            }

            if(alumno.dpto === 'fme')
            {
                aumentoSueldo = alumno.sueldo + (alumno.sueldo * 25)/100;
            }

            console.log(`${alumno.nombre} ${alumno.dpto} - ${alumno.sueldo} - posible aumento ${aumentoSueldo}`);


        });

        /* que es lo que va dentro 
        del forEach

            * 1 funcion callBack
            * el forEach no tiene forma de cancelar el recorrido
                (break) / (return). recorre todo.

            * 
            

        */

       

    }