module.exports = {
  'On page load, it sets focus on the header tag': (client) => {
    client
      .url('http://localhost:8080')
      .pause(2000)
      .waitForElementVisible('div', 2000)
      .assert.containsText('div', 'Authors Haven');
    client.end();
  }
};
