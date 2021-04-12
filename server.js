// dependencies
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const fs = require('fs');
const path = require('path');
const express = require('express');

// requiring data
const {notes} = require('./db/db.json');

// sets an environment variable for port
const PORT = process.env.PORT || 3001;

// to instantiate the server
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({extended: true}));
//parse incoming JSON data
app.use(express.json());
// instruct the server to make certain files readily available
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// to make our server listen
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
});