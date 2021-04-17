// dependencies
// start an instance of Router
const router = require('express').Router();
const {createNewNotes} = require('../../lib/notes');
const fs = require('fs');
const path = require('path');

// for id creation
const shortid = require('shortid');

let {notes} = require('../../db/db.json');

// route to get saved notes
router.get('/notes', (req, res) => {
    res.json(notes);
});


// post request to add data to the server
router.post('/notes', (req, res) => {
    // set id based on what the next index of the arra will be
    req.body.id = shortid.generate();
    const note = createNewNotes(req.body, notes);
    res.json(note);
});

// delete route
router.delete('/notes/:id', (req, res) => {
    notes = notes.filter(note => note.id !== req.params.id);
    fs.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify({notes}, null, 2));
    res.json(notes);
});

// export the router
module.exports = router;