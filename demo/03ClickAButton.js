module.exports = {
    'Can I click a button' : browser => {
      browser
      .url('http://the-internet.herokuapp.com/add_remove_elements/')
      .waitForElementVisible('body')
      // click the button 3 times to add 3 other elements
      .click('.example button')
      .click('.example button')
      .click('.example button')
      // i am waiting for a fake element so that the browser will  not close for demo purposes
      .waitForElementVisible('sdfsdfdsf',99999);
    }
  };