const express = require('express');
const path = require('path');
const members = require('./members');
const logger = require('./middleware/logger');

// initialize express
const app = express();

// init middlewares
app.use(logger);
 
// routes
app.get('/api/members', (req, res) => res.json(members));

app.get('/api/members/:id', (req, res) => {
    res.send(req.params.id);
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});