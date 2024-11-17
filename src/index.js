const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');

const db = require('./config/db');
const route = require('./routes');

db.connect();


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);


app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
//HTTP logger
app.use(morgan('combined'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
