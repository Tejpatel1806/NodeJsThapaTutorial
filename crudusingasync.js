const fs = require("fs");
//aa asynchoronus way che file create karvano
//asynchronus function callback as a argument tarike lese means file successfully
//complete create thai jase etle e call back call thase
fs.mkdir("tejchall2", (err) => {
    console.log("folder created");
});//aaana thi folder create thase
//mkdir che teh folder create karva mate vapray ane rmdir che teh folder
//delete karva mate vapray

fs.writeFile("./tejchall2/bio.txt", "my name is tej", (err) => {
    console.log("file cretaed");
});

fs.appendFile("./tejchall2/bio.txt", "how are u?", (err) => {
    console.log("data appended");
})

fs.readFile("./tejchall2/bio.txt", "UTF-8", (err, data) => {
    console.log(data);
    console.log("data readed");
})//aama data no matlab je data aapde read karie chie te
//ane UTF-8 no matlab te data ne aapde readable means string ma convert karie chie
fs.rename("./tejchall2/bio.txt", "./tejchall2/mybio.txt", (err) => {
    console.log(err);
})