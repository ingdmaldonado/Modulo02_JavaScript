
export class Suma
{

    constructor(numero1,numero2) 
    {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

    setNumero1(valor)
    {
        this.numero1 = valor;
    }

    getNumero1()
    {
        return (this.numero1);
    }

    setNumero2(valor)
    {
        this.numero2 = valor;
    }

    getNumero2()
    {
        return (this.numero2);
    }

    sumar()
    {
        return (this.numero1 + this.numero2);
    }

}