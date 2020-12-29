const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

// initialize express
const app = express();

// init middlewares
app.use(logger);
app.use(express.json()); // body parser for json post requests
app.use(express.urlencoded({extended: false}));

//init api route
app.use('/api/members', require('./routes/api/members'));
// routes not used like above can be setup with app.get('route', (req, res) => return);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));
 
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});