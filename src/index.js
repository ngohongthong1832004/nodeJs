const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override')
const route = require('./routes');
const db = require('./config/db')

const app = express();

db.connect()

const port = 3001;

app.use(morgan('combined'));

app.engine('handlebars', engine(
    {
        helpers : {
            sum : (a, b) => a + b
        }
    }
));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(express.static(path.join(__dirname, 'public')));

// add middleware
app.use(express.urlencoded({ extended: true })); // form HtML
app.use(express.json()); // Lib fetch axios...
app.use(methodOverride('_method'))

route(app);

app.listen(port, () => console.log(`Example app listening on port ${port}`));
