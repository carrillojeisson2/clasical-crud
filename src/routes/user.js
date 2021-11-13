const express = require("express");
const { findById } = require("../../models/user");
const userSchema = require("../../models/user");

const router = express.Router();

// crear user
router.post("/users", (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get  users
router.get("/users", (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get user
router.get("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// update user
router.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, lastname, tel, email } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: { name, lastname, tel, email } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: "error" }));
});

// delete user
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;