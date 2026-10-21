// Importamos express y creamos una instancia de su enrutador (Router)
const express = require("express");
const router = express.Router();

// Importamos la conexion centralizada a la base de datos
const conexionBD = require("../db");

/**************************************** ENDPOINTS DE CATEGORIA ****************************************/

// GET - Listar todas las categorias o filtrar por coincidencia de nombre (req.query)
router.get("/", (req, res) => {
    const categorianombre = req.query.categorianombre; // Captura el parametro opcional de la URL ?categorianombre=...

    if (!categorianombre) {
        conexionBD.query("SELECT * FROM categoria ORDER BY categoriaid ASC", [], (error, resultado) => {
            if (error) {
                res.status(500).json({ error: `Error al recuperar categorias: ${error.message}` });
            } else {
                res.status(200).json(resultado.rows);
            }
        });
    } else {
        conexionBD.query(
            "SELECT * FROM categoria WHERE categorianombre ILIKE $1 ORDER BY categoriaid ASC",
            [`%${categorianombre}%`],
            (error, resultado) => {
                if (error) {
                    res.status(500).json({ error: `Error al filtrar categorias: ${error.message}` });
                } else {
                    res.status(200).json(resultado.rows);
                }
            }
        );
    }
});

// GET - Consulta por Agrupacion (GROUP BY) para calcular cantidad y promedio
router.get("/estadisticas", (req, res) => {
    const query = `
        SELECT 
            categoria.categorianombre,
            COUNT(comida.comidaid)::int AS total_platos,
            COALESCE(ROUND(AVG(comida.comidaprecio), 2), 0)::float AS precio_promedio
        FROM categoria
        LEFT JOIN comida ON categoria.categoriaid = comida.categoriaid
        GROUP BY categoria.categorianombre
        ORDER BY total_platos DESC;
    `;

    conexionBD.query(query, [], (error, resultado) => {
        if (error) {
            res.status(500).json({ error: `Error al generar estadisticas: ${error.message}` });
        } else {
            res.status(200).json(resultado.rows);
        }
    });
});

// GET - Consultar una categoria puntual por su identificador unico (req.params)
router.get("/:categoriaid", (req, res) => {
    const categoriaid = req.params.categoriaid;

    if (categoriaid) {
        conexionBD.query("SELECT * FROM categoria WHERE categoriaid = $1", [categoriaid], (error, resultado) => {
            if (error) {
                res.status(500).json({ error: `Error al recuperar categoria: ${error.message}` });
            } else {
                res.status(200).json(resultado.rows[0] || {});
            }
        });
    }
});

// POST - Insertar nueva categoria usando req.body y clausula RETURNING *
router.post("/", (req, res) => {
    const { categorianombre } = req.body; // Destructuring para extraer el campo enviado

    if (categorianombre) {
        conexionBD.query(
            "INSERT INTO categoria (categorianombre) VALUES ($1) RETURNING *",
            [categorianombre],
            (error, resultado) => {
                if (error) {
                    res.status(500).json({ error: `Error al insertar categoria: ${error.message}` });
                } else {
                    res.status(201).json(resultado.rows[0]);
                }
            }
        );
    } else {
        res.status(400).json({ error: "El nombre de la categoria es obligatorio" });
    }
});

// PUT - Modificar el nombre de una categoria existente
router.put("/:categoriaid", (req, res) => {
    const categoriaid = req.params.categoriaid;
    const { categorianombre } = req.body;

    conexionBD.query(
        "UPDATE categoria SET categorianombre = $1 WHERE categoriaid = $2 RETURNING *",
        [categorianombre, categoriaid],
        (error, resultado) => {
            if (error) {
                res.status(500).json({ error: `Error al actualizar categoria: ${error.message}` });
            } else {
                res.status(200).json(resultado.rows[0]);
            }
        }
    );
});

// DELETE - Eliminar una categoria
router.delete("/:categoriaid", (req, res) => {
    const categoriaid = req.params.categoriaid;

    conexionBD.query("DELETE FROM categoria WHERE categoriaid = $1 RETURNING *", [categoriaid], (error, resultado) => {
        if (error) {
            res.status(500).json({ error: `Error al eliminar categoria: ${error.message}` });
        } else {
            res.status(200).json({ mensaje: "Categoria eliminada", categoria: resultado.rows[0] });
        }
    });
});

// Exportamos el router con sus rutas configuradas
module.exports = router;