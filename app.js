const express = require ('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 

app.post('/user', (req, res) => {
    res.status(200).json({});
});


module.exports = app;