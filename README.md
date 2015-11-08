# fifo

FIFO queue implemented using a double linked-list

```
npm install fifo
```

[![build status](http://img.shields.io/travis/mafintosh/fifo.svg?style=flat)](http://travis-ci.org/mafintosh/fifo)

## Usage

``` js
var fifo = require('fifo')()

fifo.push('hello')
fifo.push('world')

console.log(fifo.first()) // prints hello
console.log(fifo.last())  // prints world

console.log(fifo.shift()) // prints hello
console.log(fifo.shift()) // prints world

var node = fifo.push('meh')

fifo.remove(node)     // remove 'meh' from the stack
fifo.unshift('hello') // insert at the beginning
```

`fifo` uses a linked list behind the scene so all list manipulation methods run in O(1)

## API

#### `fifo = FIFO()`

Create a new instance

#### `fifo.node`

Contains the first node on the list.

#### `fifo.length`

Number of nodes in the list.

#### `node = fifo.push(value)`

Push a new value to the end of the list. Returns a node that contains this value.
The value can be accessed by accessing `node.value`.

#### `value = fifo.shift()`

Removes the first node and returns the value

#### `value = fifo.pop()`

Removes the last node and returns the value

#### `value = fifo.remove(node)`

Removes the node and returns the value

#### `fifo.add(node)`

Readds a node. Should only be done with a node that has been removed.

#### `value = fifo.first()`

Peek at the first value

#### `value = fifo.last()`

Peek at the last value

#### `node = fifo.unshift(value)`

Inserts a value at the beginning of the list

#### `node = fifo.next(node)`

Returns the next node relative to the node you pass.
If the node was the last node in the list `null` is returned.

#### `node = fifo.prev(node)`

Returns the previous node relative to the node you pass.
If the node was the first node in the list `null` is returned.

#### `fifo.bump(node)`

Moves a node to the end of the list

#### `fifo.clear()`

Clears the list.

#### `fifo.forEach(fn)`

Iterate over all values in the list. Calls the function with `value, node`.

## Iteration

To iterate the list simply use the following for loop

``` js
for (var node = fifo.node; node; node = fifo.next(node)) {
  console.log('value is', node.value)
}
```

Optionally you can call `fifo.forEach(fn)` which does the above internally.

## License

MIT
