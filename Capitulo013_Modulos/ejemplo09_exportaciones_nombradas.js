
/* exportamos una funcion clasica con nombre */
export function funcionClasica()
{
    console.log("soy una función clasica")
}

/* exportamos una función flecha con nombre */
export const funcionFlecha =()=>
    {
        console.log("soy una funcion flecha");
    }

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
/* exportamos un objeto */

export const Club = {nombre:"CLUB ATLETICO BOCA JUNIORS",copasintercontinentales:3};



