

/* esta función es una función que recibe
como parametro una cantidad estatica y definida
de parametros. en este ejemplo son 3. por do
tanto unicamente puede hacer un promedio de tres
estudiantes */
const fnEdadPromedioDeEstudiantes = (p1,p2,p3)=>
{
    return (p1 + p2 +  p3)/3;
}

/* esta función hace exactamente lo mismo. con 
la diferencia que recibe un operador spread 
que es como indicarle a javasCript que recibira
"n" parametros y todo esos se van a tratar como un vector */

const fnEdadPromedioConRestOperator = (...edades)=>
    {
        let sumaTotalDeEdades = 0;
        edades.forEach((edad)=>{

            sumaTotalDeEdades = sumaTotalDeEdades + edad;

        })

        return (sumaTotalDeEdades / edades.length);

    }


window.addEventListener("load",()=>
    {
        console.log("esto esta andando");

        let resultado1 = fnEdadPromedioDeEstudiantes(21,25,30);
        console.log(resultado1.toFixed(0));

        let resultado2 = fnEdadPromedioConRestOperator(21,25,30,40,27,23);
        console.log(resultado2.toFixed(0));


        
/*
Ejemplo:
Se tiene un objeto de usuario. Extraer la propiedad "email" y agrupar el resto en otro objeto.
*/
const usuario = {
    nombre: "Lucas",
    edad: 30,
    email: "lucas@example.com",
    rol: "admin"
  };

  const { email, ...otrosDatos } = usuario;
  console.log(email);       // "lucas@example.com"
  console.log(otrosDatos);  // { nombre: "Lucas", edad: 30, rol: "admin" }
  



})