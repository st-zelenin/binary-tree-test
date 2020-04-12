class BinaryTree {
  constructor() {
    this.root = null;
  }

  toArray() {
    const result = [];
    this.traverse(this.root, result);

    return result;
  }

  traverse(node, arr) {
    if (node !== null) {
      this.traverse(node.left, arr);

      arr.push(node.data);

      this.traverse(node.right, arr);
    }
  }

  add(data, left = null, right = null) {
    let newNode = {
      data,
      left,
      right
    };

    let currentNode;
    let isAdded = true;

    if (!this.root) {
      this.root = newNode;
    } else {
      currentNode = this.root;
      while (currentNode) {
        // unig check
        if (currentNode.data === data) {
          isAdded = false;
          break;
        }

        if (data < currentNode.data) {

          if (!currentNode.left) {
            currentNode.left = newNode;
            break;
          } else {

            currentNode = currentNode.left;
          }

        } else if (data > currentNode.data) {

          if (!currentNode.right) {
            currentNode.right = newNode;
            break;
          } else {
            currentNode = currentNode.right;
          }
        } else {
          throw new Error(`unexpected value ${data}`);
        }
      }
    }

    if (isAdded) {
      this.count++;
    }
  }
}

module.exports = BinaryTree;