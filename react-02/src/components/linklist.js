

export class Node {

    constructor(item, amount) {
        this.item = item;
        this.amount = parseInt(amount);
        this.forwardNode = null;
        this.backwardNode = null;
    }

    show() {
        return `Current Item: ${this.item}  Amount: ${this.amount}`
    }
};


export class LinkedList {
    constructor() {
        this.head = null;
        this.current = null;
        this.tail = null;
    }

    insert(item, amount) {
        let myNode = new Node(item, amount);
        if (!this.current) {
            this.head = myNode;
            this.tail = myNode;
            this.current = myNode;
            return myNode;
        } else if (this.current === this.tail) {
            this.current.forwardNode = myNode;
            myNode.backwardNode = this.current;
            this.tail = myNode;
            this.current = myNode;
            myNode.forwardNode = null;
            return myNode;
        } else {
            myNode.backwardNode = this.current;
            myNode.forwardNode = this.current.forwardNode;
            this.current.forwardNode = myNode;
            myNode.forwardNode.backwardNode = myNode;
            this.current = myNode;
            return myNode;
        }
    }

    first() {
        if (!this.head) {
            return null;
        }
        this.current = this.head;
        return this.head;
    }

    last() {
        if (!this.tail) {
            return null;
        }
        this.current = this.tail;
        return this.tail;
    }

     next(node) {
        if (!node) {
            return null;
        }
        else if (!node.forwardNode) {
            this.current = node;
            return node;
        }
        else {
            let nextNode = node.forwardNode;
            this.current = nextNode;
            return nextNode;
        }
    }

    previous(node) {
        if (!node) {
            return null;
        }
        else if (!node.backwardNode) {
            this.current = node;
            return node;
        }
        else {
            let prevNode = node.backwardNode;
            this.current = prevNode;
            return prevNode;
        }
    }

    total() {
        if (!this.head) {
            return 0;
        }
        else {
            let currentNode = this.head;
            let totalNumber = 0;
            while (currentNode) {
                totalNumber += currentNode.amount;
                currentNode = currentNode.forwardNode;
            }
            return totalNumber;
        }
    }

    delete(node) {
        if (!node) {
            return null
        }
        else {
            let newForwardNode = node.forwardNode;
            let newBackwardNode = node.backwardNode;
            if (node === this.head && node === this.tail) {
                this.head = null;
                this.tail = null;
                this.current = null;
                node = null;
                return 'No node';
            }
            if (node === this.head) {
                this.head = newForwardNode;
                this.head.backwardNode = null;
                this.current = this.head;
                node = null;
                return this.head;
            }
            if (node === this.tail) {
                this.tail = newBackwardNode;
                this.tail.forwardNode = null;
                this.current = this.tail;
                node = null;
                return this.tail;
            }
            else {
                let newCurrentNode = newBackwardNode;
                newCurrentNode.forwardNode = newForwardNode;
                newNext.backwardNode = newCurrentNode;
                this.current = newCurrentNode;
                node = null;
                return this.current;
            }
        }
    }
};

