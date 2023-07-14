const firstName = prompt('What is your firstName');
const lastName = prompt('What is your lastName');

function myName(){
if(!firstName & !lastName){
    return(`the two fields are empty`);
        
}else if (!firstName) {
    return(`the firstName fields is empty`);
} 
else if (!lastName) {
    return(`the lastName fields is empty`);
} 

else{
    return(`welcome ${firstName} ${lastName}`)
}
}
console.log(myName())