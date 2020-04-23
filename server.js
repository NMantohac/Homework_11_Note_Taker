// Require Dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");

// Express App and PORT
const app = express();
const PORT = process.env.PORT || 9000;

// Express Middleware Functions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// HTML Routes - notes.html and index.html
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
})

// GET /api/notes Route - reads db.json file and returns the data array of objects in JSON format
app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        if (err) throw err;

        res.json(JSON.parse(data));
    })
})

// POST /api/notes - creates a new object based on user input and adds it to db.json in JSON format 
app.post("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        if (err) throw err;
        
        const notes = JSON.parse(data);

        const newNote = req.body;
        const newNoteId = notes.length + 1;
        const noteData = {
            id: newNoteId,
            title: newNote.title,
            text: newNote.text
        };

        notes.push(noteData);
        res.json(noteData);
        console.log(noteData);

        fs.writeFile("./db/db.json", JSON.stringify(notes, null, 2), err => {
            if (err) throw err;
            console.log("db.json file succesfully created!");
        })
    })
})

// DELETE /api/notes/:id - deletes the note object based on specific id and returns the rewritten db.json in JSON format
app.delete("/api/notes/:id", (req, res) => {
    const noteID = req.params.id;

    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        if (err) throw err;

        const notes = JSON.parse(data);

        notes.forEach((element, index) => {
            if (parseInt(element.id) === parseInt(noteID)) {
                notes.splice(index, 1);
            }
        });

        const notesSTR = JSON.stringify(notes, null, 2)

        fs.writeFile("./db/db.json", notesSTR, err => {
            if (err) throw err;
            res.json(JSON.parse(notesSTR));
            console.log("db.json file succesfully rewritten!");
        })
    })
})

// Server Port LISTEN
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
})