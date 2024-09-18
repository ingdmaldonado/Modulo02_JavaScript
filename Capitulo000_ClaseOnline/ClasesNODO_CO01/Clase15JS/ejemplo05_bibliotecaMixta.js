
/* un modulo que exporta una arrow function */
export const Cubo = (numero)=>
    {
        return numero * numero * numero;
    }

    /* también exporta una constante */
export const miNombre = "DANIEL MALDONADO nunca su equipo de VOLLEY de primera división descendio";

/* exporta un objeto literal */
export const objetoLiteral = {productoCodigo:100,productoNombre:"REPUESTO PARA BICICLETA",productoPrecio:35000};

/* exportamos una clase */
export class Superficie
{
    constructor(p1,p2)
    {
        this.largo = p1;
        this.ancho = p2;
    }

    getSuperficie()
    {
        return (this.largo * this.ancho);
    }

}