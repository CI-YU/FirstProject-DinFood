var mathmodule = require('./mathmodule');
console.log(`plus: ${mathmodule.plus(1, 1)}`);
console.log(`less: ${mathmodule.less(2, 1)}`);
console.log(`add: ${mathmodule.add(2, 2)}`);
console.log(`except: ${mathmodule.except({ a: 4, b: 2 })}`);
console.log(`sum: ${mathmodule.sum(1, 2, 3, 4, 5)}`);