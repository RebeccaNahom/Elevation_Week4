const HomePage = require('./homePage')
let HomePage1 = new HomePage("https://cakes-automation-course.herokuapp.com/index.html")


let cakes = ["Mousse", "Chocolate"]
let ratings = [5, 4]
let date = 30092019
HomePage1.advanceSearch(cakes, ratings, date, "cake", "chocolate")
HomePage1.search("Aabout")

