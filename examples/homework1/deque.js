const { Deque } = require('../../dist/homework1');

const dequeue = new Deque();

dequeue.insertLast(10);
dequeue.insertFirst(11);
dequeue.insertLast(12);

console.log(dequeue.deleteLast()); // 12
console.log(dequeue.deleteFirst()); // 11
console.log(dequeue.deleteLast()); // 10
console.log(dequeue.deleteLast()); // Exception
