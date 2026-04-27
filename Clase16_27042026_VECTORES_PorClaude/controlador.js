// ============================================================
//  controlador.js
//  Importa el modelo, espera que el DOM esté listo,
//  captura cada botón y le asigna su lógica con onclick
// ============================================================

import { productos } from "./modelo.js";

window.onload = function() {

  // ============================================================
  //  CALLBACKS
  // ============================================================

  document.querySelector("#btn-callback-01").onclick = () => {
    console.clear();
    console.log("=== ¿Qué es un callback? ===");
    console.log("");
    console.log("Un callback es una función que se pasa como argumento a otra función.");
    console.log("La función receptora la va a llamar (invocar) en algún momento.");
    console.log("");

    function saludar(nombre) {
      console.log("Hola, " + nombre + "!");
    }

    function ejecutar(fn, valor) {   // fn es el callback
      console.log("Antes de llamar al callback...");
      fn(valor);                     // acá lo invoca
      console.log("Después de llamar al callback...");
    }

    ejecutar(saludar, "Juan");       // paso saludar SIN paréntesis

    console.log("");
    console.log("Nota: paso saludar sin () porque no quiero ejecutarla acá,");
    console.log("quiero pasarla como argumento para que ejecutar() la llame.");
  };

  document.querySelector("#btn-callback-02").onclick = () => {
    console.clear();
    console.log("=== Callback como función anónima ===");
    console.log("");

    function ejecutar(fn, valor) {
      fn(valor);
    }

    // En vez de definir la función aparte, la paso directamente
    ejecutar(function(nombre) {
      console.log("Hola, " + nombre + "!");
    }, "María");

    console.log("");
    console.log("Es lo mismo que antes, solo que la función no tiene nombre.");
    console.log("Se define en el momento en que se pasa como argumento.");
  };

  document.querySelector("#btn-callback-03").onclick = () => {
    console.clear();
    console.log("=== Callback como arrow function ===");
    console.log("");

    function ejecutar(fn, valor) {
      fn(valor);
    }

    // La forma más moderna y compacta
    ejecutar((nombre) => {
      console.log("Hola, " + nombre + "!");
    }, "Carlos");

    // O más corto aún si es una sola línea
    ejecutar(nombre => console.log("Hola, " + nombre + "!"), "Ana");

    console.log("");
    console.log("Los métodos de array esperan exactamente esto:");
    console.log("una función que ellos van a llamar por cada elemento del array.");
  };

  document.querySelector("#btn-callback-04").onclick = () => {
    console.clear();
    console.log("=== Callback en un método de array — preview con forEach ===");
    console.log("");
    console.log("Cuando hacemos:");
    console.log("   productos.forEach( p => console.log(p.nombre) )");
    console.log("");
    console.log("forEach recibe el callback: p => console.log(p.nombre)");
    console.log("y lo llama UNA VEZ POR CADA elemento del array,");
    console.log("pasándole el elemento como argumento.");
    console.log("");
    console.log("--- forEach ejecutándose ---");

    productos.forEach(p => console.log(p.nombre));

    console.log("");
    console.log("forEach llamó al callback 10 veces, una por cada producto.");
  };


  // ============================================================
  //  FOREACH
  // ============================================================

  document.querySelector("#btn-foreach-01").onclick = () => {
    console.clear();
    console.log("=== forEach — recorrer e imprimir ===");
    console.log("");

    productos.forEach(function(producto) {
      console.log(producto.nombre, "— $" + producto.precio);
    });
  };

  document.querySelector("#btn-foreach-02").onclick = () => {
    console.clear();
    console.log("=== forEach — el callback recibe (elemento, índice, array) ===");
    console.log("");

    productos.forEach((producto, indice) => {
      console.log("[" + indice + "]", producto.nombre);
    });
  };

  document.querySelector("#btn-foreach-03").onclick = () => {
    console.clear();
    console.log("=== forEach SIEMPRE devuelve undefined ===");
    console.log("");

    const resultado = productos.forEach(p => p.nombre);

    console.log("resultado:", resultado);
    console.log("");
    console.log("Error común: intentar usar forEach como si devolviera algo.");
    console.log("Si necesitás el resultado → usá map()");
  };

  document.querySelector("#btn-foreach-04").onclick = () => {
    console.clear();
    console.log("=== forEach — mutación de objetos por referencia ===");
    console.log("");
    console.log("Los objetos en JS se pasan por referencia.");
    console.log("Si modificamos una propiedad adentro del forEach, modificamos el ORIGINAL.");
    console.log("");

    const arr = [
      { nombre: "Remera", precio: 2500 },
      { nombre: "Mochila", precio: 12000 },
    ];

    console.log("ANTES:", JSON.stringify(arr));

    arr.forEach(p => {
      p.precio = p.precio * 2;  // modifico la propiedad del objeto original
    });

    console.log("DESPUÉS:", JSON.stringify(arr));
    console.log("");
    console.log("El array original fue mutado porque los objetos son referencias.");
    console.log("Si no querés esto → usá map() con spread: { ...p, precio: p.precio * 2 }");
  };


  // ============================================================
  //  MAP
  // ============================================================

  document.querySelector("#btn-map-01").onclick = () => {
    console.clear();
    console.log("=== map — valores simples ===");
    console.log("");

    const numeros = [1, 2, 3, 4, 5];
    const dobles  = numeros.map(n => n * 2);

    console.log("original:", numeros);
    console.log("dobles:  ", dobles);
    console.log("");
    console.log("El original NO fue modificado.");
    console.log("map devolvió un array NUEVO con los valores transformados.");
  };

  document.querySelector("#btn-map-02").onclick = () => {
    console.clear();
    console.log("=== map — extraer una propiedad de cada objeto ===");
    console.log("");

    const nombres = productos.map(p => p.nombre);
    console.log("nombres:", nombres);

    const precios = productos.map(p => p.precio);
    console.log("precios:", precios);
  };

  document.querySelector("#btn-map-03").onclick = () => {
    console.clear();
    console.log("=== map — transformar objetos CON spread (correcto) ===");
    console.log("");
    console.log("Spread crea un objeto NUEVO con todas las propiedades copiadas.");
    console.log("El original no es tocado.");
    console.log("");

    const conDescuento = productos.map(p => ({
      ...p,                               // copio todas las propiedades
      precio: Math.round(p.precio * 0.9)  // piso el precio con el nuevo valor
    }));

    console.log("original    productos[0].precio:", productos[0].precio);
    console.log("conDescuento[0].precio:         ", conDescuento[0].precio);
    console.log("");
    console.log("Son objetos distintos en memoria. El original no fue tocado.");
  };

  document.querySelector("#btn-map-04").onclick = () => {
    console.clear();
    console.log("=== map — trampa: modificar objeto SIN spread ===");
    console.log("");
    console.log("Si modifico una propiedad sin crear objeto nuevo,");
    console.log("estoy modificando el objeto original porque es una referencia.");
    console.log("");

    const arr = [
      { nombre: "Remera", precio: 2500 },
      { nombre: "Mochila", precio: 12000 },
    ];

    console.log("ANTES arr[0].precio:", arr[0].precio);

    const resultado = arr.map(p => {
      p.precio = p.precio * 0.9;  // modifico el objeto original
      return p;
    });

    console.log("DESPUÉS arr[0].precio:", arr[0].precio);      // también cambió
    console.log("resultado[0].precio:  ", resultado[0].precio);
    console.log("");
    console.log("arr[0] y resultado[0] apuntan al MISMO objeto en memoria.");
    console.log("Solución → return { ...p, precio: p.precio * 0.9 }");
  };


  // ============================================================
  //  FILTER
  // ============================================================

  document.querySelector("#btn-filter-01").onclick = () => {
    console.clear();
    console.log("=== filter — valores simples ===");
    console.log("");

    const numeros      = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const pares        = numeros.filter(n => n % 2 === 0);
    const mayoresDe5   = numeros.filter(n => n > 5);

    console.log("original:    ", numeros);
    console.log("pares:       ", pares);
    console.log("mayores de 5:", mayoresDe5);
    console.log("");
    console.log("Con valores primitivos filter devuelve COPIAS. El original nunca se ve afectado.");
  };

  document.querySelector("#btn-filter-02").onclick = () => {
    console.clear();
    console.log("=== filter — objetos: devuelve un subconjunto por referencia ===");
    console.log("");

    const ropa = productos.filter(p => p.categoria === "ropa");

    console.log("productos filtrados (ropa):");
    ropa.forEach(p => console.log(" -", p.nombre, "| precio:", p.precio));
    console.log("");
    console.log("ropa es un nuevo array, PERO cada objeto dentro");
    console.log("es una REFERENCIA al objeto original en productos[].");
  };

  document.querySelector("#btn-filter-03").onclick = () => {
    console.clear();
    console.log("=== filter — modificar los objetos filtrados AFECTA el original ===");
    console.log("");

    const arr = [
      { nombre: "Remera",  precio: 2500,  categoria: "ropa" },
      { nombre: "Mochila", precio: 12000, categoria: "accesorios" },
      { nombre: "Buzo",    precio: 9500,  categoria: "ropa" },
    ];

    const ropa = arr.filter(p => p.categoria === "ropa");

    console.log("ANTES arr[0].precio:", arr[0].precio);
    console.log("ANTES arr[2].precio:", arr[2].precio);

    ropa.forEach(p => p.precio = Math.round(p.precio * 1.10));

    console.log("");
    console.log("DESPUÉS de aplicar 10% de incremento a la ropa filtrada:");
    console.log("arr[0].precio:", arr[0].precio, "← también cambió en el original");
    console.log("arr[2].precio:", arr[2].precio, "← también cambió en el original");
    console.log("arr[1].precio:", arr[1].precio, "← no cambió (no era ropa)");
    console.log("");
    console.log("Porque ropa[0] y arr[0] apuntan al MISMO objeto en memoria.");
  };

  document.querySelector("#btn-filter-04").onclick = () => {
    console.clear();
    console.log("=== filter — modificar SIN afectar el original (forma correcta) ===");
    console.log("");
    console.log("Combino filter + map con spread → objetos NUEVOS, original intacto.");
    console.log("");

    const arr = [
      { nombre: "Remera",  precio: 2500,  categoria: "ropa" },
      { nombre: "Mochila", precio: 12000, categoria: "accesorios" },
      { nombre: "Buzo",    precio: 9500,  categoria: "ropa" },
    ];

    const ropaConIncremento = arr
      .filter(p => p.categoria === "ropa")
      .map(p => ({ ...p, precio: Math.round(p.precio * 1.10) }));

    console.log("original arr[0].precio:", arr[0].precio, "← no cambió");
    console.log("original arr[2].precio:", arr[2].precio, "← no cambió");
    console.log("");
    console.log("ropaConIncremento:");
    ropaConIncremento.forEach(p => console.log(" -", p.nombre, "| precio:", p.precio));
    console.log("");
    console.log("Con spread se crean objetos nuevos. El original queda intacto.");
  };

  document.querySelector("#btn-filter-05").onclick = () => {
    console.clear();
    console.log("=== filter — si ninguno cumple devuelve array vacío ===");
    console.log("");

    const resultado = productos.filter(p => p.categoria === "electronica");

    console.log("resultado:", resultado);
    console.log("largo:", resultado.length);
    console.log("");
    console.log("No devuelve null ni undefined — devuelve []");
    console.log("Siempre verificar .length antes de operar sobre el resultado.");
  };


  // ============================================================
  //  FIND
  // ============================================================

  document.querySelector("#btn-find-01").onclick = () => {
    console.clear();
    console.log("=== find — valores simples ===");
    console.log("");

    const numeros          = [10, 25, 3, 47, 8];
    const primeroMayorDe20 = numeros.find(n => n > 20);

    console.log("numeros:", numeros);
    console.log("primer número mayor de 20:", primeroMayorDe20);
    console.log("");
    console.log("Solo devuelve el PRIMERO que cumple, no todos.");
    console.log("Para todos → usá filter.");
  };

  document.querySelector("#btn-find-02").onclick = () => {
    console.clear();
    console.log("=== find — buscar objeto por id ===");
    console.log("");

    const producto = productos.find(p => p.id === 4);

    console.log("Producto con id 4:", producto);
    console.log("");
    console.log("Patrón típico de endpoint GET /productos/:id en Node.js");
  };

  document.querySelector("#btn-find-03").onclick = () => {
    console.clear();
    console.log("=== find — devuelve undefined si no encuentra ===");
    console.log("");

    const producto = productos.find(p => p.id === 999);

    console.log("resultado:", producto);
    console.log("");
    console.log("Si usamos el resultado sin verificar, tenemos un bug:");

    try {
      console.log(producto.nombre);
    } catch(e) {
      console.log("ERROR:", e.message);
    }

    console.log("");
    console.log("Siempre verificar antes de usar:");
    console.log("  if (producto) { ... }");
    console.log("  o con optional chaining: producto?.nombre");
  };

  document.querySelector("#btn-find-04").onclick = () => {
    console.clear();
    console.log("=== find — devuelve referencia al objeto original ===");
    console.log("");

    const arr = [
      { id: 1, nombre: "Remera", precio: 2500 },
      { id: 2, nombre: "Mochila", precio: 12000 },
    ];

    const encontrado = arr.find(p => p.id === 1);

    console.log("ANTES arr[0].precio:", arr[0].precio);

    encontrado.precio = 9999;

    console.log("DESPUÉS arr[0].precio:", arr[0].precio, "← cambió en el original");
    console.log("");
    console.log("encontrado y arr[0] son el MISMO objeto en memoria.");
    console.log("Si querés modificar sin afectar el original:");
    console.log("  const copia = { ...encontrado, precio: 9999 }");
  };


  // ============================================================
  //  FINDINDEX
  // ============================================================

  document.querySelector("#btn-findindex-01").onclick = () => {
    console.clear();
    console.log("=== findIndex — encontrar la posición ===");
    console.log("");

    const idx = productos.findIndex(p => p.id === 6);

    console.log("Índice del producto con id 6:", idx);
    console.log("Producto en esa posición:", productos[idx]);
  };

  document.querySelector("#btn-findindex-02").onclick = () => {
    console.clear();
    console.log("=== findIndex — devuelve -1 si no encuentra ===");
    console.log("");

    const idx = productos.findIndex(p => p.id === 999);

    console.log("índice:", idx);
    console.log("");
    console.log("Si usamos -1 como índice en un array:");
    console.log("  productos[-1]:", productos[-1]);  // undefined
    console.log("");
    console.log("Siempre verificar: if (idx !== -1) { ... }");
  };

  document.querySelector("#btn-findindex-03").onclick = () => {
    console.clear();
    console.log("=== findIndex — actualizar un objeto sin mutar el array ===");
    console.log("");
    console.log("Patrón típico en React para actualizar un item del estado.");
    console.log("");

    const arr = [
      { id: 1, nombre: "Remera", precio: 2500 },
      { id: 2, nombre: "Mochila", precio: 12000 },
      { id: 3, nombre: "Buzo", precio: 9500 },
    ];

    const idAActualizar = 2;
    const nuevoPrecio   = 15000;
    const idx           = arr.findIndex(p => p.id === idAActualizar);

    if (idx !== -1) {
      const actualizado = [
        ...arr.slice(0, idx),
        { ...arr[idx], precio: nuevoPrecio },
        ...arr.slice(idx + 1)
      ];
      console.log("original:   ", JSON.stringify(arr));
      console.log("actualizado:", JSON.stringify(actualizado));
      console.log("");
      console.log("El original NO fue modificado.");
    }
  };


  // ============================================================
  //  REDUCE
  // ============================================================

  document.querySelector("#btn-reduce-01").onclick = () => {
    console.clear();
    console.log("=== reduce — concepto base, paso a paso ===");
    console.log("");
    console.log("reduce(callback, valorInicial)");
    console.log("El callback recibe: (acumulador, elementoActual)");
    console.log("Lo que retorne el callback se convierte en el nuevo acumulador.");
    console.log("");

    const numeros = [1, 2, 3, 4, 5];

    const suma = numeros.reduce((acumulador, numero) => {
      console.log("  acc:", acumulador, "| n:", numero, "| resultado:", acumulador + numero);
      return acumulador + numero;
    }, 0);

    console.log("suma total:", suma);
  };

  document.querySelector("#btn-reduce-02").onclick = () => {
    console.clear();
    console.log("=== reduce — sumar precios ===");
    console.log("");

    const total = productos.reduce((acc, p) => acc + p.precio, 0);

    console.log("Total del inventario: $" + total.toLocaleString("es-AR"));
  };

  document.querySelector("#btn-reduce-03").onclick = () => {
    console.clear();
    console.log("=== reduce — agrupar objetos por categoría ===");
    console.log("");

    const porCategoria = productos.reduce((acc, p) => {
      if (!acc[p.categoria]) acc[p.categoria] = [];  // si no existe la clave, la creo
      acc[p.categoria].push(p);                       // agrego el producto a su grupo
      return acc;
    }, {});

    console.log("Categorías:", Object.keys(porCategoria));
    console.log("Ropa:",       porCategoria.ropa.map(p => p.nombre));
    console.log("Calzado:",    porCategoria.calzado.map(p => p.nombre));
    console.log("Accesorios:", porCategoria.accesorios.map(p => p.nombre));
  };

  document.querySelector("#btn-reduce-04").onclick = () => {
    console.clear();
    console.log("=== reduce — trampa: sin valor inicial ===");
    console.log("");
    console.log("Si no pasamos valor inicial, reduce usa el primer elemento como acumulador.");
    console.log("Con números simples a veces funciona, con objetos genera bugs.");
    console.log("");

    const numeros = [1, 2, 3, 4];
    const suma    = numeros.reduce((acc, n) => acc + n);
    console.log("suma sin valor inicial:", suma);  // funciona acá porque son números

    console.log("");
    console.log("Pero con objetos el primer acumulador sería el objeto completo:");

    const test = productos.reduce((acc, p) => {
      return acc;  // en la primera iteración acc ES productos[0]
    });
    console.log("primer acumulador sin valor inicial:", test);
    console.log("");
    console.log("Regla: SIEMPRE pasar el valor inicial como segundo argumento.");
  };


  // ============================================================
  //  SOME / EVERY
  // ============================================================

  document.querySelector("#btn-some-01").onclick = () => {
    console.clear();
    console.log("=== some — al menos uno cumple ===");
    console.log("");

    const hayInactivos   = productos.some(p => !p.activo);
    const hayMayorA30000 = productos.some(p => p.precio > 30000);
    const hayElectronica = productos.some(p => p.categoria === "electronica");

    console.log("¿Hay productos inactivos?",    hayInactivos);
    console.log("¿Hay alguno mayor a $30.000?", hayMayorA30000);
    console.log("¿Hay electrónica?",            hayElectronica);
  };

  document.querySelector("#btn-every-01").onclick = () => {
    console.clear();
    console.log("=== every — todos cumplen ===");
    console.log("");

    const todosActivos  = productos.every(p => p.activo);
    const todosConStock = productos.every(p => p.stock > 0);
    const todosTienenId = productos.every(p => p.id !== undefined);

    console.log("¿Todos están activos?", todosActivos);
    console.log("¿Todos tienen stock?",  todosConStock);
    console.log("¿Todos tienen id?",     todosTienenId);
  };

  document.querySelector("#btn-someevery-02").onclick = () => {
    console.clear();
    console.log("=== some / every — short circuit (cortocircuito) ===");
    console.log("");
    console.log("Dejan de recorrer el array en cuanto tienen la respuesta.");
    console.log("");

    const arr = [2, 4, 6, 7, 10, 12];

    console.log("some buscando el primer impar:");
    arr.some(n => {
      console.log("  revisando:", n);
      return n % 2 !== 0;  // para cuando encuentra el 7
    });

    console.log("");
    console.log("every verificando si todos son pares:");
    arr.every(n => {
      console.log("  revisando:", n);
      return n % 2 === 0;  // para cuando encuentra el 7
    });

    console.log("");
    console.log("Ninguno de los dos recorrió el array completo.");
  };


  // ============================================================
  //  SORT
  // ============================================================

  document.querySelector("#btn-sort-01").onclick = () => {
    console.clear();
    console.log("=== sort — trampa con números SIN comparador ===");
    console.log("");

    const nums = [10, 9, 100, 2, 50, 21];
    console.log("antes:", [...nums]);

    nums.sort();  // ordena como strings

    console.log("después de sort() sin comparador:", nums);
    console.log("");
    console.log("Convirtió los números a strings y los ordenó alfabéticamente.");
    console.log("El resultado es incorrecto para orden numérico.");
    console.log("Solución → siempre pasar función comparadora.");
  };

  document.querySelector("#btn-sort-02").onclick = () => {
    console.clear();
    console.log("=== sort — con función comparadora ===");
    console.log("");
    console.log("La función recibe (a, b):");
    console.log("  resultado negativo → a va antes que b");
    console.log("  resultado positivo → b va antes que a");
    console.log("  resultado 0        → quedan igual");
    console.log("");

    const nums = [10, 9, 100, 2, 50, 21];
    const asc  = [...nums].sort((a, b) => a - b);
    const desc = [...nums].sort((a, b) => b - a);

    console.log("original:   ", nums);
    console.log("ascendente: ", asc);
    console.log("descendente:", desc);
  };

  document.querySelector("#btn-sort-03").onclick = () => {
    console.clear();
    console.log("=== sort — MUTA el array original ===");
    console.log("");

    const arr = [
      { nombre: "Remera",  precio: 2500  },
      { nombre: "Mochila", precio: 12000 },
      { nombre: "Medias",  precio: 800   },
    ];

    console.log("ANTES arr[0].nombre:", arr[0].nombre);

    arr.sort((a, b) => a.precio - b.precio);

    console.log("DESPUÉS arr[0].nombre:", arr[0].nombre, "← el original fue reordenado");
    console.log("");
    console.log("Siempre copiar con spread antes de ordenar:");
    console.log("  const ordenado = [...arr].sort((a, b) => a.precio - b.precio)");
  };

  document.querySelector("#btn-sort-04").onclick = () => {
    console.clear();
    console.log("=== sort — strings con localeCompare ===");
    console.log("");

    const nombres = ["Zapato", "ácido", "Buzo", "árbol", "Campera"];

    const sinLocale = [...nombres].sort();
    console.log("sin localeCompare:", sinLocale);  // falla con tildes

    const conLocale = [...nombres].sort((a, b) => a.localeCompare(b, "es"));
    console.log("con localeCompare:", conLocale);  // correcto en español
  };


  // ============================================================
  //  SLICE / SPLICE
  // ============================================================

  document.querySelector("#btn-slice-01").onclick = () => {
    console.clear();
    console.log("=== slice — extrae una porción SIN mutar ===");
    console.log("");
    console.log("slice(inicio, fin) — fin es EXCLUSIVO");
    console.log("");

    const nombres = productos.map(p => p.nombre);

    console.log("todos:            ", nombres);
    console.log("primeros 3:       ", nombres.slice(0, 3));
    console.log("del índice 2 al 4:", nombres.slice(2, 5));
    console.log("últimos 2:        ", nombres.slice(-2));
    console.log("copia completa:   ", nombres.slice());
    console.log("");
    console.log("El original no fue modificado:", nombres.length, "elementos.");
  };

  document.querySelector("#btn-splice-01").onclick = () => {
    console.clear();
    console.log("=== splice — elimina elementos y MUTA el original ===");
    console.log("");
    console.log("splice(inicio, cuántos) — devuelve los elementos eliminados");
    console.log("");

    const arr = ["a", "b", "c", "d", "e"];
    console.log("ANTES:", [...arr]);

    const eliminados = arr.splice(1, 2);  // desde índice 1, eliminar 2

    console.log("eliminados:", eliminados);
    console.log("DESPUÉS arr:", arr);
    console.log("");
    console.log("arr fue MUTADO. splice eliminó b y c del original.");
  };

  document.querySelector("#btn-splice-02").onclick = () => {
    console.clear();
    console.log("=== splice — también puede insertar ===");
    console.log("");

    const arr = ["a", "b", "c", "d"];
    console.log("ANTES:", [...arr]);

    arr.splice(2, 0, "X", "Y");  // en posición 2, eliminar 0, insertar X e Y

    console.log("DESPUÉS:", arr);
    console.log("Insertó X e Y en la posición 2 sin eliminar nada.");
  };

  document.querySelector("#btn-slicesplice-03").onclick = () => {
    console.clear();
    console.log("=== slice vs splice — resumen ===");
    console.log("");
    console.log("slice:");
    console.log("  — no muta el original");
    console.log("  — devuelve un nuevo array con la porción extraída");
    console.log("  — regla fácil: slice no lastima");
    console.log("");
    console.log("splice:");
    console.log("  — MUTA el original");
    console.log("  — devuelve los elementos eliminados");
    console.log("  — puede eliminar e insertar al mismo tiempo");
    console.log("  — en React: evitar, rompe la inmutabilidad del estado");
  };


  // ============================================================
  //  FLAT / FLATMAP
  // ============================================================

  document.querySelector("#btn-flat-01").onclick = () => {
    console.clear();
    console.log("=== flat — aplanar arrays anidados ===");
    console.log("");

    const anidado = [[1, 2], [3, 4], [5, 6]];
    console.log("original:", anidado);
    console.log("flat():  ", anidado.flat());

    console.log("");
    const profundo = [1, [2, [3, [4]]]];
    console.log("profundo:      ", profundo);
    console.log("flat(1):       ", profundo.flat(1));
    console.log("flat(2):       ", profundo.flat(2));
    console.log("flat(Infinity):", profundo.flat(Infinity));
  };

  document.querySelector("#btn-flatmap-01").onclick = () => {
    console.clear();
    console.log("=== flatMap — map + flat en un paso ===");
    console.log("");

    const productosConTags = [
      { nombre: "Remera",     tags: ["algodón", "verano", "básico"]          },
      { nombre: "Campera",    tags: ["invierno", "impermeable"]               },
      { nombre: "Zapatillas", tags: ["running", "deportivo", "amortiguación"] },
    ];

    const conMap     = productosConTags.map(p => p.tags);
    console.log("con map (array de arrays):", conMap);

    const conFlatMap = productosConTags.flatMap(p => p.tags);
    console.log("con flatMap (array plano):", conFlatMap);
  };


  // ============================================================
  //  ENCADENAMIENTO
  // ============================================================

  document.querySelector("#btn-encadenar-01").onclick = () => {
    console.clear();
    console.log("=== Encadenamiento — filter + map ===");
    console.log("");

    const resultado = productos
      .filter(p => p.activo)
      .map(p => ({ nombre: p.nombre, precio: p.precio }));

    console.log(resultado);
  };

  document.querySelector("#btn-encadenar-02").onclick = () => {
    console.clear();
    console.log("=== Encadenamiento — filter + sort + slice (paginación) ===");
    console.log("");
    console.log("Activos con stock, ordenados por precio, primera página (3 por página).");
    console.log("");

    const pagina1 = productos
      .filter(p => p.activo && p.stock > 0)
      .sort((a, b) => a.precio - b.precio)
      .slice(0, 3);

    pagina1.forEach(p => console.log(p.nombre, "— $" + p.precio));
  };

  document.querySelector("#btn-encadenar-03").onclick = () => {
    console.clear();
    console.log("=== Encadenamiento — filter + map + reduce ===");
    console.log("");
    console.log("Total del valor en stock de la ropa activa.");
    console.log("");

    const totalRopa = productos
      .filter(p => p.categoria === "ropa" && p.activo)
      .map(p => p.precio * p.stock)
      .reduce((acc, valor) => acc + valor, 0);

    console.log("Total valor ropa activa en stock: $" + totalRopa.toLocaleString("es-AR"));
  };

}; // fin window.onload
