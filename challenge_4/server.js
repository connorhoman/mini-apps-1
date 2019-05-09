const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('client/dist/'));

app.get('/', (req, res) => {
	console.log('Received GET request!');
});

app.listen(port, (err) => {
	if (err) {
		console.log('ERROR', err) 
	} else {
		console.log('Listening to Port:', port);
	}
});