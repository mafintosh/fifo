# fifo

javascript fifo queue implemented using a linked-list

	npm install fifo

# Usage is simple

	var fifo = require('fifo');

	fifo.push('hello');
	fifo.push('world');

	console.log(fifo.shift()); // prints hello
	console.log(fifo.shift()); // prints world

	var node = fifo.push('meh');

	fifo.remove(node); // remove 'meh' from the stack

`fifo` uses a linked list behind the scene so `push`, `shift` and `remove` all run in O(1)

# License

MIT