(function(){
    //1.Global Scope
    //2.functional scope --var
    //3.Block scope -- let,const
    //block------for,while,if,switch or {} is a block

    //1.Global Scope
    var company = "XYZ CORPORATION";


    //2.Funtional Scope
    function getEmployeeDetails(){
        {
            let empName = "Ramya";
            var empAge = 34;
            //return empName + "works for " + company;
        }
        console.log(empAge);//------2.Functional scope
    //console.log(empName);//-----3.Block scope-----let
        

    }

    console.log(getEmployeeDetails());
    //console.log(empName);
    //console.log(empAge);
     console.log(company);//----------1-global scope
    
    
    
    
    
    
     // Block Scope - let and const
  // if, switch, for, while or {} is a block
   function getEmployeeSalary(){
    let salary = 1000000;
    if(salary > 100000) {
        let tax = 0.1 * salary;
        salary = salary - tax;
    }

    console.log("salary after tax " + salary);
   //  console.log("tax applied " + tax); // Error. block scoped variable
}

getEmployeeSalary();


})()