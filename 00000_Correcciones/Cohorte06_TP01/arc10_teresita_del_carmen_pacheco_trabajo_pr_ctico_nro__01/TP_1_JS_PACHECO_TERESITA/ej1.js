let A=parseFloat(prompt('Ingrese A:'));
let B=parseFloat(prompt('Ingrese B:'));

// Fórmulas
let suma = A + B;
let resta = A - B;
let producto = A * B;

// Mostrar resultados
console.log('Suma:',A+B);
console.log('Resta:',A-B);
console.log('Producto:',A*B);
if(B!==0)
    {console.log('División:',A/B);}
else
    {console.log('No se puede dividir por cero');}