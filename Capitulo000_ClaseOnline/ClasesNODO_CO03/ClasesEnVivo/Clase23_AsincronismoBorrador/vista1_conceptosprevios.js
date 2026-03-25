

/*

✨ Asincronismo en JavaScript - Guía Conceptual y Pedagógica

📖 Tema Principal: ASINCRONISMO EN JAVASCRIPT

    Esta guía tiene como objetivo dejar en claro qué partes 
    del lenguaje JavaScript generan asincronismo, 
    y cuáles no. La mayoría del código que se escribe 
    al aprender JavaScript es sincrónico. 
    El asincronismo es una característica puntual, 
    que ocurre sólo en casos específicos.

🔹 Tema 1: ¿Qué es el asincronismo?

    🔸 1.1 — JavaScript es sincrónico por naturaleza

    JavaScript es un lenguaje de ejecución lineal y secuencial. 
    Ejecuta las instrucciones una por una, en orden, 
    sin esperar nada del exterior salvo que se 
    utilicen herramientas específicas. 
    Todo lo que se viene enseñando hasta ahora —declaraciones, 
    estructuras de control, funciones, arrays, objetos, 
    operaciones con el DOM— es completamente SINCRÓNICO.

    🔸 1.2 — ¿Qué cosas generan asincronismo en JavaScript?

    El asincronismo en JavaScript no ocurre de forma automática.
    Solo se genera cuando se utilizan ciertas funciones 
    o mecanismos específicos del entorno. 
    Si una instrucción o API no está en esta lista, 
    entonces su comportamiento es sincrónico.

    Observación clave:
        Un proceso suele requerir asincronismo cuando depende 
        de un recurso o entidad externa
        cuya ejecución y culminación no está bajo control directo 
        del motor de JavaScript.

        Esto incluye operaciones que dependen del sistema operativo, 
        del hardware,del usuario o de servidores remotos.

        Por ejemplo, fetch() realiza una solicitud a un 
        servidor externo: su tiempo de respuesta depende de factores 
        que están fuera del entorno local. 
        Lo mismo ocurre con la lectura de archivos,
        
        la espera de eventos del usuario o la ejecución de tareas 
        pesadas en un hilo paralelo (Web Workers).
        Esta perspectiva es fundamental para una comprensión 
        global del asincronismo.


    Estas son las funciones y mecanismos que generan asincronismo:

        setTimeout() y setInterval()
        fetch() y XMLHttpRequest
        Lectura de archivos con FileReader

    addEventListener(...) (el evento es asincrónico, el código del callback es sincrónico)
    Web Workers
    Comunicación con WebSockets
    Promesas que envuelven procesos asincrónicos reales
    Algunas APIs del navegador: Clipboard, Notification, Geolocation, etc.
    En Node.js: fs.readFile(), http.get(), consultas a bases de datos, etc.

    🔸 1.3 — Todo lo que no esté en esa lista es sincrónico

    Ejemplos de instrucciones, estructuras y funciones que son sincrónicas:

        Bucles: for, while, do...while
        Condicionales: if, switch, operadores ternarios
        Métodos de array: forEach(), map(), filter(), reduce()
        Manipulación del DOM: appendChild, innerHTML, setAttribute, style
        Declaraciones: let, const, function, class
        JSON.stringify() y JSON.parse()
        Asignaciones, expresiones matemáticas, llamadas a funciones puramente locales

    🔸 1.4 — Conclusión

    El asincronismo en JavaScript es un comportamiento excepcional,
    no la norma. Sólo algunas APIs, funciones y eventos generan 
    asincronismo. Todo lo que no esté explícitamente en esa lista, 
    se ejecuta de manera sincrónica y 
    bloquea el hilo principal mientras corre. 
    Esta distinción es fundamental para comprender 
    cómo estructurar el código y qué esperar de su ejecución.

*/



window.addEventListener("load",()=>{

    console.log("running !!!");

})