/**
 * sample.spec.js
 */

var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');

// set chromedriver path
var path = 'node_modules/chromedriver/bin/chromedriver';
chrome.setDefaultService(new chrome.ServiceBuilder(path).build());

// Input capabilities
var capabilities = {
  // Auth info
  'browserstack.user': 'PLEASE_ENTER_BROWSERSTACK_USER',
  'browserstack.key': 'PLEASE_ENTER_BROWSERSTACK_KEY',
  // Browser settings
  'browserName': 'chrome',
  'browser_version': '60.0', // If browser_version capability is not set, the test will run on the latest version of the browser set by browser capability.
  'os': 'OS X',
  'os_version': 'Sierra',
  'resolution': '1024x768'
}
var chromeOptions = new chrome.Options();
// set content setting value
//  https://stackoverflow.com/questions/38003756/deactivate-browser-notifications-in-chrome-driver-for-selenium
//  chrome://settings/content?search=notification
chromeOptions.setUserPreferences({
  'profile.default_content_setting_values.notifications': 1
});

var driver = new webdriver.Builder()
  // .usingServer('http://hub-cloud.browserstack.com/wd/hub') // with browserstack remote test!
  .forBrowser('chrome')
  .setChromeOptions(chromeOptions)
  .withCapabilities(capabilities)
  .build();

// connect to public address
driver.get('http://dev.izm.org.uk/push_notifications/');
driver.sleep(1000);
driver.findElement(webdriver.By.className('mdl-js-button')).click();
driver.sleep(3000);

driver.quit();