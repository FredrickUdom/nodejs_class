// ASCENDING ORDER
const numbers = ['paul','zion','akpan','fred','evans','jacob', 'david'];
numbers.sort((y,z)=>{
    if(y > z)return 1;
    if(y < z) return -1;
    return 0
});
console.log(numbers)


// DESCENDING ORDER
const number = [8,13,7,12,16,53,-2];
numbers.sort((a,b)=>{
    if(a > b)return -1;
    if(a < b) return 1
    return 0
});
console.log(number)


// DESC WITH ARROW FUNCTION
const numb = [8,13,7,12,16,53,-2];
numb.sort((b,a)=> a - b);

console.log(numb)

