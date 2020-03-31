class person {
    constructor(firstName, lastName, salary) {
    this.firstName = firstName ;
    this.lastName = lastName;
    this.salary = salary;   
    }
}

const heroPerson = new person('Hero', 'Balam', 2000);
console.log(heroPerson);
const friendlyPerson = new person('Hero', 'balam', 2500)
console.log(friendlyPerson);



// function person1(firstName, lastName, salary){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.salary = salary;
// }

// const oldPerson = new person1('Grand', 'papa', 1200);
console.log(oldPerson);