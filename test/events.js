function createIntentEvent(intentName, dialogState = 'STARTED', slots = {}, confirmationStatus = 'NONE') {
  return {
    version: '1.0',
    session: {
      new: false,
      sessionId: 'amzn1.echo-api.session.1131898a-776c-4d20-8cf6-8a9822940c65',
      application: {
        applicationId: 'amzn1.ask.skill.7792ee30-5ca7-4645-a77b-3ae35434dfc4'
      },
      user: {
        userId:
          ''
      }
    },
    request: {
      type: 'IntentRequest',
      requestId: 'amzn1.echo-api.request.2c992336-8604-485a-9139-638449e27f66',
      timestamp: '2018-04-04T15:08:53Z',
      locale: 'en-US',
      intent: {
        name: intentName,
        confirmationStatus: confirmationStatus,
        slots: slots
      },
      dialogState: dialogState
    }
  };
}

const launchEvent = {
  version: '1.0',
  session: {
    new: true,
    sessionId: 'amzn1.echo-api.session.037941f1-7ddc-46f5-864d-76757f3cd619',
    application: {
      applicationId: 'amzn1.ask.skill.7792ee30-5ca7-4645-a77b-3ae35434dfc4'
    },
    user: {
      userId:
        ''
    }
  },
  request: {
    type: 'LaunchRequest',
    requestId: 'amzn1.echo-api.request.eb4d064d-e392-4a16-82e0-215fc4f45e6d',
    timestamp: '2018-04-04T14:26:11Z',
    locale: 'en-US',
    shouldLinkResultBeReturned: false
  }
};

module.exports = {
  createIntentEvent,
  launchEvent
};
