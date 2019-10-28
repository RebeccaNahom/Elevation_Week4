const HomePage = require("./homePageAvi")



let webIndex = ["about", "products", "contact", "store", "home"]

async function searchNavIndex(input) {
    try {
        console.log("check if search button navigate correctly")
        for (let i of input) {
            let homepage1 = new HomePage("https://cakes-automation-course.herokuapp.com/about.html")
            await homepage1.search(i)
            console.log(`searched for ${i} page successfully`)
        }
    } catch (error) {
        console.error(`searchNavIndexFunc error`)
        console.error(`error: ${error}`)
    }
}

// searchNavIndex(webIndex)

let webIndexInvalid = ["aabout", "pproducts", "ccontact", "sstore", "hhome", "homeabout", "123"]

async function searchNavNegative(input) {
    try {
        console.log("check if search button navigate incorrectly")
        for (let i of input) {
            let homepage2 = new HomePage("https://cakes-automation-course.herokuapp.com/about.html")
            await homepage2.search(i)
            console.log(`wasn't successful while searching for ${i}`)
        }
    } catch (error) {
        console.error(`searchNavIndexFunc error`)
        console.error(`error: ${error}`)
    }
}

// searchNavNegative(webIndexInvalid)



