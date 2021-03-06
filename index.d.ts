export = FIFO

declare class Node<T = any> {
  next: Node<T>
  prev: Node<T>
  list: FIFO<T>
  value: T
  constructor(list: FIFO<T>, val: T)
  link(next: Node<T>): Node<T>
}

/** Create a new instance */
declare function FIFO<T = any>(): FIFO<T>

declare class FIFO<T = any> {
  /** Contains the first node on the list */
  node: null|Node<T>

  /** Number of nodes in the list */
  length: number

  /** Sets the value of a node */
  set(node: null|Node<T>, value: T): null|Node<T>

  /**
   * Returns the next node relative to the node you pass. If the node was the
   * last node in the list `null` is returned
   */
  next(node?: null|Node<T>): null|Node<T>

  /**
   * Returns the previous node relative to the node you pass. If the node was
   * the first node in the list null is returned
   */
  prev(node?: null|Node<T>): null|Node<T>

  /** Returns the value of the node */
  get(node?: null|Node<T>): null|T

  /** Removes the node and returns the value */
  remove(node?: null|Node<T>): null|T

  /** Inserts a value at the beginning of the list */
  unshift(value: T): Node<T>

  /**
   * Push a new value to the end of the list. Returns a node that contains this
   * value. The value can be accessed by accessing `node.value`
   */
  push(value: T): Node<T>

  /** Moves a node to the end of the list */
  bump(node: Node<T>): boolean

  /** Readds a node. Should only be done with a node that has been removed */
  add(node: Node<T>): Node<T>

  /** Peek at the first value */
  first(): null|T

  /** Peek at the last value */
  last(): null|T

  /** Removes the first node and returns the value */
  shift(): null|Node<T>

  /** Removes the last node and returns the value */
  pop(): null|Node<T>

  /** Returns whether the list is empty */
  isEmpty(): boolean

  /** Alias for `clear` */
  removeAll: () => void

  /** Clears the list */
  clear(): void

  /**
   * Iterate over all values in the list. Calls the function with `value, node`
   */
  forEach(fn: (value: T, node: Node<T>) => void): void

  /** Converts the list to an array and returns it */
  toArray(): T[]
}
