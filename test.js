var test = require('tape')
var FIFO = require('./')

test('basic ops', function(t){
  var fifo = new FIFO()
  t.equal(fifo.isEmpty(), true);

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

test('toArray', function(t) {
  var fifo = new FIFO()

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