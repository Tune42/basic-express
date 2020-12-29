const moment = require('moment');

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`); // example 'http://localhost:5000/api/members'
    next();
};

module.exports = logger;