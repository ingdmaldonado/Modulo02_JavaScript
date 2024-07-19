
/* 01 - exportar variables */
    let contadorGeneral = 0;

/* 02 - exportar una constante */

    const VERSION_SISTEMA = "22.04.2024_REVISION_2";

/* 03 - una función como constante */
    export const calcularCuadrado = (numero)=>
    {
        return numero * numero;
    }

/* 03 -  una clase para POO => pogramación orientada a objetos */

    export class Suma
    {
        constructor(numero1,numero2)
        {
            this.numero1 = numero1;
            this.numero2 = numero2;
        }

        getSuma()
        {
            return (this.numero1 + this.numero2);
        }
    }

/* 04 - exportar objetos literales */

export const objetoLiteralCliente = 
        {
            clienteCuit:'2324010663',
            clienteNombre:'PEREZ JUAN EUSEBIO',
            clienteDomicilio:"SAN MARTIN 999. CIUDAD AUTONOMA DE BS.AS"
        }

/* 05 - exportando vectores */

    export const VectorDeProvincias = ["CATAMARCA","LA RIOJA","TUCUMAN","SANTIAGO"];


/* 06 - exportación por defecto */


