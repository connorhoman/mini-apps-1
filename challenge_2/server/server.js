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
  res.write(`
  	<!DOCTYPE html>
	<html> 
	  <head>
	  </head>
	  <body>
	  	<h1> CSV Report Generator: </h1>
	  	<form action='http://127.0.0.1:3000/' method='POST'> 
	  		<textarea id='textInput' type='text' name='textInput' rows='8' cols='100'></textarea>
	  		<input id='submit' type='submit' value='Submit JSON'/>
	  	</form>
	  </body>
	  <script src='app.js'></script>
	</html>
  `)
  var string = parse.parseCSV(req.body.textInput);
  var array = string.split('\n');
  console.log(array);
  res.end(array.join(`<br>`));
});

app.listen(port, () => console.log('Listening on', port));








