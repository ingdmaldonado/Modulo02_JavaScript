/* El Gobierno Nacional desea aplicar un impuesto (Sobre Tasa) a las bebidas en función de la siguiente
clasificación y tipo.
1 – Bebidas Agua en envases plásticos = 5 ‰ (cinco por mil)
2 – Bebidas Agua en envases retornables = 1 ‰ (uno por mil)
3 – Bebidas Gaseosas Azucaradas en envases plásticos = 7 ‰ (siete por mil)
4 – Bebidas Gaseosas Azucaradas en envases retornables = 2 ‰ (dos por mil)
5 – Bebidas Energéticas = 15 ‰ (quince por mil)
6 – Cualquier otra bebida no clasificada = 1 ‰ (uno por mil).

La función debe recibir el Importe Base de la Bebida, debe calcular y retornar la sobre Tasa, la
recaudación de ese impuesto tendrá destino a la protección del medio ambiente.
Nota: Debe devolver un número */
                                //Acordemonos que en los parametros van los datos que se van a agregar externos cuando usemos la funcion, por ende la opcion switch es bastante optima
export const calcularSobreTasa = (tipoDeBebida,importeBase) => {

    

    let calculoSobreTasa = 0;

    //El switch va a seleccionar el tipo de bebida por ende aqui dentro iria el parametro tipoDeBebida
    switch(tipoDeBebida){ 

        case 1:
            {
                calculoSobreTasa = (importeBase*5)/1000;
                break;
            }
        case 2:
            {
                 calculoSobreTasa = (importeBase*1)/1000;
                break;
            }
        case 3:
            {
                 calculoSobreTasa = (importeBase*7)/1000;
                break;
            }
        case 4:
            {
                 calculoSobreTasa = (importeBase*2)/1000;
                break;
            }
        case 5:
            {
                 calculoSobreTasa = (importeBase*15)/1000;
                break;
            }
        case 6:
            {
                 calculoSobreTasa = (importeBase*1)/1000;
                break;
            }

        default:
            {
                 calculoSobreTasa = (importeBase*1)/1000;
                 break;
            }

    };

    return calculoSobreTasa; //vamos a devolver la VARIABLE donde se va a acumular el calculoSobreLaTasa

};