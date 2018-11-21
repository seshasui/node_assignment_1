const http = require('http');
// const requestHandler = require('./routes');
const express = require('express');
const app = express();

app.use('/users', (req, res, next) => {
    res.send('<ul><li>User 1</li><li>User 2</li></ul>');
});

app.use('/', (req, res, next) => {
    res.send('<h1>First Express Assignment</h1>');
    //console.log('initial middleware');
    //next();
});

/* app.use('/', (req, res, next) => {
    console.log('second middleware');
    res.send('Welcome to Express Assignment');
}); */

app.listen(3000);