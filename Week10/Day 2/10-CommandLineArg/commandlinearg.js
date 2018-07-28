if(process.argv[2] === process.argv[3]){
    console.log(true);
}
else{
    console.log(false);
}

if(parseInt(process.argv[2])%7===0 && parseInt(process.argv[3])%7===0){
    console.log(true);
}
else{
    console.log(false);
}