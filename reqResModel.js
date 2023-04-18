var http = require('http');

var server = http.createServer(function(req,res){
    if(req.url == "/")//home Page 
    {
        //requestHead
        res.writeHead(200, {'content-type' :'text/html' }); //res.writeHead(status_code, {'content-type' : 'text/html'}
        //requeat Body
        res.write("<h1>This is home Page</h1>");
        //end Response
        res.end();
    }
     
    else if(req.url == "/about"){

        //response Head
        res.writeHead(200, {'content-type' :'text/html' }); //res.writeHead(status_code, {'content-type' : 'text/html'}
       
        //response body
        res.write("<h1>This is about Page</h1>")

        //end the response
        res.end();

    }

    else if(req.url == "/contact"){
        res.writeHead(200, {'content-type' :'text/html' }); //res.writeHead(status_code, {'content-type' : 'text/html'}
        res.write("<h1>This is contact Page</h1>")
        res.end()

    }
})

server.listen(5050)
console.log("hi I run") //hi I run


//output 
//http:localhost:5050/      this is home page
//http:localhost:5050/about this is about page
//http:localhost:5050/contact this is contact page
