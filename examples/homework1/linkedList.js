const { LinkedList } = require('../../dist/homework1');

const list = new LinkedList();
list.insertLast(2);
list.insertFirst(1);
list.insertFirst(0);
list.insertFirst(5);
list.insertLast(10);
list.insertLast(16);

for (const item of list) {
    console.log(item); // 5 0 1 2 10 16
}

for (const item of list.reverse()) {
    console.log(item); // 16 10 2 1 0 5
}

list.deleteFirst();

for (const item of list) {
    console.log(item); // 0 1 2 10 16
}

list.deleteLast();

for (const item of list) {
    console.log(item); // 0 1 2 10
}

list.delete(2);

for (const item of list) {
    console.log(item); // 0 1 10
}

console.log(list.find(1)); // Link { value: 1 }

const listOfNumbers = new LinkedList([1, 2, 3, 4]);
for (const number of listOfNumbers) {
    console.log(number);
    // Link { value: 1 }
    // Link { value: 2 }
    // Link { value: 3 }
    // Link { value: 4 }
}
const listOfLetters = new LinkedList('andshav');
for (const letter of listOfLetters) {
    console.log(letter);
    // Link { value: 'a' }
    // Link { value: 'n' }
    // Link { value: 'd' }
    // Link { value: 's' }
    // Link { value: 'h' }
    // Link { value: 'a' }
    // Link { value: 'v' }
}
