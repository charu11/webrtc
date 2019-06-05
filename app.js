var express = require('express');
var server = require('http').Server(app);
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var http = require('http');

var app = express();
var cors = require('cors');
app.use(cors());var http = require('http');
app.use(express.static('/public'));
app.use('/public', express.static('/public'));

var portSelected = 3000;
 app.listen(portSelected, function() {
  console.log('connection is listening on port ' + portSelected);

});


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
// view engine setup
//app.use(expressLayouts);
app.set('public', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(morgan('Nexzent-core-log'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html')
  });
   

module.exports = app;