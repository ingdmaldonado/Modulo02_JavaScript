
/* 
Se realizará una jornada deportiva interclubes en la que participarán distintos atletas de la región. Los deportes que se ofrecerán para competir serán ajedrez, tenis, padel y tenis de mesa.
El programa que se pide debe permitir ingresar los siguientes datos de cada participante: la edad del participante, el género (representado como 'M' para masculino o 'F' para femenino), el número del deporte elegido (donde 1 corresponde a ajedrez, 2 a tenis, 3 a padel y 4 a tenis de mesa) y una indicación booleana que diga si el participante es socio del club organizador (true si es socio, false si no lo es).
El sistema debe determinar primero la categoría del participante según la edad: si es menor de 18 años, la categoría será "Menor"; si es de 18 años o más, será "Mayor". Luego, el sistema debe asignar el precio base del deporte elegido según la tabla de tarifas siguiente: para ajedrez, 500 pesos si es menor y 800 pesos si es mayor; para tenis, 1500 pesos si es menor y 2000 pesos si es mayor; para padel, 1400 pesos si es menor y 1900 pesos si es mayor; y para tenis de mesa, 600 pesos si es menor y 900 pesos si es mayor.
*/

/* 
    

    edad ?. => edad >= 18 => mayor de edad
    
    datos => string

    genero ?. M/F

    deporte ?
        1) ajedrez => 500 menor, 800 mayor
        2) tenis => 1500 menor, 2000 mayor
        3) padel => 1400 menor, 1900 mayor
        4) tenis de mesa => 600 menor, 900 mayor.

    socio ?. = > SI ES SOCIO, le hagamos un 50% de descuento.
*/
{
    console.log(`aplicacion esta iniciada`);

    /* (1ra Parte) - Pedir los datos necesarios */

    let datosPersonales = ``;
    datosPersonales = prompt(`por favor ing. apellido y nombre`);

    let edadParticipante = 0;
    edadParticipante = Number(prompt(`Ing. edad: `));

    let actividadDeportiva = 0;
    actividadDeportiva = Number(prompt(`Deporte (1 - Ajedrez, 2- Tenis - 3 - Padel 4 - Tenis Mesa)`));

    let esSocio = Number(prompt(`es socio (1 - socio - 0 no socio) ? `));

    /* (2da.) - Analisis de la Información recibida */
    let esMenorDeEdad = edadParticipante < 18 ? true:false; // inicializamos la variable es menor de edad dependiendo de la edad del inscripto.


    /* (3ra.) - Determinar el $ de la inscripción en función del deporte */

    let precioEntrada = 0;
    let nombreDeporte = "";

    switch(actividadDeportiva)
    {
        case 1: // ajedrez
            {
                nombreDeporte = `Ajedrez`;
                precioEntrada = esMenorDeEdad ? 500:800;
                break;               
            }

        case 2: // tenis
            {
                nombreDeporte = `Tenis`;
                precioEntrada = esMenorDeEdad ? 1500:2000;
                break;                                      
            }

        case 3: // padel
            {
                nombreDeporte = `Padel`;
                precioEntrada = esMenorDeEdad ? 1400:1900;
                break;    
              
            }

        case 4: // tenis de mesa
            {
                
                nombreDeporte = `Tenis de Mesa`;
                precioEntrada = esMenorDeEdad ? 600:900;
                break;    
               
            }

        default:
            {                 
                nombreDeporte = ``;
                precioEntrada = 0;
                break;    
            }  
    }

    // operador ternario determino el precio a final a pagar //

    let descuentoSocio = esSocio === 1 ? (precioEntrada * 50)/100:0;

    // aqui vamos a calcular el importe a pagar //

    let totalAPagar = precioEntrada - descuentoSocio;

    console.log(`datos:${datosPersonales} edad: ${edadParticipante} actividad: ${actividadDeportiva} es menor ${esMenorDeEdad} deporte ${nombreDeporte} inscripcion ${precioEntrada} descuento ${descuentoSocio}`);

    console.log(`Precio a Pagar Final ${totalAPagar}`);

    /* 
        1 HORA X DIA => PROFESIONAL
        2 PROGRAMACIÓN PASO A PASO => HAGO Y PRUEBO.
    */

}