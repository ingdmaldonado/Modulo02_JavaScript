{
console.log('ejercicio N3');

let AmarokV6 = 65000000;
let TAOS = 53000000;
let PoloNuevo = 47000000;

let tasa1 = 0.099;
let tasa2 = 0.22;
let tasa3 = 0.33;

let cuotas1 = 12;
let cuotas2 = 24;
let cuotas3 = 36;

let opcion = 0;
let menu = 0;
let DNI = 0;

DNI = Number(prompt(
  'BIENVENIDO AL SISTEMA DE AUTO GESTION DE VOLKSWAGEN \n' +
  'INGRESE SU DNI'
));
console.log(`El usuario ingreso el DNI: ${DNI}`);

opcion = Number(prompt(
  `EL DNI INGRESADO ES: ${DNI} \n ` +
  'Ingrese 1 para continuar o 2 para salir'
));

while (opcion === 1) {

  menu = Number(prompt(
    `DNI solicitante: ${DNI} \n` +
    'Ingrese el vehiculo de su interés:\n' +
    '1 - VOLKSWAGEN AMAROK V6 - NAFTA \n' +
    '2 - VOLKSWAGEN TAOS - NAFTA \n' +
    '3 - VOLKSWAGEN POLO - DIESEL\n' +
    '4 - SALIR'
  ));

  switch (menu) {

    case 1: {
      let valor = AmarokV6;
      console.log('Elegiste AMAROK V6 - $65.000.000');
      
      let formaPago = Number(prompt(
        'Ingrese la forma de pago deseada:\n' +
        '1 - Pago directo\n' +
        '2 - Financiar'
      ));

      if (formaPago === 1) {
        console.log('Gracias por su compra. Pago directo registrado.');
      } else if (formaPago === 2) {
        let entrega = Number(prompt(`Ingrese el monto a entregar (mínimo 30% - ${valor * 0.3}):`));
        
        if (entrega < valor * 0.3 || entrega >= valor) {
          console.log('Monto de entrega inválido.');
          break;
        }

        let restante = valor - entrega;
        let plan = Number(prompt(
          'Seleccione plan de financiación:\n' +
          '1 - 12 cuotas (9.9% anual)\n' +
          '2 - 24 cuotas (22% anual)\n' +
          '3 - 36 cuotas (33% anual)'
        ));

        let interes = 0;
        let cuotas = 0;

        if (plan === 1) {
          interes = tasa1;
          cuotas = cuotas1;
        } else if (plan === 2) {
          interes = tasa2;
          cuotas = cuotas2;
        } else if (plan === 3) {
          interes = tasa3;
          cuotas = cuotas3;
        } else {
          console.log('Opción inválida de financiación');
          break;
        }

        let totalFinanciado = restante + (restante * interes);
        let cuotaMensual = totalFinanciado / cuotas;

        console.log(`Monto financiado: $${restante}`);
        console.log(`Tasa aplicada: ${interes * 100}%`);
        console.log(`Total a pagar: $${totalFinanciado}`);
        console.log(`En ${cuotas} cuotas de $${cuotaMensual.toFixed(2)}`);
      }

      break;
    }

    case 2: {
      let valor = TAOS;
      console.log('Elegiste TAOS - $53.000.000');

      let formaPago = Number(prompt(
        'Ingrese la forma de pago deseada:\n' +
        '1 - Pago directo\n' +
        '2 - Financiar'
      ));

      if (formaPago === 1) {
        console.log('Gracias por su compra. Pago directo registrado.');
      } else if (formaPago === 2) {
        let entrega = Number(prompt(`Ingrese el monto a entregar (mínimo 30% - ${valor * 0.3}):`));
        
        if (entrega < valor * 0.3 || entrega >= valor) {
          console.log('Monto de entrega inválido.');
          break;
        }

        let restante = valor - entrega;
        let plan = Number(prompt(
          'Seleccione plan de financiación:\n' +
          '1 - 12 cuotas (9.9% anual)\n' +
          '2 - 24 cuotas (22% anual)\n' +
          '3 - 36 cuotas (33% anual)'
        ));

        let interes = 0;
        let cuotas = 0;

        if (plan === 1) {
          interes = tasa1;
          cuotas = cuotas1;
        } else if (plan === 2) {
          interes = tasa2;
          cuotas = cuotas2;
        } else if (plan === 3) {
          interes = tasa3;
          cuotas = cuotas3;
        } else {
          console.log('Opción inválida de financiación');
          break;
        }

        let totalFinanciado = restante + (restante * interes);
        let cuotaMensual = totalFinanciado / cuotas;

        console.log(`Monto financiado: $${restante}`);
        console.log(`Tasa aplicada: ${interes * 100}%`);
        console.log(`Total a pagar: $${totalFinanciado}`);
        console.log(`En ${cuotas} cuotas de $${cuotaMensual.toFixed(2)}`);
      }

      break;
    }

    case 3: {
      let valor = PoloNuevo;
      console.log('Elegiste POLO - $47.000.000');

      let formaPago = Number(prompt(
        'Ingrese la forma de pago deseada:\n' +
        '1 - Pago directo\n' +
        '2 - Financiar'
      ));

      if (formaPago === 1) {
        console.log('Gracias por su compra. Pago directo registrado.');
      } else if (formaPago === 2) {
        let entrega = Number(prompt(`Ingrese el monto a entregar (mínimo 30% - ${valor * 0.3}):`));
        
        if (entrega < valor * 0.3 || entrega >= valor) {
          console.log('Monto de entrega inválido.');
          break;
        }

        let restante = valor - entrega;
        let plan = Number(prompt(
          'Seleccione plan de financiación:\n' +
          '1 - 12 cuotas (9.9% anual)\n' +
          '2 - 24 cuotas (22% anual)\n' +
          '3 - 36 cuotas (33% anual)'
        ));

        let interes = 0;
        let cuotas = 0;

        if (plan === 1) {
          interes = tasa1;
          cuotas = cuotas1;
        } else if (plan === 2) {
          interes = tasa2;
          cuotas = cuotas2;
        } else if (plan === 3) {
          interes = tasa3;
          cuotas = cuotas3;
        } else {
          console.log('Opción inválida de financiación');
          break;
        }

        let totalFinanciado = restante + (restante * interes);
        let cuotaMensual = totalFinanciado / cuotas;

        console.log(`Monto financiado: $${restante}`);
        console.log(`Tasa aplicada: ${interes * 100}%`);
        console.log(`Total a pagar: $${totalFinanciado}`);
        console.log(`En ${cuotas} cuotas de $${cuotaMensual.toFixed(2)}`);
      }

      break;
    }

    case 4: {
      console.log('Gracias elegirnos, continua el papelo con tu asesor');
      opcion = 2; 
      break;
    }

    default: {
      console.log('Opción inválida. Intente nuevamente.');
    }

  }
}
}