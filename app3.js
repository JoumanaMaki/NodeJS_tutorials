//Modules


const names = require('./firstmodule3');

//const {john, peter} = require('./firstmodule');

const sayHi = require('./secondmodule3');

console.log(names);
sayHi('susan')

sayHi(names.john)

sayHi(names.peter)