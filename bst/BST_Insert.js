class Node {
  constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
      this.root = null;
  }
  insert(value){
      //console.log('this ============>  ',this);
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
                  current.left = newNode;
                  return this;
              }
              current = current.left;
          } else {
              if(current.right === null){
                  current.right = newNode;
                  return this;
              } 
              current = current.right;
          }
      }
  }
}


//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10)
console.log('tree ===========> ',tree)
tree.insert(5)
console.log('tree ===========> ',tree)
tree.insert(13)
console.log('tree ===========> ',tree)
tree.insert(11)
console.log('tree ===========> ',tree)
tree.insert(2)
console.log('tree ===========> ',tree)
tree.insert(16)
console.log('tree ===========> ',tree)
tree.insert(7)
console.log('tree ===========> ',tree)




