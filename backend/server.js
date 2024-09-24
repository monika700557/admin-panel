require('dotenv').config()
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
 
require('./src/router/router.js')(app);

const db = require('./src/config/db.config.js');

const Role = db.role;

const cors = require("cors");
app.use(cors());

// email, username, password, number, company_id 
  
// force: true will drop the table if it already exists

 
//require('./src/route/project.route.js')(app);cle
 
// Create a Server
var server = app.listen(8080, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})


// function initial(){
// 	Role.create({
// 		id: 1,
// 		name: "USER"
// 	});
	
// 	Role.create({
// 		id: 2,
// 		name: "ADMIN"
// 	});
	
// 	Role.create({
// 		id: 3,
// 		name: "PM"
// 	});
// }