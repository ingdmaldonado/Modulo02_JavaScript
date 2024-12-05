

    /* el objetivo de esta clase
    es encapsular la logica necesaria
    que permita a un programador, construir
    objetos y poder sumarlos.*/

    export class Suma
    {
        // metodo. es una función que es mienbro de la clase
        constructor(valor1,valor2)
        {
            this.numero1 = valor1; // atributos de la clase
            this.numero2 = valor2;
        }

        getSuma()
        {
            return (this.numero1 + this.numero2);
        }

    }

    export const Cuadrado = (numero)=>
        {
            return numero * numero;
        }