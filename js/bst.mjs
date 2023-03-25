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

    let curr = this.root;

    while (curr) {
        if (value < curr.value) { // Left
            if (!curr.left) {
                curr.left = node;
                return this;
            }
            curr = curr.left;
        } else { // Right
            if (!curr.right) {
                curr.right = node;
                return this;
            }
            curr = curr.right;
        }
    }
  }


  lookup(value) {
    let root = this.root;
    while (root) {
        if (root.value === value) {
            return root;
        } if (value < root.value) {
            root = root.left;
        } else {
            root = root.right;
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

bst.insert(20);
bst.insert(4);
bst.insert(1);
bst.insert(6);
bst.insert(15);
bst.insert(170);
bst.insert(160);
bst.insert(165);
bst.insert(150);
bst.insert(175);
bst.insert(172);
bst.insert(180);

bst.print();

console.log(JSON.stringify(traverse(bst.root)));
bst.remove(9);
console.log(JSON.stringify(traverse(bst.root)));

console.log(bst.lookup(175));
console.log(bst.lookup(19));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
