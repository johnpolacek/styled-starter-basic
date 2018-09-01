var assert = require("assert"),
    webdriver = require("selenium-webdriver"),
    utils = require('./utils'),
    shouldNotFindXpath = utils.shouldNotFindXpath,
    verifyXpath = utils.verifyXpath,
    clickXpath = utils.clickXpath,
    waitForPageLoad = utils.waitForPageLoad;


describe("testing styled starter project", function() {
    this.timeout(20000);

    beforeEach(function() {
        if (process.env.SAUCE_USERNAME != undefined) {
            this.driver = new webdriver.Builder()
                .usingServer('http://'+ process.env.SAUCE_USERNAME+':'+process.env.SAUCE_ACCESS_KEY+'@ondemand.saucelabs.com:80/wd/hub')
                .withCapabilities({
                    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
                    build: process.env.TRAVIS_BUILD_NUMBER,
                    username: process.env.SAUCE_USERNAME,
                    accessKey: process.env.SAUCE_ACCESS_KEY,
                    browserName: "chrome"
                }).build();
        } else {
            this.driver = new webdriver.Builder()
                .withCapabilities({
                browserName: "chrome"
            }).build();
        }
        this.driver.get("http://localhost:3000");
        return waitForPageLoad(this.driver);
    });

    afterEach(function() {
        return this.driver.quit();
    });

    it('can navigate - About Page', function() {
        return verifyTopLevelNav(this.driver, 'About');
    });
});

function verifyTopLevelNav(driver, section) {
    console.log('      - active nav is home');
    shouldNotFindXpath(driver, "//nav//p[text()='"+section+"']");
    verifyXpath(driver, "//nav//span[text()='Styled Starter']");
    
    console.log('      - click '+section+' link');
    clickXpath(driver, "//nav//a[text()='"+section+"']");
    waitForPageLoad(driver);
    
    console.log('      - active nav is '+section+'')
    verifyXpath(driver, "//nav//span[text()='"+section+"']");

    console.log('      - click home link');
    clickXpath(driver, "//nav//a[@href='/' and text()='Styled Starter']");

    console.log('      - active nav is home');
    shouldNotFindXpath(driver, "//nav//span[text()='"+section+"']");
    return verifyXpath(driver, "//nav//span[text()='Styled Starter']");
}