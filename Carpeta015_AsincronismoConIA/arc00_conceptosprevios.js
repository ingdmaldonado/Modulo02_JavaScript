
/*

ASINCRONISMO EN JAVASCRIPT

🔹 Tema 1 — ¿Qué es el asincronismo?

    1.1 — JavaScript es sincrónico por naturaleza1.2 — ¿Qué cosas generan asincronismo en JavaScript?  📌 Incluye observación clave sobre procesos que dependen de recursos externos1.3 — Todo lo que no esté en esa lista es sincrónico1.4 — Conclusión

🔹 Tema 2 — ¿Cómo se gestiona el asincronismo en JavaScript?

    2.1 — El Event Loop: el núcleo del asincronismo2.2 — Callbacks  📌 Aclaración fundamental: no se hacen callbacks para lograr asincronismo;  el asincronismo lo genera la función que recibe ese callback (ej. setTimeout, FileReader)  📌 Diferencia entre callbacks sincrónicos (ej. forEach) y asincrónicos (setTimeout)
    2.3 — Promesas (Promise)  📌 Se explicará en el contexto real de fetch()  📌 Importante: una promesa no es asincrónica por sí sola, su contenido debe serlo  📌 Se mostrará .then(), .catch() con ejemplos reales
    2.4 — async / await  📌 Cómo simplifica el uso de promesas  📌 Ventajas y limitaciones  📌 Ejemplo con fetch() y manejo de errores
    2.5 — Microtareas vs Macrotareas (opcional, avanzado)  📌 Diferencias internas del Event Loop  📌 Cuándo se ejecutan las promesas vs los temporizadores
    2.6 — Conclusión  📌 Cuándo usar callbacks, cuándo usar promesas, cuándo async/await  📌 Guía de buenas prácticas

    🧪 Ejemplos centrales que se desarrollarán en toda la guía:

    ✅ setTimeout()✅ setInterval()✅ FileReader.readAsText()✅ fetch()

Todo lo demás será considerado sincrónico salvo mención específica.

*/


window.addEventListener("load",()=>{

    console.log("El DOM ha cargado completamente.");


});