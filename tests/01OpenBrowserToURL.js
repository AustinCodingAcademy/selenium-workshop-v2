module.exports = {
    'Can open browser to url' : browser => {
      browser
        .url('https://www.phptravels.net/register')
        // i am waiting for a fake element so that the browser will  not close for demo purposes
        .waitForElementVisible('sdfsdfdsf',99999);;
    }
  };