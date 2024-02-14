const fs = require("fs");

//JSON STAND FOR JAVASCRIPT OBJECT NOTATION
//JSON IS LIGHT WEIGHT
//JSON IS USED FOR STORING AND TRANSFERING THE DATA
//JSON IS OFTEN USED WHEN DATA IS SENT FROM SERVER.
const biodata = {
    name: "tej",
    age: 21,
    surname: "Patel",
};
//console.log(biodata.surname);

//const jsonData = JSON.stringify(biodata);//object ne JSON string ma convert karse
//console.log(jsonData.surname);//aa undefined aavse
//const objData = JSON.parse(jsonData);//JSON NE OBJECT MA CONVERT KARI DESE
//console.log(objData.surname);//aa value return karse


//IMP STEP
//STEP:1 -> CONVERT TO JSON
//STEP:2 -> DUSRI FILE ME STORE KARNA
//STEP:3 -> READFILE
//STEP:4 -> AGAIN CONVERT BACK TO OBJECT 
//STEP:5 -> CONSOLE.LOG()
const jsonData = JSON.stringify(biodata);
fs.writeFile("json1.json", jsonData, (err) => {
    console.log("done");
})
fs.readFile("json1.json", "UTF-8", (err, data) => {
    console.log(data);
    const orgData = JSON.parse(data);
    console.log(orgData);
})