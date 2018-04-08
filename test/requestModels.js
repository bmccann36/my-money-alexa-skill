class Request {
  constructor(requestType, isNewSession = true, accessToken = 'none') {
    this.session = {
      new: isNewSession,
      sessionId: '00',
      application: { applicationId: 'TEST' },
      user: { userId: '00', accessToken: accessToken }
    };
    this.request = {
      type: requestType,
      locale: 'en-US',
      shouldLinkResultBeReturned: false
    };
  }
}

class IntentRequest extends Request {
  constructor(
    intentName,
    confirmationStatus,
    slots,
    dialogState,
    accessToken = 'none'
  ) {
    super('IntentRequest', false, accessToken);
    this.request.intent = {
      name: intentName,
      confirmationStatus: confirmationStatus,
      slots: slots
    };
    this.dialogState = dialogState;
  }
}

module.exports = { Request, IntentRequest };
