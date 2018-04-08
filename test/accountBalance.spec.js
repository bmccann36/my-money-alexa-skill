const chai = require('chai');
const expect = chai.expect;
const chalk = require('chalk');

const { handler } = require('../alexa/index');
const { IntentRequest } = require('./requestModels');
// const { createIntentEvent } = require('./events');

let res;

function magenta(str) {
  console.log(chalk.magenta(str));
}

function cb(err, resultObject) {
  if (err) res = err;
  else res = resultObject;
}

const token =
  'eyJraWQiOiJHczVQUmxMXC9odGg2TU0yT0xtdWdkZzM2REUxOXEwQlpuR0JiYWl4aGFVbz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxYmQ5ZDEwMi03OWE2LTQ3MDItOWIyNS05NzlkYjEyMjA0NDkiLCJldmVudF9pZCI6ImU3YTU2NmNmLTNhYjgtMTFlOC1hOWM4LTY1ZGRkOTJhZWIyOSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1MjMxNDI2NDcsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX3d0dHNYOVlQZyIsImV4cCI6MTUyMzE0NjI0NywiaWF0IjoxNTIzMTQyNjQ3LCJqdGkiOiI0ZWM2OTEwMy04NzFkLTRkNDItOTJmZC0xYWM0MDk0YmEwYTciLCJjbGllbnRfaWQiOiIyb2xjcHExazFnODFtZHNvZWdtMTdjb2YxMCIsInVzZXJuYW1lIjoiYnJpYW4ifQ.Ba7Yex1FM6PJ3pDGVWWsDOsoFH7_J5V-sHCWNdDSBmEAThdmCSKUYiP87m0dKKIYWqV2Iqi1zJ4zxTZPn7UMezio_3GDdd6EwxTK3sk8LBvvEuaquxEoMA538-Ly6s48_5O0tQDCTULkPeREI8X2_Ieq-aKuXBw6m4VoSHThipIcLRdF8e-fEYTwDSaf7ZEBYwNcW5brOZUJUMJjsfXGObhf7mrGlg1aFsqXfTXbcOKFe_pfvpb0zy2eR5lIylYJRsafEpuwdhySNjipmnzmqU8LVdQAgZq0QZ-V4np_u3LF9a6tna5UbdUz4Hd5Khw_PH-oZsKaA5-6HJ_Wgh865g';

describe('Account Balance Intent', () => {
  const intent = 'GetAccountBalanceIntent';
  const dialogueState = 'STARTED';
  const confirmationStatus = 'NONE';
  const slots = {
    accountType: { name: 'accountType', confirmationStatus: 'NONE' }
  };
  beforeEach(() => {
    res = null;
  });
  it.only('Asks for account type when no slot is filled', () => {
    const event = new IntentRequest(
      intent,
      confirmationStatus,
      slots,
      dialogueState,
      token
    );
    event.accounts = ['checking', 'savings'];
    handler(event, null, cb);
    // const outputSpeech = res.response.outputSpeech.ssml;
    console.log(res)
    // expect(outputSpeech).to.equal(
    //   '<speak> I see you have checking and savings accounts. Which account would you like to check? </speak>'
    // );
    // expect(res.response.shouldEndSession).to.equal(false);
  });
  it('Returns account balance for specified account', () => {
    const dialogueState = 'IN_PROGRESS';
    const slots = unfilledSlots;
    slots.accountType.value = 'savings';
    const event = createIntentEvent(intent, dialogueState, slots);
    event.accounts = ['checking', 'savings'];
    handler(event, null, cb);
    const outputSpeech = res.response.outputSpeech.ssml;
    expect(outputSpeech).to.equal(
      '<speak> You have Two Thousand Dollars in your savings account. </speak>'
    );
  });
  it('Returns account balance if user only has one account', () => {
    const dialogueState = 'STARTED';
    const slots = unfilledSlots;
    const event = createIntentEvent(intent, dialogueState, slots);
    event.accounts = ['savings'];
    handler(event, null, cb);
    const outputSpeech = res.response.outputSpeech.ssml;
    expect(outputSpeech).to.equal(
      '<speak> You have Two Thousand Dollars in your savings account. </speak>'
    );
  });
});
