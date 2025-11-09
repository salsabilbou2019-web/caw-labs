var myvar = require('fs');
const text = process.argv[3];
const textdes = process.argv[2];
myvar.writeFileSync(textdes, text);

//node exo4.js ttt.txt 'Coding for fun'
//cat ttt.txt