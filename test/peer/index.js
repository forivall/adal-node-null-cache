// eslint-disable-next-line import/no-extraneous-dependencies
import test from 'ava'

// eslint-disable-next-line import/no-extraneous-dependencies
import mockery from 'mockery'

const adalNode = require('adal-node');

mockery.enable({warnOnUnregistered: false});
mockery.registerMock('adal-node', adalNode);

const adal = require('../..')

test('can call createAuthenticationContext', (t) => {
  const ac = adal.createAuthenticationContext('https://login.windows.net/common');
  t.pass()
})

test('can call new AuthenticationContext', (t) => {
  const cache = new adal.NullCache();
  const ac = new adal.AuthenticationContext('https://login.windows.net/common', true, cache);
  t.pass()
})
