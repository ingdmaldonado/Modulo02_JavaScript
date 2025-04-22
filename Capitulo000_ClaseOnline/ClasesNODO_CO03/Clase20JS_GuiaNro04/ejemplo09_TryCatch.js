
window.addEventListener("load",()=>{



        /*
        Archivo: manejo_errores_en_js.js
        Guía práctica de manejo de errores en JavaScript (frontend)
        Incluye: try/catch, tipos de error, errores reales, almacenamiento y asincronismo
        */

        /* ---------------------------------------------
        (1) Introducción a try/catch
        ---------------------------------------------- */
        try {
            noExiste; // variable no definida
        } catch (error) {
            console.log("Error atrapado:", error.message);
        }
        
        /* ---------------------------------------------
        (2) Tipos de errores en JavaScript
        ---------------------------------------------- */
        
        // ReferenceError
        try {
            console.log(x);
        } catch (e) {
            console.log("Tipo:", e.name); // ReferenceError
        }
        
        // TypeError
        try {
            null.f();
        } catch (e) {
            console.log("Tipo:", e.name); // TypeError
        }
        
        // SyntaxError (solo en eval)
        try {
            eval("var a = ;");
        } catch (e) {
            console.log("Tipo:", e.name); // SyntaxError
        }
        
        // RangeError
        try {
            new Array(-1);
        } catch (e) {
            console.log("Tipo:", e.name); // RangeError
        }
        
        // Usando instanceof
        try {
            throw new TypeError("Este es un error de tipo");
        } catch (e) {
            if (e instanceof TypeError) {
            console.log("Fue un TypeError:", e.message);
            }
        }
        
        /* ---------------------------------------------
        (3) Errores personalizados
        ---------------------------------------------- */
        class ErrorUsuario extends Error {
            constructor(mensaje) {
            super(mensaje);
            this.name = "ErrorUsuario";
            }
        }
        
        try {
            throw new ErrorUsuario("El usuario no existe");
        } catch (e) {
            console.log(e.name); // "ErrorUsuario"
            console.log(e.message);
        }
        
        /* ---------------------------------------------
        (4) Errores comunes en frontend
        ---------------------------------------------- */
        
        // JSON mal formado
        try {
            const json = '{nombre: "Ana"}'; // claves sin comillas
            const datos = JSON.parse(json);
        } catch (e) {
            console.log("JSON inválido:", e.message);
        }
        
        // Error de tipo
        try {
            let num = 42;
            num.toLowerCase();
        } catch (e) {
            console.log("Error de tipo:", e.message);
        }
        
        /* ---------------------------------------------
        (5) FileReader con try/catch
        (estos ejemplos requieren HTML con input type="file")
        ---------------------------------------------- */
        
        document.getElementById("archivoJson")?.addEventListener("change", (e) => {
            const archivo = e.target.files[0];
            const lector = new FileReader();
        
            lector.onload = (evento) => {
            try {
                const contenido = evento.target.result;
                const datos = JSON.parse(contenido);
                console.log("JSON leído:", datos);
            } catch (error) {
                console.error("Error al procesar JSON:", error.message);
            }
            };
        
            lector.readAsText(archivo);
        });
        
        /* ---------------------------------------------
        (6) Almacenamiento Web con manejo de errores
        ---------------------------------------------- */
        
        // localStorage
        try {
            localStorage.setItem("usuario", JSON.stringify({ nombre: "Camila" }));
            console.log("Guardado en localStorage");
        } catch (e) {
            console.warn("Error en localStorage:", e.message);
        }
        
        // sessionStorage
        try {
            sessionStorage.setItem("session", "activa");
        } catch (e) {
            console.warn("Error en sessionStorage:", e.message);
        }
        
        // Cookies (sin try/catch)
        document.cookie = "token=abc123; max-age=3600";
        console.log("Cookie:", document.cookie);
        
        /* ---------------------------------------------
        (7) Uso de try/catch en funciones async
        ---------------------------------------------- */
        async function obtenerDatos() {
            try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            if (!res.ok) throw new Error("HTTP error: " + res.status);
            const data = await res.json();
            console.log("Datos:", data);
            } catch (e) {
            console.error("Error en fetch:", e.message);
            }
        }
        obtenerDatos();
        
        /* ---------------------------------------------
        (8) Validación con throw personalizado
        ---------------------------------------------- */
        function registrarUsuario(nombre, edad) {
            if (edad < 0) {
            throw new Error("Edad inválida");
            }
            console.log("Usuario registrado:", nombre);
        }
        
        try {
            registrarUsuario("Tomi", -5);
        } catch (e) {
            console.error("Validación fallida:", e.message);
        }
        
});