const StorePage = require("./storePage")
let storePage1 = new StorePage('https://cakes-automation-course.herokuapp.com/store.html')


async function testCurrententDay(){
    console.log("check current day is bold")    
    await storePage1.checkCurrentDay()
}

testCurrententDay()
