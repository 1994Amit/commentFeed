const EventEmitter = require('events');
const { createEmitAndSemanticDiagnosticsBuilderProgram } = require('typescript');


emitter.on('messageL',(arg)=>{
    console.log('something',arg)
})


emitter.emit('messageL',{id:1 , url:"Http://www.google.com"})

class Logger extends EventEmitter{
    log(message){
        console.log(message)
        //emitter.emit('message',{id:1,url:"kuhgadfs"})
        this.emit('message',{id:1,url:"kuhgadfs"})  //we dont need const emitter = new EventEmitter();
    }
}

module.exports= Logger

const http = require('http');
const { resolveSoa } = require('dns');
const server = http.createServer((req,res) =>{
    if (req.url === '/'){
        res.write('Hello word');
        res.end();
    }
});
server.on('connection', (socker)=>{
    console,log('new connection')
})
server.listen(3000);
console.log(
    'Listening on port 3000...'
)


var url = require('url')
var oatrh  = "hpejfpdjf;dfd"
var q = url.parse(oatrh,true)
q.hash
q.pathname


var express = require('express');
var app = express();

app.get('/',function(res,req){
    res.send("hello worldf")
})
var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console,log(post,host)
})

async function fun(req,res){
    let response =await http.request.get('http://localhost:3000');
    if(response.rr){

    }
    else[

    ]
}


var promise = new Promise(function(resolve, reject) { 
    reject('Promise Rejected') 
}) 
  
promise 
    .then(function(successMessage) { 
        console.log(successMessage); 
    }, function(errorMessage) { 
       //error handler function is invoked 
        console.log(errorMessage); 
    }) 


    //Reactor Pattern is an idea of non-blocking I/O operations in Node.js. T
    his pattern provides a handler(in case of Node.js, a callback function) 
    that is associated with each I/O operation. When an I/O request is generated, 
    it is submitted to a demultiplexer.

This demultiplexer is a notification interface that is used to handle 
concurrency in non-blocking I/O mode and collects every request in form of an 
event and queues each event in a queue. Thus, the demultiplexer provides the Event Queue.

At the same time, there is an Event Loop which iterates over the items in the Event Queue. 
Every event has a callback function associated with it, and that callback function i
s invoked when the Event Loop iterates.


var fs = require('fs')
var stream;
stream = fs.createReadStream("path");

stream.on("data", function(data){
    var chunbk = data.toString()
console.log("chunk")
})

var fs = require("fs");
var readStream = fs.createReadStream(path);
var writeStream =fs.createWriteSteram(path);
readStream.pipe(writeSream)

Readable − Stream which is used for read operation.

Writable − Stream which is used for write operation.

Duplex − Stream which can be used for both read and write operation.

Transform − A type of duplex stream where the output is computed based on input

fs.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });

  fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  }); 

  
fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
  }); 

  

var fs = require('fs');
var dir = './tmp';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}



  fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
    if (err) throw err;
    console.log('Replaced!');
  }); 

  const async = require('async');;
  async.parallel([(callback)={
      setTimeout(() => {
          console.log("this is forstr");
          callback(null,1)
          
      },5000);
    }
    
    (Callbakc)=>{
        console.log('second');
        calllback(null,2)
    }
  }], (error,result)=>{
      if (err console.logerrer)
      elseconmsole.log(result)
  })

  const async = require('async');;
  async.series([(callback)={
      setTimeout(() => {
          console.log("this is forstr");
          callback(null,1)
          
      },5000);
    }
    
    (Callbakc)=>{
        console.log('second');
        calllback(null,2)
    }
  }], (error,result)=>{
      if (err console.logerrer)
      elseconmsole.log(result)
  })

  

  data − This event is fired when there is data is available to read.

  end − This event is fired when there is no more data to read.

  error − This event is fired when there is any error receiving or writing data.

  finish − This event is fired when all the data has been flushed to underlying system.
