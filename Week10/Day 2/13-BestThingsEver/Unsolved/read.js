var fs = require("fs");

fs.readFile("best_things_ever.txt", "utf8", function(error, data){

    if(error){
        return console.log(error);
    }

    var dataArray = data.split(", ");

    console.log("```");
    for(i=0; i < dataArray.length; i++){
        console.log(dataArray[i]);
    }
    console.log("```");
});