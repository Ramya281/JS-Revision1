(function(){
    function isprime(num){
        let counter = 2;
        let prime = true;
        while(counter < num){      // while(counter < num/2)
            if(num % counter == 0){     
                prime = false;
                break;
            }
            counter++;
        }

        return prime;


    }

    console.log(isprime(5));
    console.log(isprime(7));
    console.log(isprime(9));
})()