{
    //Ejercicio 1 

    let A=0;
    A = Number(prompt("Señor ingrese el valor del numero A"));

    let B = 0;
    B = Number(prompt("Señor ingrese el valor del numero B"));
    
    let suma = (A + B);
   
    let resta = (A - B);

    let producto = (A*B);


    

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