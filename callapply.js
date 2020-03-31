const normalPerson = {
    firstName: 'rahul',
    lastName: 'roy',
    salary: 13000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
  
    },
 chargeBill: function(amount, tips, tax){
     console.log(this);
 this.salary = this.salary - amount - tips - tax;
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
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(3000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

// const friendlyChargeBill = normal.chargeBill.bond(friendlyPerson);
// friendlyChargeBill(1599)
    
normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
normalPerson.chargeBill.call(heroPerson,3000, 300, 30 )
console.log(heroPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson, 5000, 500, 50);
// console.log(friendlyPerson.salary);
// console.log(normalPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
normalPerson.chargeBill.apply(heroPerson, [4000, 400, 40]);
console.log(heroPerson.salary);



// normalPerson.chargeBill(150)
// normalPerson.chargeBill(11150)

// console.log(normalPerson.salary);



//console.log(normalPerson.firstName);