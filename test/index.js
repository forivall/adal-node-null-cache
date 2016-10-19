
// TODO: mock MCS environment so that we can properly run unit tests

import test from 'ava'
import index from '..'

const {NullCache} = index

test.cb('it caches nothing', (t) => {
  const cache = new NullCache()
  cache.add({foo: 'bar'}, (err, ok) => {
    t.ifError(err)
    t.true(ok === undefined || ok)
    cache.find({foo: 'bar'}, (err, match) => {
      t.ifError(err)
      t.deepEqual(match, [])
      t.end()
    })
  })
  t.pass()
})

test.cb('remove does nothing', (t) => {
  const cache = new NullCache()
  cache.remove({foo: 'bar'}, (err) => {
    t.ifError(err)
    t.pass()
    t.end()
  })
})
