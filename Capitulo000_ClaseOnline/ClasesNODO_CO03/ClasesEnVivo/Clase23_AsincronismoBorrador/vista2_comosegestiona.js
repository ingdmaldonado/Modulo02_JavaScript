/*
🔹 Tema 2: ¿Cómo se gestiona el asincronismo en JavaScript?

🔸 2.1 — El Event Loop: el núcleo del asincronismo

    El Event Loop es el mecanismo central que permite 
    que JavaScript maneje asincronismo sin usar múltiples hilos.
    Su función es controlar cuándo ejecutar tareas pendientes,
    monitorear si el hilo principal está libre y mover 
    tareas desde las colas hacia el stack de ejecución 
    cuando sea posible.

    Participan tres componentes:

    Call Stack: 
        donde se ejecuta el código sincrónico.

    Web APIs: 
        donde se manejan procesos asincrónicos como 
        temporizadores, eventos, fetch, etc.

    Cola de tareas (Task Queue o Callback Queue): 
        donde se almacenan las funciones listas 
        para ejecutarse luego de completarse 
        una tarea asincrónica.

    Cada vez que el stack está vacío, 
    el Event Loop mueve la siguiente función pendiente 
    desde la cola de tareas al stack para que se ejecute.

🔸 2.2 — Callbacks


    Los callbacks son funciones que se pasan 
    como argumento a otra función para que sean 
    ejecutadas más adelante. Son una de las primeras 
    formas que JavaScript ofreció para gestionar 
    tareas asincrónicas.

    Un callback puede ser usado tanto en código 
    sincrónico como asincrónico, 
    pero en el contexto del asincronismo, 
    se utiliza cuando una función debe esperar a que 
    ocurra un evento o se complete una operación externa.

*/



window.addEventListener("load",()=>
    {
        console.log("Tema 2 - como se gestiona ? ")

        setTimeout(() => 
            {
                console.log("Esto se muestra después de 2 segundos");
            }, 
            2000);
    })