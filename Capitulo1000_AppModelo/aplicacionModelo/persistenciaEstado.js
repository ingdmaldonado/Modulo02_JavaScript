// persistenciaEstado.js

/* Este módulo. tiene tres funciones que trabajan
en conjunto para mantener el estado de toda la aplicación
de forma global. esto se puede lograr también gracias
al módulo que mantiene una instancia única, sino 
podrían haber varias pantallas con el mismo nombre instanciadas
y con datos repetidos. 

  Recordar que en este esquema intento guardar el estado
  de toda la aplicación y para ello voy a recurrir a un
  vector, donde se guarde el estado de cada pantalla como 
  un objeto. algo así =>

  [
      {
        idPantalla:"pantalla1.html",
        estado:{}
      },
      {
        idPantalla:"pantalla2.html",
        estado:{}
      }
    ]

*/

/* en esta constante guardamos como le pondremos al estado
de la aplicación en el localStorage */

const CLAVE_ESTADO = "estadoAplicacion";

/* 
  Esta función elimina todo el estado de la aplicación
  guardado en el localStorage bajo la clave global CLAVE_ESTADO.
  Útil para reiniciar el sistema o empezar desde cero.
*/

export const fnLimpiarTodoElEstado = () => {
  localStorage.removeItem(CLAVE_ESTADO);
  console.log("Estado de la aplicación limpiado completamente.");
};


/* 
  esta función se encarga de recuperar todo el estado 
  global de todas las pantallas 
*/

const fnleerTodoElEstado = ()=>
{
  const estadoEnFormatoTexto = localStorage.getItem(CLAVE_ESTADO); // recupero los datos del localStorage
  let estado = []; // creo una variable para recuperar el estado global
  try 
  {
    const data = JSON.parse(estadoEnFormatoTexto); // convierto el texto levantado a formato JSON
    if (Array.isArray(data)) // si es un Array
      {
        estado = data; // lo guardo en la variable estado y lo devuelvo
      }
  } catch (e) {
    console.warn("⚠️ Error al parsear estadoAplicacion:", e);
  }
  return estado; // si todo salio bien devolvera el estado, caso contrario un vector vacio
}

/* 
  Esta función se encarga de inicializar el estado de una pantalla
  dentro del vector global de estado, solo si esa pantalla aún
  no tiene datos guardados.

  Se recomienda llamar a esta función apenas se carga la pantalla,
  para asegurar que el estado tenga todos los atributos esperados.
*/

export const fnInicializarEstadoPantalla = (idPantalla, estadoInicial) => {
  const estadoGlobal = fnleerTodoElEstado(); // recupero el vector de estado global
  const existePantalla = estadoGlobal.some(pantalla => pantalla.idPantalla === idPantalla);

  console.log("fnInicializarEstadoPantalla",existePantalla);

  if (!existePantalla) 
    {
      fnGuardarEstadoPantalla(idPantalla, estadoInicial); // usamos la función ya definida para guardar
      console.log(`Estado inicial creado y guardado para ${idPantalla}`);
    }
};



export const fnLeerEstadoPantalla = (idPantalla) =>
  {
    const estadoGlobal = fnleerTodoElEstado(); // esta función devuelve todo el estado global de la aplicación y devuelve el vector
    const estadoPantalla = estadoGlobal.find(pantalla => pantalla.idPantalla === idPantalla);
    return estadoPantalla ? estadoPantalla.estado : {};
  }

 export const fnGuardarEstadoPantalla = (idPantalla, nuevoEstado) => 
  {
    const estadoGlobal = fnleerTodoElEstado();
    console.log("fnGuardarEstadoPantalla - estadoGlobal antes ",estadoGlobal);

    const indice = estadoGlobal.findIndex(pantalla => pantalla.idPantalla === idPantalla);
    console.log("fnGuardarEstadoPantalla - indice",indice)

    if (indice !== -1) 
    {
        // Si ya existe, lo reemplazamos
        estadoGlobal[indice].estado = nuevoEstado;
    } 
    else 
    {
      // Si no existe, lo agregamos
      estadoGlobal.push({ idPantalla, estado: nuevoEstado });
    }

    console.log(JSON.stringify(estadoGlobal));
    console.log("fnGuardarEstadoPantalla - estadoGlobal despues ",estadoGlobal);
    localStorage.setItem(CLAVE_ESTADO, JSON.stringify(estadoGlobal));
};

