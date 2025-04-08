function getEmployee(inputArray){
    let employee = {};

    //const employees = inputArray.split(',');

    for(let person of inputArray){
        employee.name = person;
        employee.personalNum = person.length;

        printResult(employee);
    }
    

    function printResult(employee){
       console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNum}`)
    }
}

getEmployee([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );

getEmployee([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]
    );