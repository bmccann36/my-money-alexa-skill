const API = require('config').get('apiEndpoint');
const axios = require('axios');
const decode = require('jwt-decode');

function fetchAccountInfo(authToken) {
  const { username } = decode(authToken);
  const reqConfig = {
    headers: { Authorization: authToken }
  };

  return axios
    .get(`${API}/v1/users?userID=${username}`, reqConfig)
    .then(res => res.data)
    .catch(err => console.info(err));
}

module.exports = {
  fetchAccountInfo
};
