module.exports = {
    'Search for nightwatch' : browser => {
      browser
        .url('https://www.phptravels.net/register')
        .waitForElementVisible('body')
        .setValue('input[name=firstname]', 'bob')
        // i am waiting for a fake element so that the browser will  not close for demo purposes
        .getValue('input[name="firstname"]', function(result){
            console.log("the name that was entered: ", result.value)
        });
    }
  };