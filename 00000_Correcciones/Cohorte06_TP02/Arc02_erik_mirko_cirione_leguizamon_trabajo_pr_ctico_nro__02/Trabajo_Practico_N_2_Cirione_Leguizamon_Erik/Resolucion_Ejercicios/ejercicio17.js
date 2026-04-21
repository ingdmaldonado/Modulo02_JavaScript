let bandera;
let input;
let pesoHuevo;
let huevosSusperGrandes;
let huevosGrandes;
let huevosMedianos;
let huevosDescartados;
let cantidadTotalHuevos;

const PESO_XL = 73;
const PESO_L = 63;
const PESOX_M = 53;

do {
    pesoHuevo = 0;
    huevosSuperGrandes = 0
    huevosGrandes = 0
    huevosMedianos = 0
    huevosDescartados = 0;
    cantidadTotalHuevos = 0;
    porcentajehuevosXl = 0;
    porcentajehuevosL = 0;
    porcentajehuevosM = 0;
    tamañoCargamento = 0;

    do {
        tamañoCargamento = Number(prompt(`Ingrese la cantidad (unidades) de huevos del cargamento`));

        if (tamañoCargamento == null || tamañoCargamento < 1 || isNaN(tamañoCargamento)) {
            alert(`Ingrese un valor correcto`);
        }

    } while (tamañoCargamento === null || tamañoCargamento < 1 || isNaN(tamañoCargamento));


    for (let i = 0; i < tamañoCargamento; i++) {

        do {
            pesoHuevo = Number(prompt(`Ingrese el peso del Huevo ${i + 1} en gramos:`));

            if (pesoHuevo == null || pesoHuevo < 1 || isNaN(pesoHuevo)) {
                alert(`Ingrese un valor correcto`);
            }

        } while (pesoHuevo === null || pesoHuevo < 1 || isNaN(pesoHuevo));

        cantidadTotalHuevos++;

        if (pesoHuevo >= PESO_XL) {
            huevosSuperGrandes++;
        }

        if (pesoHuevo >= PESO_L && pesoHuevo < PESO_XL) {
            huevosGrandes++;
        }

        if (pesoHuevo >= PESOX_M && pesoHuevo < PESO_L) {
            huevosMedianos++;
        }

        if (pesoHuevo < PESOX_M) {
            alert(`El peso no esta entre los estandares, Sera descartado`);
            huevosDescartados++;
        }

    }

    porcentajehuevosXl = (huevosSuperGrandes / cantidadTotalHuevos) * 100;
    porcentajehuevosL = (huevosGrandes / cantidadTotalHuevos) * 100;
    porcentajehuevosM = (huevosMedianos / cantidadTotalHuevos) * 100;

    console.log(`Monto todal de huevos: ${cantidadTotalHuevos}`);
    console.log(`Monto todal de huevos super grandes: ${huevosSuperGrandes}`);
    console.log(`Monto todal de huevos grandes: ${huevosGrandes}`);
    console.log(`Monto todal de huevos medianos: ${huevosMedianos}`);
    console.log(`Monto todal de huevos descartados: ${huevosDescartados}`);
    console.log(`Porcentaje de huevos super grandes sobre el total: ${porcentajehuevosXl}`);
    console.log(`Porcentaje de huevos grandes sobre el total: ${porcentajehuevosL}`);
    console.log(`Porcentaje de huevos medianos sobre el total: ${porcentajehuevosM}`);
    console.log(`...................................................................... `);

    const mensajes = [
        `Monto total de huevos: ${cantidadTotalHuevos}`,
        `Monto total de huevos super grandes: ${huevosSuperGrandes}`,
        `Monto total de huevos grandes: ${huevosGrandes}`,
        `Monto total de huevos medianos: ${huevosMedianos}`,
        `Monto total de huevos descartados: ${huevosDescartados}`,
        `------------------------------------------`, // Una línea separadora visual
        `Porcentaje de huevos super grandes sobre el total: ${porcentajehuevosXl}%`,
        `Porcentaje de huevos grandes sobre el total: ${porcentajehuevosL}%`,
        `Porcentaje de huevos medianos sobre el total: ${porcentajehuevosM}%`
    ];

    alert(mensajes.join("\n"));

    do {
        input = prompt(`Desea Clasificar otro Cargamento de Huevos?:
        0) No
        1) Si`);

        if (input === null || input.trim() === "") {
            alert("Debe ingresar un valor");
            continue;
        }

        bandera = Number(input);

        if (isNaN(bandera) || bandera < 0 || bandera > 1) {
            alert("Opcion Invalida");
            bandera = undefined;
            continue;
        }

    } while (bandera === undefined);

} while (bandera !== 0);

alert(`Fin del programa`);
