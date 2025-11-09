var myvar = require('fs');
const textname = process.argv[2]
   myvar.readFile(textname,'utf8',(nm,data)=>{
    console.log(data);
   })
   //node ReadFile.js ttt.txt