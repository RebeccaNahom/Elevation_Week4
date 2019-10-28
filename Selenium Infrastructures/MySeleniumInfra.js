const { Builder, By, Key, until} = require('selenium-webdriver');
const path = require('chromedriver').path;
const chrome = require('selenium-webdriver/chrome');
let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);
// const driver = new Builder().forBrowser("chrome").build();


class SeleniumInfra {
    constructor() {
        this.driver = new Builder().forBrowser("chrome").build()
    }

    async getURL(URL) {
        await this.driver.get(URL)
        await this.driver.manage().window().maximize()
        console.log("Navigated to " + URL)
    }

    async URLvalidation(pageName) {
        try {
            console.log(await this.driver.wait(until.urlContains(pageName), 8000))
        } catch (error) {
            console.log(error);
        }
    }

    async findElementBy(locatorType, locatorValue, fromElement = null) { 
        try {
            let element 
            if (!fromElement) {  // case 1: given type and value v
                element = await this.driver.findElement(By[locatorType](locatorValue))
                console.log(`found element - ${locatorType}: ${locatorValue}`)
                return element
            }
            else { // case 2: given type, value and from element v
                element = await fromElement.findElement(By[locatorType](locatorValue))
                console.log(`found element from ${fromElement} with ${locatorType}: ${locatorValue}` ) 
                return element   
            }
        }
        catch (error) {
            console.error(`error: findFunc. Type:${locatorType}. Value:${locatorValue}`)
            console.log(`error: ${error}`)
            
        }
    }
      
    async clickElement(locatorType, locatorValue, element, fromElement = null) {
        try {
            let elem
            if(element) {  // case1: given element. v
                await element.click()
                console.log(`case1: clicked on ${element}`)
            }
            else {  
                if(fromElement) { // case2: given type, value and from element. v
                    elem = await this.findElementBy(locatorType, locatorValue, fromElement)
                    elem.click()
                    console.log(`case2: clicked on element - ${locatorType}: ${locatorValue} from ${fromElement}`) 
                }
                else {  // case3: given type and value v
                    elem = await this.findElementBy(locatorType, locatorValue)
                    elem.click()
                    console.log(`case3: clicked on element - ${locatorType}: ${locatorValue}`)
                }
            }
        }
        catch (error) {
            console.log(`error: clickFunc. Type:${locatorType}. Value:${locatorValue}.`)
            console.log('error: ' + error)
        }
    }

    async write(data, locatorType, locatorValue, element, fromElement = null){
        try{
            let elem
            if(element){ //case1: given element v
                await element.sendKeys(data)
                console.log(`case1: found ${element}. sent ${data}`)
            }else{
                    if(fromElement){    // case2: given from element. find element. send data. v
                    elem = await this.findElementBy(locatorType, locatorValue, fromElement)
                    elem.sendKeys(data)
                    console.log(`case2: found element - ${locatorType}: ${locatorValue} from ${fromElement}.  sent ${data}`)
                    }else{              //case3: given type and value v
                        elem = await this.findElementBy(locatorType, locatorValue)
                        elem.sendKeys(data)
                        console.log(`case3: found element - ${locatorType}: ${locatorValue}. sent ${data}`)  
                    }
                }
            }catch(error){
            console.error(`error: writeFunc. Data: ${data}. Type:${locatorType}. Value:${locatorValue}`)
            console.error(`error: ${error}`)
        }
    }

    async getTextFromElement(locatorType, locatorValue, element, fromElement){
        try{
            let text 
            let elem
            if(element){                // case1: given element. get text.
                text = await element.getText()
                console.log(`case1: got text: ${text} - with element`)
            }else if(fromElement){      // case2: given from element, type snd value. 
                elem = await this.findElementBy(locatorType, locatorValue, null, fromElement)
                text = elem.getText()
                console.log(`case2: got text: ${text}. Type:${locatorType}. Value:${locatorValue}`);
            }else{                      // case3: given type and value
                elem = await this.findElementBy(locatorType, locatorValue)
                text = elem.getText()
                console.log(`case3: got text: ${text}. Type:${locatorType}. Value:${locatorValue}`);
            }
            return text
        }catch(error){
            console.log(`error: getTextFunc. Type:${locatorType}. Value:${locatorValue}`)
            console.log(`error: + ${error}`)
        }
    }

    async clearElementField(locatorType, locatorValue, element, fromElement){
        try{
            let elem
            if(element){                // case1: given element. clear field.
                await element.clear()
                console.log(`case1: cleared field with element`)
            }else if(fromElement){      // case2: given from element, type snd value. 
                elem = await this.findElementBy(locatorType, locatorValue, null, fromElement)
                await elem.clear()
                console.log(`case2: cleared field. Type:${locatorType}. Value:${locatorValue}`);
            }else{                      // case3: given type and value
                elem = await this.findElementBy(locatorType, locatorValue)
                await elem.clear()
                console.log(`case3: cleared field. Type:${locatorType}. Value:${locatorValue}`);
            }
        }catch(error){
            console.log(`error: clearFieldFunc. Type:${locatorType}. Value:${locatorValue}`)
            console.log(`error: + ${error}`)
        }
    }
    

    async isElementExist(locatorType, locatorValue){
        try{
            let element = await this.findElementBy(locatorType, locatorValue)
            if (element){
                return true
            }else{
                return false
            }

        }catch(error){
        console.log(`error: isElementExistFunc. Type:${locatorType}. Value:${locatorValue}`)
        console.log('error: ' + error)
        }
    }

    async findElementListBy(locatorType, locatorValue, fromElement = null) { 
        try {
            let element 
            if (!fromElement) {  // case 1: given type and value 
                element = await this.driver.findElements(By[locatorType](locatorValue))
                console.log(`case1: found elements - ${locatorType}: ${locatorValue}`)
                return element
            }
            else { // case 2: given type, value and from element 
                element = await fromElement.findElements(By[locatorType](locatorValue))
                console.log(`case2: found elements fromelement with ${locatorType}: ${locatorValue}`) 
                return element   
            }
        }
        catch (error) {
            console.error(`error: findFunc. Type:${locatorType}. Value:${locatorValue}`)
            console.log(`error: ${error}`)
        }
    }

    async close() { 
        await this.driver.quit()
    }
}

module.exports = SeleniumInfra
