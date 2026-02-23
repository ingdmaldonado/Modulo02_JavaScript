

{
    /* `` */

    console.log(`applicacion is running`);

    /* Estructura condicional if/else 
    
        Si / No => PSEINT
    */

    let edadDePersona = 18; 



    if(edadDePersona >= 18) // expresión lógica
    { // lado verdadero
        console.log(`Usted es mayor de edad porque tiene ${edadDePersona}`);
    }
    else // lado falso
    {
  console.log(`Usted es menor de edad porque tiene ${edadDePersona}`);
    }

    /* expresiones lógicas comunes 
    
        (a > b) => se lee a es mayor a b => queda igual
        (a = b) => se lee a es igual a b => (a === b)
        (a < b) => se lee a es menor que b => queda igual
        (a >= b) => se lee a es mayor o igual a b => queda igual
        (a <= b) => se lee a es menor o igual a b => queda igual
        (a <> b) => a es distinto de b => queda igual
        (a != b) => a es distinto de b ó a NO ES IGUAL a b => (a !== b)    
    */

    /* Ejemplo 01 */

    let edadDeJuan = 25;
    let edadDeSofia = 25;

    if(edadDeJuan > edadDeSofia) // juan es mas grande que sofia
    {
        console.log(`Juan es mas grande que Sofia`);
    }
    else // pueden pasar 2 cosas
    {
        if(edadDeJuan < edadDeSofia) // juan es menor que sofia
        {
            console.log(`Juan es menor que Sofía`);
        }
        else
        {
            console.log(`Juan y Sofia tienen la misma edad`);
        }
    }

    let edadDeMarquitos = 0;
    edadDeMarquitos = Number(prompt("Ingrese la edad de Marcos"));
    
    /* 
        joven => 18 y 30
        maduro => 31 a 40
        maduro consagrado 1 => 41 a 55
        adulto mayor => 56 a 75
        abuelos => 76 ...
    */

    if(edadDeMarquitos <= 30)
    {
        console.log(`Marquitos es joven`);
    }
    if((edadDeMarquitos >= 31) && (edadDeMarquitos <=40))
    {
        console.log(`Marquitos es maduro`);
    }
    if((edadDeMarquitos>=41)&&(edadDeMarquitos<=55))
    {
        console.log(`Maduro Consagrado`);
    }
    if((edadDeMarquitos >= 56)&&(edadDeMarquitos <= 75))
    {
        console.log(`Adulto MAYOR`);
    }
    if(edadDeMarquitos >= 76)
    {
        console.log(`MARQUITOS ES ABUELITO`);
    }

    /* El condicional if/else 
    de los condicionales es el mas completo,
    complejo 
    
        - condicionales anidados (anidados)
        - condicionales No anidados
        - permite realizar comparaciones 
        de variables que son CONTINUAS y DISCRETAS TAMBIEN

            DISCRETAS => asumen valores puntuales y especificos

                numero de mes => 1,2,3,...12
                numero de dia => 1,2,3....31

            CONTINUAS => pueden asumir infinitos valores dentro de un rango
    
                nivel de glucosa en sangre => 70 a 95, 95 a 110

                    70.10, 70.15, 70.1556
    
    */


}