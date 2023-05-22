const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override')
const app = express();
const port = 8080;
const route = require('./routes');
const db = require('./config/db');
app.use(express.static(path.join(__dirname, '\\public')));
db.connect();

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(methodOverride('_method'));

// app.use(morgan("combined"));
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers : {
            sum:(a,b) => a + b
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

// routes init

route(app);

app.listen(port, () => {
    return console.log(`Listening success at port: ${port}`);
});
