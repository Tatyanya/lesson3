'use strict';

const HomePage = require('./pages/HomePage');
const LocationsPage = require('./pages/LocationsPage');

class World {
	constructor (){
        this.HomePage = new HomePage();
        this.LocationsPage = new LocationsPage();

		this.HomeUrl = `^${browser.baseUrl}$`;
	}
}

module.exports = new World();