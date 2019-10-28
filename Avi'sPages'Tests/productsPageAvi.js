const seleniumInfra = require('./seleniumInfra')

const selInf = new seleniumInfra()

class ProductsPage{
    constructor() {
        selInf.getURL("https://cakes-automation-course.herokuapp.com/products.html")
    }

    async pressUp (cakeBefore, cakesAfter) {
        async function checkCakesOrder(cakesOrder, positiveLog, negativeLog) {
            let cakesArr = await selInf.findElementListBy("ItemContainerHeadline", "className")
            let cakesArrText = []
            for (let cake of cakesArr) {
                const cakeText = await selInf.getTextFromElement(null, null, cake)
                cakesArrText.push(cakeText)
            } 
            if (cakesArrText[0] == cakesOrder[0] &&
                cakesArrText[1] == cakesOrder[1]) {
                console.log(positiveLog)
            }
            else {
                console.log(negativeLog)
            }
        }
        await checkCakesOrder(cakeBefore, "we're set", "somthing is wrong")
        await selInf.clickElement("arrow-up", "id")
        await checkCakesOrder(cakesAfter, "The clickUp was made successfully - Graet", "The click up wasnt made successfully - wrong")
    }

    async pressDown (cakeBefore, cakesAfter) {
        async function checkCakesOrder(cakesOrder, positiveLog, negativeLog) {
            let cakesArr = await selInf.findElementListBy("ItemContainerHeadline", "className")
            let cakesArrText = []
            for (let cake of cakesArr) {
                const cakeText = await selInf.getTextFromElement(null, null, cake)
                cakesArrText.push(cakeText)
            } 
            if (cakesArrText[0] == cakesOrder[0] &&
                cakesArrText[1] == cakesOrder[1]) {
                console.log(positiveLog)
            }
            else {
                console.log(negativeLog)
            }
        }
        await checkCakesOrder(cakesAfter, "we're set", "somthing is wrong")
        await selInf.clickElement("arrow-down", "id")
        await checkCakesOrder(cakeBefore, "The clickUp was made successfully - Graet", "The click up wasnt made successfully - wrong")

    }
}

module.exports = ProductsPage