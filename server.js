const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const routes = require("./routes/html-routes.js")

const app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(routes);

app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

const PORT = 3000;
app.listen(process.env.PORT || 3000);