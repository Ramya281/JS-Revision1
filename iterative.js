(function(){
    //1.print even numbers from 0 to 20(using for)
    let sum=0;
    for(let i=0;i<=20;i++){
        if(i%2==0){
            //console.log(i);
            sum=sum+i;  
        }
    }
    console.log("The sum of first 20 even numbers" +sum);
    // 2.  print odd numbers from 0 to 20 (using while)
    let sum_odd=0;
    let counter =0;
    while(counter<=20){
        if(counter%2!=0){
            sum_odd=sum_odd + counter;
        }
        counter++;
    }
    console.log("The sum of first 20 odd numbers" + sum_odd);

})()