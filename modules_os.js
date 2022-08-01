const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user);


//method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    toltalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);