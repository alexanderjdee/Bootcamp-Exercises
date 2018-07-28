var request = require("request");
var fs = require("fs");

var TV = function() {
  this.findShow = function(show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

    request(URL, function(error, response, body){
      if(!error && response.statusCode === 200){
        var show = JSON.parse(body);
        var formatShow = show.name + "\n" + show.genres.join(", ") + "\n" + show.rating.average + "\n" + show.network.name + "\n" + show.summary + "\n------------------\n";
      }
      fs.appendFile("log.txt", formatShow, function(error){
        if(error){
          return console.log(error);
        }
      });
      console.log("------------------");
      console.log(formatShow);
    });

  };
};

module.exports = TV;
