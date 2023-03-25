import Node from "./BSTNode.mjs";

class BinarySearchTree {
  constructor() {
    this.root = null;
  }


  insert(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;

    while (current) {
      if (current.value <= value) {
        // Right
        if (current.right === null) {
          current.right = node;
          return this;
        }
        current = current.right;
      } else {
        // Left
        if (current.left === null) {
          current.left = node;
          return this;
        }
        current = current.left;
      }
    }
  }


  lookup(value) {
    if (!this.root) return false;

    let current = this.root;
    while (current) {
      if (current.value === value) {
        return current;
      }
      if (current.value < value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return false;
  }


  remove(value) {
    if (!this.root) return false;

    let current = this.root;
    let prev = this.root;

    while (current) {
      if (current.value === value) {
        console.log("value found");

        if (!current.right && !current.left) {
          console.log("the node doesn't have any left or right, just delete ");

          return true;
        }

        if (current.right) {
          let curr = current.right;
          while (curr.left) {
            curr = curr.left;
          }
          console.log("the curr is : " + curr.value);
          current.value = curr.value;
          curr = null;

          return true;
        } else {
          let curr = current.left;
          while (curr.left) {
            curr = curr.left;
          }
          console.log("the curr is : " + curr.value);
          current.value = curr.value;
          curr = null;
          return true;
        }
      }

      if (current.value < value) {
        current = current.right;
        prev = current;
      } else {
        current = current.left;
        prev = current;
      }
    }

    console.log("No value found!");
    return false;
  }


  print() {
    console.log(this.root);
  }
}

let bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);

bst.print();

