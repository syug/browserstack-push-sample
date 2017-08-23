var webdriver = require('selenium-webdriver');

// Input capabilities
var capabilities = {
  "browserstack.user": "<USERNAME>",
  "browserstack.key": "<ACCESS_KEY>",
  "browserstack.debug": true,
  'browserstack.networkLogs': true,
  'browserstack.video': true,
  'browserName': 'chrome',
  'browser_version': '60.0', // If browser_version capability is not set, the test will run on the latest version of the browser set by browser capability.
  'os': 'OS X',
  'os_version': 'Sierra',
  'chromeOptions': { 'prefs': { 'profile': { 'default_content_setting_values': { 'notifications': 1 } } }, 'args': [] }
};

var driver = new webdriver.Builder()
  .usingServer('http://hub-cloud.browserstack.com/wd/hub') // for browserstack remote test!
  // .usingServer('http://127.0.0.1:4444/wd/hub') // for browserstack remote test!
  .withCapabilities(capabilities)
  .build();

// connect to public address
driver.get('http://dev.izm.org.uk/push_notifications/');
driver.sleep(1000);
driver.findElement(webdriver.By.className('mdl-js-button')).click();
driver.sleep(30000);
driver.quit();
