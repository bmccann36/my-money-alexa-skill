function createIntentEvent(
  intentName,
  dialogState = "STARTED",
  slots = {},
  confirmationStatus = "NONE"
) {
  return {
    version: '1.0',
    session: {
      new: false,
      sessionId: "amzn1.echo-api.session.1131898a-776c-4d20-8cf6-8a9822940c65",
      application: {
        applicationId: 'amzn1.ask.skill.7792ee30-5ca7-4645-a77b-3ae35434dfc4'
      },
      user: {
        userId: ""
      }
    },
    request: {
      type: "IntentRequest",
      requestId: "amzn1.echo-api.request.2c992336-8604-485a-9139-638449e27f66",
      timestamp: "2018-04-04T15:08:53Z",
      locale: "en-US",
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
  session: {
    new: true,
    sessionId: "00",
    application: {
      applicationId: "test"
    },
    user: {
      userId: ""
    }
  },
  request: {
    type: "LaunchRequest",
    locale: "en-US",
    shouldLinkResultBeReturned: false
  }
};

module.exports = {
  createIntentEvent,
  launchEvent
};
