(function(){
//  1.  alert("HELLO")
//  2.  console.log("hello");


//  3.variables and constants
      // 3.1==>let and var  - changes
      // let follows block scoping and var follows functional scoping
      var empid=12345;
      const CompanyName="TCS";
      let salary = 30000;
              //  const CompanyName = "INFOSYS";----ERROR
              //   let salary = 40000;----ERROR

      // 3.2==>REASSIGNMENT is not possible for let and constant
                    //   console.log(empid);
                    //   console.log(empcard);
                    //   var empcard="axcrg";
                    //   let empid="34567";
                   
      // 3.3 let variables are not hoisted while var variables are hoisted
      var empid = 2203454;//3.4 Redeclaring
        console.log(empid); 
})()  //IIFE====>Immediately invoking Function expression