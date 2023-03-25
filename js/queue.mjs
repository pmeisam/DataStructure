// FIFO: first in first out
import Node from "./node.mjs";

class Queue {
  constructor(value) {
    this.first = new Node(value);
    this.last = this.first;
    this.length = 1;
  }

  // adds an item to the end of the queue
  // O(1)
  enqueue(value) {
    let curr = new Node(value);
    this.last.next = curr;
    this.last = curr;
    this.length++;
  }

  // removes an item from beginning of the queue
  // O(1)
  dequeue() {
    this.first = this.first.next;
    this.length--;
  }

  print() {
    let curr = this.first;
    while (curr) {
      console.log(`{${curr.value} : ${curr.next ? curr.next.value : "null"}}`);
      curr = curr.next;
    }
  }
}

let queue = new Queue(10);
queue.enqueue(12);
queue.enqueue(13);
queue.enqueue(14);
queue.dequeue();
queue.dequeue();
queue.enqueue(8);
queue.enqueue(9);
queue.print();
