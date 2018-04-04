function createIntentEvent(intent) {
  return {
    session: {
      sessionId: 'SessionId.154291c5-a13f-4e7a-ab5a-707ca12501a8',
      application: {
        applicationId: 'amzn1.echo-sdk-ams.app.APP_ID'
      },
      attributes: {},
      user: {
        userId: null
      },
      new: true
    },
    request: {
      type: 'IntentRequest',
      requestId: 'EdwRequestId.474c15c8-14d2-4a77-a4ce-11728a114af7',
      timestamp: '2016-07-05T22:02:01Z',
      intent: {
        name: intent,
        slots: {
          Language: {
            name: 'Language',
            value: 'ionic'
          }
        }
      },
      locale: 'en-US'
    },
    version: '1.0'
  };
}

module.exports = {
  createIntentEvent,
  accountBalanceEventOneAccount: {
    accounts: ['savings'],
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
        name: 'GetAccountBalanceIntent',
        confirmationStatus: 'NONE',
        slots: {
          accountType: {
            name: 'accountType',
            confirmationStatus: 'NONE'
          }
        }
      },
      dialogState: 'STARTED'
    }
  },
  accountBalanceWithSlotsEvent: {
    accounts: ['checking', 'savings'],
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
      requestId: 'amzn1.echo-api.request.ca639762-583f-4866-b2dc-3baf20aa1738',
      timestamp: '2018-04-04T15:25:19Z',
      locale: 'en-US',
      intent: {
        name: 'GetAccountBalanceIntent',
        confirmationStatus: 'NONE',
        slots: {
          accountType: {
            name: 'accountType',
            value: 'savings',
            resolutions: {
              resolutionsPerAuthority: [
                {
                  authority:
                    '',
                  status: {
                    code: 'ER_SUCCESS_MATCH'
                  },
                  values: [
                    {
                      value: {
                        name: 'savings',
                        id: '4bfddaa41fee050e0c15efa9a5cb4c65'
                      }
                    }
                  ]
                }
              ]
            },
            confirmationStatus: 'NONE'
          }
        }
      },
      dialogState: 'IN_PROGRESS'
    }
  },
  accountBalanceEvent: {
    accounts: ['checking', 'savings'],
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
        name: 'GetAccountBalanceIntent',
        confirmationStatus: 'NONE',
        slots: {
          accountType: {
            name: 'accountType',
            confirmationStatus: 'NONE'
          }
        }
      },
      dialogState: 'STARTED'
    }
  },
  launchEvent: {
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
  }
};
