(function(){
    // salary > 1000000 --------------taxable
    // salary >1000000 and < 5000000 -----20% tax
    // salary > 5000000 --------------35% tax

let empName="RAMYA";
let  AGE= 23;
let salary= 1200000;

//1. sample if
if(salary<1000000){
    console.log("Non Taxable");
}
else{
    console.log("taxable");
}

//2. else if
if(salary>5000000){
    console.log("35% tax");
}
else if(salary>1000000){
    console.log("20% tax");
}
else{
    console.log("Non Taxable");
}

//3.SWICH STATEMENT=====>looks for true
switch(true){
    case salary > 5000000:
        console.log("35 % tax");
        break;
    case salary > 1000000:
        console.log("20 % tax");
        break;
    default:  
        console.log("NON taxable");
}

// =======> looks for empName
switch(empName){
    case "RAMYA":
        console.log("RAMYA found");
        break;
    default:  
        console.log("Employee Name is" +empName)  
}



})()