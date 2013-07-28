var application_root = __dirname;
var express = require('express');
var path = require('path');

var app = express();

app.configure(function () {
	app.use(express.static(path.join(application_root, 'public')));
});

app.listen(process.env.VMC_APP_PORT || 3000, null);

console.log('Server running on http://localhost:3000/');
