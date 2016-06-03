import test from 'ava'

import mockery from 'mockery'

const adalNode = require('adal-node');

mockery.enable({warnOnUnregistered: false});
mockery.registerMock('adal-node', adalNode);

const adal = require('../..')

test('can call createAuthenticationContext', t => {
  var ac = adal.createAuthenticationContext('https://login.windows.net/common');
  t.pass()
})

test('can call new AuthenticationContext', t => {
  var cache = new adal.NullCache();
  var ac = new adal.AuthenticationContext('https://login.windows.net/common', true, cache);
  t.pass()
})
