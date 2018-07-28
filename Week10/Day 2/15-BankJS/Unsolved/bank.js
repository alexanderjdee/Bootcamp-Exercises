var fs = require("fs");

var inputTransaction = process.argv[2];

var inputNumber = process.argv[3];

var total = 0;

var lottoNumber = 5;

var lottoPrice = -5;

var lottoPrize = 100;

fs.readFile("bank.txt", "utf8", function(error, data){
    if(error){
        return console.log(error);
    }

    var dataArray = data.split(", ");

    for(i=0; i<dataArray.length; i++){
        total += parseFloat(dataArray[i]);
    }

    switch(inputTransaction){
        case "total":
            console.log("The total is: $" + total.toFixed(2));
            return;

        case "deposit":
            if(parseFloat(inputNumber) > 0){
                fs.appendFile("bank.txt", ", " + inputNumber, function(error){
                    if(error){
                        console.log(error);
                    }
                    else{
                    console.log("$ " + inputNumber + " was deposited to the account");
                    }
                });
            }
            else{
                console.log("Error: You must deposit an amount greater than 0");
            }
            return;

        case "withdraw":
            if(parseFloat(inputNumber) < 0 && total > parseFloat(inputNumber)){
                fs.appendFile("bank.txt", ", " + inputNumber, function(error){
                    if(error){
                        console.log(error);
                    }
                    else{
                    console.log("$ " + inputNumber + " was withdrawn from the account");
                    }
                });
            }
            else if(total < parseFloat(inputNumber)){
                console.log("Error: You must have more funds in the account than the withdraw amount");
            }
            else{
                console.log("Error: You must withdraw an amount less than 0");
            }
            return;

        case "lotto":
            fs.appendFile("bank.txt", ", " + lottoPrice, function(error){
                if(error){
                    console.log(error);
                }
                else{
                console.log("$ " + lottoPrice + " was withdrawn from the account for the lottery");
                }
            });

            var lottoRandomNumber = Math.floor(Math.random() * 2);
        
            if(lottoRandomNumber === lottoNumber){
                fs.appendFile("bank.txt", ", " + lottoPrize, function(error){
                    if(error){
                        console.log(error);
                    }
                    else{
                    console.log("You won the lottery! $ " + lottoPrize + " was added to the account");
                    }
                });
            }
            return;

        default:
            console.log("Error: Please enter a valid transaction");
    }
});

