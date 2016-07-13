class Person {
    constructor(personName, personPosition){
        this.name = personName;
        this.position = personPosition;
    }
}
class Company {
    constructor(companyName){
        this.name = companyName;
        this.employees = [];
    }
    addEmployee(person){
        this.employees.push(person);
    }
}

function app(){
    let e1 = new Person('Vasya', 'tester');
    let c1 = new Company('ASD');
    c1.addEmployee(e1);
    console.log(e1);
    console.log(c1);
}
console.log('Ok');
