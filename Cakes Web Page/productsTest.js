const ProductsPage = require("./productsPage")
let ProductsPage1 = new ProductsPage("https://cakes-automation-course.herokuapp.com/products.html")

ProductsPage1.pressUp(["Chocolate Cake", "Apple Pie"], ["Vanilla Cake", "Red Valvet Cake"])
ProductsPage1.pressUp(["Vanilla Cake", "Red Valvet Cake"], ["Chocolate Oreo Cake", "German Chocolate Cake"])

// ProductsPage1.pressDown(["Vanilla Cake", "Red Valvet Cake"], ["Chocolate Cake", "Apple Pie"])
