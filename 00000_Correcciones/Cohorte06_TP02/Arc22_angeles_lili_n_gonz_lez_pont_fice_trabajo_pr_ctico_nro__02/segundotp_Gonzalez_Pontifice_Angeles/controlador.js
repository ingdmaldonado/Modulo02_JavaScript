// ====================== EJERCICIO 14 ======================
function ejercicio14() {
    let cantCamion = 0, totalCamion = 0;
    let cantCamioneta = 0, totalCamioneta = 0;
    let cantAutomovil = 0, totalAutomovil = 0;
    let cantMoto = 0, totalMoto = 0;

    let continuar = 's';
    while (continuar.toLowerCase() === 's') {
        const tipo = prompt("🚦 TIPO DE VEHÍCULO:\n1 → CAMION ($22.000)\n2 → CAMIONETA ($12.000)\n3 → AUTOMOVIL ($4.000)\n4 → MOTOS ($1.500)\n\nIngrese número:");

        let precio = 0;
        if (tipo === '1') { precio = 22000; cantCamion++; totalCamion += precio; }
        else if (tipo === '2') { precio = 12000; cantCamioneta++; totalCamioneta += precio; }
        else if (tipo === '3') { precio = 4000; cantAutomovil++; totalAutomovil += precio; }
        else if (tipo === '4') { precio = 1500; cantMoto++; totalMoto += precio; }
        else { alert("❌ Tipo inválido."); continue; }

        continuar = prompt("¿Registrar otro vehículo?\n(s) Sí\n(n) No").toLowerCase();
    }

    const totalGeneral = totalCamion + totalCamioneta + totalAutomovil + totalMoto;

    let resumen = `✅ CIERRE DE JORNADA - PEAJE SUR S.A.\n\n`;
    resumen += `CAMIONES: ${cantCamion} → $${totalCamion}\n`;
    resumen += `CAMIONETAS: ${cantCamioneta} → $${totalCamioneta}\n`;
    resumen += `AUTOMÓVILES: ${cantAutomovil} → $${totalAutomovil}\n`;
    resumen += `MOTOS: ${cantMoto} → $${totalMoto}\n`;
    resumen += `────────────────────\n`;
    resumen += `TOTAL GENERAL: $${totalGeneral}\n\n`;

    if (cantCamioneta > cantAutomovil) resumen += `📊 Pasaron MÁS CAMIONETAS que autos`;
    else if (cantCamioneta < cantAutomovil) resumen += `📊 Pasaron MÁS AUTOS que camionetas`;
    else resumen += `📊 Igual cantidad de autos y camionetas`;

    alert(resumen);
    console.log("=== EJERCICIO 14 ===", { cantCamion, cantCamioneta, cantAutomovil, cantMoto, totalGeneral });
}

// ====================== EJERCICIO 15 ======================
function ejercicio15() {
    let desaprobados = 0, aprobados = 0, muyBuenos = 0, excelentes = 0;
    let errores = 0;

    let continuar = 's';
    while (continuar.toLowerCase() === 's') {
        const nota = parseFloat(prompt("📝 Ingrese nota del trabajo final (0 - 10):"));

        if (isNaN(nota) || nota < 0 || nota > 10) {
            errores++;
            alert(`❌ Nota inválida. Debe estar entre 0 y 10.`);
            continue;
        }

        if (nota >= 0 && nota <= 4) desaprobados++;
        else if (nota > 4 && nota <= 7) aprobados++;
        else if (nota > 7 && nota < 10) muyBuenos++;
        else if (nota === 10) excelentes++;

        continuar = prompt("¿Cargar otra nota?\n(s) Sí\n(n) No").toLowerCase();
    }

    const total = desaprobados + aprobados + muyBuenos + excelentes;
    let resumen = `📊 RESULTADOS DIPLOMATURA\n\n`;
    resumen += `Desaprobados: ${desaprobados}\n`;
    resumen += `Aprobados: ${aprobados}\n`;
    resumen += `Muy buenos: ${muyBuenos}\n`;
    resumen += `Excelentes: ${excelentes}\n`;
    resumen += `────────────────────\n`;
    resumen += `Total evaluados: ${total}\nErrores: ${errores}`;

    alert(resumen);
    console.log("=== EJERCICIO 15 ===", { desaprobados, aprobados, muyBuenos, excelentes, errores });
}

// ====================== EJERCICIO 16 ======================
function ejercicio16() {
    const vehiculos = [
        { id: 1, nombre: "Amarok V6", precio: 65000000 },
        { id: 2, nombre: "TAOS", precio: 53000000 },
        { id: 3, nombre: "Polo Nuevo", precio: 47000000 }
    ];

    const sel = prompt("🚙 SELECCIONE VEHÍCULO:\n1 → Amarok V6\n2 → TAOS\n3 → Polo Nuevo\n\nIngrese número:");
    const veh = vehiculos.find(v => v.id === parseInt(sel));
    if (!veh) { alert("❌ Selección inválida"); return; }

    let dinero;
    do {
        dinero = parseFloat(prompt(`💰 Dinero disponible para ${veh.nombre}\n(Mínimo 30% = $${(veh.precio * 0.3).toLocaleString('es-AR')})`));
    } while (isNaN(dinero) || dinero <= veh.precio * 0.3 || dinero >= veh.precio);

    const resto = veh.precio - dinero;

    const cuotasSel = prompt("📆 CUOTAS:\n1 → 12 cuotas (9.9%)\n2 → 24 cuotas (22%)\n3 → 36 cuotas (33%)\n\nIngrese número:");
    let cuotas = 0, tasa = 0;
    if (cuotasSel === '1') { cuotas = 12; tasa = 0.099; }
    else if (cuotasSel === '2') { cuotas = 24; tasa = 0.22; }
    else if (cuotasSel === '3') { cuotas = 36; tasa = 0.33; }
    else { alert("❌ Opción inválida"); return; }

    const totalPagar = resto * (1 + tasa);
    const cuotaMensual = totalPagar / cuotas;

    let resumen = `✅ FINANCIACIÓN ${veh.nombre}\n\n`;
    resumen += `Precio: $${veh.precio.toLocaleString('es-AR')}\n`;
    resumen += `Entrega: $${dinero.toLocaleString('es-AR')}\n`;
    resumen += `Financiado: $${resto.toLocaleString('es-AR')}\n`;
    resumen += `${cuotas} cuotas → Cuota mensual: $${cuotaMensual.toFixed(0).toLocaleString('es-AR')}`;

    alert(resumen);
    console.log("=== EJERCICIO 16 ===", { vehiculo: veh.nombre, entrega: dinero, resto, cuotas, cuotaMensual });
}

// ====================== EJERCICIO 17 ======================
function ejercicio17() {
    let xl = 0, l = 0, m = 0, descartados = 0;

    let continuar = 's';
    while (continuar.toLowerCase() === 's') {
        const peso = parseFloat(prompt("🥚 Peso del huevo en gramos:"));
        if (isNaN(peso)) { alert("❌ Peso inválido"); continue; }

        if (peso >= 73) xl++;
        else if (peso >= 63) l++;
        else if (peso >= 53) m++;
        else descartados++;

        continuar = prompt("¿Otro huevo?\n(s) Sí\n(n) No").toLowerCase();
    }

    const total = xl + l + m + descartados;
    const pctXl = total > 0 ? (xl / total * 100).toFixed(1) : 0;
    const pctL = total > 0 ? (l / total * 100).toFixed(1) : 0;
    const pctM = total > 0 ? (m / total * 100).toFixed(1) : 0;

    let resumen = `🥚 CLASIFICADORA DE HUEVOS\n\n`;
    resumen += `Total huevos: ${total}\n`;
    resumen += `XL: ${xl} (${pctXl}%)\n`;
    resumen += `L: ${l} (${pctL}%)\n`;
    resumen += `M: ${m} (${pctM}%)\n`;
    resumen += `Descartados: ${descartados}`;

    alert(resumen);
    console.log("=== EJERCICIO 17 ===", { xl, l, m, descartados, total });
}

// ====================== EJERCICIO 18 ======================
function ejercicio18() {
    let ventaTotal = 0, descuentoTotal = 0, importePagarTotal = 0;
    let clientesConDesc = 0, clientesSinDesc = 0;

    let continuarClientes = 's';
    while (continuarClientes.toLowerCase() === 's') {
        let totalCliente = 0;

        let continuarProductos = 's';
        while (continuarProductos.toLowerCase() === 's') {
            const precioProd = parseFloat(prompt("🛒 Precio del producto:"));
            if (!isNaN(precioProd)) totalCliente += precioProd;
            continuarProductos = prompt("¿Más productos?\n(s) Sí\n(n) No").toLowerCase();
        }

        const pago = prompt("💳 FORMA DE PAGO:\n1 → Efectivo (10%)\n2 → Visa BNA (7%)\n3 → Master BNA (7%)\n4 → Otras (0%)");

        let descuento = 0;
        if (pago === '1') descuento = totalCliente * 0.10;
        else if (pago === '2' || pago === '3') descuento = totalCliente * 0.07;

        const aPagar = totalCliente - descuento;

        ventaTotal += totalCliente;
        descuentoTotal += descuento;
        importePagarTotal += aPagar;

        if (descuento > 0) clientesConDesc++;
        else clientesSinDesc++;

        continuarClientes = prompt("¿Atender otro cliente?\n(s) Sí\n(n) No").toLowerCase();
    }

    let resumen = `🛒 CIERRE DE CAJA\n\n`;
    resumen += `Venta bruta: $${ventaTotal.toFixed(0)}\n`;
    resumen += `Descuentos: $${descuentoTotal.toFixed(0)}\n`;
    resumen += `Total a pagar: $${importePagarTotal.toFixed(0)}\n`;
    resumen += `Clientes con descuento: ${clientesConDesc}\n`;
    resumen += `Clientes sin descuento: ${clientesSinDesc}`;

    alert(resumen);
    console.log("=== EJERCICIO 18 ===", { ventaTotal, descuentoTotal, importePagarTotal, clientesConDesc, clientesSinDesc });
}