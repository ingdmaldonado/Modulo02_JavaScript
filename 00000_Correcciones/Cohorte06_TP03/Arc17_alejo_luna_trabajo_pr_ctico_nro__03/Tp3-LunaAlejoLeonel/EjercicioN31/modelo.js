export const noTieneNumeros = (texto) => {

    for (let i = 0; i < texto.length; i++) {

        let letra = texto[i];

        if (letra >= "0" && letra <= "9") {
            return false; // 🔥 encontró número → corta
        }
    }

    return true; // ✔️ no encontró ninguno

};