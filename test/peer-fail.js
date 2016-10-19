import test from 'ava'

import mockery from 'mockery'

mockery.enable({warnOnUnregistered: false})
mockery.registerSubstitute('adal-node', './test/helpers/false-export')

test('fails on bad adal-node', (t) => {
  t.throws(() => {
    // eslint-disable-next-line no-unused-vars
    const adalNullCache = require('..')
  })
  t.pass()
})
