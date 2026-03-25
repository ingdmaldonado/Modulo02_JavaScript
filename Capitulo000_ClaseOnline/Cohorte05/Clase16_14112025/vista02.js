

window.onload = ()=>{

    console.log(`running`);

    const persona1 = {dni:22777999,club:"BOCA",nombrecompleto:"MALDONADO ENRIQUE DANIEL"};

    const persona2 = {dni:33888777,club:"BOCA",nombrecompleto:"ROMAY EVER MARTIN"};

    console.log(persona1);

    const Personas = [persona1,persona2,
        {dni:44897221,club:"RIVER",nombrecompleto:"CHOCOBAR JORGE"},
        {dni:33896219,club:"BOCA",nombrecompleto:"SALVA SANDRA BERSABEL"}
    ]; // inicialización de un vector //

    console.log(Personas);

    /* RECORRIDO DE UN VECTOR DE OBJETOS LITERALES */

    let contadorBoca = 0;
    let contadorRiver = 0;

    for(let i = 0; i < Personas.length;i++)
    {
        let persona = Personas[i];// aqui extraje la persona del vector

        if(persona.club === 'BOCA')
        {
            contadorBoca = contadorBoca + 1;
        }

        if(persona.club === 'RIVER')
        {
            contadorRiver = contadorRiver + 1;
        }


        console.log(`Nombre: ${persona.nombrecompleto} - Club:${persona.club}`);

        console.log(persona.club);

    }

    console.log(`Cantidad de Boca: ${contadorBoca} - Cantidad River: ${contadorRiver}`);


};