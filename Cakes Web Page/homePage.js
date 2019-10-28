const SeleniumInfra = require('./SeleniumInfra')
let seleniumInfra = new SeleniumInfra()

class HomePage {
    constructor(URL) {
        URL = seleniumInfra.getURL(URL)
    }

    async search(input) {
        try {
            await seleniumInfra.write(input, "id", "inputSearch")
            await seleniumInfra.clickElement("id", "inputSearchSubmit")
            console.log(`clicked inputSearchSubmit btn`)
            if (seleniumInfra.validURL(input.toLowerCase())) {
                console.log(`URLValFunc: ${input} is true`)
                return true
            } else {
                console.error(`URLValFunc: ${input} is false`)
                return false
            }
        } catch (error) {
            console.error(`searchfunc error`)
            console.error(`error: ${error}`)
        }
    }


    async advanceSearch(cakes, ratings, date, s1 = null, s2 = null) {
        try {
            await seleniumInfra.clickElement("id", "myBtn")
            for (let cake of cakes) {
                if (cake == "Chocolate") {
                    await seleniumInfra.clickElement("xpath", "//input[@value='Chocolate']")
                } else if (cake == "Cheese") {
                    await seleniumInfra.clickElement("xpath", "//input[@value='Cheese']")
                } else if (cake == "Mousse") {
                    await seleniumInfra.clickElement("xpath", "//input[@value='Mousse']")
                }
            }
            for (let r in ratings){
                if(ratings[r] == "0-3"){
                    await seleniumInfra.clickElement("xpath", "//input[@value='0-3']")
                }else if(ratings[r] == "4"){
                    await seleniumInfra.clickElement("xpath", "//input[@value='4']")
                }else if(ratings[r] == "5" ){
                    await seleniumInfra.clickElement("xpath", "//input[@value='5']")
                }
            }
            await seleniumInfra.write(date, "xpath", "//input[@type='date']")
            await seleniumInfra.write(s1, "id", "input1")
            await seleniumInfra.write(s2, "id", "input2")
            await seleniumInfra.clickElement("id", "myBtnForm")
            // await SI2.close()
        } catch (error) {
            console.error(`advancedSearchFunc error`)
            console.error(`error: ${error}`)
        }
    }
}


module.exports = HomePage
