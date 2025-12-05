// ============================================================
// DEMO JS - Destructuring, Spread y Rest
// Abre la consola para ver las salidas de cada ejemplo.
// ============================================================

// ============================================================
// EJEMPLO 1 - DESTRUCTURING DE OBJETOS (FORMA BÁSICA)
// ============================================================
function ejecutarEjemplo1() {
    const persona = {
        nombre: "Daniel",
        apellido: "Maldonado",
        edad: 50
    };

    const { nombre, apellido, edad } = persona;

    console.clear();
    console.log("=== EJEMPLO 1 - DESTRUCTURING BÁSICO DE OBJETOS ===");
    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
    console.log("Edad:", edad);
    console.log("Explicación:");
    console.log("- 'persona' es un objeto con varias propiedades.");
    console.log("- Al usar { nombre, apellido, edad } del lado izquierdo");
    console.log("  estamos extrayendo esas propiedades en variables nuevas.");
    console.log("- Evita tener que escribir persona.nombre, persona.apellido, etc.");
}

// ============================================================
// EJEMPLO 2 - DESTRUCTURING CON RENOMBRADO DE PROPIEDADES
// ============================================================
function ejecutarEjemplo2() {
    const usuario = {
        first_name: "Daniel",
        last_name: "Maldonado",
        years: 50
    };

    const { first_name: nombre, last_name: apellido, years: edad } = usuario;

    console.clear();
    console.log("=== EJEMPLO 2 - DESTRUCTURING CON RENOMBRADO ===");
    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
    console.log("Edad:", edad);
    console.log("Explicación:");
    console.log("- Renombramos las propiedades al extraerlas:");
    console.log("  first_name → nombre, last_name → apellido, years → edad.");
    console.log("- Útil cuando las claves vienen con nombres feos o poco claros.");
}

// ============================================================
// EJEMPLO 3 - DESTRUCTURING CON VALORES POR DEFECTO
// ============================================================
function ejecutarEjemplo3() {
    const producto = {
        nombre: "Notebook Lenovo",
        precio: 850000
        // stock no viene definido
    };

    const { nombre, precio, stock = 0 } = producto;

    console.clear();
    console.log("=== EJEMPLO 3 - DESTRUCTURING CON VALORES POR DEFECTO ===");
    console.log("Nombre:", nombre);
    console.log("Precio:", precio);
    console.log("Stock (default si no viene):", stock);
    console.log("Explicación:");
    console.log("- 'stock' no existe en el objeto original.");
    console.log("- Con { stock = 0 } evitamos undefined y usamos 0 por defecto.");
    console.log("- Muy útil con datos opcionales de APIs o MongoDB.");
}

// ============================================================
// EJEMPLO 4 - DESTRUCTURING EN DEFINICIÓN DE FUNCIONES
// ============================================================
function mostrarDatos({ nombre, edad, pais }) {
    console.log("FUNCIÓN CLÁSICA → Datos del usuario:");
    console.log("Nombre:", nombre);
    console.log("Edad:", edad);
    console.log("País:", pais);
}

const mostrarDatosArrow = ({ nombre, edad, pais }) => {
    console.log("ARROW FUNCTION → Datos del usuario:");
    console.log("Nombre:", nombre);
    console.log("Edad:", edad);
    console.log("País:", pais);
};

function ejecutarEjemplo4() {
    const usuario = {
        nombre: "Daniel",
        edad: 50,
        pais: "Argentina"
    };

    console.clear();
    console.log("=== EJEMPLO 4 - DESTRUCTURING EN DEFINICIÓN DE FUNCIONES ===");
    mostrarDatos(usuario);
    mostrarDatosArrow(usuario);
    console.log("Explicación:");
    console.log("- La función recibe un objeto y lo desestructura en los parámetros.");
    console.log("- Evita escribir usuario.nombre, usuario.edad, usuario.pais dentro.");
}

// ============================================================
// EJEMPLO 5 - DESTRUCTURING AL INVOCAR UNA FUNCIÓN
// ============================================================
function mostrarProducto({ nombre, precio, stock }) {
    console.log("FUNCIÓN CLÁSICA:");
    console.log("Producto:", nombre);
    console.log("Precio:", precio);
    console.log("Stock:", stock);
}

const procesarPedido = ({ cliente, cantidad, prioridad = 'Normal' }) => {
    console.log("ARROW FUNCTION:");
    console.log("Cliente:", cliente);
    console.log("Cantidad:", cantidad);
    console.log("Prioridad:", prioridad);
};

function ejecutarEjemplo5() {
    console.clear();
    console.log("=== EJEMPLO 5 - DESTRUCTURING AL INVOCAR FUNCIONES ===");

    mostrarProducto({
        nombre: "Notebook Lenovo",
        precio: 825000,
        stock: 14
    });

    procesarPedido({
        cliente: "Daniel",
        cantidad: 3
        // prioridad no se envía, se usa default
    });

    console.log("Explicación:");
    console.log("- Destructuring al INVOCAR permite pasar objetos literales limpios.");
    console.log("- Muy útil para helpers y funciones reutilizables.");
}

// ============================================================
// EJEMPLO 6 - DESTRUCTURING DE OBJETOS ANIDADOS
// ============================================================
function ejecutarEjemplo6() {
    const usuarioConDireccion = {
        nombre: "Daniel",
        direccion: {
            calle: "Av. Siempre Viva 742",
            ciudad: "San Fernando del Valle de Catamarca",
            pais: "Argentina"
        }
    };

    const {
        nombre,
        direccion: { calle, ciudad, pais }
    } = usuarioConDireccion;

    console.clear();
    console.log("=== EJEMPLO 6 - DESTRUCTURING DE OBJETOS ANIDADOS ===");
    console.log("Nombre:", nombre);
    console.log("Calle:", calle);
    console.log("Ciudad:", ciudad);
    console.log("País:", pais);
    console.log("Explicación:");
    console.log("- Extraemos propiedades dentro de 'direccion' con un destructuring anidado.");
}

// ============================================================
// SPREAD OPERATOR - OBJETOS
// ============================================================

// EJEMPLO 7 - Spread en objetos (copia y actualización)
function ejecutarEjemplo7() {
    const persona = {
        nombre: "Daniel",
        edad: 50,
        ciudad: "Catamarca"
    };

    const personaCopia = { ...persona };

    const personaActualizada = {
        ...persona,
        edad: 51,
        ciudad: "Buenos Aires"
    };

    console.clear();
    console.log("=== EJEMPLO 7 - SPREAD EN OBJETOS (COPIA Y ACTUALIZACIÓN) ===");
    console.log("Original:", persona);
    console.log("Copia   :", personaCopia);
    console.log("Actualizada:", personaActualizada);
    console.log("Explicación:");
    console.log("- { ...persona } crea una copia superficial de primer nivel.");
    console.log("- Luego actualizamos edad y ciudad sin mutar el objeto original.");
}

// EJEMPLO 8 - Spread en objetos (merge / combinar)
function ejecutarEjemplo8() {
    const configBase = {
        tema: "claro",
        idioma: "es",
        paginacion: 10
    };

    const configUsuario = {
        idioma: "en",
        paginacion: 20
    };

    const configFinal = {
        ...configBase,
        ...configUsuario
    };

    console.clear();
    console.log("=== EJEMPLO 8 - SPREAD EN OBJETOS (MERGE) ===");
    console.log("Config base:", configBase);
    console.log("Config usuario:", configUsuario);
    console.log("Config final:", configFinal);
    console.log("Explicación:");
    console.log("- Al fusionar, las propiedades del último objeto sobrescriben a las anteriores.");
}

// EJEMPLO 9 - Spread en objetos anidados (actualización inmutable)
function ejecutarEjemplo9() {
    const usuario = {
        nombre: "Daniel",
        edad: 50,
        direccion: {
            ciudad: "San Fernando del Valle de Catamarca",
            calle: "Esquiú 123"
        }
    };

    const usuarioActualizado = {
        ...usuario,
        direccion: {
            ...usuario.direccion,
            ciudad: "Buenos Aires"
        }
    };

    console.clear();
    console.log("=== EJEMPLO 9 - SPREAD EN OBJETOS ANIDADOS ===");
    console.log("Original:", usuario);
    console.log("Actualizado:", usuarioActualizado);
    console.log("Explicación:");
    console.log("- Combinamos varios spread por nivel para no mutar el objeto original.");
}

// ============================================================
// SPREAD OPERATOR - ARRAYS
// ============================================================

// EJEMPLO 10 - Spread en arrays (copiar, agregar, concatenar)
function ejecutarEjemplo10() {
    const numeros = [10, 20, 30];

    const numerosCopia = [...numeros];
    const numerosConNuevoAlFinal = [...numeros, 40];
    const numerosConNuevoAlInicio = [5, ...numeros];

    const pares = [2, 4, 6];
    const impares = [1, 3, 5];
    const todos = [...pares, ...impares];

    console.clear();
    console.log("=== EJEMPLO 10 - SPREAD EN ARRAYS ===");
    console.log("Original:", numeros);
    console.log("Copia   :", numerosCopia);
    console.log("Nuevo al final:", numerosConNuevoAlFinal);
    console.log("Nuevo al inicio:", numerosConNuevoAlInicio);
    console.log("Pares   :", pares);
    console.log("Impares:", impares);
    console.log("Todos   :", todos);
    console.log("Explicación:");
    console.log("- Spread permite copiar arrays y agregar elementos sin mutar el original.");
}

// ============================================================
// REST OPERATOR
// ============================================================

// EJEMPLO 11 - Rest en parámetros de funciones
function sumar(...numeros) {
    let total = 0;
    for (const n of numeros) {
        total += n;
    }
    return total;
}

function ejecutarEjemplo11() {
    console.clear();
    console.log("=== EJEMPLO 11 - REST EN PARÁMETROS DE FUNCIONES ===");
    console.log("sumar(5, 10) =", sumar(5, 10));
    console.log("sumar(1, 2, 3, 4, 5) =", sumar(1, 2, 3, 4, 5));
    console.log("Explicación:");
    console.log("- ...numeros agrupa todos los argumentos en un array.");
}

// EJEMPLO 12 - Rest en destructuring de arrays
function ejecutarEjemplo12() {
    const valores = [100, 200, 300, 400];
    const [primero, ...resto] = valores;

    console.clear();
    console.log("=== EJEMPLO 12 - REST EN DESTRUCTURING DE ARRAYS ===");
    console.log("Primero:", primero);
    console.log("Resto  :", resto);
    console.log("Explicación:");
    console.log("- ...resto agrupa los elementos restantes en un nuevo array.");
}

// EJEMPLO 13 - Rest en destructuring de objetos
function ejecutarEjemplo13() {
    const usuario = {
        nombre: "Daniel",
        email: "daniel@example.com",
        password: "123456",
        rol: "admin"
    };

    const { password, ...usuarioSinPassword } = usuario;

    console.clear();
    console.log("=== EJEMPLO 13 - REST EN DESTRUCTURING DE OBJETOS ===");
    console.log("Password:", password);
    console.log("Datos seguros:", usuarioSinPassword);
    console.log("Explicación:");
    console.log("- Extraemos 'password' y agrupamos el resto de propiedades en usuarioSinPassword.");
}

// ============================================================
// INICIALIZACIÓN - ASIGNAR EVENTOS A LOS BOTONES
// ============================================================
window.onload = () => {
    const btnEj1 = document.querySelector("#btnEj1");
    const btnEj2 = document.querySelector("#btnEj2");
    const btnEj3 = document.querySelector("#btnEj3");
    const btnEj4 = document.querySelector("#btnEj4");
    const btnEj5 = document.querySelector("#btnEj5");
    const btnEj6 = document.querySelector("#btnEj6");
    const btnEj7 = document.querySelector("#btnEj7");
    const btnEj8 = document.querySelector("#btnEj8");
    const btnEj9 = document.querySelector("#btnEj9");
    const btnEj10 = document.querySelector("#btnEj10");
    const btnEj11 = document.querySelector("#btnEj11");
    const btnEj12 = document.querySelector("#btnEj12");
    const btnEj13 = document.querySelector("#btnEj13");

    btnEj1.onclick = () => ejecutarEjemplo1();
    btnEj2.onclick = () => ejecutarEjemplo2();
    btnEj3.onclick = () => ejecutarEjemplo3();
    btnEj4.onclick = () => ejecutarEjemplo4();
    btnEj5.onclick = () => ejecutarEjemplo5();
    btnEj6.onclick = () => ejecutarEjemplo6();
    btnEj7.onclick = () => ejecutarEjemplo7();
    btnEj8.onclick = () => ejecutarEjemplo8();
    btnEj9.onclick = () => ejecutarEjemplo9();
    btnEj10.onclick = () => ejecutarEjemplo10();
    btnEj11.onclick = () => ejecutarEjemplo11();
    btnEj12.onclick = () => ejecutarEjemplo12();
    btnEj13.onclick = () => ejecutarEjemplo13();
};
