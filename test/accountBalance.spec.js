const chai = require('chai');
const expect = chai.expect;
const chalk = require('chalk');

const { handler } = require('../src/index');
const { createIntentEvent } = require('./events');

let res;

function magenta(str) {
  console.log(chalk.magenta(str));
}

function cb(err, resultObject) {
  if (err) res = err;
  else res = resultObject;
}

describe('Account Balance Intent', () => {
  const unfilledSlots = {
    accountType: { name: 'accountType', confirmationStatus: 'NONE' }
  };
  const intent = 'GetAccountBalanceIntent';

  beforeEach(() => {
    res = null;
  });
  it('Asks for account type when no slot is filled', () => {
    const dialogState = 'STARTED';
    const slots = unfilledSlots;
    const event = createIntentEvent(intent, dialogState, slots);
    event.accounts = ['checking', 'savings'];
    handler(event, null, cb);
    const outputSpeech = res.response.outputSpeech.ssml;
    expect(outputSpeech).to.equal(
      '<speak> I see you have checking and savings accounts. Which account would you like to check? </speak>'
    );
    expect(res.response.shouldEndSession).to.equal(false);
  });
  it('Returns account balance for specified account', () => {
    const dialogState = 'IN_PROGRESS';
    const slots = unfilledSlots;
    slots.accountType.value = 'savings';
    const event = createIntentEvent(intent, dialogState, slots);
    event.accounts = ['checking', 'savings'];
    handler(event, null, cb);
    const outputSpeech = res.response.outputSpeech.ssml;
    expect(outputSpeech).to.equal(
      '<speak> You have Two Thousand Dollars in your savings account. </speak>'
    );
  });
  it('Returns account balance if user only has one account', () => {
    const dialogState = 'STARTED';
    const slots = unfilledSlots;
    const event = createIntentEvent(intent, dialogState, slots);
    event.accounts = ['savings'];
    handler(event, null, cb);
    const outputSpeech = res.response.outputSpeech.ssml;
    expect(outputSpeech).to.equal(
      '<speak> You have Two Thousand Dollars in your savings account. </speak>'
    );
  });
});
