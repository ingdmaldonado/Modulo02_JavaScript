{


console.log('Ejercicio 4');
console.log('Iniciando cinta 2 ...');


let peso = 0;
let total = 0;
let salir = 0;
let xl = 0;
let l = 0;
let m = 0;
let descartados = 0;
let menu = 0;


menu = Number(prompt('Ingrese 1 para comenzar o 2 para salir e imprimir resultados'));

while (menu !== 2) {
  switch (menu) {
    case 1: {
      console.log('Sensor de peso activado. Pesando...');
      peso = Number(prompt('sensor de peso leyendo...'));

      if (peso >= 73) {
        xl++;
        console.log(`Peso del huevo: ${peso}g`);
        console.log('Servo 1 activado (XL)');
      } else if (peso >= 63 && peso < 73) {
        l++;
        console.log(`Peso del huevo: ${peso}g`);
        console.log('Servo 2 activado (L)');
      } else if (peso >= 53 && peso < 63) {
        m++;
        console.log(`Peso del huevo: ${peso}g`);
        console.log('Servo 3 activado (M)');
      } else {
        descartados++;
        console.log(`Huevo descartado: ${peso}g`);
        console.log('Servo 4 activado (Descartado)');
      }

      total++;

      
      menu = Number(prompt('Ingrese 1 para seguir clasificando o 2 para salir e imprimir resultados'));
      break;
    }

    case 2: {
      salir = Number(prompt('¿Está seguro que desea salir?\n1. Volver al menú\n2. Salir e imprimir resultados'));
      if (salir === 2) {
        menu = 2;
      } else {
        menu = 1;
      }
      break;
    }

    default: {
      console.log('Por favor, ingrese una opción válida (1 o 2).');
      menu = Number(prompt('Ingrese 1 para continuar o 2 para salir'));
      break;
    }
  }
}


let porcentajeXL = total > 0 ? (xl / total * 100).toFixed(2) : '0.00';
let porcentajeL = total > 0 ? (l / total * 100).toFixed(2) : '0.00';
let porcentajeM = total > 0 ? (m / total * 100).toFixed(2) : '0.00';


console.log('\n--- RESULTADOS FINALES ---');
console.log(`1) Total de huevos: ${total}`);
console.log(`2) Huevos XL: ${xl}`);
console.log(`3) Huevos L: ${l}`);
console.log(`4) Huevos M: ${m}`);
console.log(`5) Huevos descartados: ${descartados}`);
console.log(`6) % Huevos XL: ${porcentajeXL}%`);
console.log(`7) % Huevos L: ${porcentajeL}%`);
console.log(`8) % Huevos M: ${porcentajeM}%`);


}