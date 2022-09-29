(function(){
// 1.Assignment operator (= , +=, -=,*=,/=)
let empName ="Vijay";
let age = 33;
let salary= 10000;
salary*= 3;
console.log(salary);
//2.Comparison Operators
// >,>=,<,<=,==,!=

console.log(age>=33);// returns boolean value
console.log(age!=34);
console.log(age=="33"); // checks value


// Strict type check for equality (=== , !==)

console.log(age==="33"); // checks both value and type 


//3. Logical operators
//&&(AND), || (OR) , ! (NOR) OPERATORS
// &&--both conditions should be true
console.log("===============AND CHECK==================")
console.log("and check true======" +(empName == "Vijay"&& age == 33));
console.log("and check false=====" +(empName == "Ajay"&& age == 33));
// ||--atleast 1 should be true
console.log("===============OR CHECK==================")
console.log("OR check true=====" +(empName == "Vijay" ||age == 33));
console.log("OR check false====" +(empName == "Ajay" || age == 33));
// ! NOR operator
console.log("=======NOR OPERATOR=======") ;
console.log(!(empName == "Vijay"));
//4.INCREMENT AND DECREMENT
 var counter=0;
//  counter++;
  console.log("counter++="+ counter++);// first print and then increment
 console.log(counter);
 //++counter
 console.log(++counter);// first increment and then print

// 5.TERNARY operator(?:)
let employeeOverThirty = age >30 ? true : false;

console.log(employeeOverThirty)

//      https://github.com/naval-shekhawat/BasicJS
})()