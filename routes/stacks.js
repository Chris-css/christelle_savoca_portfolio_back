const express = require("express");
const connection = require("../config");
const router = express.Router();

// I want to create a stack
router.post("/", (req, res) => {
    const sql = "INSERT INTO stack SET ?";
    const formData = req.body;
    connection.query(sql, [formData], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send("La technologie a bien été créée");
        }
    });
});

// I want to get all stacks
router.get("/", (req, res) => {
    const sql = "SELECT * FROM stack";
    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(result);
        }
    });
});

// I want to get one stack
router.get("/:id", (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM stack WHERE id = ?";
    connection.query(sql, [id], (err, result) => {
        if (err) {
            res.status(500).send(
                "Erreur lors de la récupération d'une technologie"
            );
        } else {
            res.status(200).json(result);
        }
    });
});

// I want to update one stack
router.put("/:id", (req, res) => {
    const sql = "UPDATE stack SET ? WHERE id = ?";
    const body = req.body;
    const id = req.params.id;
    connection.query(sql, [body, id], (err, result) => {
        if (err) {
            res.status(500).send(
                "Erreur lors de la modification d'une technologie"
            );
        } else {
            res.status(201).send("La technologie a bien été modifiée");
        }
    });
});

// I want to delete one stack
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM stack WHERE id = ?";
    connection.query(sql, [id], (err, result) => {
        if (err) {
            res.status(500).send(
                "Erreur lors de la suppression d'une technologie"
            );
        } else {
            res.status(200).send("La technologie a bien été supprimée");
        }
    });
});

module.exports = router;
