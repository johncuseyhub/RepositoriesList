console.log("Server Start/Restarted");

const express = require("express")
const app = express()

app.use(express.static(__dirname + "/public"));

app.set("view engine","ejs")

app.get("/", (req, res) => {

    console.log("get route='/' ");

    res.render("index");
})

app.listen(3000);