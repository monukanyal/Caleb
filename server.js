var express =  require('express');
var bodyparser = require('body-parser');
var routes = require('./routes');
var path = require('path');
var http = require('http');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',routes.index);
app.get('/form',routes.form);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});