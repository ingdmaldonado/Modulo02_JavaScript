// Importamos express y creamos una instancia del enrutador
const express = require("express");
const router = express.Router();

// Importamos la conexion a la base de datos
const conexionBD = require("../db");

/**************************************** ENDPOINTS DE COMIDA ****************************************/

// GET - Listar todas las comidas con el nombre de su categoria usando INNER JOIN
router.get("/", (req, res) => {
    const query = `
        SELECT comida.*, categoria.categorianombre
        FROM comida
        INNER JOIN categoria ON comida.categoriaid = categoria.categoriaid
        ORDER BY comida.comidaid ASC;
    `;

    conexionBD.query(query, [], (error, resultado) => {
        if (error) {
            res.status(500).json({ error: `Error al recuperar comidas: ${error.message}` });
        } else {
            res.status(200).json(resultado.rows);
        }
    });
});

// GET - Consultar una comida individual por su ID mediante req.params
router.get("/:comidaid", (req, res) => {
    const comidaid = req.params.comidaid;

    if (comidaid) {
        const query = `
            SELECT comida.*, categoria.categorianombre
            FROM comida
            INNER JOIN categoria ON comida.categoriaid = categoria.categoriaid
            WHERE comida.comidaid = $1;
        `;

        conexionBD.query(query, [comidaid], (error, resultado) => {
            if (error) {
                res.status(500).json({ error: `Error al recuperar la comida: ${error.message}` });
            } else {
                res.status(200).json(resultado.rows[0] || {});
            }
        });
    }
});

// POST - Insertar un nuevo plato validando datos obligatorios (RETURNING *)
router.post("/", (req, res) => {
    const { comidanombre, comidaprecio, categoriaid } = req.body;

    if (comidanombre && comidaprecio && categoriaid) {
        const query = `
            INSERT INTO comida (comidanombre, comidaprecio, categoriaid)
            VALUES ($1, $2, $3)
            RETURNING *;
        `;

        conexionBD.query(query, [comidanombre, comidaprecio, categoriaid], (error, resultado) => {
            if (error) {
                res.status(500).json({ error: `Error al insertar comida: ${error.message}` });
            } else {
                res.status(201).json(resultado.rows[0]);
            }
        });
    } else {
        res.status(400).json({ error: "Faltan datos obligatorios para registrar la comida" });
    }
});

// PUT - Modificar los datos de una comida existente
router.put("/:comidaid", (req, res) => {
    const comidaid = req.params.comidaid;
    const { comidanombre, comidaprecio, categoriaid } = req.body;

    const query = `
        UPDATE comida
        SET comidanombre = $1, comidaprecio = $2, categoriaid = $3
        WHERE comidaid = $4
        RETURNING *;
    `;

    conexionBD.query(query, [comidanombre, comidaprecio, categoriaid, comidaid], (error, resultado) => {
        if (error) {
            res.status(500).json({ error: `Error al actualizar comida: ${error.message}` });
        } else {
            res.status(200).json(resultado.rows[0]);
        }
    });
});

// DELETE - Eliminar una comida por su ID
router.delete("/:comidaid", (req, res) => {
    const comidaid = req.params.comidaid;

    conexionBD.query("DELETE FROM comida WHERE comidaid = $1 RETURNING *", [comidaid], (error, resultado) => {
        if (error) {
            res.status(500).json({ error: `Error al eliminar comida: ${error.message}` });
        } else {
            res.status(200).json({ mensaje: "Comida eliminada", comida: resultado.rows[0] });
        }
    });
});

// Exportamos el router de comidas
module.exports = router;