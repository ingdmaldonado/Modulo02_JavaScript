
/* (1) Las Arrow function se pueden 
guardar dentro de variables o constantes */

const cuadrado = (numero) => {return numero * numero;};

/* (2) Si reciben un solo parametro, se puede 
omitir los parentesis que rodean al parametro */

const cuadrado2 = numero => {return numero * numero;};

/* (3) Si la función tiene una sola instrucción, se
pueden omitir las llaves y el return que se le dice
es un return implícito */

const cuadrado3 = numero => numero * numero;


window.addEventListener("load",()=>{

  console.log("this application is loaded");

  console.log(cuadrado(5)); // 25
  console.log(cuadrado2(5)); // 25    
  console.log(cuadrado3(5)); // 25




});