const world = require('../../po/world');
const EC = protractor.ExpectedConditions;
const CUSTOM_TIMEOUT = 15 * 1000;

describe("LOCATION PAGE", () => {

    beforeEach(async () => {
        await browser.manage().deleteAllCookies();
        await browser.get(browser.baseUrl);
    });


    describe("GO TO ANOTHER PAGE ", () => {
        it(`Check title after click to About>Locations`, async () => {
            await browser.actions().mouseMove(world.HomePage.Header.AboutButton).perform();
            await world.HomePage.Header.LocationsButton.click();

            return expect(browser.getTitle()).toEqual("Locations | About | Exadel");

        });
        it(`Locations check Minsk`, async () => {
            await browser.actions().mouseMove(world.HomePage.Header.AboutButton).perform();
            await world.HomePage.Header.LocationsButton.click();

            const cityName = await world.LocationsPage.MinskCityName.getText();

            // const visibility = await browser.wait(EC.visibilityOf(world.LocationsPage.MinskCityName), 5000);
             //   return expect(visibility).toBe(true);

           return expect(cityName).toEqual("MINSK");

        });

    });

    });
