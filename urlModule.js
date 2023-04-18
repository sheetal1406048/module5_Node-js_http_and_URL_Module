var http = require('http');
var urlModule = require('url');

var server = http.createServer(function(req,res){

    var myURL = "http://rabbil.com/blog,html?year=2020&month=july"

    var myURLObject = urlModule.parse(myURL,true)//We we pass an url to the parse method, we get an object of that URl

    var myHostName = myURLObject.host;
    var myPathName = myURLObject.pathname;
    var mySearchName = myURLObject.search;

    res.writeHead(200, {"content-type" : "text/html"})
   
    //res.write(myHostName) //output: rabbil.com
    //res.write(myPathName) // output : /blog,html
    //res.write(mySearchName) //output ; ?year=2020&month=july
    res.end()
})

server.listen(5050);
console.log("successful")