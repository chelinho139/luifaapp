var express = require('express');
var app = express();
var port = process.env.PORT || 80;

app.use('/presentacion', express.static('presentacion'));
app.use(express.static('web'));

app.listen(port, function () {
  console.log('Example app listening on port "+ port)
});