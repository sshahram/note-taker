// dependencies
const fs = require('fs');
const path = require('path');

// function to create new notes
function createNewNotes(body, notesArray) {
    const note = body;
    notesArray.push(note);
    
    // write into our db.json file
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify({notes: notesArray}, null, 2));

    // return finished code to post route for response
    return note;
}

// export functions
module.exports = {
    createNewNotes
};