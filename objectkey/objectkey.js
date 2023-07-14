const User = {
    student1:{
        firstName: 'Richard',
        lastName: 'Udofia',
        age : 10
    },

    student2:{
        firstName: 'Airnoh',
        lastName: 'Udo',
        age: 11
    },

    student3:{
        firstName: 'Isaiah',
        lastName: 'Okon',
        age: 9
    },

    student4:{
        firstName: 'Michael',
        lastName: 'Udofia',
        age: 7

    },

    student5:{
        firstName: 'Ubong',
        lastName: 'Okon',
        age: 5
    },

    student6:{
        firstName: 'Saviour',
        lastName: 'Bassey',
        age: 3
    }
}
// THIS IS THE CLOSING OF USER OBJECT

const objkey = Object.keys(User).filter(key =>{
    return User[key].lastName == 'Udofia' || User[key].lastName == 'Okon';
});
console.log(objkey)

const objProfile = Object.values(User).filter(val =>{
    return val.lastName == 'Udofia' || val.lastName == 'Okon';
});

console.log(objProfile)


