class EmployeeFixedSalary {

    get id(){
        return this._id;
    }

    get name(){
        return this._name;
    }


    constructor(personId, personName, personMonthlySalary){
        this._id = personId;
        this._name = personName;
        this._monthlySalary = personMonthlySalary;

    }

    getMonthlyAverageSalary() {
        return this._monthlySalary;
    }
}

class EmployeeContainer {

    get employees(){
        return this._employees;
    }

    constructor(){
        this._employees = [];
        this.generateEmployees();
    }

    generateEmployees(){
        this._employees.push(new EmployeeFixedSalary('1','Vasya', 20000));
        this._employees.push(new EmployeeFixedSalary('2','Masya', 30000));
        this._employees.push(new EmployeeFixedSalary('3','Nasya', 25000));
        this._employees.push(new EmployeeFixedSalary('4','Yasya', 27000));
        this._employees.push(new EmployeeFixedSalary('5','Kasya', 40000));
        this._employees.push(new EmployeeFixedSalary('6','Dasya', 28000));
        this._employees.push(new EmployeeFixedSalary('7','Rasya', 44000));

    }
}

function app(){
    let e1 = new EmployeeContainer();
    console.log(e1);

    }

function update() {
    
}