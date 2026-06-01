

export const version = "2026.01.06";

/* Ejemplo 03: tratando de llegar a la versión
mas React posible
LE FALTA EL PATRÓN SUSCRIPTOR, para que los
lugares donde estará dibujado en el DOM. 
para que se sepa que este elemento se tiene
que re-renderizar y actualizar 
*/

export function estadoReact ({nombreVariable,valor})
{
    let estado;
    let vectorDeEstados = [];

    setEstado({nombreVariable,valor});

    estado.agregarSuscriptor = function agregarSuscriptor(nombreSuscriptor)
    {
        let suscriptor = estado.suscriptores.find(sus => sus === nombreSuscriptor);
        
        if(!suscriptor)
        {
          estado.suscriptores.push(nombreSuscriptor);
        }
    }

    function setEstado ({nombreVariable,valor})
    {     

      estado = vectorDeEstados.find(item => item.nombreVariable === nombreVariable);
      if(!estado)// cuando no encuentro el elemento
      {
        estado = {nombreVariable,valor};
        estado.suscriptores = [];
        vectorDeEstados.push(estado);
      }   
      else // cuando lo encuentro y pongo el mismo valor
      {
        estado.valor = valor;
      }   

      /* linea de prueba nada mas */
      //estado.suscriptores.forEach(suscriptor => console.log(suscriptor));

      estado.suscriptores.forEach(suscriptor => suscriptor.textContent = estado.valor);

    }

  return [estado,setEstado];

}