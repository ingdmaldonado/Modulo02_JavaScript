/*El Gobierno Nacional desea aplicar un impuesto (Sobre Tasa) a las bebidas en función de la siguiente
clasificación y tipo.
1 – Bebidas Agua en envases plásticos = 5 ‰ (cinco por mil)
2 – Bebidas Agua en envases retornables = 1 ‰ (uno por mil)
3 – Bebidas Gaseosas Azucaradas en envases plásticos = 7 ‰ (siete por mil)
4 – Bebidas Gaseosas Azucaradas en envases retornables = 2 ‰ (dos por mil)
5 – Bebidas Energéticas = 15 ‰ (quince por mil)
6 – Cualquier otra bebida no clasificada = 1 ‰ (uno por mil).
La función debe recibir el Importe Base de la Bebida, debe calcular y retornar la sobre Tasa, la
recaudación de ese impuesto tendrá destino a la protección del medio ambiente.
Nota: Debe devolver un número*/

export const calcularSobreTasa=(tipoDeBebida, importeBase)=>{ // exporta la funcion.
    // se declara la variable y se iniciliza en cero.
    let sobreTasa=0;
    // segun el tipo de bebida que se eligio calcula su sobre tasa.
    switch(tipoDeBebida){
        case 1: 
        {
            sobreTasa=(importeBase*5)/1000;
            break;
        }
        case 2: 
        {
            sobreTasa=(importeBase*1)/1000;
            break;
        }
         case 3: 
        {
            sobreTasa=(importeBase*7)/1000;
            break;
        }
         case 4: 
        {
            sobreTasa=(importeBase*2)/1000;
            break;
        }
         case 5: 
        {
            sobreTasa=(importeBase*15)/1000;
            break;
        }
        default:
        {
            sobreTasa=(importeBase*1)/1000;
            break;
        }
    }
    // se retorna la variable.
    return sobreTasa;
};