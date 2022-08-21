class Node {
    constructor(data) {
      this.data = data;
      this.left = undefined;
      this.right = undefined;
    }
  
    whoAmI() {
      return `Node ${this.value}`;
    }
  }
  class BST {
    constructor() {
      this.root = undefined;
    }
  

    insert(data) {
      var n = new Node(data);
      if (!this.root) {
        this.root = n;
        return
      }
      
      var curr = this.root;
      
      while (data !== curr.data) {
        if (data < curr.data) {
          if (!curr.left) {
            curr.left = n;
            break;
          }
          curr = curr.left;
        } else if (data > curr.data) {
          if (!curr.right) {
            curr.right = n;
            break;
          }
          curr = curr.right;
        }
      }
    }
  
  
    search(data) {
      
      if (!this.root) return;
  
      var curr = this.root;
      if (!curr) return;
  
      while (curr) {
        if (data === curr.data) {
          return curr;
        } else if (data < curr.data) {
          curr = curr.left;
        } else if (data > curr.data) {
          curr = curr.right;
        }
      }
    }
  }
  var bst = new BST();
  for (var num of [10, 5, 3, 6, 20, 15, 40]) {
    bst.insert(num);
  }
  
  console.log(bst.search(5));