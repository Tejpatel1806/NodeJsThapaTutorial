const os = require("os");
console.log(os.arch());//check karva mate k aapde 32 k 64 bit architecture use karie chie te
const freememory = os.freemem();//aa che teh free space ketli avilable che te batavse in bytes
console.log(`${freememory / 1024 / 1024 / 1024}`);//aa rite aapde tene gb ma convert kari sakie
const totalmem = os.totalmem();//aa total space ketli che e return karse in bytes
console.log(`${totalmem / 1024 / 1024 / 1024}`);//bytes ne gb ma convert karva

//aa rite bija gana function che je google kari joi levana 