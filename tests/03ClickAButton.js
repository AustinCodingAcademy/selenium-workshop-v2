module.exports = {
    'Can I click a button' : browser => {
      browser
      .url('https://www.phptravels.net/register')
      .waitForElementVisible('body')
      .click('button[type=submit]')
      // i am waiting for a fake element so that the browser will  not close for demo purposes
      .waitForElementVisible('sdfsdfdsf',99999);
    }
  };