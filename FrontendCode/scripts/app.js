var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500
    }
];

function showList(){
    var myTable = '<table border="1" class="table table-bordered"> <tr><th>First Name</th>' +
        '<th>Last Name</th><th>Phone</th><th>Salary</th></tr>';
    for(var i in employeesList){
        myTable += '<tr><td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+'</td><td>'
        +employeesList[i].phone+'</td><td>'+employeesList[i].salary+' </td></tr>';

    }

    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}

function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone, salary));


}

function deleteLast() {
    var size = employeesList.length;
    if(size > -1){
        employeesList.splice(size - 1, 1);
    }
    showList();
}

function someFunctions() {
    addEmployee();
    showList();
}

function totalSalary() {
    var sum = 0;
    for(var i in employeesList){
        sum += employeesList[i].salary;
    }
    
    if(sum >= 0) {
        var total = '<p type="text" >' + sum + '</p>';
    }
    var container = document.getElementById('total');
    container.innerHTML = total;

}
