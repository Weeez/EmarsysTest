var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(port, function () {
  console.log('App listening on port 3000!')
});