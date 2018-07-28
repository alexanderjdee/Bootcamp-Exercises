function primeCheck(input){
    var count = 0;

    for(i=2;i<=input;i++){
        if(input%i == 0){
            count++;
        }
    }

    if(count < 2){
        alert(number + " is prime.");
        location.reload();
    }
    else{
        alert(number + " is not prime.");
        location.reload();
    }
}


var number = prompt("Please enter a number");

primeCheck(number);
 


