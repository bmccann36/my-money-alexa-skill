const Alexa = require('alexa-sdk');

const handlers = require('./handlers/index');

const APP_ID = '';

exports.handler = function(event, context, callback) {
  const alexa = Alexa.handler(event, context, callback);
  alexa.appId = APP_ID; // APP_ID is your skill id which can be found in the Amazon developer console where you create the skill.
  alexa.registerHandlers(handlers);
  alexa.execute();
};
