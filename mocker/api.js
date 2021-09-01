const login = require('./login');
const home = require('./home');
const delay = require('mocker-api/lib/delay');

const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
  ...login,
  ...home,
};
module.exports = noProxy ? {} : delay(proxy, 1500);
