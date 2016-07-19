var companyList = [];


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

    hireEmployee(person){
        this.employees.push(person);
    }

    fireEmployee(person){
        if(this.employees.length==0) {
            console.log('List is empty!')
        }else{
            for (var i=0; i<this.employees.length; i++){
                if(this.employees[i].name==person.name){
                    this.employees.splice(i,1);
                    return this.employees;
                }else if(i==this.employees.length -1){
                    console.log('Employee not found!');
                }
            }
        }
    }

    transferEmployee(person, company){
        this.fireEmployee(person);
        company.hireEmployee(person);
    }
}

function app(){
    let e1 = new Person('Vasya', 'tester');
    let e2 = new Person('2', 'tester');
    let e3 = new Person('3', 'tester');
    let e4 = new Person('4', 'tester');
    let e5 = new Person('5', 'tester');
    
    let c1 = new Company('ASD');
    let c2 = new Company('QWE');
    c1.hireEmployee(e1);
    c1.hireEmployee(e2);
    c1.hireEmployee(e3);
    c1.hireEmployee(e4);
    c1.hireEmployee(e5);
    c1.fireEmployee(e3);
    c1.transferEmployee(e4, c2);
    console.log(e1);
    console.log(c1);
    console.log(c2);

    companyList.push(c1);
    companyList.push(c2);
}
console.log('Ok');



function update() {
    let root = document.getElementById('Organizations');
    root.innerHTML = '';

    for (var i=0; i < companyList.length; i++){
        let currentCompany = companyList[i];

        let companyDiv = document.createElement('div');
        let companyNameDiv = document.createElement('div');
        companyNameDiv.innerHTML = currentCompany.name;

        let currentCompanyEmployeesUl = document.createElement('ul');


        root.appendChild(companyDiv);
        companyDiv.appendChild(companyNameDiv);
        companyDiv.appendChild(currentCompanyEmployeesUl);

        for (var j=0; j < currentCompany.employees.length; j++) {
            let currentEmployeeLi = document.createElement('li');
            currentCompanyEmployeesUl.appendChild(currentEmployeeLi);
            currentEmployeeLi.innerHTML = currentCompany.employees[j].name;
        }

    }

}