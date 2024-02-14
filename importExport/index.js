const oper = require('./oper.js');//matlb oper.js na add function ne call karse em 
console.log(oper);
console.log(oper.add(5, 5));//require add1 karyu toh niche pan add1 j aavse
console.log(oper.sub(5, 5));

//biji aa rite pan thay
const { add, sub } = require("./oper");//aa object destructure karyu ane add ane sub ni 
//value lai lidhi etle have e sidhu j ass ane sub ne call kari sakse
console.log(add(5, 10));
console.log(sub(10, 5));