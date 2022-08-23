// Write your solution in this file!

const employee = {};
employee.name =["sam"]
employee.address = ["11 Broadway"]
console.log(employee)


const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value;

    return employee;
}

const deleteFromEmployeeByKey = (employee, key) => {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

const destructivelyDeleteFromEmployeeByKey = (employee, key)=>{
    delete employee[key];
    return employee;
}
console.log(destructivelyDeleteFromEmployeeByKey(employee,["sam"])) 

