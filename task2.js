class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left; 
        this.right = right;
    }
}

class BinaryTree {
    constructor() {
        this.root = null; 
        this.display = [];
    }

    createNode = (node, newNode) => {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.createNode(node.left, newNode);
            }
        } 
        else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.createNode(node.right, newNode);
            }
        }
    }

    insert = value => {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.createNode(this.root, newNode);
        }
    }

    pack = (node = this.root) => {
        if (node !== null) {
            
            this.pack(node.left);
            this.pack(node.right);
        }
    }
}

const bTree = new BinaryTree();

bTree.insert(2);
bTree.insert(9);
bTree.insert(4);
bTree.insert(5);
bTree.insert(8);
bTree.insert(1);
bTree.insert(3);
bTree.insert(10)

//     2
// 1           9
//        4       10
//      3    5
//         8

bTree.pack();
console.log(bTree.display)