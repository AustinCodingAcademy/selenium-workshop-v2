module.exports = {
    'An error message appears if no username' : browser => {
      browser
        .url('http://the-internet.herokuapp.com/login')
        .waitForElementVisible('body')
        // this submits the web page form
        .click('button[type=submit]')
        // this waits for the page to be reloaded
        .waitForElementVisible('body', 10000)
        // we didn't put a username in so there should be an error message
        .assert.visible('.flash.error')
        .assert.containsText('.flash.error', 'Your username is invalid')
        .end();
    }
  };