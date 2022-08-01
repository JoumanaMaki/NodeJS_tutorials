//CommonJS, every file is module (by default)
//encapsulated code(only share minimum)

//local
const secret = 'SUPER SECRET'

//share
const john = 'john'
const peter= 'peter'

module.exports= {john, peter}
//console.log(module)