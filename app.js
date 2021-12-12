var bodyParser = require('body-parser')
var express = require('express');

var app = express();



var jsonParser = bodyParser.json();
app.use(express.static(__dirname + '/public'));
app.set("view engine","ejs")



app.listen(3000, () => {
    console.log("listening on port 3000")
})



app.get("/", (req, res) => {
    res.render("data.ejs")
})

app.get("/home", (req, res) => {
    res.render("data.ejs")
})


app.post("/insecure", jsonParser, (req, res) =>{    

    let product = req.body.product;



})
