const express = require("express");
const router = express.Router();
const connection = require("../config");

// I want to create a project
router.post("/", (req, res) => {
    const sql = "INSERT INTO project SET ?";
    const formData = req.body;
    connection.query(sql, [formData], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send("Le projet a bien été créé");
        }
    });
});

// I want to get all projects
router.get("/", (req, res) => {
    const sql = "SELECT * FROM project";
    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).send("Erreur lors de la récupération des projets");
        } else {
            res.status(200).json(result);
        }
    });
});

// I want to get one project
router.get("/:id", (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM project WHERE id = ?";
    connection.query(sql, [id], (err, result) => {
        if (err) {
            res.status(500).send("Erreur lors de la récupération du projet");
        } else {
            res.status(200).json(result);
        }
    });
});

// I want to update one project
router.put("/:id", (req, res) => {
    const sql = "UPDATE project SET ? WHERE id = ?";
    const body = req.body;
    const id = req.params.id;
    connection.query(sql, [body, id], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send("Le projet a bien été modifié");
        }
    });
});

// I want to delete a project
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM project WHERE id = ?";
    connection.query(sql, [id], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send("Le projet a bien été supprimé");
        }
    });
});

module.exports = router;
