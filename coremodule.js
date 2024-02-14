//core module is set of function u want to include in ur application.
//new file create karva mate 
const fs = require('fs');
fs.writeFileSync('tej.txt', 'how are u?');
//file navi banse jo already nai hoy to ane ema how are u? add thai jase
//ane jo file already hase to eno data clear thai jase ane ema how are u? aai jase
//ane fari aa file ma write karsu to e already data ne override karse ane navo data nakhse ane juno clear kari dese
//pan aapde data clear na karvu hoy ane khali add j karvu hoy to niche nu karvanu
fs.appendFileSync('tej.txt', ' how are u? ');

//file ne read karvi hoy toh
const data = fs.readFileSync('tej.txt');
console.log(data);
//jyare file ma thi data read karsu to e binary data return karse jeno data type Buffer hase
//e binary data che te readable form ma nai hoy tene readable form ma banava mate
//tene string ma convert karvu pade etle toString() method lagavi aapde
org_data = data.toString();
console.log(org_data);//binary data ne string ma convert karse

//to rename the file
fs.renameSync('tej.txt', 'my.txt');

//file ne delete karva mate
// fs.unlinkSync('tej.txt');