const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.app.amachains.io/',
});

const useAuth = (authorization) => ({
  headers: {
    Authorization: authorization,
  },
});

module.exports = {
  useAuth,
  api,
};
