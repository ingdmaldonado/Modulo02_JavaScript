{
 //Ejecicio 8 

let edad = 0 ;

edad = Number(prompt("Ingrese una edad"));

if (edad >= 13 && edad <= 17){
  console.log (`La edad es de un adolecente y es de:${edad}`);
}
else if (edad >=0 && edad <=12) { 
        console.log(`La edad es de un niño y es de: ${edad}`);
     }
     else if (edad >=18 && edad <=64){
        console.log(`La edad es de un adulto y es de: ${edad}`);
     }
     else {
        console.log(`La edad es de un adulto mayor y es de: ${edad}`);
     }   
}