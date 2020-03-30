const normalPerson = {
    firstName: 'rahul',
    lastName: 'roy',
    salary: 13000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
  
    },
 chargeBill: function(amount){
     console.log(this);
 this.salary = this.salary - amount;
 return this.salary;
 }

}
const heroPerson = {
    firstName: 'Hero',
    lastName: 'ranbir',
    salary: '25000',
}

const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'kabir',
    salary: '25000',
}

//normalPerson.chargeBill();
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
heroChargeBill(3000);
console.log(heroPerson.salary);
console.log(normalPerson.salary);

const friendlyChargeBill = normal.chargeBill.bond(friendlyPerson);
friendlyChargeBill(1599)
    




// normalPerson.chargeBill(150)
// normalPerson.chargeBill(11150)

// console.log(normalPerson.salary);



//console.log(normalPerson.firstName);