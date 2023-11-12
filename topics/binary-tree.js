/**
 A binary tree is a hierarchical data structure in computer science, where each node has at most two children. Binary search trees, a common type, maintain an ordering property. Efficient for search, insertion, and deletion, binary trees are used in sorting, searching, expression representation, data compression, and various algorithmic applications.

 Non linear data structure.

*/

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
};

let binarySearchTree = new BinarySearchTree();
console.log(binarySearchTree.isTreeEmpty());
