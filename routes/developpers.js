const express = require("express");
const connection = require("../config");
const router = express.Router();

// I want to create a developper
router.post("/", (req, res) => {
    const sql = "INSERT INTO developper SET ?";
    const formData = req.body;
    connection.query(sql, [formData], (err, result) => {
        if (err) {
            res.status(500).send("Erreur lors la création d'un développeur");
        } else {
            res.status(200).send("Le développeur a bien été créé");
        }
    });
});

// I want to get all developper
router.get("/", (req, res) => {
    const sql = "SELECT * FROM developper";
    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).send(
                "Erreur lors de la récupération des développeurs"
            );
        } else {
            res.status(200).json(result);
        }
    });
});

// I want to get one developper
router.get("/:id", (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM developper WHERE id = ?";
    connection.query(sql, [id], (err, result) => {
        if (err) {
            res.status(500).send(
                "Erreur lors de la récupération d'un développeur"
            );
        } else {
            res.status(200).json(result);
        }
    });
});

// I want to update one developper
router.put("/:id", (req, res) => {
    const sql = "UPDATE developper SET ? WHERE id = ?";
    const body = req.body;
    const id = req.params.id;
    connection.query(sql, [body, id], (err, result) => {
        if (err) {
            res.status(500).send("Le développeur n'a pas été modifié");
        } else {
            res.status(200).send("Le développeur a bien été modifié");
        }
    });
});

// I want to delete one developper
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM developper WHERE id = ?";
    connection.query(sql, [id], (req, res) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send("Le développeur a bien été supprimé");
        }
    });
});

module.exports = router;
