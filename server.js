const express = require('express');
const path = require('path');
const app = express();
const helmet = require("helmet");
const morgan = require('morgan');
const cors = require('cors');
const usersModel = require('./database/models').Users


// ENABLE CORS FOR DEVELOPMENT  REQUESTS

app.use(cors())

// HELMET INTIALIZATION

app.use(helmet());

// MORGAN INTIALIZATION

app.use(morgan('tiny'));

// BODY PARSER INTIALIZATION

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// SAMPLE ROUTES

app.get('/', async function (req, res) {

   usersModel.create({
      first_name:'JOHN DOE',
       last_name:'KAMAU',
       password:'TEST1234'
   }).then(response =>{
         res.json(response)
   }).catch(error=>{
       res.json(error)
   })
	
//       usersModel.findAll({raw: true}).then(response => {
//             res.json(response)
//       }).catch(
//             error=>{
//                   res.json(error)
//       });
	
});

// PORT INTIALIZATION CONFIG

const port = process.env.PORT || 8000

app.listen(port, (err, live) => {
	if (err) {
		console.error(err);
	}
	console.log('\n','*************************************************','\n',`Server running on port ${port}`,'\n','**************************************************');
});
