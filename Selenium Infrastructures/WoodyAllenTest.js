const WoodyAllenPage = require("./WoodyAllenPage")

let WAP = new WoodyAllenPage("https://film.list.co.uk/listings/woody-allen/")

// WAP.getMovieNames()
WAP.getMovieYear()

/* ho to do a table of info: */ 
   /* given the input, choose a client by number and store the client's data in an object */
    async putClientInObject(clientNumber) {
        let client = {
            "FIrst-Name": (await this.selenium.getTextFromElement("xpath", `//tr[@class='clientDetails'][${clientNumber}]/th[1]`)),
            "Last-Name": (await this.selenium.getTextFromElement("xpath", `//tr[@class='clientDetails'][${clientNumber}]/th[2]`)),
            "Country": (await this.selenium.getTextFromElement("xpath", `//tr[@class='clientDetails'][${clientNumber}]/th[3]`)),
            "Email": (await this.selenium.getTextFromElement("xpath", `//tr[@class='clientDetails'][${clientNumber}]/th[4]`)),
            "owner": (await this.selenium.getTextFromElement("xpath", `//tr[@class='clientDetails'][${clientNumber}]/th[5]`)),
            "Sold": (await this.selenium.getTextFromElement("xpath", `//tr[@class='clientDetails'][${clientNumber}]/th[6]`)),
            "Contact-Date": (await this.selenium.getTextFromElement("xpath", `//tr[@class='clientDetails'][${clientNumber}]/th[7]`)),
            "Email-Type": (await this.selenium.getTextFromElement("xpath", `//tr[@class='clientDetails'][${clientNumber}]/th[8]`)),
        }
        return client
    }

    /* takes a number of clients with their info and put in an array  */
    async arrayOfClients() {
        let arrayOfClientElement = []
        let arrayOfClientObject = []
        arrayOfClientElement = await this.selenium.findElementListBy("className", "clientDetails")
        for (let i = 1; i <= arrayOfClientElement.length; i++) {
            arrayOfClientObject.push(await this.putClientInObject(i))
            console.log(`added client number ${i} to the arrayOfClientObject`)
        }
        // console.table(arrayOfClientObject)
        return arrayOfClientObject   
    }
