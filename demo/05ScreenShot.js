module.exports = {
    'Can I enter a value into a textbox' : browser => {
      browser
        .url('https://www.phptravels.net/register')
        .waitForElementVisible('body')
        .setValue('input[name=firstname]', 'test1')
        .setValue('input[name=lastname]', 'test2')
        .setValue('input[name=phone]', '5555555')
        .saveScreenshot('tests_output/signup.png');
    }
  };