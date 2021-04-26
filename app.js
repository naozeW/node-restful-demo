 var express = require('express');
var bodyParser = require('body-parser');

const route = require('./api/route.js')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Credentials", 'true');
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

route(app)

const PORT = process.env.PORT || 80

app.listen(PORT)

console.log('listen on port =>' + PORT)





