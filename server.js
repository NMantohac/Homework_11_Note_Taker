// Require Dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");
const util = require("util");

const databasePath = path.join(__dirname, "db/db.json");
const dataJSON = require("./db/db.json");

// UUID Random ID Generator
const uuid = require("uuid/v4");

// Express App and PORT
const app = express();
const PORT = process.env.PORT || 9000;

// Express Middleware Functions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const notes = [];

// HTML Routes - notes.html and index.html
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
})

// GET /api/notes
app.get("/api/notes", (req, res) => {
    res.json(dataJSON);
})

// POST /api/notes
app.post("/api/notes", (req, res) => {
    const newNote = req.body;

    console.log(newNote);

    dataJSON.push(newNote);

    res.json(newNote);
})

// DELETE /api/notes/:id
// import { v4 as uuidv4} from "uuid";
// uuidv4();

// Server Port LISTEN
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
})