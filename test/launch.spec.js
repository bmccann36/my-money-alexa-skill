const chai = require('chai');
const expect = chai.expect;

const { handler } = require('../alexa/index');
const { Request } = require('./requestModels');

let res;
// callback to pass to main handler to get result
function cb(err, resultObject) {
  if (err) res = err;
  else res = resultObject;
}

describe('LaunchRequest Intent', () => {
  it('calls the launch handler and returns the correct directive', () => {
    const context = { hello: 'world' };
    const launchEvent = new Request('LaunchRequest');
    handler(launchEvent, context, cb);
    const outputSpeech = res.response.outputSpeech.ssml;
    expect(outputSpeech).to.equal(
      '<speak> Welcome to my money. You can do things like check your balance, ask about budgets, and pay bills. </speak>'
    );
  });
});
