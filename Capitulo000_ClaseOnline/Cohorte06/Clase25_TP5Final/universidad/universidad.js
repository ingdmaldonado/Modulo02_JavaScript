import {fnRecuperarUniversidades} from "./universidadModelo.js";
import {fnUniversidadToView,fnUniversidadesToViews,fnRender} from "./universidadVista.js";

window.onload = ()=>{

    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");
    const idSelectorPais = document.querySelector("#idSelectorPais");
    const idCuerpoDetabla = document.querySelector("#idCuerpoDetabla");

    /* aqui es cuando estoy haciendo click
    en el boton recuperar */

    idBtnRecuperar.onclick = async ()=>{

        // aqui saco el pais elegido //
        const paisElegido = Number(idSelectorPais.value);

        console.log(paisElegido);

        // esto me devuelve un listado de universidades //
        const datos = await fnRecuperarUniversidades(paisElegido);

        // aqui estoy mostrando todas las universidades //
        console.log(datos);

        // aqui le estoy diciendo que me muestre la primera universidad del listado //
        console.log(datos[0]);

        // aqui le estoy pasando solo una universidad //
        const fila = fnUniversidadToView(datos[0]);
        console.log(fila);

        // aqui estoy pasando todas las universidades y devolviendolas en filas //
        const filas = fnUniversidadesToViews(datos);
        console.log(filas);

        // ahora lo unico que me falta, es invocar a la función que renderiza las views //
        fnRender(filas,idCuerpoDetabla);

    };


};

/* 

    reglas

  modelo.js     → habla con el servidor (api.js)

  vista.js      → habla con el DOM
  
  controlador.js → habla con el modelo y con la vista, nunca directamente con el servidor ni con el DOM


*/



/*
  CÓDIGOS DE ESTADO HTTP
  ======================

  request.status     → el número  — 200, 404, 500, etc
  request.statusText → el texto   — "OK", "Not Found", "Internal Server Error"
  request.ok         → booleano   — true si está entre 200 y 299, false si no

  request.ok === true  → status entre 200 y 299 → todo bien
  request.ok === false → status fuera de 200-299 → algo falló

  2xx — ÉXITO — request.ok === true
  ----------------------------------
  200 OK
      La solicitud fue exitosa.
      GET que devuelve datos, POST que procesa correctamente.

  201 Created
      El recurso fue creado exitosamente.
      Respuesta típica de un POST que crea un registro en la BD.

  204 No Content
      La solicitud fue exitosa pero no hay contenido que devolver.
      Respuesta típica de un DELETE exitoso.

  3xx — REDIRECCIONES — request.ok === false
  ------------------------------------------
  301 Moved Permanently
      El recurso se movió a otra URL de forma permanente.
      El servidor indica la nueva URL.

  302 Found
      El recurso se movió temporalmente a otra URL.

  304 Not Modified
      El recurso no cambió desde la última vez que se pidió.
      El navegador puede usar la versión en caché.

  4xx — ERRORES DEL CLIENTE — request.ok === false
  -------------------------------------------------
  400 Bad Request
      La solicitud está mal formada o tiene datos inválidos.
      Cuando mandás un JSON con campos incorrectos o faltantes.

  401 Unauthorized
      No estás autenticado.
      Cuando intentás acceder sin haber iniciado sesión.

  403 Forbidden
      Estás autenticado pero no tenés permisos.
      Un usuario común intentando acceder a una ruta de administrador.

  404 Not Found
      El recurso no existe en el servidor.
      URL mal escrita, id que no existe, recurso eliminado.

  405 Method Not Allowed
      El método HTTP no está permitido para esa ruta.
      Hacer un DELETE a una ruta que solo acepta GET.

  408 Request Timeout
      El servidor esperó demasiado y cerró la conexión.
      Conexión lenta o servidor ocupado.

  409 Conflict
      Conflicto con el estado actual del recurso.
      Intentar crear un usuario con un email que ya existe.

  422 Unprocessable Entity
      El servidor entiende la solicitud pero no puede procesarla.
      Validaciones fallidas — campo requerido vacío, formato inválido.

  429 Too Many Requests
      Demasiadas solicitudes en poco tiempo.
      El servidor aplicó rate limiting.

  5xx — ERRORES DEL SERVIDOR — request.ok === false
  --------------------------------------------------
  500 Internal Server Error
      Error genérico del servidor.
      Excepción no controlada en el BackEnd, bug en el código del servidor.

  501 Not Implemented
      El servidor no soporta la funcionalidad requerida.

  502 Bad Gateway
      El servidor actuó como proxy y recibió una respuesta inválida.
      El BackEnd está caído o no responde.

  503 Service Unavailable
      El servidor no está disponible temporalmente.
      Mantenimiento, sobrecarga, o el servidor se cayó.

  504 Gateway Timeout
      El servidor proxy no recibió respuesta a tiempo del servidor destino.
      El BackEnd tardó demasiado en responder.
*/