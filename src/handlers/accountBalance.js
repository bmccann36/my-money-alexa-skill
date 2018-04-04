const accounts = ['checking', 'savings'];

function makeAccountsString(accounts) {
  return accounts.reduce((prev, curr, idx) => {
    if (idx < accounts.length - 1) {
      return prev + ' , ' + curr;
    }
    return prev + ' and ' + curr;
  });
}

const getAccountBalanceHandlers = {
  GetAccountBalanceIntent: function() {
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
      }
    } else {
      // did enter an account type, slot is filled
    }
  },
  returnAccountBalance: function() {
    return 'account balance';
  }
};

module.exports = getAccountBalanceHandlers;
