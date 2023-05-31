const express = require("express");

const app = express();
const hbs = require("hbs");

app.use(express.static('public'));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.get("/", (req, res, next) => {
    console.log("We have received a request to /about")
    res.render("home-page")
    hbs.registerPartials(__dirname + '/views/partials/');
})

app.get("/contact-page", (req, res, next) => {
    const data = {
        layout: false
    } //cancel the layout
    res.render("contact-page", data)
})

app.get("/pizzas/margherita", (req, res, next) => {
    const pizza = {
        type: "Margherita",
        price: 12,
        imageFile: 'margherita.jpg',
    }
    res.render("product", pizza)
})

app.get("/pizzas/veggie", (req, res, next) => {
    const pizza = {
        type: "Veggie",
        price: 14,
        imageFile: 'veggie.jpg',
    }
    res.render("product", pizza)
})

app.get("/pizzas/seafood", (req, res, next) => {
    const pizza = {
        type: "Seafood",
        imageFile: 'seafood.jpg',
        ingredients: ['Mozzarella,', 'Tomatoes,', 'Basil,', 'Prawns']
    }
    res.render("product", pizza)
})

app.listen(3000, () => {console.log("server listening on port 3000....");});
