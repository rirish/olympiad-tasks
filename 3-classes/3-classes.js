class EmployeeBase {
    get id(){
        return this._id;
    }

    get name(){
        return this._name;
    }
    constructor(personId, personName){
        this._id = personId;
        this._name = personName;
    }
}

class EmployeeFixedSalary extends EmployeeBase {

    constructor(personId, personName, personMonthlySalary){
        super(personId, personName);

        this._monthlySalary = personMonthlySalary;

    }

    getMonthlyAverageSalary() {
        return this._monthlySalary;
    }
}

class EmployeeHourlySalary extends EmployeeBase{


    constructor(personId, personName, personHourlySalary){
        super(personId, personName);

        this._hourlySalary = personHourlySalary;

    }

    getMonthlyAverageSalary() {
        return 20.8 * 8 * this._hourlySalary;
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
        this._employees.push(new EmployeeHourlySalary('1','Vasya', 200));
        this._employees.push(new EmployeeFixedSalary('2','Masya', 30000));
        this._employees.push(new EmployeeHourlySalary('3','Nasya', 250));
        this._employees.push(new EmployeeFixedSalary('4','Yasya', 27000));
        this._employees.push(new EmployeeHourlySalary('5','Kasya', 400));
        this._employees.push(new EmployeeFixedSalary('6','Dasya', 28000));
        this._employees.push(new EmployeeHourlySalary('7','Rasya', 440));


    }

    sortBySalary(){
        var temp;
        for (var i = 0; i < this._employees.length-1; i++)
        {
            for (var j = i + 1; j < this._employees.length; j++)
            {
                if (this._employees[i].getMonthlyAverageSalary() < this._employees[j].getMonthlyAverageSalary())
                {
                    temp = this._employees[i];
                    this._employees[i] = this._employees[j];
                    this._employees[j] = temp;
                }
            }
        }
    }
}

function sort(){
    e1.sortBySalary();
    update();
}


function app(){

    console.log(e1);
    update();
}

let e1 = new EmployeeContainer();

function update() {
    let root = document.getElementById('EmployeesContainer');
    root.innerHTML = '';

    let employeesTable = document.createElement('table');
    root.appendChild(employeesTable);

    for (var i=0; i < e1.employees.length; i++){
        let currentEmployee = document.createElement('tr');
        employeesTable.appendChild(currentEmployee);

        let currentEmployeeId = document.createElement('td');
        currentEmployee.appendChild(currentEmployeeId);
        currentEmployeeId.innerHTML = e1.employees[i].id;

        let currentEmployeeName = document.createElement('td');
        currentEmployee.appendChild(currentEmployeeName);
        currentEmployeeName.innerHTML = e1.employees[i].name;

        let currentEmployeeMonthlySalary = document.createElement('td');
        currentEmployee.appendChild(currentEmployeeMonthlySalary);
        currentEmployeeMonthlySalary.innerHTML = e1.employees[i].getMonthlyAverageSalary();

    }

}


function getList() {
    var textareaData = document.getElementsById('Textarea').value;
    var employeeString = textareaData.split('\n');
    var employeeProps = employeeString.split(',');

    

}
