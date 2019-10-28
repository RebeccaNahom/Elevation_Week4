const SeleniumInfra = require('./SeleniumInfra')
let seleniumInfra = new SeleniumInfra()

class StorePage {
    constructor(URL) {
        URL = seleniumInfra.getURL(URL)
    }

    async checkCurrentDay() {
        try {
            let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            let day = new Date
            let today = day.getDay() //returns a num 0-6
            let todayName = daysOfWeek[today] // returns sun - sat
            // check if elem is bold and if elem text contains AM or Closed
            if (todayName == await seleniumInfra.getTextFromElement("css", "th[style$='bold;']")) {
                if (await seleniumInfra.getTextFromElement("xpath", "//th[contains(text(), 'Closed')])") ||
                    await seleniumInfra.getTextFromElement("xpath", "//th[contains(text(), 'AM')]")) {
                    console.log("true")
                } else {
                    console.log("false")
                }
            }
        } catch (error) {
            console.error(`checkCurrentDayFunc error`)
            console.error(`error: ${error}`)
        }
    }
}

module.exports = StorePage