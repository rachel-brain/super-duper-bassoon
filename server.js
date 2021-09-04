require('dotenv').config()

//require and start express and handlebars
const express = require('express')
const app = express()
var exphbs = require('express-handlebars');
const path = require('path');


//const validator = require("email-validator");
//app.use(validator);

//Handlebars Setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const db = require('./clients/db')
const user = require('./models/user');
const models = require('./models');
const { addHook } = require('./models/user');


//middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//enable the environment to specify a port, or use the default port. BC heruoku will generate a random port and use that.
const PORT = process.env.PORT || 8080;
 

//Routes

//Validator
app.post('/emailValidation', (req,res) => {
    let email = req.body.email;
    let isEmailValid = validator(email);
    res.json({
        isEmailValid: isEmailValid
    })
})

//Homepage
app.get('/', (req, res) => {
  res.render('home');
});

//Profile Page
app.get('/profile', (req,res) => {
    res.render('profile');
})

//Gamepage
app.get('/Gamepage', (req,res) => {
    res.render('gamepage');
})

//Leaderboards
app.get('/Leaderboards', (req,res) => {
    res.render('leaderboards');
})

//Load GamePage
app.use(express.static('public'));

// app.use(express.static(path.join(__dirname, '/src')));


//When /api/users is requested, we return a json of all the user data
app.get('/api/users', async (req,res) => {
    const usersRAW = await user.findAll();
    const users = usersRaw.map(rawUser => rawUser.get());
    res.json(users);
});
 
//Connect to sequelize first, and then finally start the web server
db.sync().then(() => {
    app.listen(PORT);
    console.log('listening on port 8080')
});

