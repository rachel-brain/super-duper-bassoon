require('dotenv').config()
const sequelize = require('./config/connection');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
var bodyParser = require('body-parser');
//require and start express and handlebars
const express = require('express');
const app = express();
var exphbs = require('express-handlebars');
const path = require('path');
const helpers = require('./utils/helpers');
const { User } = require('./models');
const db = require('./clients/db')
const user = require('./models/user');
const withAuth = require('./utils/auth');



//set up handlebars with custom helpers
const hbs = exphbs.create({ helpers });

//session
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: db
    })
};

app.use(session(sess));


//middleware for parsing JSON and urlencoded form data
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

//routes folder
const routes = require('./controllers');
app.use(routes);

// const validator = require("email-validator");
// app.use(validator);

//Handlebars Setup
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const models = require('./models');
const {
    addHook
} = require('./models/user');

//enable the environment to specify a port, or use the default port. BC heruoku will generate a random port and use that.
const PORT = process.env.PORT || 3001;



//Validator
app.post('/emailValidation', (req, res) => {
    let email = req.body.email;
    let isEmailValid = validator(email);
    res.json({
        isEmailValid: isEmailValid
    })
})

//Homepage
app.get('/', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
      }
    res.render('home');
});

//Profile Page
app.get('/profile', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
        });
        console.log('test3');
        const user = userData.get({plan:true});
        console.log('test4');

        res.render('profile', {
            ...user,
            logged_in:true  
        });
    }
    catch (err){
        res.status(500).json(err);

    }

})

//Gamepage
app.get('/Gamepage', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password']},
        });
        const user = userData.get({plain:true});

        res.render('gamepage', {
            ...user,
            logged_in:true
        })
    }
    catch (err){
        res.status(500).json(err);

    }
})

//About
app.get('/about', (req, res) => {
    res.render('about');
})

//Leaderboards
app.get('/Leaderboards', async (req, res) => {
    try {
        const leaderboardData = await User.findAll({
            attributes: ['name', 'highscore']
        })
        var topFiveUsersArray = []
        const highscoresUnsorted = leaderboardData.map((highscores) => highscores.get({ plain: true }));
        const highscoresSorted = sortArray(highscoresUnsorted);
        topFiveUsers(highscoresSorted, topFiveUsersArray);
        res.render('leaderboards', {
            topFiveUsersArray
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

//sort
sortArray = function (highscores) {
    return highscores.sort(function (a, b) {
        return b.highscore - a.highscore;
    });

}

//topfive
topFiveUsers = function (highscoresSorted, topFiveUsersArray) {
    for (i = 0; i < 5; i++) {
        topFiveUsersArray.push(highscoresSorted[i]);
    }

}

//Load GamePage
app.use(express.static('public'));

// app.use(express.static(path.join(__dirname, '/src')));


//When /api/users is requested, we return a json of all the user data
app.get('/api/users', async (req, res) => {
    const usersRAW = await user.findAll();
    const users = usersRaw.map(rawUser => rawUser.get());
    res.json(users);
});

//Connect to sequelize first, and then finally start the web server
db.sync().then(() => {
    app.listen(PORT);
    console.log('listening on port 8080')
});

// //session
// const sess = {
//     secret: 'Super secret secret',
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//         db: db
//     })
// };

// app.use(session(sess));