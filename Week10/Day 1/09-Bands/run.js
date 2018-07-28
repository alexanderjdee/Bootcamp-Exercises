var bandsSent = require("./bands.js");
var genre = process.argv[2];

if(process.argv[2] === "punk"){
    console.log("A punk band is " + bandsSent.bands[genre]);
}
else if (process.argv[2] === "rap"){
    console.log("A rap band is " + bandsSent.bands[genre]);
}
else if (process.argv[2] === "classic"){
    console.log("A classic band is " + bandsSent.bands[genre]);
}
else{
    console.log("A punk band is " + bandsSent.bands.punk);
    console.log("A rap band is " + bandsSent.bands.rap);  
    console.log("A classic band is " + bandsSent.bands.classic);
}

