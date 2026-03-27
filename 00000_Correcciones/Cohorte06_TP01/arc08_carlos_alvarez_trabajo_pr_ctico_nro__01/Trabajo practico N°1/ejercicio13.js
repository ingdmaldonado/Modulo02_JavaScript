//ejercicio N° 13


{ 
   
    let rubro = 0;
    rubro = Number(prompt(`Ingrese rubro (1 - vestimenta, 2 - perfumeria, 3 - libreria, 4 - electrodomesticos, 5 - calzado)`));

    let importeDeLaCompra = 0;
    importeDeLaCompra = Number(prompt(`Ingrese el importe de la compra`));

    let descuento = 0;
    let tope = 0;
    let nombreRubro = '';
    let esRubroValido = true;

    switch(rubro) {
        case 1:
            nombreRubro = 'Vestimenta';
            descuento = (importeDeLaCompra * 20) / 100;
            tope = 80000;
            break;
        case 2:
            nombreRubro = 'Perfumeria';
            descuento = (importeDeLaCompra * 20) / 100;
            tope = 80000;
            break;
        case 3:
            nombreRubro = 'Libreria';
            descuento = (importeDeLaCompra * 30) / 100;
            tope = 90000;
            break;
        case 4:
            nombreRubro = 'Electrodomesticos';
            descuento = (importeDeLaCompra * 15) / 100;
            tope = 70000;
            break;
        case 5:
            nombreRubro = 'Calzado';
            descuento = (importeDeLaCompra * 20) / 100;
            tope = 80000;
            break;
        default:
            esRubroValido = false;
            console.log('Rubro inválido, ingrese uno valido');
            break;
    }

    if(esRubroValido) {
        if(descuento > tope) 
          {
            descuento = tope;
        }
        let totalAPagar = importeDeLaCompra - descuento;
        console.log(`Rubro: ${nombreRubro}`);
        console.log(`Importe de la compra: ${importeDeLaCompra}`);
        console.log(`Descuento aplicado: ${descuento}`);
        console.log(`Importe final a pagar: ${totalAPagar}`);
    } else {
        console.log('No se puede calcular el descuento, rubro invalido.');
    }
}
