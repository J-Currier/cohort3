import { LifoFifoList } from './lifofifoController.js';


test('Stack', () => {
    const myStack = new LifoFifoList(true);
    myStack.list =['a','b','c','d','e'];
    myStack.deleteItem();
    expect(myStack.list).toStrictEqual(['a','b','c','d']);
    myStack.addItem('f');
    expect(myStack.list).toStrictEqual(['a','b','c','d','f']);
    expect(myStack.showItem()).toStrictEqual('f');
});

test('Queue', () => {
    const myQueue = new LifoFifoList(false);
    console.log(myQueue)
    myQueue.list =['a','b','c','d','e'];
    myQueue.deleteItem();
    expect(myQueue.list).toStrictEqual(['b','c','d','e']);
    myQueue.addItem('f');
    expect(myQueue.list).toStrictEqual(['b','c','d', 'e','f']);
    expect(myQueue.showItem()).toStrictEqual('b');
});

