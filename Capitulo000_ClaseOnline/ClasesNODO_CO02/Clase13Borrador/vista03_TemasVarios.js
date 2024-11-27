
window.addEventListener("load",()=>
    {


        /* (00) - Spread Operator */

            const vector1 = [400,500,600,700];

            const vector2 = vector1;

            const vector3 = [...vector1];

            vector1.push(777.77);

            console.log(vector1);

            console.log(vector2); // recorcholis ?. !!!.

            console.log(vector3);        


        /* (01) - Creando un Objeto Literal */

            const objetoLiteral1 = {dni:27496209,apellidos:'MALDONADO',nombres:'ENRIQUE DANIEL'};

        /* (02) - Spread Operator a nivel de Objetos */

        const club1 = {nombreClub:'CLUB ATLETICO BOCA JUNIORS',copasIntercontinentales:3};

        const club2 = club1;

        const club3 = {...club1,jugoEnLaBNacional:false};

        club1.nombreClub = 'DEFENSORES DE ESQUIU';
        club1.copasIntercontinentales = 0;

        console.log(club1);
        console.log(club2);
        console.log(club3);


        /* (02) - Destructuring de objetos */

           const {dni,apellidos,nombres} = objetoLiteral1;

            console.log(dni);
            console.log(apellidos);
            console.log(nombres);

        /* (03) - Vector de Objetos Literales */

            const objeto1 = {nombreClub:'CLUB ATLETICO BOCA JUNIORS',copasIntercontinentales:3};

            const objeto2 = {nombreClub:'CLUB ATLETICO BOCA JUNIORS',copasIntercontinentales:1};

            console.log(objeto1,objeto2);

            const vectorDeClubes = [objeto1,objeto2];

            console.log(vectorDeClubes);








    })