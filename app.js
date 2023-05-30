const express = require("express");

const app = express();

app.use(express.static('public'));

app.get("/", (req, res, next) => {
    console.log("We have received a request to /about")
    res.sendFile(__dirname + '/views/home-page.html')
})

app.get("/contact-page", (req, res, next) => {
    res.sendFile(__dirname + '/views/contact-page.html')
})

app.listen(3000, () => {console.log("server listening on port 3000....");});
