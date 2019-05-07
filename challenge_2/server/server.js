const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const parse = require('./parseCSV.js');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.post('/', function(req, res) {
	console.log('Recieved POST Request');
	res.end(parse.parseCSV(req.body.textInput));
});

app.listen(port, () => console.log('Listening on', port));








