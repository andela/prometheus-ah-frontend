module.exports = {
  SIGNUP: (client) => {
    client
      .url('http://localhost:8080')
      .pause(2000)
      .waitForElementVisible('div', 2000)
      .click('#signup')
      .pause(2000)
      .assert.visible('#myusername')
      .setValue('#myusername', 'ugochukwu15')
      .assert.visible('#myemail')
      .setValue('#myemail', 'mohamed.ezeh@yahoo.com')
      .assert.visible('#mypassword')
      .setValue('#mypassword', 'password')
      .assert.visible('#mypassword_confirmation')
      .setValue('#mypassword_confirmation', 'password')
      .assert.visible('#register')
      .click('#register')
      .pause(9000);
    client.end();
  }
};
