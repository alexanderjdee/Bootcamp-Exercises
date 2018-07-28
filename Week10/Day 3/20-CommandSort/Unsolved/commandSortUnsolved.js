// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================
numberArray = [];

if(process.argv.length > 3){
    for(i=2; i<process.argv.length; i++){
        numberArray.push(parseFloat(process.argv[i]));
    }

    console.log(numberArray);

    numberArray = numberArray.sort(function(a, b){return a-b});

    console.log(numberArray);
}
else{
    console.log("Error: Please enter more than 1 number");
}