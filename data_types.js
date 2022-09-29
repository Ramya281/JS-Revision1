(function() {
    // 1.Number
    // 1.1 Explicit data type
    var empid = new Number(12345);   // bcoz of "new" keyword here the datatype is string
    //  1.2 Implicit data type
    var empAge = 33; // u defined empAge as a number variable
    console.log(typeof(empid));
    console.log(typeof(empAge));

    // 1.3 JS is loosely type language
    empAge = "45"; // u redefined empAge as a string variable
    console.log(typeof(empAge));
// 2. STRING
    // 2.1 Difference btw with new keyword and without new keyword
    var empName = new String("RAMYA"); 
    console.log(typeof(empName)); //2.1.1 datatype object
    
    

    var empAddress = String("CHENNAI"); 
    console.log(typeof(empAddress));  //2.1.2 datatype string
// 3. Boolean
    let isEmpMarried = true;  // 3.1 initialization

    console.log(typeof(isEmpMarried));

    let isEmpIndian = Boolean(false);
    console.log(typeof(isEmpIndian));
// 4. Undefined
    var EmpStatus; // 3.2 Declaration (undefined)

    console.log(typeof(EmpStatus));
// 5. null {it releases memory(assign value in future)}
    var empPassportApplicationStatus = null;
    console.log(typeof(empPassportApplicationStatus));


 // 6. Function
     var CalculateEmpSalary = function() {
        // some logic
     }  

     console.log(typeof(CalculateEmpSalary));// Function
   
 // 7. Object
var Employee = {}; // empty object
console.log(typeof(Employee));

var Employee = "Vijay";
console.log(typeof(Employee));



})()  // IIFE