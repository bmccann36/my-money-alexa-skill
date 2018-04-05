const launchRequestHandler = {
  LaunchRequest: function() {
    console.log(this);
    const speechOutput =
      'Welcome to my money. You can do things like check your balance, ask about budgets, and pay bills.';
    const repromptSpeech =
      'Sorry. I didnt get that. You can say things like, how much money is in my account';
    this.response.speak(speechOutput).listen(repromptSpeech);
    this.emit(':responseReady');
  }
};

module.exports = launchRequestHandler;
