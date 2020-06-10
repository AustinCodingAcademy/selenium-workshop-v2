module.exports = {
    'Pick an option in a select element' : browser => {
      browser
        .url('https://austincodingacademy.com/tutors')
        .waitForElementVisible('body')
        .click('select')
        .click('option[value="austinDowntown"]')
        .waitForElementVisible('sdfsdfdsf',99999);
    }
  };