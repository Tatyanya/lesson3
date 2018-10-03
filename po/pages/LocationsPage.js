'use strict';

const BasePage = require("./BasePage");

class LocationsPage extends BasePage{
    constructor (){
        super();

        // this.LocationsBlocks = element(by.css(".location-blocks"));
        this.MinskCityBlock = element(by.css(".location-blocks .c"));
        // this.MinskCityName = this.MinskCityBlock.$(".et_pb_text_12 p");

        this.MinskCityName = element(by.css(".location-blocks .et_pb_text_12 p"));

        };
}

module.exports = LocationsPage;