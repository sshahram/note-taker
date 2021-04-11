// dependecies
const path = require('path');
// start an instance of Router
const router = require('express').Router();

// route to serve index.html page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// route to serve notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// If client makes a request for a route that doesn't exist
// for example /about
// They will be redirected to the homepage
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// export the router
module.exports = router;