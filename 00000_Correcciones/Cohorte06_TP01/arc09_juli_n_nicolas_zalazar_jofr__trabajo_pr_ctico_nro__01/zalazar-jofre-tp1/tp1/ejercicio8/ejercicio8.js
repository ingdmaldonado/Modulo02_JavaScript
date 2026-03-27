//ejercicio8

let edad = Number(prompt('Ingrese la edad para consultar: '));

if (edad >=0 && edad <= 12){
    console.log('La edad ingresada es', edad, 'y corresponde a un niño.')
}
else if (edad > 12 && edad < 18){
    console.log('La edad ingresada es', edad, 'y corresponde a un adolescente')
}
else if (edad >= 18 && edad < 64){
    console.log('La edad ingresada es', edad, 'y corresponde a un adulto')
}
else {
    console.log('La edad ingresada es', edad, 'y corresponde a un adulto mayor')
}