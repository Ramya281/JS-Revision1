(function(){
    console.log(empName);
    var empName = 34;
    printName()// using it before function declaration
    function printName(){
        console.log(empName);

    }
    //var print2;
    console.log(typeof(print2));


    //print2()
    var print2 = function(){
        console.log(empName);
       
    }
    console.log(typeof(print2));
       


 // Basically hoisting moves all variable declaration at the top
 // var empName----->declaration
 // empName = 34 --->Initialisation
 //Hoisting happens only with {var} keyword
   


 //functin declaration are also hoisted













    // 1.
    // console.log(empName);

    // output:Uncaught ReferenceError: empName is not defined
    // at hoisting.js:3:17
    // at hoisting.js



//2.
    // var empName;
    // console.log(empName);
  //output:  undefined


//3.
//   console.log(empName);
//   var empName;
  //output:  undefined

//4.
    // var empName = 34;
    // console.log(empName);

    //output:  34



 //5. 
    // console.log(empName);  
    // var empName = 34;

    // output: undefined








})()