var test = require('tape')
var FIFO = require('./')

test('basic ops', function (t) {
  var fifo = FIFO()
  t.equal(fifo.isEmpty(), true)

  fifo.push('foo')
  t.equal(fifo.length, 1)
  t.equal(fifo.first(), 'foo')
  t.equal(fifo.last(), 'foo')

  fifo.push('bar')
  t.equal(fifo.length, 2)
  t.equal(fifo.first(), 'foo')
  t.equal(fifo.last(), 'bar')

  var foo = fifo.shift()
  t.equal(fifo.length, 1)
  t.equal(foo, 'foo')
  t.equal(fifo.first(), 'bar')

  var bar = fifo.pop()
  t.equal(fifo.length, 0)
  t.equal(bar, 'bar')
  t.equal(fifo.pop(), null)
  t.equal(fifo.shift(), null)
  t.equal(fifo.first(), null)
  t.equal(fifo.last(), null)

  fifo.push('foo')
  fifo.push('bar')
  fifo.push('foo1')
  t.equal(fifo.isEmpty(), false)
  fifo.removeAll()
  t.equal(fifo.length, 0)
  t.equal(fifo.first(), null)
  t.equal(fifo.last(), null)

  t.end()
})

test('toArray', function (t) {
  var fifo = FIFO()

  fifo.push('foo')
  fifo.push('bar')
  fifo.push('baz')

  var list = fifo.toArray()

  t.equal(list.length, 3)
  t.equal(list[0], 'foo')
  t.equal(list[1], 'bar')
  t.equal(list[2], 'baz')
  t.end()
})

test('iteration', function (t) {
  var fifo = FIFO()

  fifo.push('foo')
  fifo.push('bar')
  fifo.push('baz')

  var expected = fifo.toArray()

  for (var node = fifo.node; node; node = fifo.next(node)) {
    t.same(node.value, expected.shift())
  }

  t.end()
})

test('bump', function (t) {
  var fifo = FIFO()

  var node = fifo.push('foo')
  fifo.push('bar')
  fifo.push('baz')
  fifo.bump(node)

  t.same(fifo.length, 3)
  t.same(fifo.toArray(), ['bar', 'baz', 'foo'])
  t.end()
})

test('bump twice', function (t) {
  var fifo = FIFO()

  var node = fifo.push('bar')
  fifo.push('baz')
  fifo.bump(node)
  fifo.bump(node)

  t.same(fifo.length, 2)
  t.same(fifo.toArray(), ['baz', 'bar'])
  t.end()
})
