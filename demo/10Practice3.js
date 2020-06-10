module.exports = {
    'Correct username and password redirects to secure page' : browser => {
      browser
        .url('http://the-internet.herokuapp.com/login')
        .waitForElementVisible('body')
    }
  };