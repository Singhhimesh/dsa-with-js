class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    /**
     * Check tree is empty or not
     * @returns {boolean}
     */
    isTreeEmpty() {
        return this.root === null;
    }
    
    /**
     * Make the tree
     * 
     * @param {number} value 
     */
    makeTree(value) {
        let newNode = new TreeNode(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    /**
     * 
     * @param {Object} root 
     * @param {Object} newNode 
     */
    insertNode(root, newNode) {
        if (root.value > newNode.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }
};

const binarySearchTree = new BinarySearchTree();
binarySearchTree.makeTree(20);
binarySearchTree.makeTree(10);
binarySearchTree.makeTree(5);
binarySearchTree.makeTree(30);
binarySearchTree.makeTree(40);
console.log(binarySearchTree);