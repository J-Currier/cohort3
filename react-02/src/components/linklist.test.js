import { Node, LinkedList } from './linklist.js';

test('Node', () => {
    const myNode = new Node("Apples", 7);
    expect(myNode.show()).toBe("Current Item: Apples  Amount: 7");
});

test('LinkedList', () => {
    const myLinkedList = new LinkedList();
    const myNewNode = myLinkedList.insert('bananas', 4);
    expect(myLinkedList.head).toBe(myNewNode);
    expect(myLinkedList.current).toBe(myNewNode);
    expect(myLinkedList.tail).toBe(myNewNode);
    const Node2 = myLinkedList.insert('carrots', 6);
    expect(Node2).toBe(myLinkedList.current);
    expect(Node2.backwardNode).toBe(myNewNode);
    expect(myLinkedList.head).toBe(myNewNode);
    expect(myLinkedList.current).toBe(Node2);
    expect(myLinkedList.first()).toBe(myNewNode);
    expect(myLinkedList.last()).toBe(Node2);
    expect(myLinkedList.previous(myLinkedList.current)).toBe(myNewNode);
    expect(myLinkedList.next(myLinkedList.current)).toBe(Node2);
    
});

