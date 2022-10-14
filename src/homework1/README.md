# Фундаментальные структуры данных.

## 1. Итерируемый двусторонний двусвязанный список

Данный список реализован с помощью класса **LinkList**, экземпляр которого обладает следующими методами:

- **insertFirst** - вставка элемента в начало списка
- **insertLast** - вставка элемента в конец списка
- **deleteFirst** - удаление первого элемента
- **deleteLast** - удаление последнего элемента
- **delete** - удаление определенного элемента по значению
- **find** - поиск элемента по значению
- **reverse** - возвращает список обратной последовательности

Также у экземпляра класса имеется доступ к следующим свойствам:
- **first** - ссылка на первый элемент списка
- **last** - на последний элемент списка
- **isEmpty** - проверка, является ли список пустым

```js
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
```
Экземпляр класса может быть создан из любого итерируемого объекта
```js
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
```

## 2. Очередь на основе двустороннего двусвязанного списка

Реализована с помощью класса **Queue** c использованием ранее созданного класса LinkedList

Класс имеет следующие методы: 
- **push** - вставка элемента в начало очереди
- **pop** - удаление элемента с конца очереди

Также у экземпляра класса имеется доступ к следующим свойствам:
- **head** - первый элемент очереди
- **isEmpty** - проверка, является ли очередь пустой
```js
const queue = new Queue();

queue.push(10);
queue.push(11);
queue.push(12);

console.log(queue.head); // 10

console.log(queue.pop()); // 10

console.log(queue.head); // 11

console.log(queue.pop()); // 11
console.log(queue.pop()); // 12
console.log(queue.pop()); // Ошибка (Очередь пуста)
```

## 3. Двусторонняя очередь на основе двустороннего двусвязанного списка

Реализована с помощью класса **Deque** c использованием ранее созданного класса LinkedList

Класс имеет следующие методы:
- **insertFirst** - вставка элемента в начало очереди
- **insertLast** - удаление элемента в конец очереди
- **deleteFirst** - удаление элемента с начала очереди
- **deleteLast** - удаление элемента с конца очереди

Также у экземпляра класса имеется доступ к следующим свойствам:
- **head** - первый элемент очереди
- **tail** - последний элемент очереди
- **isEmpty** - проверка, является ли очередь пустой
```js
const dequeue = new Deque();

dequeue.insertLast(10);
dequeue.insertFirst(11);
dequeue.insertLast(12);

console.log(dequeue.deleteLast()); // 12
console.log(dequeue.deleteFirst()); // 11
console.log(dequeue.deleteLast()); // 10
console.log(dequeue.deleteLast()); // Ошибка (Очередь пуста)
```

## 4. Стек на основе массива фиксированной длины

Реализована с помощью класса **Stack** c использованием массива фиксированной длины

Класс имеет следующие методы:
- **push** - вставка элемента в конец стека
- **pop** - удаление элемента с конца стека

Также у экземпляра класса имеется доступ к следующим свойствам:
- **head** - последний элемент стека
- **isEmpty** - проверка, является ли стек пустым
```js
const stack = new Stack(3);

stack.push(10);
stack.push(11);
stack.push(12);
stack.push(13); // Ошибка (Превышен максимальный размер стека)

console.log(stack.head); // 12

console.log(stack.pop()); // 12

console.log(stack.head); // 11

console.log(stack.pop()); // 11
console.log(stack.pop()); // 10
console.log(stack.pop()); // Ошибка (Стек пуск)
```


## 5. Структура на основе массива

Реализована с помощью класса **Structure** c использованием массива фиксированной длины

Для создания экземпляра класса необходимо передать конструктору массив ключей. 
Максимальный размер массива равен количеству переданных ключей.

Доступ к экземпляру осуществляется с помощью следующих методов:

- **get** - получение элемента по ключу
- **set** - установка значения по ключу

Для того, чтобы получить значение по ключу, реализована функция-соответствие ключа и индекса, 
созданная кодогенерацией с помощью конструктора Function.

При попытки получить значения по несуществующему ключу выбрасывается исключение.

```js
const jackBlack = new Structure(['name', 'lastName', 'age']);

jackBlack.set('name', 'Jack');
jackBlack.set('lastName', 'Black');
jackBlack.set('age', 53);

console.log(jackBlack.get('name')); // 'Jack'
console.log(jackBlack.get('lastName')); // 'Black'
console.log(jackBlack.get('age')); // 53
console.log(jackBlack.get('nonExistentKey')); // Ошибка (Ключ не найден)
```
