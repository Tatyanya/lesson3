const world = require('../../po/world');
const EC = protractor.ExpectedConditions;
const CUSTOM_TIMEOUT = 15 * 1000;

describe("HOME PAGE", () => {

    beforeEach(async () => {
        await browser.manage().deleteAllCookies();
        await browser.get(browser.baseUrl);
    });
    //
    // describe("PAGE TITLE AND URL VERIFICATION", () => {
    //     it(`verify that Home Page url is equal to the ${browser.baseUrl}`, async () => {
    //         const url = await browser.getCurrentUrl();
    //
    //         return expect(url).toEqual(browser.baseUrl);
    //     });
    //
    //     it(`verify that Home Page title is equal to the 'Exadel | Global Enterprise Software & Tech Solutions'`, async () => {
    //         const pageTitle = await browser.getTitle();
    //
    //         return expect(pageTitle).toEqual('Exadel | Global Enterprise Software & Tech Solutions');
    //     });
    // });
    //
    // describe("Call Us number is valid", () => {
    //     it(`Call Us number is visible`, async () => {
    //         const visibility = await browser.wait(EC.visibilityOf(world.HomePage.Header.CallUsNumber), 5000);
    //
    //         return expect(visibility).toBe(true);
    //     });
    //     it(`Call Us number is equal +1 866 843 7411`, async () => {
    //         const elementNumber = await world.HomePage.Header.CallUsNumber.getText();
    //
    //         return expect(elementNumber).toContain("+1 866");;
    //     });
    // });

    describe("Check News List items", () => {
        it(`News items check visibility`, async () => {
             await browser.actions().mouseMove(world.HomePage.Header.NewsButton).perform();

            const newsdd = await browser.wait(EC.visibilityOf(world.HomePage.Header.NewsDropdown), 5000);
            return expect(newsdd).toBe(true);

        });

//         it(`News items content check`, async () => {
//             var ch = [];
//
//            const listItems = world.HomePage.Header.NewsDropdownItems;
//             console.log(listItems.length);
//
//                 for(i = 0; i < listItems.length; i++){
//                    ch.push(listItems[i].innerText);
//                 }
//
//
//             var arr1 = ["Breaking News","Events", "Blog"];
// console.log(ch);
//             return expect(ch).toBe(arr1);
//         });

    });

    });
