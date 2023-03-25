class Array {
  constructor() {
    this.array = {};
    this.length = 0;
  }

  // adds an item to the end of the array
  // time complexity: O(1)
  push(item) {
    this.array[this.length] = item;
    this.length++;
  }

  // removes the item from the last index of the array
  // time complexity: O(1)
  pop() {
    delete this.array[this.length - 1];
    this.length--;
  }

  // adds an item to index 0 and moves everything one index up
  // time complexity: O(n)
  unshift(item) {
    for (let i = this.length; i >= 0; i--) {
      this.array[i] = this.array[i - 1];
    }
    this.array[0] = item;
    this.length++;
  }

  // removes index 0 of the array and moves everything one index down
  // time complexity: O(n)
  shift() {
    for (let i = 1; i < this.length; i++) {
      this.array[i - 1] = this.array[i];
    }
    delete this.array[this.length - 1];
    this.length--;
  }

  // time complexity: O(1)
  lookup(index) {
    console.log(this.array[index]);
  }

  print() {
    console.log(this.array);
  }

  size() {
    console.log(this.length);
  }
}

let arr = new Array();
arr.push(5);
arr.push(7);
arr.push("Meisam");
arr.push(8);
arr.push(92);
arr.print();

arr.pop();
arr.print();

arr.unshift("test");
arr.print();

arr.shift();
arr.print();

arr.lookup(2);
arr.size();
