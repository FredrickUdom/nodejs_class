const tokenStrng = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const otpLength = 20;
let opt = '';

for (let i = 0; i < otpLength; i++) {
    // const element = array[index];
    opt += tokenStrng[Math.floor(Math.random() * tokenStrng.length)];
    
}
console.log(opt)
//addition assignment operator, +=, is a shorthand way to add a value to a variable. 