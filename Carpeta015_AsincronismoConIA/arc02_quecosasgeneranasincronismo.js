
/*

🔸 1.2 — ¿Qué cosas generan asincronismo 
en JavaScript?

    JavaScript, por naturaleza, es sincrónico.
    Sin embargo, ciertas funciones y APIs 
    están construidas especialmente 
    para trabajar de forma asincrónica. 
    Esto significa que pueden iniciar 
    una tarea, delegarla fuera del hilo 
    principal, y continuar con el resto 
    del código sin esperar a que la tarea termine.

🔹 ¿Cuándo se necesita asincronismo?
Cuando una operación depende de un recurso o evento externo (como una API, un archivo del sistema, o una acción del usuario), y su duración no está controlada directamente por el motor de JavaScript. En estos casos, el asincronismo evita que el programa se congele esperando la respuesta.

🔹 Sentencias que generan asincronismo 
real en JavaScript:

✅ setTimeout() → ejecuta una función 
una vez después de un tiempo 
determinado.
✅ setInterval() → ejecuta una función 
repetidamente con un intervalo definido.
✅ FileReader.readAsText() → lectura de archivos
 locales en el navegador.
 ✅ fetch() → solicitudes HTTP 
 que retornan promesas.
 ✅ addEventListener(...) → eventos del usuario
 que son asincrónicos en su disparo 
 (el código que se ejecuta sigue siendo sincrónico).
 ✅ WebSocket → comunicación basada en eventos.
 ✅ Web Workers → tareas delegadas a otro hilo.
 ✅ En Node.js: funciones como fs.readFile(),
 consultas a base de datos, operaciones de red, etc.

🔸 Importante:

    Estas funciones ya están construidas 
    para delegar y manejar asincronismo. 
    Nosotros no creamos asincronismo al 
    escribir una función. 
    El asincronismo ocurre porque 
    usamos una API que lo gestiona internamente.

    En lenguajes como Java, es posible que el 
    programador cree manualmente nuevos hilos 
    de ejecución (threads), y los administre 
    de forma explícita. 
    Esto permite ejecutar tareas en paralelo,
    esperar sus resultados 
    (por ejemplo, usando Future) 
    y controlar de forma más directa la concurrencia
    y la asincronía.

    En JavaScript, esto no es posible de forma directa,
    ya que el lenguaje no permite crear 
    hilos personalizados desde cero. 
    Solo se puede trabajar de forma 
    asincrónica a través de:

    Funciones provistas por el entorno (como las mencionadas anteriormente)
    Mecanismos como Web Workers, que permiten delegar trabajo a otro hilo, pero no son comparables con los hilos en Java, ya que tienen restricciones de comunicación y aislamiento del entorno principal.
    Esto significa que en JavaScript, el asincronismo está limitado a funciones específicas del entorno. No existe la posibilidad de lanzar un hilo secundario arbitrario desde código JavaScript tradicional.
*/
