
 /* 
Ejercicio Nro. 22: 
El Gobierno Nacional desea aplicar un impuesto (Sobre Tasa) a las bebidas en función de la siguiente 
clasificación y tipo. 
1 – Bebidas Agua en envases plásticos = 5 ‰ (cinco por mil) 
2 – Bebidas Agua en envases retornables = 1 ‰ (uno por mil) 
3 – Bebidas Gaseosas Azucaradas en envases plásticos = 7 ‰ (siete por mil) 
4 – Bebidas Gaseosas Azucaradas en envases retornables = 2 ‰ (dos por mil) 
5 – Bebidas Energéticas = 15 ‰ (quince por mil) 
6 – Cualquier otra bebida no clasificada = 1 ‰ (uno por mil). 
La función debe recibir el Importe Base de la Bebida, debe calcular y retornar la sobre Tasa, la 
recaudación de ese impuesto tendrá destino a la protección del medio ambiente. 
Nota: Debe devolver un número
*/

export const fnCalcularSobretasa = (tipoBebida, importeBaseBebida) => {
    
    
    // early returns

    if (tipoBebida === 1) return (importeBaseBebida*5)/1000; // Bebidas Agua en envases plásticos = 5 ‰ (cinco por mil)
    if (tipoBebida === 2) return (importeBaseBebida*1)/1000; // Bebidas Agua en envases retornables = 1 ‰ (uno por mil)
    if (tipoBebida === 3) return (importeBaseBebida*7)/1000; // Bebidas Gaseosas Azucaradas en envases plásticos = 7 ‰ (siete por mil)
    if (tipoBebida === 4) return (importeBaseBebida*2)/1000; // Bebidas Gaseosas Azucaradas en envases retornables = 2 ‰ (dos por mil) 
    if (tipoBebida === 5) return (importeBaseBebida*15)/1000; // Bebidas Energéticas = 15 ‰ (quince por mil)
    if (tipoBebida === 6) return (importeBaseBebida*1)/1000; // Cualquier otra bebida no clasificada = 1 ‰ (uno por mil)

    /*
    let resultado = 0;

    switch (tipoBebida) {
            case 1: // Bebidas Agua en envases plásticos = 5 ‰ (cinco por mil)
                {
                    resultado = (importeBaseBebida*5)/1000;
                    break;
                }
            case 2: // Bebidas Agua en envases retornables = 1 ‰ (uno por mil)
                {
                    resultado = (importeBaseBebida*1)/1000;
                    break;
                }
            case 3: // Bebidas Gaseosas Azucaradas en envases plásticos = 7 ‰ (siete por mil)
                {
                    resultado = (importeBaseBebida*7)/1000;
                    break;
                }
            case 4: // Bebidas Gaseosas Azucaradas en envases retornables = 2 ‰ (dos por mil) 
                {
                    resultado = (importeBaseBebida*2)/1000;
                    break;
                }
            case 5: // Bebidas Energéticas = 15 ‰ (quince por mil)
                {
                    resultado = (importeBaseBebida*15)/1000;
                    break;
                }
            case 6: // Cualquier otra bebida no clasificada = 1 ‰ (uno por mil)
                {
                    resultado = (importeBaseBebida*1)/1000;
                    break;
                }
            default:
                {
                    console.log(`Error!, ingrese una opcion de bebida correcta`);
                    break;
                }
        }
                

    return resultado;
    */
};
