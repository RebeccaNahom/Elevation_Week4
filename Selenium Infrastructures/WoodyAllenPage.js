const SelenuimInfra = require('./seleniumInfra')

async function example() {
    let SI1 = new SelenuimInfra()
    await SI1.getURL("https://film.list.co.uk/listings/woody-allen/")
    let element = await SI1.findElementBy("className", "keywordsLabel")
    let element2 = await SI1.findElementBy("tagName", "fieldset", element)
    await SI1.write("hi", null, null, element2)
    await SI1.close()
}
// example()

///////////////////////////////////////////////////////////////////////////////////////////
//exercise 2 - list of movies of Woody Allen:
let SI2 = new SelenuimInfra()

class WoodyAllenPage {
    constructor(URL) {
        URL = SI2.getURL(URL)
        this.movieNames = []
        this.movieYears = []
        this.movieCountries = []
        this.movieTime = []

    }

    async getMovieNames() {
        let movieElements = await SI2.findElementListBy("className", "eventSummary") //list of elements
        for (let movie of movieElements) {
            let movieName = await SI2.getTextFromElement("className", "head", null, movie)
            this.movieNames.push(movieName)
        }
        console.log(`movie names array: ${this.movieNames}`)
    }

    async getMovieYear() {
        //get list of 24 elements. each element is 4 li's
        let movieElements = await SI2.findElementListBy("xpath", "//ul[@class='info']")
        let movieYear
        for (let movie of movieElements) {
            movieYear = await SI2.getTextFromElement("xpath", "//li[starts-with(text(),'20')]", null, movie)
            this.movieYears.push(movieYear)
            // for (let info of movieInfo) {
            //     if (await movieInfo.isElementExists("xpath", "//li[starts-with(text(),'20')]")) {
            //         movieYear = movieInfo[2].getText()
            //     }
            //     if (await movieInfo.isElementExists("xpath", "//li[starts-with(text(),'19']")) {
            //         movieYear = movieInfo[1].getText()
            //     }
            //     this.movieYears.push(movieYear)
            //     console.log(this.movieYears)
            // }
        }
        console.log(this.movieYears);
        
    }
}



module.exports = WoodyAllenPage


//////////////////////////////////////////////////////////////////////////////////////////////////

// async function WoodyAllenMovieList(){
//     constructor(){
//     }

//     async getURL_WA(){
//         await SI1.getURL("https://film.list.co.uk/listings/woody-allen/")
//     }

//     async findElement(){
//         await SI1.findElementBy("id", "logo", null)
//     }

//     async clickMovie(){
//         SI1.clickElement("class", "lzy thumb", null, movieBtnElement)
//     }

//     async close(){
//         SI1.close()
//     }

// }

//let WA1 = new TheListWAPage()
//WA1.getURL_WA()
//WA1.clickMovie()

// module.exports = TheListWAPage 

// onst SeleniumInfra = require('./seleniumInfra');
// const seleniumInfra = new SeleniumInfra()
// class WoodyAllenMovieSite {
//    constructor() {
//        this.driver = seleniumInfra.driver; //Get the selenium driver from SeleniumInfra class
//        this.moviesArr = [];
//    }
//    async getURL(){
//        await seleniumInfra.getURL("https://film.list.co.uk/listings/woody-allen/") // navigate to Woody Allen movies site
//    }
//    async addMoviesToArr(){ // Add an object of movie with the keys: Name, Year, Country and Time
//        let moviesList = await seleniumInfra.findElementListBy("eventSummary", "className", null);
//        for (const movie of moviesList) {
//            // aTag = await this.driver.findElement(By.tagName('a'));
//            let name = await seleniumInfra.findElementBy("head", "className", movie).getText();
//            let infoUl = await seleniumInfra.findElementBy("info", "className", movie) // find the ul of the: year, country and time
//            let liList = await seleniumInfra.findElementListBy("li", "tagName", infoUl); // array of all the "li" inside of the infoIl
//            let year;
//            let country;
//            let time;
//            if (await seleniumInfra.isElementExists("img", "tagName", liList[0])){ // if index 0 is rank
//                year = await liList[1].getText(); // index 1 is year
//                if (liList.length > 2){
//                    if (await liList[2].getAttribute("title")){ // if index 2 contain title (only time has title)
//                        time = await liList[2].getText();
//                    }
//                    else { // if index 2 not contain title
//                        country = await liList[2].getText();
//                        if (liList.length > 3) {
//                            if (await liList[3].getAttribute("title")){
//                                time = await liList[3].getText();
//                            }
//                        }
//                    }
//                }
//            }
//            else { // if index 0 is not rank
//                year = await liList[0].getText(); // index 0 is year
//                if (liList.length > 1){
//                    if (await liList[1].getAttribute("title")){ // if index 1 contain title (only time has title)
//                        time = await liList[1].getText();
//                    }
//                    else { // if index 1 not contain title
//                        country = await liList[1].getText();
//                        if (liList.length > 2) {
//                            if (await liList[2].getAttribute("title")){
//                                time = await liList[2].getText();
//                            }
//                        }
//                    }
//                }
//            }
//            this.moviesArr.push({Name: name, Year: year, Country: country, Time: time});
//        }
//    }
//    async clickNextPage(){
//        // await seleniumInfra.clickElement("/html/body/div/div/div[1]/div[27]/a[2]", "xpath", null, null);
//        await seleniumInfra.findElementBy("/html/body/div/div/div[1]/div[27]/a[2]", "xpath", null).click();
//    }
// }
