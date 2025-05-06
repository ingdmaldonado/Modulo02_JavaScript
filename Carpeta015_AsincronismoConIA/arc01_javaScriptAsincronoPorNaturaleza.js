
/*

🔸 1.1 — JavaScript es sincrónico por naturaleza
JavaScript es un lenguaje de ejecución single-threaded,
es decir, solo tiene un hilo principal donde se 
ejecuta el código. Esto significa que las instrucciones
se ejecutan secuencialmente, una línea tras otra,
y cada línea debe terminar de ejecutarse para que 
comience la siguiente.

Todo el código que hemos aprendido hasta ahora
en programación con JavaScript —como estructuras 
de 
    control (if, for, switch), 
    operaciones matemáticas, 
    manipulación del DOM (innerHTML, appendChild),
    llamadas a funciones normales,
    manejo de arrays (forEach, map)— 
    es completamente sincrónico.

🔹 Esto implica que:

    Si una línea de código tarda mucho en 
    ejecutarse (por ejemplo, un bucle que 
    recorre millones de elementos), 
    bloquea la ejecución de todo lo que sigue.

    Si hay un console.log('A') 
        y luego 
    console.log('B'), 
    
    siempre se imprimirá primero A y luego B.

📌 El entorno de ejecución de JavaScript no pasa 
a otra cosa automáticamente ni ejecuta código 
"en segundo plano", a menos que se utilicen 
herramientas específicas del lenguaje que 
introduzcan asincronismo 

    (como setTimeout, fetch, etc.).

*/

window.addEventListener("load",()=>{

    console.log("running");


})