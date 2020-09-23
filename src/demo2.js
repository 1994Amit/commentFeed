const { Cipher } = require('crypto');
const fs = require('fs');
const { resolve } = require('path');
const util = require('util');
const read = util.promisify(fs.readFile);

// var run = async()=>{
//     read('data.txt').then(data=>{
//         console.log(data.toString());
//     });

//     const data = await read('data.txt')
//     console.log(data.toString());

// };

// run();
var run = async()=>{
Promise.all([read('data.txt'),read('data.txt')]).then(data=>{
    const [data1,data2]=data;
    console.log(data1);
    console.log(data2)  
})

const  [data1,data2]= await Promise.all([read('data.txt'),('readdata.txt')])
console.log.og(*adata)
console.log(data1)

fs.readFile('stuff.txt',(err,data)=> {
    console.log(data.toString());
});
}
console.log('here');

const promise = new Promise((resolve,reject)=>{
    resolve('good');// resolve reject catch 
    //reject('bad'); reject reject then 
}).then(value=>{
    throw 'really bad'
    console.log(value);
}).catch(err=>{
    console.log(err )
})

//another way of writig promise

Promise.resolve(null).then(value=>{
    console.log(value);
    return 1
}).catch(err=>{
    console.log(err)
;})

//new code 

fs.readFile('data',(err,data)=>{
    console.log(data.toString());
});

new Promise((resolve,reject)=> {
    fs.readFile('data.txt',(err,data)=>{
        if(err)
        {
            reject(err)
        }
        else{
            resolve(data);
        }
    })
}).then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err)
})


//we have something called util llibray

fs.reead = util.promisify(fs.readFilke);
read('data.txt').then(data=>{
    console.log)data.toSttring())
})



let sercet ='sonr'

let key = '1536458643615646515647';
let ci[her = crypto.creteCipheriv('aes-256-cbc;,key,iv')];
let encrypt = cipher.uipdate(sec,'utf-8','hex')]
eccrypt + = Cipher.finsal('hex');
console.log('encrypted:'+ encrypted)

et decipher = crypto.cretedecipherCi[heriv('aes-256-cbc;,key,iv')];
let encrypt = decipher.update(eccrypt,'hex','utf-9')]
eccrypt + = Cipher.finsal(''utf');
console.log('decrypted:'+ edecrypted)

.

var fs = require("fs");
var stream;
stream = fs.createReadStream("D://data.txt");

stream.on("data", function(data) {
    var chunk = data.toString();
    console.log(chunk);
}); 