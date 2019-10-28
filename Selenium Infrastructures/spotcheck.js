
// // in the selenium file
// async function clickLoginButton(locatorType, locatorValue)  {
//         try {
//             element = await this.findElement(By[locatorType](locatorValue));
//             await element.click();
//             console.log(`Clicked on element with ${locatorType}: ${locatorValue}`)
//         }
//         catch (error) {
//             console.error(`Got error while trying to click on element with ${locatorType}: ${locatorValue}`)
//         }
// }
    

// // in the POM file

// const SeleniumInfra = require('./SeleniumInfra');

// const seleniumInfra = new SeleniumInfra()

// class LoginPage{
//     constructor(){
//         //Get the selenium driver from SeleniumInfra class
//     }

//     async login(){
//         await seleniumInfra.clickElement();
//     }
// }

// // // in the test file
// // const LoginPage = require('./loginPage');
// // const loginPage = new LoginPage()


// // async firstTestCase(){
// //   console.log('This is my first test!!!')
// //   await loginPage.login()
// //   //More actions and validation﻿...
// //   }
  
// // firstTestCase()
    
