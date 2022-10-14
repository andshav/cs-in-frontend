const { Structure } = require('../../dist/homework1');

const jackBlack = new Structure(['name', 'lastName', 'age']);

jackBlack.set('name', 'Jack');
jackBlack.set('lastName', 'Black');
jackBlack.set('age', 53);

console.log(jackBlack.get('name')); // 'Jack'
console.log(jackBlack.get('lastName')); // 'Black'
console.log(jackBlack.get('age')); // 53
console.log(jackBlack.get('nonExistentKey')); // Ошибка (Ключ не найден)
