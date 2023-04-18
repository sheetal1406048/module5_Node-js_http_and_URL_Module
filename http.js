var httpModule = require('http');


let server = httpModule.createServer(function(request,response){
    //two parameters remain in anonymous function. One is request and another is response. 
    response.end("Hello World")
});
server.listen(5060);
console.log("server runs successfully")

//in browser search bar, write localhost:5050

//creating package.json

//setp 1: Go to the terminal
//step 2 : npm init --y 

 //"scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "start" : "node http.js" 
    

//   }

//In terminal write npm start to run the code