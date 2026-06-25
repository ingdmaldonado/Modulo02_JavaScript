const express = require('express');
const router  = express.Router();
const pool    = require('../db');

// GET /api/tipos-cliente
router.get('/tipos-cliente', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM tipo_cliente ORDER BY id');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /api/clientes
router.get('/clientes', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT c.id, c.cuit, c.nombre, c.domicilio,
                   t.id AS id_tipo_cliente, t.descripcion AS tipo_cliente,
                   c.created_at
            FROM clientes c
            JOIN tipo_cliente t ON c.id_tipo_cliente = t.id
            ORDER BY c.created_at DESC
        `);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST /api/clientes
router.post('/clientes', async (req, res) => {
    const { cuit, nombre, domicilio, id_tipo_cliente } = req.body;

    if (!cuit || !nombre || !id_tipo_cliente) {
        return res.status(400).json({ error: 'CUIT, nombre y tipo de cliente son obligatorios.' });
    }
    if (cuit.length !== 11 || !/^\d{11}$/.test(cuit)) {
        return res.status(400).json({ error: 'El CUIT debe tener exactamente 11 dígitos numéricos.' });
    }

    try {
        const result = await pool.query(
            `INSERT INTO clientes (cuit, nombre, domicilio, id_tipo_cliente)
             VALUES ($1, $2, $3, $4)
             RETURNING *`,
            [cuit, nombre.trim(), domicilio?.trim() || null, id_tipo_cliente]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        if (err.code === '23505') {
            return res.status(409).json({ error: `El CUIT ${cuit} ya está registrado.` });
        }
        res.status(500).json({ error: err.message });
    }
});

// DELETE /api/clientes/:id
router.delete('/clientes/:id', async (req, res) => {
    try {
        const result = await pool.query('DELETE FROM clientes WHERE id = $1 RETURNING *', [req.params.id]);
        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Cliente no encontrado.' });
        }
        res.json({ message: 'Cliente eliminado correctamente.' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
