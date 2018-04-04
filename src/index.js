const Alexa = require('alexa-sdk');

const handlers = require('./handlers');

const APP_ID = '';

exports.handler = function(event, context, callback) {
  const alexa = Alexa.handler(event, context, callback);
  alexa.appId = APP_ID;
  alexa.registerHandlers(...handlers);
  alexa.execute();
};
