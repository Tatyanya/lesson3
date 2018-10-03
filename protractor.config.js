'use strict';
const path = require("path");
const yargs = require("yargs").argv;
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    baseUrl: 'https://exadel.com/',
    capabilities: {
        browserName: 'chrome',
        // shardTestFiles: true,
        // maxInstances: 2,
        shardTestFiles: false,
        maxInstances: 1,
        // version: "66.0.3359.139"
    },
    // multiCapabilities: [{
    //     browserName: 'chrome',
    //     version: "66.0.3359.139",
    //
    // }, {
    //     browserName: 'firefox'
    // }],

    specs: [
        `jasmine_e2e/${yargs.spec || "*/*.js"}`
    ],
    // restartBrowserBetweenTests: true,
    onPrepare: function () {
        browser.waitForAngularEnabled(false); 
        console.log("Hello from onPrepare()!");
            jasmine.getEnv().addReporter(
                new Jasmine2HtmlReporter({
                    savePath: './test/reports/',
                    takeScreenshots: false

                })
            );

    },
    beforeLaunch: function () {
        console.log("Hello from beforeLaunch()!");
    },
    onComplete: function () {
        console.log("Hello from onComplete()!");
    },
    allScriptsTimeout: 200000,
    getPageTimeout: 100000,
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
};
