const express = require('express'),
    app = express();

const mysql = require('mysql');
const path = require('path')
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
global.conn = mysql.createConnection({
    host: 'mariaDB',
    user: 'root',
    password: 'dutamedia_dev',
    database: 'db_otpwhatsapp'
  });
  
  conn.connect((err) => {
    if (err) throw err;
    console.log('Mysql Connected...');
  });

const http = require('http').Server(app)
app.set('port', process.env.PORT || 8000);
//set views file
app.set('views', path.join(__dirname, '/src/views'));
//set view engine
app.set('view engine', 'hbs');
//instead of app.engine('handlebars', handlebars({
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/src/views/layouts',
    //new configuration parameter
    extname: 'hbs'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//set folder public sebagai static folder untuk static file
app.use('/assets', express.static(__dirname + '/public'));
app.use('/scripts', express.static(__dirname + '/node_modules/admin-lte/'));

require('./route')(app);
require('./waapi')(app);
http.listen(app.get('port'), function () {
    console.log('Express server on port ' + app.get('port'));
})
