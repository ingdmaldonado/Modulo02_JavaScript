{ 
    console.log(`Estructura  IF/ELSE`);

    let numero = Number(prompt(`Ingrese un numero: `));
    
    if (numero==0){
         console.log(`El numero ingresado es ${numero}`);
        console.log(`El numero ingresado es cero`);
    }
    if(numero >0){
        console.log(`El numero ingresado es ${numero}`);
        console.log(`El numero ingresado es positivo`);
    }
    else{
        console.log(`El numero ingresado es ${numero}`);
       console.log(`El numero ingresado es negativo`); 
    }

     console.log(`Operador  ternario`);

    let numero1 = Number(prompt(`Ingrese otro numero: `));
    numero1>0?  console.log(`El numero ingresado es positivo`) :console.log(`El numero ingresado es negativo`);
    console.log(`El numero ingresado es ${numero1}`);
}