{
    let numeroA = 0;
    let numeroB = 0;

    numeroA = Number(prompt("Ingrese valor A"));
    numeroB = Number(prompt("Ingrese valor B"));

    let suma = (numeroA + numeroB);
    let resta = (numeroA - numeroB);
    let producto = (numeroA * numeroB)

    if (numeroB !== 0){
        let division = (numeroA / numeroB);
        console.log (`La division es: ${division}`);
    }else{
        console.log (`No se puede dividir por cero`);
    }

    console.log (`La suma es: ${suma}, La resta es: ${resta}, El producto es: ${producto}`);

}