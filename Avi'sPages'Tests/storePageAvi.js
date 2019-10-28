const SeleniumInfra = require("./seleniuminfra")
const selenium = new SeleniumInfra

class StorePage {
   constructor(URL) {
       selenium.getURL(URL);
   }
   async checkCurrentDay() {//check if current day is bolded
       try {
           let DaysArr = await selenium.findElementListBy("className", "today")
           let d = new Date();
           console.log(d);
           let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
           let currentDay = days[d.getDay()];
           for (const day of DaysArr) {
               let bold = await day.getCssValue("font-weight")
               console.log(bold)
               let dayOnSite = await day.getText()
               if (bold == 700 && dayOnSite == currentDay) {
                   return console.log("current day is bolded")
               }
           }
       }
       catch (error) {
           console.log(something went wrong with checkcurrentday function :${error})
       }
   }
}

// const store = new StorePage(`https://cakes-automation-course.herokuapp.com/store.html`)
// store.checkCurrentDay();