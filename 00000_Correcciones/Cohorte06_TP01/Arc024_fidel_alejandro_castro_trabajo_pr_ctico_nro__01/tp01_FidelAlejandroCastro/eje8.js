{
    let edad = Number(prompt("Ingrese tu edad: "));

    if (edad >= 0 && edad <= 12){
        console.log(`Eres un niño`);
    }else if(edad >= 13 && edad <= 17){
        console.log(`Eres un adolescente`);
    }else if(edad >= 18 && edad <= 64){
        console.log(`Eres un adulto`);
    }else if(edad > 64){
        console.log(`Eres un adulto Mayor`);
    }
}