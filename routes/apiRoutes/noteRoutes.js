// dependencies
// start an instance of Router
const router = require('express').Router();
const {createNewNotes} = require('../../lib/notes');
// for id creation
import { nanoid } from 'nanoid';

const {notes} = require('../../db/db.json');

// route to get saved notes
router.get('/notes', (req, res) => {
    res.json(notes);
});


// post request to add data to the server
router.post('/notes', (req, res) => {
    // set id based on what the next index of the arra will be
    req.body.id = nanoid();
    const note = createNewNotes(req.body, notes);
    res.json(note);
});

// export the router