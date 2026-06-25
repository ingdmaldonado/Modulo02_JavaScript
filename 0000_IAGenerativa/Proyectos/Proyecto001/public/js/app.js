/* ── Estado ────────────────────────────────────────────────── */
let clienteIdAEliminar = null;

/* ── Elementos del DOM ─────────────────────────────────────── */
const form        = document.getElementById('form-cliente');
const selectTipo  = document.getElementById('tipo');
const tbody       = document.getElementById('tbody-clientes');
const contador    = document.getElementById('contador');
const mensajeEl   = document.getElementById('mensaje');
const modal       = document.getElementById('modal-overlay');
const modalTexto  = document.getElementById('modal-texto');

/* ── Helpers ───────────────────────────────────────────────── */
function mostrarMensaje(texto, tipo) {
    mensajeEl.textContent = texto;
    mensajeEl.className   = `mensaje ${tipo}`;
    clearTimeout(mensajeEl._timer);
    mensajeEl._timer = setTimeout(() => {
        mensajeEl.className = 'mensaje oculto';
    }, 4000);
}

function limpiarErrores() {
    ['cuit', 'nombre', 'tipo'].forEach(id => {
        document.getElementById(id).classList.remove('invalido');
        document.getElementById(`${id}-error`).textContent = '';
    });
}

function mostrarError(campo, msg) {
    const el = document.getElementById(campo);
    el.classList.add('invalido');
    document.getElementById(`${campo}-error`).textContent = msg;
}

function badgeHTML(idTipo, descripcion) {
    return `<span class="badge badge-${idTipo}">${descripcion}</span>`;
}

/* ── Cargar tipos de cliente en el <select> ─────────────────── */
async function cargarTipos() {
    const res   = await fetch('/api/tipos-cliente');
    const tipos = await res.json();
    tipos.forEach(t => {
        const opt = document.createElement('option');
        opt.value       = t.id;
        opt.textContent = t.descripcion;
        selectTipo.appendChild(opt);
    });
}

/* ── Cargar y renderizar la tabla de clientes ───────────────── */
async function cargarClientes() {
    tbody.innerHTML = '<tr><td colspan="5" class="vacio">Cargando...</td></tr>';
    try {
        const res      = await fetch('/api/clientes');
        const clientes = await res.json();

        if (clientes.length === 0) {
            tbody.innerHTML = '<tr id="fila-vacia"><td colspan="5" class="vacio">No hay clientes registrados.</td></tr>';
            contador.textContent = '0';
            return;
        }

        contador.textContent = clientes.length;
        tbody.innerHTML = clientes.map(c => `
            <tr data-id="${c.id}">
                <td>${c.cuit}</td>
                <td>${c.nombre}</td>
                <td>${c.domicilio || '<em style="color:#94a3b8">—</em>'}</td>
                <td>${badgeHTML(c.id_tipo_cliente, c.tipo_cliente)}</td>
                <td>
                    <button class="btn-eliminar" data-id="${c.id}" data-nombre="${c.nombre}">
                        Eliminar
                    </button>
                </td>
            </tr>
        `).join('');
    } catch {
        tbody.innerHTML = '<tr><td colspan="5" class="vacio">Error al cargar los clientes.</td></tr>';
    }
}

/* ── Validación del formulario ──────────────────────────────── */
function validarForm(datos) {
    let valido = true;
    limpiarErrores();

    if (!/^\d{11}$/.test(datos.cuit)) {
        mostrarError('cuit', 'Debe tener exactamente 11 dígitos numéricos.');
        valido = false;
    }
    if (!datos.nombre.trim()) {
        mostrarError('nombre', 'El nombre es obligatorio.');
        valido = false;
    }
    if (!datos.id_tipo_cliente) {
        mostrarError('tipo', 'Seleccione un tipo de cliente.');
        valido = false;
    }
    return valido;
}

/* ── Submit del formulario ──────────────────────────────────── */
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const datos = {
        cuit:            document.getElementById('cuit').value.trim(),
        nombre:          document.getElementById('nombre').value.trim(),
        domicilio:       document.getElementById('domicilio').value.trim(),
        id_tipo_cliente: document.getElementById('tipo').value,
    };

    if (!validarForm(datos)) return;

    const btnGuardar = document.getElementById('btn-guardar');
    btnGuardar.disabled    = true;
    btnGuardar.textContent = 'Guardando...';

    try {
        const res  = await fetch('/api/clientes', {
            method:  'POST',
            headers: { 'Content-Type': 'application/json' },
            body:    JSON.stringify(datos),
        });
        const data = await res.json();

        if (!res.ok) {
            mostrarMensaje(data.error || 'Error al guardar.', 'error');
        } else {
            mostrarMensaje(`Cliente "${data.nombre}" registrado correctamente.`, 'exito');
            form.reset();
            limpiarErrores();
            cargarClientes();
        }
    } catch {
        mostrarMensaje('Error de conexión con el servidor.', 'error');
    } finally {
        btnGuardar.disabled    = false;
        btnGuardar.textContent = 'Guardar';
    }
});

/* ── Limpiar formulario ─────────────────────────────────────── */
document.getElementById('btn-limpiar').addEventListener('click', () => {
    form.reset();
    limpiarErrores();
    mensajeEl.className = 'mensaje oculto';
});

/* ── Eliminar cliente: delegación de eventos ────────────────── */
tbody.addEventListener('click', (e) => {
    if (!e.target.classList.contains('btn-eliminar')) return;
    clienteIdAEliminar  = e.target.dataset.id;
    modalTexto.textContent = `¿Desea eliminar al cliente "${e.target.dataset.nombre}" (ID ${clienteIdAEliminar})?`;
    modal.classList.remove('oculto');
});

document.getElementById('modal-confirmar').addEventListener('click', async () => {
    if (!clienteIdAEliminar) return;
    modal.classList.add('oculto');

    try {
        const res  = await fetch(`/api/clientes/${clienteIdAEliminar}`, { method: 'DELETE' });
        const data = await res.json();
        mostrarMensaje(res.ok ? data.message : (data.error || 'Error al eliminar.'), res.ok ? 'exito' : 'error');
        if (res.ok) cargarClientes();
    } catch {
        mostrarMensaje('Error de conexión con el servidor.', 'error');
    }
    clienteIdAEliminar = null;
});

document.getElementById('modal-cancelar').addEventListener('click', () => {
    modal.classList.add('oculto');
    clienteIdAEliminar = null;
});

/* ── Cerrar modal con Escape ────────────────────────────────── */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('oculto')) {
        modal.classList.add('oculto');
        clienteIdAEliminar = null;
    }
});

/* ── Inicialización ─────────────────────────────────────────── */
cargarTipos();
cargarClientes();
