const os = require('os');
//The node:os module provides operating system-related utility methods and properties.
const cpu = os.cpus();
// console.log(cpu)

const osType = os.type();
// console.log(osType);


const release = os.release()
// console.log(release)

const totalMem = os.totalmem()
// console.log(totalMem)

const freeMem = os.freemem()