const fs = require('fs');
//Async tarike kam karie tyare callback ne use karvu j pade
//callback no mtlb kam pati jay pachi call thay
//Asynchronus use karie etle callback no use karvo j padse ,third parameter callback function che
//call back function ma first argument error hase
//call back function kam pati gaya pachi always execute thase j 
fs.writeFile('tej1.txt', 'today is my day', (err) => {
  console.log('files is created');
});

//fine ne asynchronous mode ma append karva mate
// aama e che e callback function pan lese as a argument ane ema evu hoy che k jo e task complete thai jay to e callback ma jay em
fs.appendFile('tej1.txt', 'welcome in my world ', (err) => {
  console.log('task completed');
});

//async mode ma file ne read karva mate
//file no read thayelo data data ni andar aavse ane te data string ma aavse kem k aapde UFF-8 lakhyu che so 
//UTF-8 no mtlb data string ma aavse
fs.readFile('tej1.txt', "UTF-8", (err, data) => {
  console.log(data);
});