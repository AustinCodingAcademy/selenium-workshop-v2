module.exports = {
  'Clicking the add button makes a new element appear' : browser => {
    browser
      .url('http://the-internet.herokuapp.com/add_remove_elements/')
      .waitForElementVisible('body')
      // click the button 3 times to add 3 other elements
      .click('.example button')
      .click('.example button')
      .click('.example button')
       // make sure those elements were added to the web page
      .expect.elements('.added-manually').count.to.equal(3);


  }
};