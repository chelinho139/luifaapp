var express = require('express');
var app = express();

app.use('/presentacion', express.static('presentacion'));
app.use(express.static('web'));



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});