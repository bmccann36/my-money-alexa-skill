const balances = {
  savings: 'Two Thousand Dollars',
  checking: 'Five Hundred Dollars'
};

function makeAccountsString(accountsArr) {
  return accountsArr.reduce((prev, curr, idx) => {
    if (idx < accountsArr.length - 1) {
      return prev + ' , ' + curr;
    }
    return prev + ' and ' + curr;
  });
}

const getAccountBalanceHandlers = {
  GetAccountBalanceIntent: function() {
    const accounts = this.event.accounts;
    const intentObj = this.event.request.intent;
    let speechOutput;
    const accountType = intentObj.slots.accountType.value;
    if (!accountType) {
      // didn't specify an account to check
      if (accounts.length > 1) {
        // has multiple accounts
        const slotToElicit = 'accountType';
        const usersAccounts = makeAccountsString(accounts);
        speechOutput = `I see you have ${usersAccounts} accounts. Which account would you like to check?`;
        const repromptSpeech = `Sorry I didnt understand that, you can say ${usersAccounts}`;
        this.emit(':elicitSlot', slotToElicit, speechOutput, repromptSpeech);
      } else {
        // only has one account
        this.emit('returnAccountBalance', accounts[0]);
      }
    } else {
      // did enter an account type, slot is filled
      this.emit('returnAccountBalance', accountType);
    }
  },
  returnAccountBalance: function(accountType) {
    const balance = balances[accountType];
    const speechOutput = `You have ${balance} in your ${accountType} account.`;
    const repromptSpeech = 'Sorry I didnt understand that';
    this.response.speak(speechOutput).listen(repromptSpeech);
    this.emit(':responseReady');
  }
};

module.exports = getAccountBalanceHandlers;
