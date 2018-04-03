const accounts = ['checking', 'savings'];

function makeAccountsString(accounts) {
  return accounts.reduce((prev, curr, idx) => {
    if (idx < accounts.length - 1) {
      return prev + ' , ' + curr;
    }
    return prev + ' and ' + curr;
  });
}

module.exports = function () {
  const intentObj = this.event.request.intent;
  let speechOutput;
  if (!intentObj.slots.accountType.value && accounts.length > 1) {
    const slotToElicit = 'accountType';
    const usersAccounts = makeAccountsString(accounts);
    speechOutput = `I see you have ${usersAccounts} accounts. Which account would you like to check?`;
    const repromptSpeech = `Sorry I didnt understand that, you can say ${usersAccounts}`;
    this.emit(':elicitSlot', slotToElicit, speechOutput, repromptSpeech);
  }
};
