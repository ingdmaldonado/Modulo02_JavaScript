{
    let numeroA = Number(prompt(`Ingresa el primer número:`));
    let numeroB = Number(prompt(`Ingresa el segundo número:`));
    let suma = numeroA + numeroB ;
    let resta = numeroA - numeroB ;
    let producto= numeroA * numeroB;

    console.log(`La suma del numero A y el numero B es: ${suma}`);
    console.log(`La resta  del numero A y el numero B es: ${resta}`);
    console.log(`El producto  del numero A y el numero B es: ${producto}`);

    if (numeroB !==0) {  
    let division = numeroA/numeroB;
     console.log(`La division  numero A y el numero B es: ${division}`);
    }
    else { 
        console.log(`Error No se puede dividir por  cero`);
      }

    
    


}