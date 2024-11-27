

export class IMC 
{

    constructor(PesoEnKilogramos,AlturaEnMetros)
    {
        this.peso = PesoEnKilogramos;
        this.altura = AlturaEnMetros;
        this.IMC = 0;
    }

    setPeso(valorNuevo)
    {
        this.peso = valorNuevo;
    }

    setAltura(valorNuevo)
    {
        this.altura = valorNuevo;
    }

    getAltura()
    {
        return (this.altura);
    }

    getPeso()
    {
        return (this.peso);
    }

    calcularIMC()
    {
        this.IMC = (this.peso / (this.altura * this.altura));
        return (this.IMC);
    }

    analizarIMC()
    {
        let situacionPaciente = "";
        if(this.IMC < 18.5)
        {   
            situacionPaciente = "BAJO PESO";
        }
        else
        {
            if((this.IMC >= 18.5) && (this.IMC <= 25))
            {
                situacionPaciente = "PESO NORMAL";
            }
            else
            {
                if((this.IMC > 25) && (this.IMC <= 30))
                {
                    situacionPaciente = "SOBRE PESO";
                }
                else
                {
                    situacionPaciente = "OBESIDAD";
                }
            }
        }
        
        return situacionPaciente;

    }
}

