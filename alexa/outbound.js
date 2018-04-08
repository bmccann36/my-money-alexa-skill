// const API = require('config').get('apiEndpoint');
const API = 'none';
const axios = require('axios');
const decode = require('jwt-decode');

const chalk = require('chalk');

function fetchAccountInfo(authToken) {
  let decoded;
  try {
    decoded = decode(authToken);
  } catch (err) {
    console.error(chalk.red('token decode failure'));
    return err;
  }
  const reqConfig = {
    headers: { Authorization: authToken }
  };

  return axios
    .get(`${API}/v1/users?userID=${decoded.username}`, reqConfig)
    .then(res => res.data)
    .catch(err => {
      console.log('error fetching user');
      return err;
    });
}

module.exports = {
  fetchAccountInfo
};
