var num1 = parseInt(process.argv[2]);
var num2 = parseInt(process.argv[3]);
var sum = 0;

for(i=num1; i<=num2; i+=num1){
    sum+=i;
}

console.log(sum);