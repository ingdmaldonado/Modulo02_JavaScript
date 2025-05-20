PROYECTO: aplicacionModelo

✅ Dos pantallas con estado persistente
✅ Control de duplicidad por pestaña
✅ Modularización completa
✅ Eventos 'load' y 'pageshow' manejados
✅ Documentación en cada línea

Ideal para mostrar buenas prácticas en clase.

La biblioteca crypto en JavaScript 
(específicamente en el navegador) 
forma parte de la Web Crypto API. 
Es una API nativa, segura y eficiente diseñada para realizar 
operaciones criptográficas en el frontend, 
sin depender de bibliotecas externas.

🔐 ¿Para qué sirve crypto?
Sirve para realizar tareas como:

Generar identificadores únicos seguros

    crypto.randomUUID() → genera un UUID v4 aleatorio

    crypto.getRandomValues() → llena un array con valores aleatorios criptográficamente seguros

Hashear información (con Web Crypto Subtle API)

    crypto.subtle.digest(...) → genera hashes (ej: SHA-256)

Ideal para verificar integridad de datos o almacenar hashes de contraseñas

Encriptar y desencriptar datos

    crypto.subtle.encrypt(...) y crypto.subtle.decrypt(...) con algoritmos como AES-GCM

Firmar y verificar datos

    crypto.subtle.sign(...) y crypto.subtle.verify(...) usando claves asimétricas

Importar/exportar claves criptográficas

    crypto.subtle.importKey(...) y exportKey(...) para manipular llaves RSA, AES, etc.