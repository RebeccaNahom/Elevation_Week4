const seleniumInfra = require('./SeleniumInfraAvi')
const selInf = new seleniumInfra()

class HomePage {
    constructor(URL) {
        selInf.getURL(URL)
    }

    async search(strInput) {
        await selInf.write(strInput, "inputSearch", "id")
        await selInf.clickElement("inputSearchSubmitImage", "id")
        console.log("Value typed in the search input and clck was made.")
        await selInf.URLvalidation(strInput)
        console.log("Navigated successfully to the wanted page.")        
    }

    async advSearch (dateInput, wardsInput, phraseInput) {
        await selInf.clickElement("myBtn", "id")
        
        await selInf.write(dateInput, "inputDate", "className")
        await selInf.write(wardsInput, "input1", "id")
        await selInf.write(phraseInput, "input2", "id")
        await selInf.clickElement("myBtnForm", "id")
        const searchOutputText = await selInf.findElementBy("searchedItem", "className")
        const searchOutputArr = await selInf.findElementListBy("searchOutput", "className", searchOutputText)
        let searchOutputArrText = []
        for (let child of searchOutputArr) {
            const childText = await selInf.getTextFromElement(null, null, child)
            searchOutputArrText.push(childText)
        }
        if (searchOutputArrText[1].includes(wardsInput)) {
            console.log("The wards input appear in the outPut successfully")
        }
        else {
            console.log("The wards input doesnt appear in the outPut - wrong")
        }
        if (searchOutputArrText[2].includes(phraseInput)) {
            console.log("The phrase input appear in the outPut successfully")
        }
        else {
            console.log("The phrase input doesnt appear in the outPut - wrong")
        }
        if (searchOutputArrText[0].includes(dateInput.substring(0, 2)) && 
            searchOutputArrText[0].includes(dateInput.substring(2, 2)) &&
            searchOutputArrText[0].includes(dateInput.substring(4, dateInput.length - 1))) {
            console.log("The date input appear in the outPut successfully")
        }
        else {
            console.log("The date input doesnt appear in the outPut - wrong")
        }
    }
}
// const homePage = new HomePage()
// homePage.search("contact")
// homePage.advSearch("01202019", "Chocolate", "Vanilla")

module.exports = HomePage