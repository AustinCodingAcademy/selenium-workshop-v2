module.exports = {
    'An error message appears if no password' : browser => {
      browser
        .url('http://the-internet.herokuapp.com/login')
        .waitForElementVisible('body')
    }
  };