class BinarySearchTree {
    constructor(){
        this.root = null
    }
    insert(value){
      console.log('this ============>  ',this);
      var newNode = new Node(value);
      if(this.root === null){
          this.root = newNode;
          return this;
      }
      var current = this.root;
      while(true){
          if(value === current.value) return undefined;
          if(value < current.value){
              if(current.left === null){
                  current.null = new Node(value);
                  console.log('after adding ===> ' ,value ,this);
                  return this;
              }
          }
      }
  }
}

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


let tree = new BinarySearchTree();

//      10
//   5     13
// 2  7  11  16

tree.insert(10);
tree.insert(5);
// console.log(tree);