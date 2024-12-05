
/* esto encapsula toda la lógica
necesaria y suficiente como para
calcular el IMC y realizar un diagnóstico
de ese indice */

export class IMC 
{

    constructor(PesoEnKilogramos,AlturaEnMetros)
    {
        this.peso = PesoEnKilogramos;
        this.altura = AlturaEnMetros;
        this.imc = 0;
    }

    getIndiceMasaCorporal()
    {
        this.imc = this.peso / (this.altura * this.altura);
        return this.imc;
    }

    getAnalisisDelIMC()
    {
        let analisis = "";
        if(this.imc < 18.5)
        {
            analisis = "bajo peso";
        }
        else
        {
            if((this.imc >= 18.5) && (this.imc <= 25))
            {
                analisis = "peso normal";
            }
            else
            {
                if((this.imc > 25) && (this.imc <= 30))
                {
                    analisis = "sobre peso";
                }
                else
                {
                    analisis = "obesidad";  
                }
            }
        }
        return analisis;
    }
}
