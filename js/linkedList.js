class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.size = 1;
  }

  // adds a value to the tail
  // O(1)
  append(value) {
    let current = new Node(value);
    this.tail.next = current;
    this.tail = current;
    this.size++;
  }

  // prpepends a value to the linkedList
  // O(1)
  prepend(value) {
    let current = new Node(value);
    current.next = this.head;
    this.head = current;
    this.size++;
  }

  // inserts a value to desired index
  // O(n) sometimes O(1)
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index > this.size) {
      this.append(value);
      return;
    }

    let current = new Node(value);
    let head = this.traverseToIndex(index - 1);
    current.next = head.next;
    head.next = current;

    this.size++;
  }

  // O(n)
  lookup(index) {
    console.log(this.traverseToIndex(index));
  }

  // removes a value from desired index
  // O(n)
  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    if (index > this.size) {
      index = this.size - 1;
    }

    let current = this.traverseToIndex(index - 1);
    current.next = current.next.next;
    this.size--;
  }

  // prints a list of the nodes in the linked list in order from tail to head
  // O(n)
  print() {
    let current = this.head;
    let count = 0;
    while (current) {
      console.log(
        `${count}: { ${current.value} : ${
          current.next ? current.next.value : "null"
        }}`
      );
      current = current.next;
      count++;
    }
  }

  /* Helper Methods */
  traverseToIndex(index) {
    let count = 0;
    let current = this.head;

    if (index === 0) return current;
    if (index > this.size) return null;

    while (count < index) {
      current = current.next;
      count++;
    }

    return current;
  }
}

let linkedList = new LinkedList(10);
linkedList.append(12);
linkedList.append(18);

linkedList.prepend(7);
linkedList.prepend(5);
linkedList.prepend(4);

linkedList.insert(4, "meisam");
linkedList.insert(0, "testing");
linkedList.insert(10, "1");

linkedList.remove(3);
linkedList.remove(0);
linkedList.remove(100);

linkedList.append(1);

linkedList.print();
console.log("size:", linkedList.size);

linkedList.lookup(4);
