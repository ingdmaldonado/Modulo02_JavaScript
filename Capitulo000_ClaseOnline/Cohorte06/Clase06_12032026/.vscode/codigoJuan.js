
    /* 
        javascript anterior año 2015 
    
            var declarar variables
            podias declarar variables sin poner var
            y sin poner let

        javascript 2015 > 
            let

    */


{

    let A=0;
    A = Number(prompt("Señor ingrese el valor del numero A"));

    let B = 0;
    B = Number(prompt("Señor ingrese el valor del numero B"));
    
    let suma = (A + B);
   
    let resta = (A - B);

    let producto = (A*B);


    /* 
        No Existe la posibilidad de dividir por cero
        es una INDETERMINACIÓN MATEMATICA.

        A / B = Si B === 0 no se puede dividir
    
    */

    /*
        A === B
        A > B
        A < B
        A >= B
        A <= B
        A !== B

    */

    if (B !== 0)
    {       
        division = (A/B);
        console.log(division);      
    }
    else
    {
        console.log('Division no posible');
    }

    console.log (`suma es ${suma} resta es ${resta} producto es ${producto}`);

}
