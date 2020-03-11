export class LifoFifoList {
    constructor(stack) {
        this.stack = stack;
        this.list =[];
    }

    addItem(item) {
        this.list.push(item);
    }

    deleteItem() {
        if (this.stack) {
            console.log('stack')
            let item = this.list.pop();
            return item
        }
        if (!this.stack) {
            console.log('not stack')
            let item = this.list.shift();
            return item
        }
    }

    showItem() {
        if (this.stack) {
            return this.list[this.list.length - 1]
        }
        if (!this.stack) {
            return this.list[0]
        }

    }


}