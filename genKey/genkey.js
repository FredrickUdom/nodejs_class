// GENERATING RANDOM ALPHANUM
const otpKeys = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const otpLen = 20;
let otpValue = '';
for (let i = 0; i < otpLen; i++) {
    otpValue += otpKeys[Math.floor(Math.random() * otpKeys.length)];
    
}

console.log(otpValue)


//GENERATING RANDOM OTP NUMBERS
const otpKey = '0123456789';
const otpLength = 5;
let OTP = '';
for (let i = 0; i < otpLength; i++) {
    OTP += otpKey[Math.floor(Math.random() * 10)];
    
}

console.log(OTP)