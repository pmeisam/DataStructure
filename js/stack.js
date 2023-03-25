// LIFO: last in first out
class Stack {
  constructor() {
    this.data = [];
  }

  // adds an item to the top of the stack
  // O(1)
  push(value) {
    this.data.push(value);
  }

  // removes an item from the top of the stack
  // O(1)
  pop() {
    this.data.pop();
  }

  // prints top and bottom
  peek() {
    console.log(
      `{\n\tbottom: ${this.data[0]}, \n\ttop: ${
        this.data[this.data.length - 1]
      }\n}`
    );
  }

  print() {
    console.log(this.data);
  }
}

let stack = new Stack();
stack.push(12);
stack.push(13);
stack.push(14);
stack.push(15);

stack.pop();

stack.print();
stack.peek();
