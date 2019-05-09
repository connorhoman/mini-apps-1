// SERVER and DATABASE connections ----------------------

const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;
const bodyparser = require('body-parser');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'connorhoman',
});

db.connect(function(err) {
  if (err) {
    console.log(err);
  } else {
	console.log("Connected to MySQL Database");
  }
})

app.use(express.static('public'));
app.listen(port, () => console.log('Listening on port: ', port)); 



// ROUTES -----------------------------------------------

app.post('/', bodyparser, (req, res) => {
	
})






