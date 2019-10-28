const { Builder, By, Key, until } = require('selenium-webdriver');
const path = require('chromedriver').path;
const chrome = require('selenium-webdriver/chrome');
let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);
// const driver = new Builder().forBrowser('chrome').build();

class seleniumInfra {
    constructor() {
        this.driver = new Builder().forBrowser('chrome').build();
    }

    async getURL(URL) {
        await this.driver.get(URL)
    }

    async close() {
        await this.driver.quit()
    }

    async clickElement(locator, locatorType, element, fromElement) {
        if (element) {
            await element.click()
            await this.driver.sleep(2000)
        }
        else if (fromElement) {
            element = await fromElement.findElementBy(locator, locatorType)
            await element.click()
            await this.driver.sleep(2000)
        }
        else {
            element = await this.findElementBy(locator, locatorType)
            await element.click()
            await this.driver.sleep(2000)
        }
    }

    async write(data, locator, locatorType, element, fromElement) {
        if (element) {
            await element.sendKeys(data)
        }
        else if (fromElement) {
            element = await fromElement.findElement(By[locatorType](locator))
            await element.sendKeys(data)
        }
        else {
            element = await this.driver.findElement(By[locatorType](locator))
            await element.sendKeys(data)
        }
    }

    async getTextFromElement(locator, locatorType, element, fromElement) {
        if (element) {
            let elementText = await element.getText()
            return elementText
        }
        const elementText = await this.findElementBy(locator, locatorType, fromElement)
        return elementText.getText()
    }

    async clearElementField(locator, locatorType, element, fromElement) {
        if (element == null) {
            element = await fromElement.findElement(By[locatorType(locator)])
        }
        await element.value("")
    }

    async isElementExists(locator, locatorType) {
        let element = await this.findElementBy(locatorType, locator)
        if (element) {
            return true
        }
        else {
            return false
        }
    }

    async findElementBy(locator, locatorType, fromElement) {
        let element
        if (fromElement) {
            element = await fromElement.findElement(By[locatorType](locator))
            return element
        } else {
            element = await this.driver.findElement(By[locatorType](locator))
            return element
        }
    }

    async findElementListBy(locator, locatorType, fromElement) {
        try {
            let elements
            if (fromElement) {
                elements = await fromElement.findElements(By[locatorType](locator))
                return elements
            } else {
                elements = await this.driver.findElements(By[locatorType](locator))
                return elements
            }

        } catch (error) {
            console.log(`Error while trying to find element list by ${locatorType} of ${locator}`)
        }
    }

    async URLvalidation(pageName) {
        try {
            console.log("The URL contains the " + pageName + ": " + await this.driver.wait(until.urlContains(pageName), 8000))
        } catch (error) {
            console.log(error);
        }
    }

    async resultValidation(outPut, fromElement) {
        try {
            // console.log("The URL contains the " + pageName + ": " + await this.driver.wait(until.urlContains(pageName), 8000))
            // fromElement.wait(until.elementTextContains(outPut))
            const result = fromElement.includes(outPut)
            return result
        } catch (error) {
            console.log(error);
        }
    }
}


module.exports = seleniumInfra